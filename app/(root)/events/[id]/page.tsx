import { getEventById, getRelatedEventsByCategory } from '@/lib/actions/event.actions'
import { formatDateTime } from '@/lib/utils';
import { SearchParamProps } from '@/types'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import MarkdownPreview from '@/components/MarkdownPreview';

const Collection = dynamic(() => import('@/components/Collection'), { ssr: false });

const EventDetails = async ({ params: { id }, searchParams }: SearchParamProps) => {
  const event = await getEventById(id);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  })

  return (
    <main className='flex flex-col w-full'>
        
        <div className="relative flex-center flex-grow bg-gray-50 h-52 lg:h-72 2xl:h-96 mb-3 bg-cover bg-center text-grey-500 px-2 sm:px-10">
            <Image
                src={event.imageUrl}
                alt={event.title}
                fill={true} // Fills the parent container
                className="object-cover object-center bg-cover bg-center z-0"
                sizes="(max-width: 640px) 100vw, 
                    (max-width: 1024px) 75vw, 
                    (max-width: 1280px) 50vw, 
                    33vw" // Dynamically adjust image sizes
                quality={75} // Compress the image
                loading="lazy"
            />
            <div className="absolute w-full max-h-72 lg:max-h-[23rem] 2xl:max-h-[29rem] bg-gray-900/60 inset-0 z-1" />
            <h1 className="h3-medium sm:h1-bold text-white z-10">{event.title}</h1>
        </div>
        
        <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 2xl:max-w-7xl">
                <div className="p-6 md:p-[2.5rem] xl:p-16 2xl:col-span-3">
                    {/* <p className="p-semibold-14">
                        {event.content}
                    </p> */}
                    <div className="flex flex-col">
                        {/* <EditorComp markdown={event.content} readOnly={false}/> */}
                        {/* <MDEditor.Markdown source={event.content} /> */}
                        {/* bgColor="#f6f8fd"  */}
                        <MarkdownPreview content={event.content} />
                        <div className="flex gap-3 mt-3">
                                
                            <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                            {event.category.name}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex w-full flex-col gap-8 p-5 md:p-10">
                    <div className="flex flex-col gap-6">
                        {/* <h2 className='h2-bold'>{event.title}</h2> */}

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        

                        <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                            by{' '}
                            <span className="text-primary-500">{event.createdBy}</span>
                        </p>
                        </div>
                    </div>

                    {/* <CheckoutButton event={event} /> */}

                    <div className="flex flex-col gap-5 md:w-[30rem]">
                        <div className='flex gap-2 md:gap-3'>
                        <Image src="/assets/icons/calendar.svg" alt="calendar" width={32} height={32} sizes="(max-width: 600px) 100vw, 50vw" loading="lazy"/>
                        <div className="p-medium-16 gap-2 lg:p-regular-20 flex flex-wrap items-center">
                            <p>
                            {formatDateTime(event.startDateTime).dateOnly} - {' '}
                            {formatDateTime(event.startDateTime).timeOnly}
                            </p>
                            <p>
                            {formatDateTime(event.endDateTime).dateOnly} -  {' '}
                            {formatDateTime(event.endDateTime).timeOnly}
                            </p>
                        </div>
                        </div>
                    </div>
                    <hr className='border-gray-500  sm:w-[30rem]'/>
                    <div className="flex flex-col gap-2 md:w-[30rem]">
                        {/* <p className="p-bold-20 text-grey-600">LOCATION</p> */}
                        <div className="p-regular-20 flex items-center gap-3">
                            <Image src="/assets/icons/location.svg" alt="location" width={32} height={32} sizes="(max-width: 600px) 100vw, 50vw" loading="lazy" />
                            <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
                        </div>
                        {/* <p className="p-medium-16 lg:p-regular-18">{event.LOC}</p>
                        <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">{event.url}</p> */}
                    </div>
                    <hr className='border-gray-500 sm:w-[30rem]'/>
                    <div className="flex flex-col gap-2 md:w-[30rem]">
                        {/* <p className="p-bold-20 text-grey-600">LOCATION</p> */}
                        <div className="p-regular-20 flex items-center gap-3">
                            <Link href="https://www.linkedin.com/company/attentivescience/" className='flex' target='_blank'>
                                <Image src="/assets/icons/linkedin.svg" className='bg-primary-500 text-primary-500 rounded-full border-primary-500 border-2' alt="location" width={50} height={50} sizes="(max-width: 600px) 100vw, 50vw" loading="lazy" />
                            </Link>
                            {/* <p className="p-medium-16 lg:p-regular-20">{event.location}</p> */}
                            <p className="p-medium-16 lg:p-regular-18">
                                Find out what people see and say about this event, and join the conversations.
                            </p>
                            
                        </div>
                        <div className="flex justify-start items-center mt-5  bg-dotted-pattern bg-contain bg-primary-50">
                            <Button className='h-8 px-16 bg-primary-500 text-white mt-2 hover:bg-primary-500' size='lg' asChild>
                                <Link href="/contact">
                                    Contact Us
                                </Link>
                            </Button>
                        </div>
                        {/* <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">{event.url}</p> */}
                    </div>
                </div>
            </div>
        </section>

        {/* EVENTS with the same category */}
        <section className="wrapper my-8 flex flex-col gap-8 md:gap-12 md:px-10 xl:px-16">
            <h2 className="h2-bold">Related Events</h2>

            <Collection 
                data={relatedEvents?.data}
                emptyTitle="No Events Found"
                emptyStateSubtext="Come back later"
                collectionType="All_Events"
                limit={3}
                page={searchParams.page as string}
                totalPages={relatedEvents?.totalPages}
                />
        </section>
    </main>
  )
}

export default EventDetails