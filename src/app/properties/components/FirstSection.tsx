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
    <section id="portfolio" className="scroll-mt-35">
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
        <div className=" px-4 container mx-auto">
          <div className="w-full left-0 absolute -translate-y-1/2 p-4 md:p-20 lg:p-40 ">
            <div className=" md:pl-22.5 flex justify-between  p-4 border-8 border-gray-10 inner-border-1 rounded-t-2xl bg-absolute-black">
              <input
                className="flex-1 min-w-0 w-auto caret-absolute-white p-1  text-xl  placeholder:text-gray-40 hover:border hover:border-gray-10 hover:rounded-md focus:outline-none"
                type="text"
                placeholder="Search For A Property"
              />

              <button className="text-nowrap flex gap-1 items-center btn-purple p-[14px_20px]">
                <MagnifyingGlassIcon className="w-5 h-5" />
                <span className="hidden lg:block">Find Property</span>
              </button>
            </div>
          </div>
          <div className="pt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ">
            <div className="flex items-center justify-between p-3 border-8 border-gray-10 inner-border-1 rounded-lg">
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 text-gray-60" />
                <input
                  className="focus:outline-none max-w-39 pl-1"
                  type="text"
                  placeholder="Location"
                />
              </div>
              <button className="w-7 h-7 bg-gray-10 rounded-full">
                <ChevronDownIcon className="flex items-center justify-center p-1" />
              </button>
            </div>
            <div className=" flex items-center  justify-between p-3 border-8 border-gray-10 inner-border-1 rounded-lg">
              <div className="flex items-center">
                <HomeModernIcon className="w-5 h-5 text-gray-60" />
                <input
                  className="focus:outline-none max-w-39 pl-1"
                  type="text"
                  placeholder="Property Type"
                />
              </div>
              <button className="w-7 h-7 bg-gray-10 rounded-full">
                <ChevronDownIcon className="flex items-center justify-center p-1" />
              </button>
            </div>
            <div className=" flex items-center justify-between p-3 border-8 border-gray-10 inner-border-1 rounded-lg">
              <div className="flex items-center">
                <BanknotesIcon className="w-5 h-5 text-gray-60" />
                <input
                  className="focus:outline-none max-w-39 pl-1"
                  type="text"
                  placeholder="Pricing Range"
                />
              </div>
              <button className="w-7 h-7 bg-gray-10 rounded-full">
                <ChevronDownIcon className="flex items-center justify-center p-1" />
              </button>
            </div>
            <div className=" flex items-center  justify-between p-3 border-8 border-gray-10 inner-border-1 rounded-lg">
              <div className="flex items-center">
                <CubeIcon className="w-5 h-5 text-gray-60" />
                <input
                  className="focus:outline-none max-w-39 pl-1"
                  type="text"
                  placeholder="Property Size"
                />
              </div>
              <button className="w-7 h-7 bg-gray-10 rounded-full">
                <ChevronDownIcon className="flex items-center justify-center p-1" />
              </button>
            </div>
            <div className=" flex items-center justify-between p-3 border-8 border-gray-10 inner-border-1 rounded-lg">
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 text-gray-60" />
                <input
                  className="focus:outline-none max-w-39 pl-1"
                  type="text"
                  placeholder="Build Year"
                />
              </div>
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
