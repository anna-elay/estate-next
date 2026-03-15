import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const UnlockCart = () => {
  const cards = [
    {
      icon: "/image/IconHome.png",
      alt: "Home",
      text: "Find Your Dream Home",
      link: "/#detail",
    },
    {
      icon: "/image/IconPhoto.png",
      alt: "Photo",
      text: "Unlock Property Value",
      link: "/properties",
    },
    {
      icon: "/image/IconFlat.png",
      alt: "Flat",
      text: "Effortless Property Management",
      link: "/services/#management",
    },
    {
      icon: "/image/IconSun.png",
      alt: "Sun",
      text: "Smart Investments, Informed Decisions",
      link: "",
    },
  ];

  return (
    <div className="p-2.5 border-4 border-gray-10 inner-border-1">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        {cards.map((card, index) => (
          <Link key={index} href={card.link}>
            <div className=" relative flex justify-center gap-10 p-5 border-gray-15 border-solid border bg-gray-10 rounded-[10px]">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-15 h-15 mx-auto cursor-pointer group">
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <img className="size-6" src={card.icon} alt={card.alt} />
                  </div>
                  <div className="absolute inset-0 z-11 group-hover:animate-spin transition-all duration-300">
                    <img
                      className="w-full h-full"
                      src="/image/TwistedContainer.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-sm lg:font-semibold text-center">
                  {card.text}
                </div>
              </div>
              <ArrowUpRightIcon className=" absolute top-2 right-2 w-6 h-6 text-gray-30  shrink-0" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UnlockCart;

