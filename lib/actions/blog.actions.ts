'use server'

import { revalidatePath } from 'next/cache'
import { connectToDatabase } from '@/lib/database'
import Category from '@/lib/database/models/category.model'
import { handleError } from '@/lib/utils'
import Blog from '../database/models/blog.model'
import { CreateBlogParams, DeleteBlogParams, GetAllBlogsParams, GetRelatedBlogsByCategoryParams, UpdateBlogParams } from '@/types'


const getCategoryByName = async (name: string) => {
  return Category.findOne({ name: { $regex: name, $options: 'i' } })
}

const populateBlog = (query: any) => {
  return query
    .populate({ path: 'category', model: Category, select: '_id name' })
}

// CREATE
export async function createBlog({ createdBy, blog, path }: CreateBlogParams) {
  try {
    await connectToDatabase()

    // const organizer = await User.findById(userId)
    // if (!organizer) throw new Error('Organizer not found')

    const newBlog = await Blog.create({ ...blog, category: blog.categoryId, createdBy })
    revalidatePath(path)

    return JSON.parse(JSON.stringify(newBlog))
  } catch (error) {
    handleError(error)
  }
}

// GET ONE BLOG BY ID
export async function getBlogById(blogId: string) {
  try {
    await connectToDatabase()

    const blog = await populateBlog(Blog.findById(blogId))

    if (!blog) throw new Error('Blog not found')

    return JSON.parse(JSON.stringify(blog))
  } catch (error) {
    handleError(error)
  }
}

// UPDATE
export async function updateBlog({ createdBy, blog, path }: UpdateBlogParams) {
  try {
    await connectToDatabase()

    const blogToUpdate = await Blog.findById(blog._id)
    if (!blogToUpdate) {
      throw new Error('Unauthorized or blog not found')
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      blog._id,
      { ...blog, category: blog.categoryId },
      { new: true }
    )
    revalidatePath(path)

    return JSON.parse(JSON.stringify(updatedBlog))
  } catch (error) {
    handleError(error)
  }
}

// DELETE
export async function deleteBlog({ blogId, path }: DeleteBlogParams) {
  try {
    await connectToDatabase()

    const dletedBlog = await Blog.findByIdAndDelete(blogId)
    if (dletedBlog) revalidatePath(path)
  } catch (error) {
    handleError(error)
  }
}

// GET ALL EVENTS
export async function getAllBlog({ query, limit = 6, page, category }: GetAllBlogsParams) {
  try {
    await connectToDatabase()

    const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {}
    const categoryCondition = category ? await getCategoryByName(category) : null
    const conditions = {
      $and: [titleCondition, categoryCondition ? { category: categoryCondition._id } : {published: true}],
    }

    const skipAmount = (Number(page) - 1) * limit
    const blogsQuery = Blog.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)

    const blogs = await populateBlog(blogsQuery)
    const blogsCount = await Blog.countDocuments(conditions)

    return {
      data: JSON.parse(JSON.stringify(blogs)),
      totalPages: Math.ceil(blogsCount / limit),
    }
  } catch (error) {
    handleError(error)
  }
}

export async function getAllBlogNoLimit() {
  try {
    await connectToDatabase()

    const conditions = {
      published: true
    }

    const blogsQuery = Blog.find(conditions)
      .sort({ createdAt: 'desc' })
      
    const blogs = await populateBlog(blogsQuery)

    return JSON.parse(JSON.stringify(blogs))
  } catch (error) {
    handleError(error)
  }
}

export async function getAllBlogAdmin({ query, limit = 6, page, category }: GetAllBlogsParams) {
  try {
    await connectToDatabase()

    const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {}
    const categoryCondition = category ? await getCategoryByName(category) : null
    const conditions = {
      $and: [titleCondition, categoryCondition ? { category: categoryCondition._id } : {}],
    }

    const skipAmount = (Number(page) - 1) * limit
    const blogsQuery = Blog.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)

    const blogs = await populateBlog(blogsQuery)
    const blogsCount = await Blog.countDocuments(conditions)

    return {
      data: JSON.parse(JSON.stringify(blogs)),
      totalPages: Math.ceil(blogsCount / limit),
    }
  } catch (error) {
    handleError(error)
  }
}

// GET EVENTS BY ORGANIZER
// export async function getEventsByUser({ userId, limit = 6, page }: GetEventsByUserParams) {
//   try {
//     await connectToDatabase()

//     const conditions = { organizer: userId }
//     const skipAmount = (page - 1) * limit

//     const eventsQuery = Event.find(conditions)
//       .sort({ createdAt: 'desc' })
//       .skip(skipAmount)
//       .limit(limit)

//     const events = await populateEvent(eventsQuery)
//     const eventsCount = await Event.countDocuments(conditions)

//     return { data: JSON.parse(JSON.stringify(events)), totalPages: Math.ceil(eventsCount / limit) }
//   } catch (error) {
//     handleError(error)
//   }
// }

// GET RELATED EVENTS: EVENTS WITH SAME CATEGORY
export async function getRelatedBlogByCategory({
  categoryId,
  blogId,
  limit = 3,
  page = 1,
}: GetRelatedBlogsByCategoryParams) {
  try {
    await connectToDatabase()

    const skipAmount = (Number(page) - 1) * limit
    const conditions = { $and: [{ category: categoryId }, { _id: { $ne: blogId } }, { published: true }] }

    const blogsQuery = Blog.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)

    const blogs = await populateBlog(blogsQuery)
    const blogsCount = await Blog.countDocuments(conditions)

    return { data: JSON.parse(JSON.stringify(blogs)), totalPages: Math.ceil(blogsCount / limit) }
  } catch (error) {
    handleError(error)
  }
}

// GET 3 BLOGS FOR SOLUTION PAGES
export async function getThreeBlogs({ limit = 3 }: {limit: number}) {
  try {
    await connectToDatabase()

    const conditions = {
      published: true
    }

    const blogsQuery = Blog.find(conditions)
      .sort({ createdAt: 'desc' })
      .limit(limit)

    const blogs = await populateBlog(blogsQuery)
    const blogsCount = await Blog.countDocuments(conditions)

    return {
      data: JSON.parse(JSON.stringify(blogs)),
      totalPages: Math.ceil(blogsCount / limit),
    }
  } catch (error) {
    handleError(error)
  }
}