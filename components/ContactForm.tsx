"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { contactFormSchema } from "@/lib/validiator";
import { contactFormInitialValue } from "@/constants";
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation";

const ContactForm = () => {
    const [ files, setFiles ] = useState<File[]>([]);
    const [startDate, setStartDate] = useState(new Date());
    const initialValues = contactFormInitialValue
    const router = useRouter();


    // 1. Define your form.
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: initialValues
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const eventData = values;

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">

        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormControl>
                        <Input placeholder="Name" {...field} className="input-field" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormControl>
                        <Input type="email" placeholder="Email Address" {...field} className="input-field" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem className="w-full rounded-md">
                        <FormControl>
                            <Input placeholder="Phone number" {...field} className="input-field" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            
            <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormControl>
                        <Input placeholder="Company" {...field} className="input-field" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            
            
        </div>

        <div className="flex fle-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormControl className="h-72">
                        <Textarea placeholder="Your message" {...field} className="textarea rounded-2xl" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
        </div>

        
        <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="button col-span-2 w-full bg-primary-500 hover:bg-red-600">
            {form.formState.isSubmitting ? ("Submitting...") : `Submit`}
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm