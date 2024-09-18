import { team } from '@/constants'
import { Metadata } from 'next';
import Image from 'next/image'

export const metadata: Metadata = {
    title: "Team",
    
  };

const Team = () => {
  return (
    <main className='flex flex-col gap-12 p-10'>
        <h1 className='text-center h1-bold'>Meet Our Management <br className='hidden md:flex'/>Team</h1>
        {team.map((member) => {
            return (
                <section key={member.id} id={member.id} className="flex flex-col md:flex-row gap-6 md:gap-10 bg-gray-100 shadow-sm justify-center items-center p-10 w-full rounded-lg">
                    <div className="flex flex-col justify-center items-center md:w-[500px]">
                        <Image src={member.photo} width={280} height={280} alt={member.name} className='md:w-[18rem] 2xl:w-[20rem] md:h-[18rem] 2xl:h-[20rem]' />
                        <p className='h3-bold'>{member.name}</p>
                        <p className='p-medium-20'>{member.title}</p>
                        <p className='p-regular-20'>{member.position}</p>
                    </div>
                    <div className='flex w-full'>
                        <p className='p-regular-14 md:p-medium-16 2xl:p-regular-20'>{member.about}</p>
                    </div>
                </section>
            )
        })}
    </main>
  )
}

export default Team