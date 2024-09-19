import Image from 'next/image'

type testimonialProps = {
  content: string,
  name: string,
  imageUrl: string
}

const Testimonial = ({testimonial}: {testimonial: testimonialProps}) => {
  return (
    <section className="p-16 flex justify-center flex-col items-center">
        <div className="flex bg-testimonial-card bg-cover bg-center bg-no-repeat w-[300px] h-[344px] sm:w-[530px] lg:w-[730px]">
            <p className='p-regular-14 p-4 md:p-16 2xl:text-base'>
              {testimonial?.content}
            </p>
        </div>
        <Image src={testimonial?.imageUrl} alt='logo' height={180} width={180} className='' />
    </section>
  )
}

export default Testimonial