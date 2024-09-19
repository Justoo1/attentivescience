import Image from 'next/image'
import Link from 'next/link'
import MobileNav from './MobileNav'
import NavItems from './NavItems'

const Header = () => {
  
  return (
    <header className="w-full border-b sticky top-0 z-50 bg-white xl:px-14">
        <div className="wrapper  flex 2xl:gap-52 items-center  justify-between">
            <Link href="/" className="w-36 2xl:w-56">
                <Image src="/assets/images/logo.svg"  width={128} height={38} alt="event share logo"/>
            </Link>

            <nav className="lg:flex hidden w-full max-w-xs lg:max-w-2xl">
                <NavItems />
            </nav>
            
            <div className="lg:hidden flex w-32 justify-end gap-3 2xl:pl-48">
               
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header