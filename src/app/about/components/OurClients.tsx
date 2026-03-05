'use client'
import {
  BoltIcon,
  Squares2X2Icon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const OurClients = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
    
  const partners = [
    {
      since: "2018",
      name: "ABC Corporation",
      domain: "Commercial Real Estate",
      category: "Luxury Home Development",
      quote:
        "Eastatein's expertise in finding the perfect office space for you expanding operation was invaluable. They truly understand our business needs.",
    },
    {
      since: "2019",
      name: "GreenTech Enterprises",
      domain: "Commercial Real Estate",
      category: "Retail Space",
      quote:
        "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are trusted partner in our growth.",
    },
  ];
   const nextSlide = () => {
     if (currentIndex < partners.length - 1) {
       setCurrentIndex(currentIndex + 1);
     }
   };

   const prevSlide = () => {
     if (currentIndex > 0) {
       setCurrentIndex(currentIndex - 1);
     }
   };
  return (
    <section id="client" className="scroll-mt-25">
      <div className="pt-22.5 pb-30 container mx-auto px-4 lg:px-20">
        <div className="flex flex-col items-start justify-center lg:w-1/2 pb-15px">
          <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
          <h2 className="text-[38px] pb-2.5">Our Valued Clients</h2>
          <p>
            At Estatein, we have had the privelege of working with a diverse
            range of clients across various industries. Here are some of the
            clients we've had the pleasure of serving.
          </p>
        </div>

        <div className="relative pt-15 pb-10">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="min-w-full lg:min-w-[calc(33.333%-2.5rem)]"
                >
                  <div className="border-4 border-gray-10 inner-border-1 rounded-xl p-10 mx-2">
                
                    <div className="flex  flex-col gap-5 lg:justify-between">
                      <div>
                        <p>Since {partner.since}</p>
                        <h4>{partner.name}</h4>
                      </div>
                      <button className="lg:btn-gray bg-gray-10 border border-gray-15 py-3.5 rounded-lg!">
                        Visit Website
                      </button>
                    </div>
                    <div className="flex py-7.5">
                      <div className="w-1/2 border-r border-gray-15 pr-5">
                        <div className="flex items-center gap-1">
                          <Squares2X2Icon className="w-5 h-5 text-gray-60" />
                          <p>Domain</p>
                        </div>
                        <span>{partner.domain}</span>
                      </div>
                      <div className="pl-5">
                        <div className="flex items-center gap-1">
                          <BoltIcon className="w-5 h-5 text-gray-60" />
                          <p>Category</p>
                        </div>
                        <span>{partner.category}</span>
                      </div>
                    </div>
                    <div className="p-6 border border-gray-15 rounded-xl">
                      <p>What They Said</p>
                      <span>{partner.quote}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>




        <div className="flex justify-between pt-10 border-t border-gray-15">
          <div className="flex gap-0.5">
            <div>{currentIndex + 1}</div>
            <span className="text-gray-60">of</span>
            <div className="text-gray-60">{partners.length}</div>
          </div>
          <div className="flex gap-2.5">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`bg-gray-08 border border-gray-15 rounded-full cursor-pointer ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ArrowLeftIcon className="p-2.5 size-11 text-absolute-white" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === partners.length - 1}
              className={`bg-gray-08 border border-gray-15 rounded-full cursor-pointer ${
                currentIndex === partners.length - 1
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

export default OurClients;
