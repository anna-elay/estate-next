"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import GalleryCart from "../shared/GalleryCart";
import { useState } from "react";
import { PropertyProps } from "@/data/properties";

interface GalleryProp {
  properties: PropertyProps[];
}
const Details = ({ properties }: GalleryProp) => {
  const [currentPage, setCurrentPage] = useState(0);
  // Добавляем состояние для отслеживания режима отображения
  const [showAll, setShowAll] = useState(false);

  if (!properties.length) {
    return null;
  }

  const nextSlide = () => {
    if (currentPage < properties.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevSlide = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getCurrentProperties = () => {
    const startIndex = currentPage;
    // Показываем 3 карточки начиная с currentPage
    return properties.slice(startIndex, startIndex + 3);
  };

  // Функция для обработки нажатия на кнопку "View All Properties"
  const handleViewAll = () => {
    setShowAll(true); // Включаем режим показа всех свойств
  };

  // Функция для возврата к слайдеру (если понадобится)
  const handleShowLess = () => {
    setShowAll(false);
    setCurrentPage(0); // Сбрасываем на первую страницу
  };

  return (
    <section id="detail" className="scroll-mt-10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="py-22.5">
          <div className="-m-2.5 max-w-13.5 ">
            <img src="/image/Stars.png" alt="" />
          </div>
          <div>
            <h3 className=" text-[28px] lg:text-[38px] py-2.5">
              Featured Properties
            </h3>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 lg:gap-37">
              <p className="order-1 ">
                Explore our handpicked selection of featured properties. Each
                listing offers of glimpse into exeptional homes and investments
                available through Estatein. Click "View Details" for more
                information.{" "}
              </p>
          
              {!showAll ? (
                <button
                  onClick={handleViewAll}
                  className="order-3 lg:order-2 btn-dark p-[14px_20px] bg-gray-10 text-nowrap "
                >
                  View All Properties
                </button>
              ) : (
                <button
                  onClick={handleShowLess}
                  className="order-3 lg:order-2 btn-dark p-[14px_20px] bg-gray-10 text-nowrap "
                >
                  Show Less
                </button>
              )}
            </div>

            {!showAll ? (
              // Режим слайдера (показываем 3 карточки)
              <>
                <div className="order-2 my-4 lg:order-3 lg:my-6 flex gap-5">
                  {getCurrentProperties().map((property, index) => (
                    <div
                      key={property.id || index}
                      className={`
                        ${index === 0 ? "block" : "hidden"}           
                        ${index === 1 ? "hidden md:block" : ""}   
                        ${index === 2 ? "hidden lg:block" : ""}     
                      `}
                    >
                      <GalleryCart properties={[property]} />
                    </div>
                  ))}
                </div>

                {/* Пагинация для слайдера */}
                <div className="flex justify-between pt-10 border-t border-gray-15">
                  <div className="flex gap-0.5">
                    <div>{currentPage + 1}</div>
                    <span className="text-gray-60">of</span>
                    <div className="text-gray-60">{properties.length}</div>
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
                      disabled={currentPage === properties.length - 1}
                      className={`bg-gray-08 border border-gray-15 rounded-full cursor-pointer ${
                        currentPage === properties.length - 1
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      <ArrowRightIcon className="text-white p-2.5 size-11 " />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              // Режим "Все свойства" (показываем все карточки)
              <div className="order-2  lg:order-3  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {properties.map((property, index) => (
                  <div key={property.id || index}>
                    <GalleryCart properties={[property]} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;

