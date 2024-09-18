import { articleProps } from '@/types'
import React from 'react'
import Article from './Article'

const Blogs = ({ articles }: { articles: articleProps[]}) => {
  return (
    <section className="flex flex-col px-16 pb-16 2xl:px-32 justify-center items-center md:items-start gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 2xl:gap-20">
          {articles.map((article) => {
            return (
              
                <Article article={article} key={article._id} />
              )
            })}
        </div>
      </section>
  )
}

export default Blogs