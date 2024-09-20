import React from 'react'
import Blogs from './Blogs'
import { getAllBlog } from '@/lib/actions/blog.actions';

export async function generateStaticParams() {
    const blogs = await getAllBlog({
      query: '',
      category: '',
      page: 1,
      limit: 3
    });
    return blogs
  }

const FeaturedBlog = async () => {
    const blogs = await getAllBlog({
        query: '',
        category: '',
        page: 1,
        limit: 3
      });

    return (
        <div className="flex flex-col gap-5 mt-16">
            <h3 className="h3-bold text-center lg:text-left lg:ml-20 xl:ml-16 2xl:ml-32">Featured Articles</h3>
            <Blogs articles={blogs?.data} />
        </div>
    )
}

export default FeaturedBlog