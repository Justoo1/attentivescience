import { dataProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import Blogs from './Blogs'
import { getThreeBlogs } from '@/lib/actions/blog.actions'

const Solutions = async ({ data }: { data: dataProps}) => {
  const blogs = await getThreeBlogs({ limit: 3 })

  return (
    <section className='flex flex-col mx-auto md:gap-5 items-start justify-center gap-3 '>
      <p className='p-regular-14 md:p-regular-20 lg:px-10 xl:px-16 2xl:px-48'>{data.content1}</p>

      <RenderContent title={data.title2} content={data.content2} />

      <RenderContent title={data.title3} content={data.content3} />
      
      <RenderImageContent imageUrl={data.imageUrl} />

      <RenderContent title={data.title4} content={data.content4} />

      <RenderContent title={data.title5} content={data.content5} />

      <RenderContent title={data.title6} content={data.content6} />

      {/* FEATURED ARTICAL */}
      <div className="px-16 md:px-0 2xl:px-10 flex flex-col gap-4 mt-5">
        <h3 className='h3-bold text-center lg:text-left lg:ml-10 xl:ml-16 2xl:ml-32'>Featured Articles</h3>
        <Blogs articles={blogs?.data} />
      </div>
      
    </section>
    
  )
}

const RenderContent = ( {title, content }: {title?: string, content?: string}) => (
  <div className="flex flex-col lg:px-10 xl:px-16 2xl:px-48">
    <h5 className='h5-bold'>{title}</h5>
    <p className='p-regular-14 md:p-regular-20'>{content}</p>
  </div>
)

const RenderImageContent = ({imageUrl}: {imageUrl?: string}) => (
  <Image src={imageUrl!} width={1280} height={1280} alt="solutions" className='lg:px-10 xl:px-16 2xl:px-48' />
)

export default Solutions