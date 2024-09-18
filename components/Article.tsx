import { calculateReadingTime, formatDateTime } from '@/lib/utils'
import { articleProps } from '@/types'
import ReactPlayer from 'react-player/youtube'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dynamic from 'next/dynamic'

const DynamicVideoComponent = dynamic(() => import('@/components/VideoComponent'), { ssr: false })

const Article = ({article}: {article: articleProps}) => {
  return (
    <div className=' relative flex flex-col gap-2 rounded-md bg-gray-50 shadow-md w-80 lg:w-[360px] lg:h-96 2xl:w-[488px] 2xl:h-[498px] flex-grow hover:shadow-lg hover:shadow-red-100 transition-all'>
        {
        article.videoUrl ? 
                <DynamicVideoComponent url={article.videoUrl} forBlog={true}  />
            
            : (
                <Link href={`/blogs/${article._id}`} style={{backgroundImage: `url(${article.imageUrl})`}} className="flex-center flex-grow w-full py-20 lg:py-0  bg-gray-50 bg-cover bg-center text-grey-500 rounded-t-md" />
            )
        }
        
        <div className="relative">
            <div className="absolute right-2 -top-8 md:-top-6 2xl:-top-[2rem] flex flex-col gap-4 w-[10rem] h-[2rem] justify-center items-center bg-white p-3 shadow-sm drop-shadow-sm border-primary-500 rounded-sm border-2 transition-all">
                <p className="p-semibold-14 text-gray-600">
                    {article?.createdBy}</p>
            </div>
        </div>
        <div className="flex flex-col gap-2 p-3">
            <p className='p-medium-16 2xl:p-regular-20'>{article.title}</p>
            <p className='p-medium-12 2xl:p-regular-16'>{article.description}</p>
            <div className="flex justify-between">
                <p className='text-sm font-bold'>{calculateReadingTime(article.content)} mins read</p>
                <p className='text-sm text-gray-800 font-bold'>{formatDateTime(article.createdAt).dateOnly}</p>
            </div>
        </div>
    </div>
  )
}

export default Article