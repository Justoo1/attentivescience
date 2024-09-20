import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { testimonials } from '@/constants'
import Testimonial from './Testimonial'

const TestimonialCaruosel = () => {
  return (
    <Carousel opts={{
        align: "start",
        loop: true,
        
      }} className="md:mx-16">
        <CarouselContent >
          {testimonials.map((testimonial) => (
            <CarouselItem  key={testimonial.name}>
              <Testimonial  testimonial={testimonial} />
            </CarouselItem>

          ))}
          
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex"/>
        <CarouselNext className="hidden md:flex"/>
    </Carousel>
  )
}

export default TestimonialCaruosel