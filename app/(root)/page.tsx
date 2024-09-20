import Hero from "@/components/Hero";
import { clients } from "@/constants";
import Link from "next/link";

// import UpcomingEvent from "@/components/UpcomingEvent";
// import Team from "@/components/Team";
import { Button } from "@/components/ui/button";
// import Blogs from "@/components/Blogs";
// import { getAllBlog } from "@/lib/actions/blog.actions";
import dynamic from "next/dynamic";
import { EmblaOptionsType } from 'embla-carousel'
// import EmblaCarousel from "@/components/EmblaCarousel";
import { Metadata } from "next";
// import OurTeam from "@/components/OurTeam";
// import FeaturedBlog from "@/components/FeaturedBlog";
// import TestimonialCaruosel from "@/components/TestimonialCaruosel";
// import OurSolutions from "@/components/OurSolutions";

// DYNAMIC IMPORTS
const DynamicVideoComponent = dynamic(() => import('@/components/VideoComponent'), { ssr: false })
const DynamicEmblaCarousel = dynamic(() => import('@/components/EmblaCarousel'), { ssr: false })
const DynamicOurSolutions = dynamic(() => import('@/components/OurSolutions'), { ssr: false })
const DynamicTestimonialCaruosel = dynamic(() => import('@/components/TestimonialCaruosel'), { ssr: false })
const DynamicOurTeam = dynamic(() => import('@/components/OurTeam'), { ssr: false })
const DynamicFeaturedBlog = dynamic(() => import('@/components/FeaturedBlog'), { ssr: false })
const DynamicUpcomingEvent = dynamic(() => import('@/components/UpcomingEvent'), { ssr: false })

const OPTIONS: EmblaOptionsType = { loop: true }

export const metadata: Metadata = {
  title: "Attentive-Home",
};



export default function Home() {

  return (
    <main className="flex flex-col w-full">
      <Hero />
      {/* CLIENT SECTION */}
      <section className="bg-cover bg-line-pattern bg-white w-full h-[489px] flex flex-col justify-center items-center gap-4 drop-shadow">
        <h2 className="h2-bold 2xl:text-7xl">Over 1K Client Growing <br className="flex md:hidden"/> With Us</h2>
        <div className="flex justify-center items-center">
          <DynamicEmblaCarousel slides={clients} options={OPTIONS} />
        </div>
      </section>

     <DynamicOurSolutions />

      {/* TESTIMONIAL */}
      <DynamicTestimonialCaruosel />

      {/* UPCOMING EVENTS */}
      <DynamicUpcomingEvent />

      {/* ONBOARDING */}
      <section className="flex flex-col lg:flex-row p-16 lg:px-10 xl:px-16 2xl:px-32 gap-4 lg:gap-8 2xl:gap-20 bg-grey-600/5">
        <div className="flex flex-col justify-center items-center lg:gap-5 2xl:gap-8">
          <h3 className="h3-bold lg:text-5xl 2xl:text-8xl">Lets take you on a Digital Tour of our Amazing Facility</h3>
          <p className="p-regular-14 2xl:text-lg">Given the ongoing changes in our daily lives, we understand that physical visits may not always be possible. Instead, we invite you to join us virtually.</p>
        </div>
        <div className="lg:w-[28rem] xl:w-[100rem] 2xl:w-[120rem]">
          <DynamicVideoComponent url="https://www.youtube.com/watch?v=y5X2fluLx3g" />
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <DynamicFeaturedBlog />
      

      {/* MEET THE TEAM */}
      <DynamicOurTeam />

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
