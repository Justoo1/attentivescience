'use client'; // This component is a client-side component

import { useEffect, useState } from 'react';
import { IBlog } from '@/lib/database/models/blog.model';
import dynamic from 'next/dynamic';
import { getRelatedBlogByCategory } from '@/lib/actions/blog.actions';

// Dynamic import for the Article component
const DynamicArticle = dynamic(() => import('@/components/Article'), { ssr: false });

interface RelatedBlogsProps {
  categoryId: string;
  currentBlogId: string;
  page: string;
}

const RelatedBlogs: React.FC<RelatedBlogsProps> = ({ categoryId, currentBlogId, page }) => {
  const [relatedBlogs, setRelatedBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    async function fetchRelatedBlogs() {
      const response = await getRelatedBlogByCategory({
        categoryId,
        blogId: currentBlogId,
        page
      })
      const data = await response?.data;
      setRelatedBlogs(data);
    }

    fetchRelatedBlogs();
  }, [categoryId, currentBlogId]);

  return (
    <div className="grid grid-cols-1 gap-2 2xl:gap-5 xl:mx-2">
      {relatedBlogs.length > 0 ? (
        relatedBlogs.map((item, index) => <DynamicArticle key={index} article={item} />)
      ) : (
        <p className='text-center'>No related blogs found</p>
      )}
    </div>
  );
};

export default RelatedBlogs;
