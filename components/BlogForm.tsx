"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { blogFormSchema } from "@/lib/validiator";
import { blogDefaultValues } from "@/constants";
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import { Checkbox } from "@/components/ui/checkbox"
import MDEditor from "@uiw/react-md-editor";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import { FileUploader } from "./FileUploader";
import Dropdwon from "./Dropdwon";
import Link from "next/link";
import { IBlog } from "@/lib/database/models/blog.model";
import { createBlog, updateBlog } from "@/lib/actions/blog.actions";

import "react-datepicker/dist/react-datepicker.css";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";



type BlogFormProps = {
    createdBy: string
    type: "Create" | "Update",
    blog?: IBlog,
    blogId?: string
}

const BlogForm = ({createdBy, type, blog, blogId }: BlogFormProps) => {
    const [ files, setFiles ] = useState<File[]>([]);
    const [startDate, setStartDate] = useState(new Date());
    const initialValues = blog && type === 'Update' ? {...blog, createdAt: new Date(blog.createdAt), categoryId:blog.category._id} : blogDefaultValues
    const { startUpload } = useUploadThing('imageUploader')
    const router = useRouter();


    // 1. Define your form.
  const form = useForm<z.infer<typeof blogFormSchema>>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: initialValues
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof blogFormSchema>) {
    const blogData = values;
    let uploadedImageUrl = values.imageUrl;

    if(files.length > 0){
        const uploadedImages = await startUpload(files);

        if(!uploadedImages){
            return
        }

        uploadedImageUrl = uploadedImages[0].url
    }

    if(type === "Create"){
        try {
            const newBlog = await createBlog({
                blog: {...values, imageUrl: uploadedImageUrl},
                createdBy,
                path: 'blogs'
            })

            if(newBlog){
                form.reset();
                window.location.reload();
                // const url = `/blogs/${newBlog._id}`;
                // window.open(url, '_blank');
            }
        } catch (error) {
            console.log(error)
        }
    }

    if(type === "Update"){
        if(!blogId){
            router.back();
            return;
        }
        try {
            const updatedBlog = await updateBlog({
                blog: {...values, imageUrl: uploadedImageUrl, _id: blogId},
                createdBy,
                path: `blogs/${blogId}`
            })

            if(updatedBlog){
                form.reset();
                window.location.reload();
                // router.push(`blogs/${updatedBlog._id}`)
                // const url = `/blogs/${updatedBlog._id}`;
                // window.open(url, '_blank');
            }
        } catch (error) {
            console.log(error)
        }
    }

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">

        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormControl>
                        <Input placeholder="Blog Title" {...field} className="input-field" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormControl>
                        <Dropdwon onChangeHandler={field.onChange} value={field.value} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormControl className="h-72">
                        <Textarea placeholder="Description" {...field} className="textarea rounded-2xl" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormControl className="h-72">
                        <MDEditor {...field} value={field.value} onChange={(val) => field.onChange(val || "")} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            
        </div>

        <div className="flex fle-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="videoUrl"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormControl className="h-72">
                        <Input placeholder="Video Url" {...field} className="input-field" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormControl className="h-72">
                        <FileUploader onFieldChange={field.onChange} imageUrl={field.value } setFiles={setFiles} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="createdAt"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormControl>
                        <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                            <Image src="/assets/icons/calendar.svg" height={24} width={24} alt="calendar" className="filter-grey" />
                            <p className="ml-3 whitespace-nowrap text-grey-600">Start Date:</p>
                            <DatePicker selected={field.value} onChange={(date: Date | null) => field.onChange(date)} showTimeSelect timeInputLabel="Time:" dateFormat="MM/dd/yyyy h:mm aa" wrapperClassName="datePicker" />
                        </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="published"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormControl>
                        <div className="flex items-center">
                            <label htmlFor="published" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Published</label>
                            <Checkbox onCheckedChange={field.onChange} checked={field.value} id="published" className="mr-2 h-5 w-5 border-2 border-primary-500" />
                        </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
        </div>

        {/* <div className="flex flex-col gap-5 md:flex-row">
            
            
        </div> */}

        <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="button col-span-1 w-32 bg-primary-500 hover:bg-primary-500">
            {form.formState.isSubmitting ? ("Submitting...") : `${type} Blog`}
        </Button>
      </form>
    </Form>
  )
}

export default BlogForm