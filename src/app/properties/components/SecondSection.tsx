"use client";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import GalleryCart2 from "../../../components/shared/GalleryCart2";
import { PropertyProps } from "@/data/properties";

interface GalleryProp {
  properties: PropertyProps[];
}

const SecondSection = ({ properties }: GalleryProp) => {
  if (!properties || !Array.isArray(properties) || properties.length === 0) {
    return (
      <div className="text-center py-10">
        <p>Нет доступных объектов недвижимости</p>
      </div>
    );
  }

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Сколько карточек показывать за раз
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const nextSlide = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevSlide = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="categories" className="scroll-mt-20">
      <div className="py-30  px-4 lg:px-20">
        <div className="flex flex-col items-start justify-center pb-15px">
          <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
          <h2 className=" text-[28px] lg:text-[38px] pb-2.5">
            Discover a World of Possibilities
          </h2>
          <p className="text-sm lg:text-base">
            Our porfolio of properties is as devirse as your dreams. Explore the
            following categories to find the perfect property that resonates
            with your vision of home.
          </p>
        </div>

        <div className="overflow-hidden mb-10">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"

            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {properties?.map((property) => (
              <div
                key={property.id}
                className="min-w-[calc(33.333%-1.35rem)] shrink-0"
              >
                <GalleryCart2
                  id={property.id}
                  image={property.image}
                  title={property.title}
                  description={property.description}
                  bedrooms={property.bedrooms}
                  bathrooms={property.bathrooms}
                  type={property.type}
                  price={property.price}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-0.5">
            <div>{currentPage + 1}</div>
            <span className="text-gray-60">of</span>
            <div className="text-gray-60">{totalPages}</div>
          </div>
          <div className="flex gap-2.5">
            <button
              onClick={prevSlide}
              disabled={currentPage === 0}
              className={`bg-black border border-gray-15 rounded-full cursor-pointer ${currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <ArrowLeftIcon className="p-2.5 size-11 text-gray-50" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentPage === totalPages - 1}
              className={`bg-gray-10 border border-gray-15 rounded-full cursor-pointer ${
                currentPage === totalPages - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <ArrowRightIcon className="text-white p-2.5 size-11" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;

