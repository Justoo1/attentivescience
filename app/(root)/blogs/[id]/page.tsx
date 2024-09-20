import { Metadata, ResolvingMetadata } from 'next';
import dynamic from 'next/dynamic'; // Dynamic import
import { socialNetworks } from '@/constants';
import { getAllBlogNoLimit, getBlogById } from '@/lib/actions/blog.actions';
import { calculateReadingTime, formatDateTime } from '@/lib/utils';
import { SearchParamProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import MarkdownPreview from '@/components/MarkdownPreview';

// Dynamically import client-side components
const RelatedBlogs = dynamic(() => import('@/components/RelatedBlogs'), { ssr: false });

export async function generateStaticParams() {
  const blogs = await getAllBlogNoLimit();
  return blogs.map(({ _id }: { _id: string }) => ({ id: _id }));
}

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
      images: blog.imageUrl ? [{ url: blog.imageUrl }, ...previousImages] : previousImages,
    },
    icons: { icon: '/assets/icons/logo.png' },
  };
}

const BlogDetailPage = async ({ params: { id }, searchParams }: SearchParamProps) => {
  const blog = await getBlogById(id);

  // Memoized reading time (calculated once per request cycle)
  const readingTime = calculateReadingTime(blog.content);

  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-8 md:p-12 2xl:px-28 bg-gray-50 '>
      {/* Main Blog Section */}
      <section className="flex col-span-2 flex-col gap-8 bg-white p-3 2xl:p-5 shadow-md rounded-sm">
        <h3 className='h3-bold'>{blog.title}</h3>
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <div className='flex gap-1 items-center md:justify-center'>
            <div className="border-2 border-red-400 w-8 h-8 rounded-full">
              <Image src="/assets/icons/logo.png" alt="author" width={30} height={30} className="rounded-full" />
            </div>
            <p className='p-regular-14 text-gray-600'>
              By <span className='text-primary-500 font-bold'>{blog.createdBy}</span>
            </p>
          </div>
          <span className='text-gray-300'>|</span>

          <div className="flex gap-1 items-center">
            <Image src="/assets/icons/calendar.svg" alt="calendar" width={20} height={20} loading='lazy' />
            <p className='p-regular-14 text-gray-600'>{formatDateTime(blog.createdAt).dateOnly}</p>
          </div>

          <span className='text-gray-300'>|</span>

          <div className="flex gap-1">
            <Image src="/assets/icons/eye.svg" alt="clock" width={20} height={20} loading='lazy' />
            <p className='p-regular-14 text-gray-600'>
              {readingTime} {readingTime > 1 ? 'minutes Read' : 'minute Read'}
            </p>
          </div>

          <span className='text-gray-300'>|</span>

          <div className="flex bg-primary-500/25 py-1 px-3 rounded-full">
            <p className='p-regular-14 text-gray-600'>{blog.category.name}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Image src={blog.imageUrl} alt="blog" width={800} height={400} className='2xl:w-[50rem]' loading="lazy" />
          <MarkdownPreview content={blog.content}  />
        </div>
      </section>

      {/* Related Blogs - Client-side */}
      <section className="flex flex-col items-center md:items-start gap-16">
        <div className="flex flex-col gap-4 bg-white p-3 shadow-md rounded-sm">
          <h5 className='h5-bold text-center'>Social Networks</h5>
          <div className="grid grid-cols-2 gap-2 mx-2">
            {socialNetworks.map((item, index) => (
              <Link key={index} href={item.url} target="_blank" rel="noopener noreferrer" className='flex gap-2 items-center'>
                <div className='border-2 border-red-400 rounded-full w-12 h-12 flex items-center justify-center'>
                  <Image src={item.icon} alt="social network" width={20} height={20} loading="lazy" />
                </div>
                <p className='text-center'>{item.name}</p>
              </Link>
            ))}
          </div>
        </div>

        <h5 className='h5-bold text-center'>Related Blogs</h5>
        {/* Pass categoryId and blogId to client-side related blogs component */}
        <RelatedBlogs categoryId={blog.category._id} currentBlogId={blog._id} page={searchParams.page as string} />
      </section>
    </div>
  );
};

export default BlogDetailPage;
