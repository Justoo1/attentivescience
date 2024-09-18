import Solutions from '@/components/Solutions'
import { toxicology } from '@/constants'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Toxicology",
  
};

const Toxicology = () => {
  return (
    <main className='flex flex-col w-full'>
      <div className="flex-center flex-grow bg-gray-50 h-52 lg:h-72 2xl:h-96 mb-3 bg-cover bg-center text-grey-500" style={{backgroundImage: `url(${toxicology.bannerImageUrl})`}}>
        <div className='absolute w-full max-h-72 lg:max-h-[23rem] 2xl:max-h-[29rem] bg-gray-900/25 inset-0 z-0' />
        <h1 className='h1-bold text-white z-10'>{toxicology.title1}</h1>
      </div>

      <Solutions data={toxicology} />
    </main>
  )
}

export default Toxicology