import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Grid from "../shared/Grid";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section id="hero" className="scroll-mt-38">
        <div className="xl:container xl:mx-auto flex flex-col-reverse sm:flex-row">
          <div className="relative bg-neutral-950 p-4 pt-10  md:p-8 xl:p-16 xs:w-1/2 sm:w-1/2">
            <div>
              <div>
                <h1 className="text-[28px] lg:font-semibold md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl xl:font-bold leading-tight  ">
                  Discover Your Dream Property with Estatein
                </h1>
                <p className="text-sm lg:text-base xl:text-lg  pt-6">
                  Your journey to finding the perfect property begins here.
                  Explore our listings to find the home that matches your
                  dreams.
                </p>
                <div className="absolute top-0 left-0 sm:left-full translate-x-0 sm:translate-[-50%] -translate-y-[67%] sm:translate-y-[50%] w-29.25 lg:w-32.25 2xl:w-43.75">
                  <img src="/image/Round5.svg" alt="" />
                </div>
              </div>
              <div className="xl:py-15 flex flex-col sm:flex-row gap-5 pt-3.5 md:pt-6  ">
                <button className="btn-dark  py-3.5 sm:p-[14px_20px]   grow md:grow-0 ">
                  <Link href={"/about/#work"}>Learn More</Link>
                </button>
                <button className="btn-purple py-3.5 sm:p-[14px_20px] grow md:grow-0">
                  <Link href={"/properties"}>Browse Properties</Link>
                </button>
              </div>
            </div>
            <Grid />
          </div>
          <div className="xs:w-1/2 sm:w-1/2">
            <img
              className="rounded-xl md:rounded-none "
              src="/image/Estate.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="xl:container xl:mx-auto p-2.5  bg-absolute-black border-4 border-gray-10 inner-border-1">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 bg-absolute-black">
            <Link href="/#detail">
              <div className="relative ">
                <div className=" flex  justify-center  gap-10 p-5 border-gray-15 border-solid border bg-gray-10 rounded-[10px] ">
                  <ArrowUpRightIcon className=" absolute top-2 right-2 w-6 h-6 text-gray-30 " />
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative w-15 h-15 mx-auto cursor-pointer">
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <img
                          className=" size-6 "
                          src="/image/IconHome.png"
                          alt=""
                        />
                      </div>
                      <div className="absolute inset-0 z-11 hover:animate-spin transition-all duration-300">
                        <img
                          className="w-full h-full "
                          src="/image/TwistedContainer.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h5 className="text-sm lg:font-semibold ">
                      Find Your Dream Home
                    </h5>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/properties">
              <div className="relative ">
                <div className=" flex justify-center gap-10 p-5 border-gray-15 border-solid border bg-gray-10 rounded-[10px]">
                  <div className="  flex flex-col items-center gap-4">
                    <div className="relative w-15 h-15 mx-auto cursor-pointer">
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <img
                          className=" size-6 "
                          src="/image/IconPhoto.png"
                          alt=""
                        />
                      </div>
                      <div className="absolute inset-0 z-11 hover:animate-spin transition-all duration-300 ">
                        <img
                          className="w-full h-full "
                          src="/image/TwistedContainer.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h5 className="text-sm lg:font-semibold ">
                      Unlock Property Value
                    </h5>
                  </div>
                  <ArrowUpRightIcon className="absolute top-2 right-2 w-6 h-6 text-gray-30 " />
                </div>
              </div>
            </Link>
            <Link href="/services/#management">
              <div className="relative ">
                <div className="flex justify-center gap-10 p-5 border-gray-15 border-solid border bg-gray-10 rounded-[10px]">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative w-15 h-15 mx-auto cursor-pointer">
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <img
                          className=" size-6 "
                          src="/image/IconFlat.png"
                          alt=""
                        />
                      </div>
                      <div className="absolute inset-0 z-11 hover:animate-spin transition-all duration-300">
                        <img
                          className="w-full h-full "
                          src="/image/TwistedContainer.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <h5 className="text-sm lg:font-semibold ">
                      Efforless Property Management
                    </h5>
                  </div>
                  <ArrowUpRightIcon className="absolute top-2 right-2 w-6 h-6 text-gray-30 " />
                </div>
              </div>
            </Link>

            <div className="relative ">
              <div className="flex justify-center gap-10 p-5 border-gray-15 border-solid border bg-gray-10 rounded-[10px]">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-15 h-15 mx-auto cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <img
                        className="size-6 "
                        src="/image/IconSun.png"
                        alt=""
                      />
                    </div>
                    <div className="absolute inset-0 z-11 hover:animate-spin transition-all duration-300">
                      <img
                        className="w-full h-full "
                        src="/image/TwistedContainer.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <h5 className="text-sm  lg:font-semibold">
                    Smart Investments, Informed Decisions
                  </h5>
                </div>
                <ArrowUpRightIcon className="absolute top-2 right-2 w-6 h-6 text-gray-30 " />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
