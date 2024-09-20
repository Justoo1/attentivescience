"use client";

import { Button } from '@/components/ui/button';
import { IBlog } from '@/lib/database/models/blog.model'
import { SearchParamProps } from '@/types'
import React, { useEffect, useState } from 'react'
import { DeleteConfirmation } from '@/components/DeleteConfirmation';
import { getAllBlogAdmin } from '@/lib/actions/blog.actions';
import { formatDateTime } from '@/lib/utils';
import dynamic from 'next/dynamic';

const AdminDashboard = ({ searchParams }: SearchParamProps) => {
  const blogId = (searchParams?.eventId as string) || ''
  const searchText = (searchParams?.query as string) || ''
  const page = Number(searchParams?.page) || 1;

  const [ createBlog, setCreateBlog ] = useState(false)
  const [ updateBlog, setUpdateBlog ] = useState(false)
  const [ showCreateButton, setShowCreateButton ] = useState(true)
  const [ selectedBlog, setSelectedBlog ] = useState({} as IBlog)
  const [ blogs, setBlogs ] = useState([] as any[])
  const category = (searchParams?.category as string) || '';

  const BlogForm = dynamic(() => import('@/components/BlogForm'), { ssr: false })

  useEffect(() => {
    const fetchEvents = async () => {
      const blogs = await getAllBlogAdmin({
        query: searchText,
        category,
        page,
        limit: 6
      })
      setBlogs(blogs?.data || [])
    }
    fetchEvents()
  }, [page, category, searchText])
  // const events = [] as any[]

  const handleUpdateEvent = (blog: IBlog) => {
    setSelectedBlog(blog)
    setUpdateBlog(true)
    setShowCreateButton(false)
  }

  const handleCancelUpdate = () => {
    setSelectedBlog({} as IBlog)
    setUpdateBlog(false)
    setShowCreateButton(true)
  }
  

  // const blogs = await getOrdersByEvent({ eventId, searchString: searchText })

  return (
    <div className='flex flex-col'>
        
        <section className="flex items-center justify-between bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 px-10">
          <h3 className="wrapper h3-bold text-center sm:text-left ">Blogs</h3>
          
          {showCreateButton ? (
            <Button onClick={() => setCreateBlog(!createBlog)} className='bg-primary-500 hover:bg-primary-500'>{createBlog ? 'Cancel' : 'Create Blog'}</Button>
          ):(
            <Button onClick={() => handleCancelUpdate()} className='bg-primary-500 hover:bg-primary-500'>Cancel Update</Button>
          )}
        </section>
        {createBlog && <div className='py-16 px-32 lg:px-48 2xl:px-52'>
            <BlogForm type='Create' createdBy='Jay' />
          </div>}

        {updateBlog && <div className='py-16 px-32 lg:px-48 2xl:px-52'>
            <BlogForm type='Update' blog={selectedBlog} blogId={selectedBlog._id} createdBy='Jay' />
          </div>}

        <section className="wrapper overflow-x-auto lg:mx-auto 2xl:justify-center 2xl:items-center 2xl:flex-center">
          <table className="w-full border-collapse border-t">
            <thead>
              <tr className="p-medium-14 border-b text-grey-500">
                <th className="min-w-[250px] py-3 text-center">Blog ID</th>
                <th className="min-w-[200px] flex-1 py-3 pr-4 text-center">Blog Title</th>
                <th className="min-w-[150px] py-3 text-center">Published</th>
                <th className="min-w-[100px] py-3 text-center">Created By</th>
                <th className="min-w-[100px] py-3 text-center">Date Created</th>
              </tr>
            </thead>
            <tbody>
              {blogs && blogs.length === 0 ? (
                <tr className="border-b">
                  <td colSpan={5} className="py-4 text-center text-gray-500">
                    No blogs found.
                  </td>
                </tr>
              ) : (
                <>
                  {blogs &&
                    blogs.map((row: IBlog) => (
                      <tr
                        key={row._id}
                        className="p-regular-14 lg:p-regular-16 border-b "
                        style={{ boxSizing: 'border-box' }}>
                        <td onClick={() => handleUpdateEvent(row)} className="min-w-[250px] py-4 text-primary-500 texct-center cursor-pointer ml-3">
                          {row._id}
                        </td>
                        <td className="min-w-[200px] flex-1 py-4 pr-4 text-center">{row.title}</td>
                        <td className="min-w-[150px] py-4 text-center">{row.published ? "Published" : "Draft"}</td>
                        <td className="min-w-[100px] py-4 text-center">
                          {row.createdBy}
                        </td>
                        <td className="min-w-[100px] py-4 text-center">
                          {formatDateTime(row.createdAt).dateTime}
                        </td>
                        <td className="min-w-[100px] py-4 text-center">
                          <DeleteConfirmation blogId={row._id} type="blog" />
                        </td>
                      </tr>
                    ))}
                </>
              )}
            </tbody>
          </table>
        </section>

    </div>
  )
}

export default AdminDashboard