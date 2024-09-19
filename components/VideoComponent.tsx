'use client';

import ReactPlayer from 'react-player/youtube'

// import { list } from '@vercel/blob'
 
//  letter we will be using vercel blob storage

export default function VideoComponent({ url, forBlog=false }: {url: string, forBlog?: boolean}) {
    return (
        <div className="flex">
            {
                forBlog ? 
                    <ReactPlayer url={url} muted={true} playing loop className=' rounded-t-md' width={490} height={240}/>
                 :
                <ReactPlayer url={url} muted={true} playing loop className='lg:w-[28rem] xl:w-[38rem] 2xl:w-[45rem] 2xl:h-[29rem]' />
            }
        </div>
        
    )
}