import Image from 'next/image'

type testimonialProps = {
  content: string,
  name: string,
  imageUrl: string
}

const Testimonial = ({testimonial}: {testimonial: testimonialProps}) => {
  return (
    <section className="p-16 flex justify-center flex-col items-center">
        <div className="flex bg-testimonial-card bg-cover bg-no-repeat w-[530px] md:w-[730px] h-[344px]">
            <p className='p-regular-14 p-16 2xl:text-base'>
              {testimonial?.content}
            </p>
        </div>
        <Image src={testimonial?.imageUrl} alt='logo' height={180} width={180} className='ml-40 md:ml-0' />
    </section>
  )
}

export default Testimonial