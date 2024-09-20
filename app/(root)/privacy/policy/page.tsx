import MarkdownPreview from '@/components/MarkdownPreview';
import { policy } from '@/constants'; // Directly import your static content
// import dynamic from 'next/dynamic';

// const DynamicRenderComponent = dynamic(() => import('@/components/RenderEditorComponent'), { ssr: false });

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col px-8 md:px-12 2xl:px-36 bg-[#f6f8fd] pb-10">
      <h1 className="h1-bold text-center">Attentive Science Privacy Policy</h1>
      <MarkdownPreview content={policy} />
    </div>
  );
};

export default PrivacyPolicy;
