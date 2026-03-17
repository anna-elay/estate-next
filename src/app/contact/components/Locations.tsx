import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Locations = () => {
  return (
    <div className=" py-20 lg:py-30 container mx-auto px-4">
      <div className="flex flex-col items-start justify-center  pb-10 ">
        <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
        <h2 className=" text-[28px] lg:text-[38px] pb-2.5">
          Smart Investments, Informed Decisions
        </h2>
        <p>
          Building a real estate portfolio requires a strategic approach.
          Estatein's Investments Advisory Service empowers you to make smart
          investments and informed decisions.
        </p>
      </div>
      <div className="bg-gray-10 p-2.5 inline-flex justify-between gap-2.5 rounded-xl ">
        <button className="btn-gray active hover:bg-gray-09! min-w-30 lg:min-w-40! min-h-12.5 lg:min-h-16 rounded-[10px]!">
          All
        </button>
        <button className="btn-gray hover:bg-gray-09! min-w-30 lg:min-w-40! min-h-12.5 lg:min-h-16 rounded-[10px]!">
          Regional
        </button>
        <button className="btn-gray hover:bg-gray-09! min-w-30 lg:min-w-40! min-h-12.5 lg:min-h-16 rounded-[10px]!">
          Internetional
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-10">
        <div className="border border-gray-15 rounded-xl p-12.5">
          <span className="text-[14px]">Main Headquarters</span>
          <h4 className="font-semibold text-[30px] py-3">
            123 Estatein Plaza, City Center, Metropolis
          </h4>
          <p>
            Our main headquarters serve as the heart of Estatein. Located in the
            bustling city center, this is where our core team of experts
            operates, driving the exellence and innovation that define us.
          </p>
          <div className="flex flex-wrap  gap-2.5 py-7.5">
            <div className=" text-[14px] btn-gray p-[10px_16px]! inline-flex gap-1">
              <EnvelopeIcon className="w-6 h-6" />
              <span>info@estatein.com</span>
            </div>
            <div className=" text-[14px] btn-gray p-[10px_16px]! inline-flex gap-1">
              <PhoneIcon className="w-6 h-6" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="text-[14px] btn-gray p-[10px_16px]! inline-flex gap-1">
              <MapPinIcon className="w-6 h-6" />
              <span>Metropolis</span>
            </div>
          </div>
          <button className="btn-purple py-4.5 w-full hover:bg-purple-70">
            Get Direction
          </button>
        </div>
        <div className="border border-gray-15 rounded-xl p-12.5">
          <span className="text-[14px]">Main Headquarters</span>
          <h4 className="font-semibold text-[30px] py-3">
            123 Estatein Plaza, City Center, Metropolis
          </h4>
          <p>
            Our main headquarters serve as the heart of Estatein. Located in the
            bustling city center, this is where our core team of experts
            operates, driving the exellence and innovation that define us.
          </p>
          <div className="flex flex-wrap gap-2.5 py-7.5">
            <div className="text-[14px] btn-gray p-[10px_16px]! inline-flex gap-1">
              <EnvelopeIcon className="w-6 h-6" />
              <span>info@estatein.com</span>
            </div>
            <div className=" text-[14px] btn-gray p-[10px_16px]! inline-flex gap-1">
              <PhoneIcon className="w-6 h-6" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="text-[14px] btn-gray p-[10px_16px]! inline-flex gap-1">
              <MapPinIcon className="w-6 h-6" />
              <span>Metropolis</span>
            </div>
          </div>
          <button className="btn-purple py-4.5 w-full hover:bg-purple-70">
            Get Direction
          </button>
        </div>
      </div>
    </div>
  );
};

export default Locations;
