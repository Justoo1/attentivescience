import { Metadata, ResolvingMetadata } from 'next';
import Article from '@/components/Article';
import RenderEditorComponent from '@/components/RenderEditorComponent';
import { socialNetworks } from '@/constants';
import { getAllBlogNoLimit, getBlogById, getRelatedBlogByCategory } from '@/lib/actions/blog.actions';
import { IBlog } from '@/lib/database/models/blog.model';
import { calculateReadingTime, formatDateTime } from '@/lib/utils';
import { SearchParamProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

// Next.js uses this for static generation
export async function generateStaticParams() {
  const blogs = await getAllBlogNoLimit();
  return blogs.map(({ _id }: { _id: string }) => ({ id: _id }));
}

// Dynamically generate metadata
export async function generateMetadata(
  { params }: SearchParamProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = params;
  const blog = await getBlogById(id);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog.title,
    description: blog.description,
    authors: [{ name: "Attentive Science", url: "https://attentivescience.com" }],
    openGraph: {
      images: [{ url: blog.imageUrl }, ...previousImages],
    },
    icons: { icon: '/assets/icons/logo.png' },
  };
}

const BlogDetailPage = async ({ params: { id }, searchParams }: SearchParamProps) => {
  const blog = await getBlogById(id);

  const relatedBlogs = await getRelatedBlogByCategory({
    categoryId: blog.category._id,
    blogId: blog._id,
    page: searchParams.page as string,
  });

  const data = relatedBlogs?.data as IBlog[];

  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-8 p-12 2xl:px-28 bg-gray-50 '>
      {/* Main Blog Section */}
      <section className="flex col-span-2 flex-col gap-8 bg-white p-3 2xl:p-5 shadow-md rounded-sm">
        <h3 className='h3-bold'>{blog.title}</h3>
        <div className="flex items-center gap-2">
            <div className='flex gap-1 items-center justify-center'>
                <div className="border-2 border-red-400 w-8 h-8 rounded-full">
                    <Image src="/assets/icons/logo.png" alt="author" width={30} height={30} className="rounded-full" />
                </div>
                <p className='p-regular-14 text-gray-600'>By <span className='text-primary-500 font-bold'>{blog.createdBy}</span></p>
            </div>
            <span className='text-gray-300'>|</span>
            
            <div className="flex gap-1 items-center">
                <Image src="/assets/icons/calendar.svg" alt="calendar" width={20} height={20} />
                <p className='p-regular-14 text-gray-600'>{formatDateTime(blog.createdAt).dateOnly}</p>
            </div>

            <span className='text-gray-300'>|</span>

            <div className="flex gap-1">
                <Image src="/assets/icons/eye.svg" alt="clock" width={20} height={20} />
                <p className='p-regular-14 text-gray-600'>{calculateReadingTime(blog.content)} {calculateReadingTime(blog.content) > 1 ? 'minutes Read' : 'minute Read'}</p>
            </div>
            <span className='text-gray-300'>|</span>
            <div className="flex bg-primary-500/25 py-1 px-3 rounded-full">
                <p className='p-regular-14 text-gray-600'>{blog.category.name}</p>
            </div>
        </div>

        <div className="flex flex-col gap-3">
          <Image src={blog.imageUrl} alt="blog" width={800} height={400} className='2xl:w-[50rem]' />
          <RenderEditorComponent content={blog.content} bgColor="#FFFFFF" />
        </div>
      </section>

      {/* Related Blogs Section */}
      <section className="flex flex-col gap-16">
        <div className="flex flex-col gap-4 bg-white p-3 shadow-md rounded-sm">
            <h5 className='h5-bold text-center'>Social Networks</h5>
            <div className="grid grid-cols-2 gap-2 mx-2">
                {socialNetworks.map((item, index) => (
                    <Link key={index} href={item.url} target="_blank" rel="noopener noreferrer" className='flex gap-2 items-center'>
                        <div className='border-2 border-red-400 rounded-full w-12 h-12 flex items-center justify-center'>
                            <Image src={item.icon} alt="social network" width={20} height={20} />
                        </div>
                        <p className='text-center'>{item.name}</p>
                    </Link>
                ))}
            </div>
        </div>
        <h5 className='h5-bold text-center'>Related Blogs</h5>
        <div className="grid grid-cols-1 gap-2 2xl:gap-5 mx-2">
          {data.length > 0 ? (
            data.map((item, index) => <Article key={index} article={item} />)
          ) : (
            <p className='text-center'>No related blogs found</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
