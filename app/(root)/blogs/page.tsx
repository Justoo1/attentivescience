import Blogs from '@/components/Blogs'
import CategoryFilter from '@/components/CategoryFilter'
import Search from '@/components/Search'
import { Button } from '@/components/ui/button'
import { getAllBlog } from '@/lib/actions/blog.actions'
import { SearchParamProps } from '@/types'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Blogs",
  
};

export async function generateStaticParams() {
  const blogs = await getAllBlog({
    query: '',
    category: '',
    page: 1,
    limit: 6
  });
  return blogs?.data.map(({ _id }: { _id: string }) => ({ id: _id }));
}

const BlogPage = async ({ searchParams }: SearchParamProps) => {
    const page = Number(searchParams?.page) || 1;
    const searchText = (searchParams?.query as string) || '';
    const category = (searchParams?.category as string) || '';

    const blogs = await getAllBlog({
        query: searchText,
        category,
        page,
        limit: 6
    })
  return (
    <main className='flex flex-col'>
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 2xl:px-[3rem]">
        <div className="wrapper flex 2xl:gap-10 w-full md:px-16">
          <div className="flex flex-col justify-center gap-8 2xl:mr-32">
            <h1 className="h1-bold">Where Science Meets Innovation in Pharmacy</h1>
            <p className="p-regular-20 md:p-regular-24">Exploring the future of medicine, one discovery at a time. Dive into groundbreaking research, innovative treatments, and expert insights shaping the world of pharmacy and healthcare.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit bg-primary-500 hover:bg-primary-500">
              <Link href="#blogs" className='text-gray-100 font-extrabold'>
                Explore Now
              </Link>
            </Button>
          </div>
        </div>
    </section> 
    <div className='px-16 2xl:px-0 2xl:justify-center 2xl:flex'>
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12 ">
        <h2 className="h2-bold">Latest Discoveries and <br /> Insights in Science and Pharmacy</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>
      </section>

    </ div>
      <section id='blogs'>
        <Blogs articles={blogs?.data} />
      </section>
    </main>
  )
}

export default BlogPage