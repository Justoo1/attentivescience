import Image from 'next/image'
import { Button } from './ui/button'
import { getAllEvents } from '@/lib/actions/event.actions'
import Link from 'next/link'
import RenderEditorComponent from './RenderEditorComponent'
import MarkdownPreview from './MarkdownPreview'

const UpcomingEvent = async () => {
  const event = await getAllEvents({query: '', limit: 1, page: 1, category: '' })

  const hasEventFinished = new Date(event?.data[0]?.endDateTime) < new Date();

  return (
    <section className="p-16 lg:px-10 xl:px-16 2xl:px-32 2xl:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="flex flex-col  gap-4">
                <h3 className='h3-bold 2xl:text-5xl'>Events</h3>
                <Image src={event?.data[0]?.imageUrl} width={1280} height={1280} alt='event-images' className="lg:w-[30rem] lg:h-[20rem] 2xl:w-[45rem] 2xl:h-[30rem] " />
            </div>
            <div className="flex flex-col gap-3 lg:w-[35rem] 2xl:w-[60rem]">
                <p className='p-semibold-20 2xl:p-bold-30'>{event?.data[0]?.title}</p>
                <MarkdownPreview content={event?.data[0]?.description} />

                <div className="flex gap-14 items-center">
                  <Button asChild size="lg" className=' bg-primary-500 hover:bg-red-600 text-white w-32 text-sm transition-all'>
                    <Link href="/contact">
                      {hasEventFinished ? 'Event Ended' : 'Register Now'}
                    </Link>
                  </Button>

                  <Link href={`/events/${event?.data[0]?._id}`} className='text-primary-500 p-regular-14 2xl:p-medium-16'>
                    Read More
                  </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default UpcomingEvent