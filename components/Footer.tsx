import { getCurrentYear } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-footer-img bg-cover w-full flex flex-col gap-3'>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-16 sm:px-3 py-10 md:flex md:justify-between md:p-16 md:items-center">
        <div className="flex flex-col w-48 gap-4 justify-center items-start">
          <Image src="/assets/images/logo.svg" width={128} height={128} alt='logo' />
          <p className=' text-gray-500 p-regular-14'>We are on your team.
          Our services are designed for companies willing to optimize the performance of their science and teams.</p>
        </div>
        
        <div className="flex flex-col w-48 gap-4 justify-center items-start">
          <p className='p-medium-16'>Our Service Solutions</p>
          <div className="flex flex-col gap-2">
            <Link href='/pharmacokinetics' className='p-regular-14 text-primary-500 hover:underline'>
              Pharmacokinetics
            </Link>
            <Link href='/toxicology' className='p-regular-14 text-primary-500 hover:underline'>
              Toxicology
            </Link>
            <Link href='/safety/pharmacology' className='p-regular-14 text-primary-500 hover:underline'>
              Safety Pharmacology
            </Link>
            <p className='p-regular-14 text-gray-500'>
              AAALAC International Accredited
            </p>
          </div>
        </div>

        <div className="flex flex-col w-48 gap-4 justify-center items-start">
          <p className='p-medium-16'>Connect with Us</p>
          <div className="flex flex-col gap-2">
            <p className='p-regular-14 text-gray-500'>
            17745 Metcalf Avenue, 
            Building #4, Stilwell, KS 66085 United States
            </p>
            <Link className='p-regular-14 text-blue-500' href="mailto:info@attentivescience .com">
              info@attentivescience .com
            </Link>
            <Link className='p-regular-14 text-blue-500' href="tel:+19133080700">
              <span className='p-regular-14 text-gray-500'>Phone : </span>+1 (913) 308-0700
            </Link>
            
          </div>
        </div>

        <div className="flex flex-col w-48 gap-4 justify-center items-start">
          <p className='p-medium-16'>Working Days</p>
          <div className="flex flex-col gap-2">
            <p className='p-regular-14 text-gray-500'>
              Monday-Friday
            </p>
            <p  className='p-regular-14 text-primary-500'>
              8:00am - 6pm
            </p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
      <hr className='bg-gray-500 text-gray-500'/>

      {/* SOCIAL MEDIA */}
      <div className="flex flex-col md:flex-row p-3 justify-between items-center">
        <div className="flex gap-2">
          <Link href="https://x.com/attentivesci" target='_blank'>
            <Image src="/assets/icons/x.svg" height={30} width={30} alt='X' />
          </Link>
          <Link href="https://www.linkedin.com/company/attentivescience" target='_blank'>
            <Image src="/assets/icons/linkedin.svg" height={30} width={30} alt='linkedin' />
          </Link>
        </div>
        <p className='text-sm text-gray-300'>© {getCurrentYear()} Attentive Science. All Rights Reserved.</p>

        <Link href="/privacy/policy" className='text-sm text-primary-500 hover:underline'>Term and Conditions | Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer