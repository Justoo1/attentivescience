"use client";

import { adminNav } from '@/constants';
import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const AdminHeader = () => {
    const pathname = usePathname();

  return (
        <header className="flex w-full justify-between py-3 px-10 drop-shadow-md bg-gray-50 top-0 sticky">
            <nav>
                <Link href="/">
                    <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38} />
                </Link>
            </nav>

            <nav>
                <ul className='flex justify-between gap-28'>
                {adminNav.map((link) => {
                    const isActive = pathname === link.route;

                    return (
                    <li key={link.name} className={isActive ? 'text-primary-500' : ''}>
                        <Link href={link.route}>{link.name}</Link>
                    </li>
                    )
                })}
                </ul>
            </nav>

            <nav>
                <SignedIn>
                <UserButton afterSwitchSessionUrl="/admin" />
                </SignedIn>
            </nav>
        </header>
  )
}

export default AdminHeader