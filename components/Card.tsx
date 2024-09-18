import { IEvent  } from "@/lib/database/models/event.model"
import { formatDateTime, getMonthAndDay } from "@/lib/utils"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import Link from "next/link"
import { DeleteConfirmation } from "./DeleteConfirmation"

type CardProps = {
    event: IEvent,
    hasOrderLink?: boolean,
    hidePrice?: boolean,
}

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
//   const { sessionClaims } = auth();
//   const userId = sessionClaims?.userId as string;

//   const isEventCreator = userId === event.organizer._id.toString()
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg hover:shadow-red-200 md:min-h-[438px]">
        <Link href={`/events/${event._id}`} style={{backgroundImage: `url(${event.imageUrl})`}} className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500" />

        {/* IS EVENT CREATOR... */}
        {/* {isEventCreator && !hidePrice && (
            
        )} */}
        <div className="relative">
            <div className="absolute right-2 -top-8 md:-top-10 2xl:-top-[3rem] flex flex-col gap-4 w-[5rem] h-[5rem] justify-center items-center bg-white p-3 shadow-lg drop-shadow-sm border-primary-500 rounded-sm border-2 transition-all">
                <p className="p-semibold-14 text-gray-600">
                    {getMonthAndDay(event.startDateTime)}
                </p>
            </div>
        </div>

        <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4" >
            {/* {!hidePrice && } */}
            <div className="flex gap-2">
                {/* <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-600">
                    {event.isFree ? 'FREE' : `$${event.price}`}
                </span> */}
                <p className="p-semibold-14 w-min rounded-full bg-primary-500/10 px-4 py-1 text-grey-500 line-clamp-1">
                    {event.category.name}
                </p>
            </div>
            <p className="p-medium-16 md:p-medium-18 text-grey-500">
                {formatDateTime(event.startDateTime).dateTime}
            </p>
            <Link href={`/events/${event._id}`}>
                <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-gray-700">{event.title}</p>
            </Link>
            <Link href={`/events/${event._id}`}>
                <p className="p-regular-14 md:p-medium-14 line-clamp-2 flex-1 text-gray-600">{event.description}</p>
            </Link>

            <div className="flex-between w-full">
                
                {/* {hasOrderLink && (
                    <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
                        <p className="text-primary-500">Order Details</p>
                        <Image src="/assets/icons/arrow.svg" alt="arrow" width={10} height={10} />
                    </Link>
                )} */}
                {!hasEventFinished && (
                    <Link href="/contact">
                        <p className="text-primary-500">Register</p>
                    </Link>
                )}
                {hasEventFinished && (
                    <p className="text-primary-500">Event Closed</p>
                )}
                <p className="p-medium-14 md:p-medium-16 text-grey-600">
                    {/* {event.organizer.firstName} {event.organizer.lastName} */}
                </p>

            </div>
        </div>
    </div>
  )
}

export default Card