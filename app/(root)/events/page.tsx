import CategoryFilter from '@/components/CategoryFilter'
import Collection from '@/components/Collection'
import Search from '@/components/Search'
import { Button } from '@/components/ui/button'
import { getAllEvents } from '@/lib/actions/event.actions'
import { SearchParamProps } from '@/types'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Evtents",
  
};

const EventPage = async ({ searchParams }: SearchParamProps) => {
    const page = Number(searchParams?.page) || 1;
    const searchText = (searchParams?.query as string) || '';
    const category = (searchParams?.category as string) || '';

    const events = await getAllEvents({
        query: searchText,
        category,
        page,
        limit: 6
    })
  return (
    <>
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 2xl:px-[3rem]">
        <div className="event-wrapper grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:gap-8 w-full lg:px-10 xl:px-16">
          <div className="flex flex-col justify-center gap-8 2xl:mr-32">
            <h1 className="h1-bold">Innovating Health Through Science & Discovery</h1>
            <p className="p-regular-20 md:p-regular-24">Pioneering Breakthroughs: Explore the Future of Pharmacy & Medicine. Shaping Tomorrow's Health Today.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit bg-primary-500 hover:bg-primary-500">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>

          <Image 
            src="/assets/images/eventImg.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] 2xl:w-[44rem]"
          />
        </div>
    </section> 
    <div className='sm:px-3 md:px-16 lg:px-10 xl:px-16  2xl:flex'>
      <section id="events" className="event-wrapper my-8 flex flex-col gap-8 lg:gap-12 ">
        <h2 className="h2-bold">Where Science Meets <br />  Solutions for a Healthier World</h2>

        <div className="flex w-full flex-col gap-5 lg:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </ div>
    </>
  )
}

export default EventPage