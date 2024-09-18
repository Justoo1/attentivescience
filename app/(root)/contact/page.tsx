import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next';
import Image from 'next/image'

export const metadata: Metadata = {
    title: "Contact Us",
    
  };

const ContactUs = () => {
  return (
    <main className='flex w-full flex-col gap-8'>
        <section style={{backgroundImage: "url('/assets/images/banner1.svg')"}} className='flex-center flex-col flex-grow bg-gray-50 h-52 lg:h-72 2xl:h-96 mb-3 bg-cover bg-center text-grey-500'>
            <div className='absolute w-full max-h-72 lg:max-h-[23rem] 2xl:max-h-[29rem] bg-gray-900/25 inset-0 z-0' />
            <h1 className='h1-bold text-white z-10'>Get In Touch With Us</h1>
            <p className='p-regular-14 z-10 text-gray-100 px-20'>Reach out to us with any question or inquiry you have and we'll do our best to get back to you as soon as possible.</p>
        </section>
        <div className="flex flex-col lg:flex-row gap-8 flex-center p-16">
            <div className="flex md:flex-col md:gap-8">
                <Image src="/assets/images/map.png" alt='map' width={380} height={380} className='hidden md:flex' />
                <div className="flex flex-col">
                    <p className='p-regular-20'>Address</p>
                    <p className='p-regular-14'>
                    Attentive Science <br /> 
                    17745 Metcalf Avenue, <br />
                    Building #4,Stilwell, KS 66085 <br />
                    United States
                    </p>
                </div>
            </div>
            <ContactForm />
        </div>
    </main>
  )
}

export default ContactUs