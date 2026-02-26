"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import  { useEffect, useState } from "react";

interface PromoBannerProps {
  isVisible: boolean
  onClose: () => void
}
const PromoBanner = ({ onClose}: PromoBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const closed = localStorage.getItem("bannerClosed");
    if (!closed) {
      setIsVisible(true);
    }
  }, []);
  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('bannerClosed', 'true')
    onClose()
  }
  if(!isVisible) return null
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-gray-15 ">
        <div className=" bg-[url('/image/AbstractDesign.png')] bg-cover text-white flex items-center  font-medium p-4  text-xs sm:text-sm lg:text-lg   ">
          <div className=" container flex items-center justify-center flex-1 gap-1.5 lg:gap-2.5">
            <p>✨ Discover Your Dream Property with Estatein </p>
            <button className="underline decoration-1 decoration-white hover:decoration-2 cursor-pointer">
              Learn More
            </button>
          </div>
          <button
            className="bg-zinc-700 opacity-75 rounded-full size-6.5 flex justify-center items-center  mr-4  cursor-pointer hover:opacity-100 lg:size-8"
            onClick={handleClose}
          >
            <XMarkIcon className="text-white size-6 hover:transition-all duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
