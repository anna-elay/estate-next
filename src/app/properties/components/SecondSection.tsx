import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import GalleryCart2 from '../../../components/shared/GalleryCart2';

const SecondSection = () => {
  return (
    <section id="categories" className='scroll-mt-20'>
      <div className="py-30 px-20">
        <div className="flex flex-col items-start justify-center  pb-15px">
          <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
          <h2 className="text-[38px] pb-2.5">
            Discover a World of Possibilities
          </h2>
          <p>
            Our porfolio of properties is as devirse as your dreams. Explore the
            following categories to find the perfect property that resonates
            with your vision of home.
          </p>
        </div>
        <GalleryCart2 />
        <div className="flex justify-between">
          <div className="flex gap-0.5">
            <div>01</div>
            <span className="text-gray-60">of</span>
            <div className="text-gray-60">10</div>
          </div>
          <div className="flex gap-2.5">
            <button className="bg-black border border-gray-15 rounded-full cursor-pointer">
              <ArrowLeftIcon className="p-2.5 size-11 text-gray-50" />
            </button>
            <button className=" bg-gray-10 border border-gray-15 rounded-full cursor-pointer">
              <ArrowRightIcon className="text-white p-2.5 size-11" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection