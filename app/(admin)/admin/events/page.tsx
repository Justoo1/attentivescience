"use client";

import { Button } from '@/components/ui/button';
import { SearchParamProps } from '@/types'

import React, { useEffect, useState } from 'react'
import EventForm from '@/components/EventForm';
import { getAllEventsAdmin } from '@/lib/actions/event.actions';
import { IEvent } from '@/lib/database/models/event.model';
import { formatDateTime } from '@/lib/utils';
import { DeleteConfirmation } from '@/components/DeleteConfirmation';
import dynamic from 'next/dynamic';

const DynamicEventForm = dynamic(() => import('@/components/EventForm'), { ssr: false })

const EventDashboard = ({ searchParams }: SearchParamProps) => {
  const [ createEvent, setCreateEvent ] = useState(false)
  const [ updateEvent, setUpdateEvent ] = useState(false)
  const [ showCreateButton, setShowCreateButton ] = useState(true)
  const [ selectedEvent, setSelectedEvent ] = useState({} as IEvent)
  const [ events, setEvents ] = useState([] as any[])
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getAllEventsAdmin({
        query: searchText,
        category,
        page,
        limit: 6
      })
      setEvents(events?.data || [])
    }
    fetchEvents()
  }, [page, category, searchText])
  // const events = [] as any[]

  const handleUpdateEvent = (event: IEvent) => {
    setSelectedEvent(event)
    setUpdateEvent(true)
    setShowCreateButton(false)
  }

  // const handleDeleteEvent = async (eventId: string) => {
  //   await deleteEvent(eventId)
  // }

  const handleCancelUpdate = () => {
    setSelectedEvent({} as IEvent)
    setUpdateEvent(false)
    setShowCreateButton(true)
  }

  return (
    <div className='flex flex-col'>
        
        <section className="flex items-center justify-between bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 px-10">
          <h3 className="wrapper h3-bold text-center sm:text-left ">Events</h3>
          
          {showCreateButton ? (
            <Button onClick={() => setCreateEvent(!createEvent)} className='bg-primary-500 hover:bg-primary-500'>{createEvent ? 'Cancel' : 'Create Event'}</Button>
          ):(
            <Button onClick={() => handleCancelUpdate()} className='bg-primary-500 hover:bg-primary-500'>Cancel Update</Button>
          )}
        </section>
        {createEvent && <div className='py-16 px-32 lg:px-48 2xl:px-52'>
            <DynamicEventForm type='Create' createdBy='Jay' />
          </div>}

        {updateEvent && <div className='py-16 px-32 lg:px-48 2xl:px-52'>
            <DynamicEventForm type='Update' event={selectedEvent} eventId={selectedEvent._id} createdBy='Jay' />
          </div>}

        <section className="wrapper overflow-x-auto lg:mx-auto 2xl:justify-center 2xl:items-center 2xl:flex-center">
          <table className="w-full border-collapse border-t">
            <thead>
              <tr className="p-medium-14 border-b text-grey-500">
                <th className="min-w-[250px] py-3 text-center">Event ID</th>
                <th className="min-w-[200px] flex-1 py-3 pr-4 text-center">Event Title</th>
                <th className="min-w-[150px] py-3 text-center">Published</th>
                <th className="min-w-[100px] py-3 text-center">Created By</th>
                <th className="min-w-[100px] py-3 text-center">Date Created</th>
              </tr>
            </thead>
            <tbody>
              {events && events.length === 0 ? (
                <tr className="border-b">
                  <td colSpan={5} className="py-4 text-center text-gray-500">
                    No Event found.
                  </td>
                </tr>
              ) : (
                <>
                  {events &&
                    events.map((row: IEvent) => (
                      <tr
                        key={row._id}
                        className="p-regular-14 lg:p-regular-16 border-b"
                        style={{ boxSizing: 'border-box' }}>
                        <td onClick={() => handleUpdateEvent(row)} className="min-w-[250px] py-4 text-primary-500 texct-center cursor-pointer ml-3">
                          {row._id}
                        </td>
                        <td className="min-w-[200px] flex-1 py-4 pr-4 text-center ">{row.title}</td>
                        <td className="min-w-[150px] py-4 text-center">
                          {row.published ? "Published" : "Draft"}
                        </td>
                        <td className="min-w-[100px] py-4 text-center">
                          
                          {row.createdBy}
                        </td>
                        <td className="min-w-[100px] py-4 text-center">
                          {formatDateTime(row.createdAt).dateTime}
                        </td>
                        <td className="min-w-[100px] py-4 text-center">
                          {/* <Image src="/assets/icons/delete.svg" alt="calendar" width={32} height={32} onClick={() => {}} className='cursor-pointer ml-3' /> */}
                          <DeleteConfirmation eventId={row._id} type="event" />
                        </td>
                      </tr>
                    ))}
                </>
              )}
            </tbody>
          </table>
        </section>

    </div>
  )
}

export default EventDashboard