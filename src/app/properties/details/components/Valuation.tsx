'use client'
import { useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";

const images = [
  "/image/Villa-1.jpeg",
  "/image/Villa-2.jpeg",
  "/image/Villa-3.jpeg",
  "/image/Villa-4.jpeg",
  "/image/Villa-5.jpeg",
  "/image/Villa-6.jpeg",
  "/image/Villa-7.jpeg",
  "/image/Villa-8.jpeg",
  "/image/Villa-9.jpeg",
  "/image/Villa-10.jpeg",
  "/image/Villa-11.jpeg",
];

const Valuation = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Функция для получения изображений с циклическим сдвигом
  const getShiftedImages = () => {
    const result = [];
    for (let i = 0; i < images.length; i++) {
      result.push(images[(startIndex + i) % images.length]);
    }
    return result;
  };
  // Обработчик клика на маленькую картинку
  const handleSmallImageClick = (clickedIndex: number) => {
    // Устанавливаем startIndex так, чтобы clickedIndex стал 9-м индексом (первая большая картинка)
    setStartIndex((clickedIndex - 9 + images.length) % images.length);
  };

  const shiftedImages = getShiftedImages();

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between pt-20 pb-10 gap-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          <h4 className="text-[20px] md:text-[24px]">Seaside Serenity Villa</h4>
          <div className="flex items-center">
            <MapPinIcon className="w-5 h-5" />
            <span className="text-[14px]">Malibu, California</span>
          </div>
        </div>
        <div>
          <p className="text-sm">Price</p>
          <span className="text-xl md:text-2xl">$1,250,000</span>
        </div>
      </div>

      <div className="bg-gray-10 border border-gray-15 rounded-xl p-4 md:p-10 relative pb-25">
        <div className="hidden md:block">
          {/* 9 маленьких картинок сверху */}
          <div className="grid grid-cols-9 gap-2.5 mb-2.5">
            {shiftedImages.slice(0, 9).map((img, index) => {
              const actualIndex = (startIndex + index) % images.length;
              return (
                <div
                  key={index}
                  onClick={() => handleSmallImageClick(actualIndex)}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={img}
                    alt={`Property ${index + 1}`}
                    className="w-full h-20 object-cover rounded-lg pointer-events-none"
                  />
                </div>
              );
            })}
          </div>
          {/* 2 большие картинки снизу */}
          <div className="grid grid-cols-2 gap-2.5">
            {shiftedImages.slice(9, 11).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Property big ${index + 1}`}
                className="w-full lg:h-120 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Мобильная версия */}
        <div className="block md:hidden">
          {/* 1 большая картинка сверху */}
          <img
            src={shiftedImages[9]}
            alt="Main property"
            className="w-full h-64 object-cover rounded-lg mb-2.5"
          />
          {/* 4 маленьких картинки снизу */}
          <div className="grid grid-cols-4 gap-2.5">
            {shiftedImages.slice(0, 4).map((img, index) => {
              const actualIndex = (startIndex + index) % images.length;
              return (
                <div
                  key={index}
                  onClick={() => handleSmallImageClick(actualIndex)}
                  className="cursor-pointer hover:opacity-80 transition-opacity active:opacity-60"
                  onTouchStart={() => handleSmallImageClick(actualIndex)}
                >
                  <img
                    src={img}
                    alt={`Property ${index + 1}`}
                    className="w-full h-20 object-cover rounded-lg pointer-events-none"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Навигация */}
        <div className="bg-black p-2 inline-flex items-center rounded-full gap-2.5 absolute left-1/2 -translate-x-1/2 bottom-5">
          <button
            onClick={prevSlide}
            className="w-11 h-11 rounded-full bg-gray-10 border border-gray-15 flex justify-center items-center hover:bg-gray-800 transition"
          >
            <ArrowLeftIcon className="w-6 h-6 text-gray-50" />
          </button>
          <div className="flex gap-0.5">
            {[...Array(images.length)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-1 rounded-full transition ${
                  i === startIndex ? "bg-purple-60" : "bg-gray-30"
                }`}
              ></div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-11 h-11 rounded-full bg-gray-10 border border-gray-15 flex justify-center items-center hover:bg-gray-800 transition"
          >
            <ArrowRightIcon className="w-6 h-6 text-absolute-white" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-5 pt-5">
        <div className="w-full lg:w-1/2 border border-gray-15 rounded-xl p-6 md:p-10">
          <h4 className="text-[18px] md:text-[20px]">Description</h4>
          <p className="pt-2.5 pb-6 md:pb-10 text-sm md:text-base">
            Discover your own piece of paradise with the Seaside Serenity Villa.
            With an open floor plan, breathtaking ocean views from every room,
            and direct access to a pristine sandy beach, this property is the
            epitome of coastal living.
          </p>
          <div className="flex flex-wrap md:flex-nowrap gap-4 border-t border-gray-15 pt-4">
            <div className="min-w-30 md:min-w-1/3 border-r border-gray-15 pr-20 lg:pr-4">
              <div className="flex gap-1 pb-2">
                <img src="/image/BedroomIcon.png" alt="" />
                <p className="text-sm">Bedrooms</p>
              </div>
              <span className="text-lg">04</span>
            </div>
            <div className="min-w-30 md:min-w-1/3 md:border-r  border-gray-15 pr-4">
              <div className="flex gap-1 pb-2">
                <img src="/image/BathroomIcon.png" alt="" />
                <p className="text-sm">Bathrooms</p>
              </div>
              <span className="text-lg">03</span>
            </div>
            <div className="min-w-30 md:min-w-1/3">
              <div className="flex gap-1 pb-2">
                <img src="/image/AreaIcon.png" alt="" />
                <p className="text-sm">Area</p>
              </div>
              <span className="text-lg">2,500 Square Feet</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 border border-gray-15 rounded-xl p-6 md:p-10">
          <h4 className="text-[18px] md:text-[20px]">
            Key Features and Amenities
          </h4>
          <div className="flex flex-col gap-3 md:gap-5 pt-6 md:pt-10">
            {[
              "Expansive oceanfront terrace for outdoor entertaining",
              "Gourmet kitchen with top-of-the-line appliances",
              "Private beach access for morning strolls and sunset views",
              "Master suite with a spa-inspired bathroom and ocean-facing",
              "Private garage and ample storage space",
            ].map((text, index) => (
              <div
                key={index}
                className="border-l border-purple-60 bg-linear-to-r from-gray-10 flex gap-2.5 p-3.5 items-center"
              >
                <BoltIcon className="w-5 h-5 shrink-0" />
                <p className="text-sm md:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};;

export default Valuation;

