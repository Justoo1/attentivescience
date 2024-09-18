import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'


const Hero = () => {
  return (
    <section className="h-screen w-full relative bg-cover bg-no-repeat z-0" >
      {/* style={{ backgroundImage: 'url("https://utfs.io/f/8ov4qkHb6SqJZnmfQHX7x8OralnuFPjtGTYcdC2fh1VQJ5Nm")' }} */}
        <Image src="https://utfs.io/f/8ov4qkHb6SqJZnmfQHX7x8OralnuFPjtGTYcdC2fh1VQJ5Nm" alt="hero" width={1920} height={1080} className="w-full h-full object-cover absolute inset-0 z-0" />
        <div className="absolute inset-0 z-1 bg-black opacity-60"></div> {/* Optional overlay */}
        <div className="flex items-start justify-center gap-10 flex-col mx-11 2xl:mx-[8rem] h-full">
            <div className="text-start text-white z-10">
                <p className='text-gray-300 2xl:text-xl'>Attentive Sceince</p>
                <h1 className="h1-bold 2xl:text-8xl">Your Mission <br /> Our Research <br /> Healthier Outcomes</h1>
                <p className="mt-4 text-sm text-gray-300 2xl:text-xl">Attentive Science is always working to improve and we have come a long way! follow Us as we evolve together</p>
            </div>

            <Button className=' bg-primary-500 z-10 hover:bg-red-700 ' asChild>
              <Link href="/contact" className='flex gap-2 px-8 py-2'>
                Contact Us <Image src="/assets/icons/arrow-left.svg" alt="arrow" width={10} height={10} />
              </Link>
            </Button>
      </div>
    </section>
  )
}

export default Hero