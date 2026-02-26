import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  BanknotesIcon,
  CalendarIcon,
  CubeIcon,
  HomeModernIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

const FirstSection = () => {
  return (
    <section id='portfolio' className="scroll-mt-35">
      <>
        <div className="relative bg-linear-to-r from-gray-15 border-b border-gray-15 ">
          <div className="pt-25 pb-32.5 px-20">
            <h2 className="text-[38px] pb-2.5">Find Your Dream Property</h2>
            <p>
              Welcome to Estatein, where your dream property awaits in every
              corner of you beautiful world. explore our curated selection of
              properties, each offering a unique story and a chance to redefine
              your life. With categories to suit every dreamer, your journey.
            </p>
          </div>
        </div>
        <div className="px-20">
          <div className="px-22.5 absolute -translate-y-1/2 ">
            <div className="flex justify-between  gap-12.5 p-4 border-8 border-gray-10 inner-border-1 rounded-t-2xl bg-absolute-black">
              <input
                className="caret-absolute-white p-1 w-200 text-xl  placeholder:text-gray-40 hover:border hover:border-gray-10 hover:rounded-md focus:outline-none"
                type="text"
                placeholder="Search For A Property"
              />
              <button className="text-nowrap flex gap-1 items-center btn-purple p-[14px_20px]">
                <MagnifyingGlassIcon className="w-5 h-5" />
                Find Property
              </button>
            </div>
          </div>
          <div className="pt-11 flex">
            <div className="flex items-center p-3 border-8 border-gray-10 inner-border-1 rounded-lg">
              <MapPinIcon className="w-5 h-5 text-gray-60" />
              <input
                className="focus:outline-none max-w-39 pl-1"
                type="text"
                placeholder="Location"
              />
              <button className="w-7 h-7 bg-gray-10 rounded-full">
                <ChevronDownIcon className="flex items-center justify-center p-1" />
              </button>
            </div>
            <div className=" flex items-center p-3 border-8 border-gray-10 inner-border-1 rounded-lg">
              <HomeModernIcon className="w-5 h-5 text-gray-60" />
              <input
                className="focus:outline-none max-w-39 pl-1"
                type="text"
                placeholder="Property Type"
              />
              <button className="w-7 h-7 bg-gray-10 rounded-full">
                <ChevronDownIcon className="flex items-center justify-center p-1" />
              </button>
            </div>
            <div className=" flex items-center p-3 border-8 border-gray-10 inner-border-1 rounded-lg">
              <BanknotesIcon className="w-5 h-5 text-gray-60" />
              <input
                className="focus:outline-none max-w-39 pl-1"
                type="text"
                placeholder="Pricing Range"
              />
              <button className="w-7 h-7 bg-gray-10 rounded-full">
                <ChevronDownIcon className="flex items-center justify-center p-1" />
              </button>
            </div>
            <div className=" flex items-center p-3 border-8 border-gray-10 inner-border-1 rounded-lg">
              <CubeIcon className="w-5 h-5 text-gray-60" />
              <input
                className="focus:outline-none max-w-39 pl-1"
                type="text"
                placeholder="Property Size"
              />
              <button className="w-7 h-7 bg-gray-10 rounded-full">
                <ChevronDownIcon className="flex items-center justify-center p-1" />
              </button>
            </div>
            <div className=" flex items-center p-3 border-8 border-gray-10 inner-border-1 rounded-lg">
              <CalendarIcon className="w-5 h-5 text-gray-60" />
              <input
                className="focus:outline-none max-w-39 pl-1"
                type="text"
                placeholder="Build Year"
              />
              <button className="w-7 h-7 bg-gray-10 rounded-full">
                <ChevronDownIcon className="flex items-center justify-center p-1" />
              </button>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default FirstSection;
