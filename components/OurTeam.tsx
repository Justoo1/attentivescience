import React from 'react'
import Team from './Team'
import { team } from '@/constants'

const OurTeam = () => {
  return (
    <section className="flex flex-col p-16 lg:px-10 xl:px-16 2xl:px-32 justify-center items-center md:items-start gap-4 lg:gap-9 2xl:gap-12">
        <h3 className="h3-bold">Meet Our Management Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-y-8 lg:gap-x-4 xl:gap-8 2xl:gap-20">
          {team.map((team) => {
            return (
                  <Team team={team} key={team.name} />
              )
            })}
        </div>
      </section>
  )
}

export default OurTeam