import Solutions from '@/components/Solutions'
import { pharmacokinetics } from '@/constants'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pharmacokinetics",
  
};

const Pharmacokinetics = () => {
  return (
    <main className='flex flex-col w-full'>
      <div className="flex-center flex-grow bg-gray-50 h-52 lg:h-72 2xl:h-96 mb-3 bg-cover bg-center text-grey-500" style={{backgroundImage: `url(${pharmacokinetics.bannerImageUrl})`}}>
        <div className='absolute w-full max-h-72 lg:max-h-[23rem] 2xl:max-h-[29rem] bg-gray-900/25 inset-0 z-0' />
        <h1 className='h1-bold text-white z-10'>{pharmacokinetics.title1}</h1>
      </div>

      <Solutions data={pharmacokinetics} />
    </main>
  )
}

export default Pharmacokinetics