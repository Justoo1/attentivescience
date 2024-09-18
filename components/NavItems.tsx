"use client";


import { headerLinks, solutions } from "@/constants";
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";

const NavItems = () => {
  const pathname = usePathname();
  const [showSubItems, setShowSubItems] = useState(false);
  const [showSolutionSub, setShowSolutionSub] = useState(false);

  const toggleSubItems = () => {
    setShowSubItems(!showSubItems);
  };

  const toggleSolutionSUb = (label:string) => {
    if(label === 'Solutions'){
      setShowSolutionSub(!showSolutionSub);
    }

  };


  return (
    <ul className="lg:flex-between flex w-full flex-col items-start gap-5 2xl:gap-[4.5rem] lg:flex-row bg-white">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        const isSolutions = link.label === 'Solutions'

        return (
          < div key={link.route}>
          {isSolutions ? (
            <>
              <li key={link.route} onClick={()=> toggleSolutionSUb(link.label)} className={`${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap hover:text-primary-500 relative cursor-pointer`}>
                  <p>{link.label}</p>
                  
              </li>
              {showSolutionSub && (
                      <ul key={link.route} className='flex gap-3 border absolute flex-col p-8 bg-white whitespace-nowrap mt-2 top-16'>
                        {solutions.map((solution) => (
                          <li className='hover:text-primary-500 pr-3' key={solution.name}>
                            <Link href={solution.route} onClick={() => toggleSolutionSUb(link.label)} className="flex gap-2 justify-start items-center">
                              <p>{solution.name}</p>
                            </Link>
                        </li>
                        ))}
                  </ul>
                )}
            </>
            
          ) : (
            <li key={link.route} onClick={()=> toggleSolutionSUb(link.label)} className={`${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap hover:text-primary-500`}>
            <Link href={link.route} ><p>{link.label}</p></Link>
          </li>
          )}
          
          </div>
        )
      })}
      <li>
      

      <div className='flex w-full justify-end'>
            <ul className='relative justify-end '>
                <li onClick={toggleSubItems} className='flex-center p-medium-16 cursor-pointer text-right justify-end 2xl:ml-32 hover:text-primary-500 w-10 h-10'>
                  <Image src="/assets/images/country.png" alt="country" width={30} height={30} />
                  .
                </li>
                {showSubItems && (
                    <ul className='flex gap-3 border absolute md:right-2 2xl:right-0 flex-col p-8 bg-white whitespace-nowrap mt-2'>
                    <li className='hover:text-primary-500 pr-3'>
                        <Link href="/ae" className="flex gap-2 justify-start items-center">
                            <Image src="/assets/images/dubai.png" width={20} height={20} className="rounded-full" alt="dubai" />
                            Dubai
                        </Link>
                    </li>
                    <li className='hover:text-primary-500 pr-3'>
                        <Link href="/au" className="flex gap-2 justify-start items-center">
                          <Image src="/assets/images/australia.png" width={20} height={20} className="rounded-full" alt="australia" />
                            Australia
                        </Link>
                    </li>
                    <li className='hover:text-primary-500 pr-3'>
                        <Link href="/uk" className="flex gap-2 justify-start items-center">
                          <Image src="/assets/images/uk.png" width={20} height={20} className="rounded-full" alt="uk" />
                            UK
                        </Link>
                    </li>
                </ul>
                )}
            </ul>
        </div>
      </li>
    </ul>
  )
}

export default NavItems