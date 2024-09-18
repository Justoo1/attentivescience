import { advisory } from '@/constants'
import { Metadata } from 'next';
import Image from 'next/image'

export const metadata: Metadata = {
    title: "Advisory Board",
    
  };

const AdvisoryBoard = () => {
  return (
    <main className='bg-primary-500 w-full max-h-full'>
        <section className="flex h-16 justify-center items-center bg-gray-600">
            <h3 className='uppercase text-white p-regular-20'>Meet our Advisory Team</h3>
        </section>
        <section className='2xl:px-52'>
            <div className="grid grid-cols-1 md:grid-cols-2 p-16 gap-10">
                {advisory.map((board) => {
                    return (
                        <div className="flex flex-col md:flex-row gap-2 justify-center items-center" key={board.name}>
                            <Image src={board.imageUrl} width={220} height={220} alt={board.name} className='rounded-full md:w-[10rem] md:h-[10rem]' />
                            <div className="flex flex-col justify-center items-start gap-2">
                                <p className='h3-medium 2xl:h3-bold text-white'><span className='uppercase'>{board.name}</span>{board.title ? `,` : ''} {board.title}</p>
                                <p className='p-regular-14 text-gray-50'>{board.about}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    </main>
  )
}

export default AdvisoryBoard