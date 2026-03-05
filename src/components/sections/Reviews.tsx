"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import Testimonial from "../shared/Testimonial";
import { TestimonialData } from "@/data/testimonials";
import { useState } from "react";
import { DivideIcon } from "@heroicons/react/24/outline";
interface TestimonialProps {
  testimonials: TestimonialData[];
}

const Reviews = ({ testimonials }: TestimonialProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  if (!testimonials.length) {
    return null;
  }
  const nextSlide = () => {
    if (currentPage < testimonials.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevSlide = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const getCurrentTestimonials = () => {
    const startIndex = currentPage;
    // Показываем 3 карточки начиная с currentPage
    return testimonials.slice(startIndex, startIndex + 3);
  };
  return (
    <section id="reviews" className="scroll-mt-40">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="-m-2.5 max-w-13.5 ">
          <img src="/image/Stars.png" alt="" />
        </div>
        <div>
          <h3 className="text-[28px] lg:text-[38px] py-2.5">
            What Our Clients Say
          </h3>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 lg:gap-37">
            <p>
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Eastatein for their real
              eastate needs.
            </p>
            <button className="btn-dark p-[14px_20px] bg-gray-10 text-nowrap">
              View All Testimonials
            </button>
          </div>
        </div>
        {/* Контейнер для карточек */}
        <div className="py-10">
          {/* Мобилка: 1 карточка */}
          <div className="block md:hidden">
            <Testimonial testimonial={testimonials[currentPage]} />
          </div>

          {/* Планшет: 2 карточки */}
          <div className="hidden md:block lg:hidden">
            <div className="flex gap-5">
              <Testimonial testimonial={testimonials[currentPage]} />
              {testimonials[currentPage + 1] && (
                <Testimonial testimonial={testimonials[currentPage + 1]} />
              )}
            </div>
          </div>

          {/* Десктоп: 3 карточки */}
          <div className="hidden lg:block">
            <div className="flex gap-5">
              <Testimonial testimonial={testimonials[currentPage]} />
              {testimonials[currentPage + 1] && (
                <Testimonial testimonial={testimonials[currentPage + 1]} />
              )}
              {testimonials[currentPage + 2] && (
                <Testimonial testimonial={testimonials[currentPage + 2]} />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-10 border-t border-gray-15">
          <div className="flex gap-0.5">
            <div>{currentPage + 1}</div>
            <span className="text-gray-60">of</span>
            <div className="text-gray-60">{testimonials.length}</div>
          </div>
          <div className="flex gap-2.5">
            <button
              onClick={prevSlide}
              disabled={currentPage === 0}
              className={`bg-gray-08 border border-gray-15 rounded-full cursor-pointer ${
                currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ArrowLeftIcon className="p-2.5 size-11 text-absolute-white" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentPage === testimonials.length - 1}
              className={`bg-gray-08 border border-gray-15 rounded-full cursor-pointer ${
                currentPage === testimonials.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <ArrowRightIcon className="text-white p-2.5 size-11 " />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
