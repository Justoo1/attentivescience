import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import { articles, clients, team, testimonials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import UpcomingEvent from "@/components/UpcomingEvent";
import Team from "@/components/Team";
import { Button } from "@/components/ui/button";
import Blogs from "@/components/Blogs";
import { getAllBlog } from "@/lib/actions/blog.actions";
import dynamic from "next/dynamic";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "@/components/EmblaCarousel";
import { Metadata } from "next";

const DynamicVideoComponent = dynamic(() => import('@/components/VideoComponent'), { ssr: false })

const OPTIONS: EmblaOptionsType = { loop: true }

export const metadata: Metadata = {
  title: "Attentive-Home",
};

export async function generateStaticParams() {
  const blogs = await getAllBlog({
    query: '',
    category: '',
    page: 1,
    limit: 3
  });
  return blogs?.data.map(({ _id }: { _id: string }) => ({ id: _id }));
}

export default async function Home() {
  const blogs = await getAllBlog({
    query: '',
    category: '',
    page: 1,
    limit: 3
  });

  return (
    <main className="flex flex-col w-full">
      <Hero />
      {/* CLIENT SECTION */}
      <section className="bg-cover bg-line-pattern bg-white w-full h-[489px] flex flex-col justify-center items-center gap-4 drop-shadow">
        <h2 className="h2-bold 2xl:text-7xl">Over 1K Client Growing <br className="flex md:hidden"/> With Us</h2>
        <div className="flex justify-center items-center">
          {/* <Carousel opts={{
                align: "center",
                loop: true,
                active: true
              }}
              // plugins={[
              //   Autoplay({
              //     delay: 2000,
              //   }),
              // ]}
              className="">
                <CarouselContent>
                  {clients.map((client) => {
                    return (
              
                      <CarouselItem className="lg:basis-1/3" key={client.label}>
                        <div className="flex flex-grow h-16 bg-primary-500/10 p-10 rounded-sm">
                          <Image src={client.icon}  alt={client.label} width={128} height={128} />
                        </div>
                      </CarouselItem>
              // 
              )
            })}
            
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex"/>
            <CarouselNext className="hidden md:flex"/>
          </Carousel> */}
          <EmblaCarousel slides={clients} options={OPTIONS} />
        </div>
      </section>

      <section className="flex flex-col mt-3 p-16 2xl:px-[9rem]">
        <h3 className="h3-bold">Our Solutions</h3>
        {/* FROM LEFT TO RIGHT */}
        <div className="flex flex-col lg:flex-row mt-16 gap-4 2xl:gap-20">
          <div className="flex flex-col gap-2">
            <h4 className="h4-medium">Pharmacokinetics</h4>
            <p className="p-regular-14"><span className=" font-semibold">Knowledge of the fate (Absorption, Distribution, Metabolism, Elimination) of a test substance is necessary to predict its action on a test subject.</span> <br /> With Attentive, you have at your disposal a wide range of in-vivo test systems as well as protocols and reporting infrastructure to ensure you receive quality data in a timely manner to select the best test substance and doses for your programs. Attentive Scientists bring the experience necessary to excel at executing these studies to assist you by performing in-vivo studies during the discovery and lead optimization phases of your research</p>

            <Link href='/pharmacokinetics' className=" text-primary-500 flex gap-1 justify-start items-center p-medium-12">
              <span>Read More</span> <Image src="/assets/icons/arrow-left.png" alt="arrow left" height={15} width={15}/>
            </Link>
          </div>
          
          <Image src="/assets/images/image1.png" alt="pharmacokinetics" className="lg:w-[30rem] lg:h-[20rem] 2xl:w-[45rem] 2xl:h-[25rem]" height={1280} width={1280} />
        </div>

          {/* FROM RIGHT TO LEFT */}
        <div className="flex flex-col lg:flex-row mt-16 gap-4 2xl:gap-20">
          <Image src="/assets/images/image2.png" alt="pharmacokinetics" className="lg:w-[30rem] lg:h-[20rem] 2xl:w-[45rem] 2xl:h-[25rem]" height={1280} width={1280} />
          <div className="flex flex-col gap-2">
            <h4 className="h4-medium">Toxicology</h4>
            
            <p className="p-regular-14"><span className=" font-semibold">Regulatory toxicology</span> studies to evaluate the relationship between various doses of your drug molecule and adverse events require close collaboration between scientists with multiple levels of expertise from the development company and the contract research organization (CRO). Attentive’s processes ensure transparent communication, collaboration and dialogue that will keep up with your ever-changing needs for lead optimization, candidate selection as well as regulatory-enabling studies</p>

            <Link href='/pharmacokinetics' className=" text-primary-500 flex gap-1 justify-start items-center p-medium-12">
              <span>Read More</span> <Image src="/assets/icons/arrow-left.png" alt="arrow left" height={15} width={15}/>
            </Link>
          </div>
        </div>

        {/* FROM LEFT TO RIGHT */}
        <div className="flex flex-col lg:flex-row mt-16 gap-4 2xl:gap-20">
          <div className="flex flex-col gap-2">
            <h4 className="h4-medium">Safety Pharmacology</h4>
            <p className="p-regular-14"><span className=" font-semibold">Safety Pharmacology studies are designed to detect the potential undesirable pharmacodynamic effects of new chemical entities on physiological functions in relation to exposure in the therapeutic range and above.</span> In addition to you obtaining scientifically robust data, you have access to a vast network of experts at Attentive</p>

            <Link href='/pharmacokinetics' className=" text-primary-500 flex gap-1 justify-start items-center p-medium-12">
              <span>Read More</span> <Image src="/assets/icons/arrow-left.png" alt="arrow left" height={15} width={15}/>
            </Link>
          </div>
          
          <Image src="/assets/images/image3.png" alt="pharmacokinetics" className="lg:w-[30rem] lg:h-[20rem] 2xl:w-[45rem] 2xl:h-[25rem]" height={1280} width={1280} />
        </div>
      </section>

      {/* TESTIMONIAL */}
      <Carousel opts={{
        align: "start",
        loop: true,
      }} className="md:mx-20">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem className="" key={testimonial.name}>
              <Testimonial  testimonial={testimonial} />
            </CarouselItem>

          ))}
          
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex"/>
        <CarouselNext className="hidden md:flex"/>
      </Carousel>

      {/* UPCOMING EVENTS */}
      <UpcomingEvent />

      {/* ONBOARDING */}
      <section className="flex flex-col lg:flex-row p-16 2xl:px-32 gap-4 lg:gap-8 2xl:gap-20 bg-grey-600/5">
        <div className="flex flex-col justify-center items-center lg:gap-5 2xl:gap-8">
          <h3 className="h3-bold lg:text-5xl 2xl:text-8xl">Lets take you on a Digital Tour of our Amazing Facility</h3>
          <p className="p-regular-14 2xl:text-lg">Given the ongoing changes in our daily lives, we understand that physical visits may not always be possible. Instead, we invite you to join us virtually.</p>
        </div>
        <div className="lg:w-[100rem] 2xl:w-[120rem]">
          <DynamicVideoComponent url="https://www.youtube.com/watch?v=y5X2fluLx3g" />
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <div className="flex flex-col gap-5 mt-16">
        <h3 className="h3-bold text-center lg:text-left lg:ml-16 2xl:ml-32">Featured Articles</h3>
        <Blogs articles={blogs?.data} />
      </div>
      

      {/* MEET THE TEAM */}
      <section className="flex flex-col p-16 2xl:px-32 justify-center items-center md:items-start gap-4 lg:gap-9 2xl:gap-12">
        <h3 className="h3-bold">Meet Our Management Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 md:gap-10 2xl:gap-20">
          {team.map((team) => {
            return (
                  <Team team={team} key={team.name} />
              )
            })}
        </div>
      </section>

      <section className="flex flex-col p-16 2xl:p-32 justify-center items-center gap-3 2xl:gap-5">
        <p className="h3-bold 2xl:h3-bold-40">How can we help you?</p>
        <p className="p-regular-14 2xl:text-base">Reach out to us with any question or inquiry you have and we'll do our best to get back to you as soon as possible</p>
        <Button className="bg-primary-500 hover:bg-red-600 text-white px-8 py-2 p-regular-14 2xl:text-base" asChild>
          <Link href="/contact">Lets have a chat</Link>
        </Button>
      </section>

    </main>
  );
}
