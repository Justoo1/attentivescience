import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OurSolutions = () => {
  return (
    <section className="flex flex-col mt-3 p-8 sm:p-16 lg:px-10 xl:px-16  2xl:px-[9rem]">
    <h3 className="h3-bold">Our Solutions</h3>
    {/* FROM LEFT TO RIGHT */}
    <div className="flex flex-col lg:flex-row mt-16 gap-4 2xl:gap-20">
      <div className="flex flex-col gap-2">
        <h4 className="h4-medium">Pharmacokinetics</h4>
        <p className="p-regular-14"><span className=" font-semibold">Knowledge of the fate (Absorption, Distribution, Metabolism, Elimination) of a test substance is necessary to predict its action on a test subject.</span> <br /> With Attentive, you have at your disposal a wide range of in-vivo test systems as well as protocols and reporting infrastructure to ensure you receive quality data in a timely manner to select the best test substance and doses for your programs. Attentive Scientists bring the experience necessary to excel at executing these studies to assist you by performing in-vivo studies during the discovery and lead optimization phases of your research</p>

        <Link href='/pharmacokinetics' className=" text-primary-500 flex gap-1 justify-start items-center p-medium-12">
          <span>Read More</span> <Image loading='lazy' src="/assets/icons/arrow-left.png" alt="arrow left" height={15} width={15}/>
        </Link>
      </div>
      
      <Image loading='lazy' src="/assets/images/image1.png" alt="pharmacokinetics" className="lg:w-[30rem] lg:h-[20rem] 2xl:w-[45rem] 2xl:h-[25rem]" height={1280} width={1280} />
    </div>

      {/* FROM RIGHT TO LEFT */}
    <div className="flex flex-col lg:flex-row mt-16 gap-4 2xl:gap-20">
      <Image loading='lazy' src="/assets/images/image2.png" alt="pharmacokinetics" className="lg:w-[30rem] lg:h-[20rem] 2xl:w-[45rem] 2xl:h-[25rem]" height={1280} width={1280} />
      <div className="flex flex-col gap-2">
        <h4 className="h4-medium">Toxicology</h4>
        
        <p className="p-regular-14"><span className=" font-semibold">Regulatory toxicology</span> studies to evaluate the relationship between various doses of your drug molecule and adverse events require close collaboration between scientists with multiple levels of expertise from the development company and the contract research organization (CRO). Attentive’s processes ensure transparent communication, collaboration and dialogue that will keep up with your ever-changing needs for lead optimization, candidate selection as well as regulatory-enabling studies</p>

        <Link href='/pharmacokinetics' className=" text-primary-500 flex gap-1 justify-start items-center p-medium-12">
          <span>Read More</span> <Image loading='lazy' src="/assets/icons/arrow-left.png" alt="arrow left" height={15} width={15}/>
        </Link>
      </div>
    </div>

    {/* FROM LEFT TO RIGHT */}
    <div className="flex flex-col lg:flex-row mt-16 gap-4 2xl:gap-20">
      <div className="flex flex-col gap-2">
        <h4 className="h4-medium">Safety Pharmacology</h4>
        <p className="p-regular-14"><span className=" font-semibold">Safety Pharmacology studies are designed to detect the potential undesirable pharmacodynamic effects of new chemical entities on physiological functions in relation to exposure in the therapeutic range and above.</span> In addition to you obtaining scientifically robust data, you have access to a vast network of experts at Attentive</p>

        <Link href='/pharmacokinetics' className=" text-primary-500 flex gap-1 justify-start items-center p-medium-12">
          <span>Read More</span> <Image loading='lazy' src="/assets/icons/arrow-left.png" alt="arrow left" height={15} width={15}/>
        </Link>
      </div>
      
      <Image loading='lazy' src="/assets/images/image3.png" alt="pharmacokinetics" className="lg:w-[30rem] lg:h-[20rem] 2xl:w-[45rem] 2xl:h-[25rem]" height={1280} width={1280} />
    </div>
  </section>
  )
}

export default OurSolutions