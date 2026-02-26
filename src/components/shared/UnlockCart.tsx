import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const UnlockCart = () => {
  return (
    <div className="p-2.5  border-4 border-gray-10 inner-border-1">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 ">
        <div className="flex  justify-center  gap-10 p-5 border-gray-15 border-solid border bg-gray-10 rounded-[10px] ">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-15 h-15 mx-auto cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <img className=" size-6 " src="/image/IconHome.png" alt="" />
              </div>
              <div className="absolute inset-0 z-11 hover:animate-spin transition-all duration-300">
                <img
                  className="w-full h-full "
                  src="/image/TwistedContainer.png"
                  alt=""
                />
              </div>
            </div>
            <div>Find Your Dream Home</div>
          </div>
          <ArrowUpRightIcon className="size-6 text-gray-30 " />
        </div>
        <div className="flex justify-center gap-10 p-5 border-gray-15 border-solid border bg-gray-10 rounded-[10px]">
          <div className="  flex flex-col items-center gap-4">
            <div className="relative w-15 h-15 mx-auto cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <img className=" size-6 " src="/image/IconPhoto.png" alt="" />
              </div>
              <div className="absolute inset-0 z-11 hover:animate-spin transition-all duration-300 ">
                <img
                  className="w-full h-full "
                  src="/image/TwistedContainer.png"
                  alt=""
                />
              </div>
            </div>
            <div>Unlock Property Value</div>
          </div>
          <ArrowUpRightIcon className="size-6  text-gray-30" />
        </div>
        <div className="flex justify-center gap-10 p-5 border-gray-15 border-solid border bg-gray-10 rounded-[10px]">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-15 h-15 mx-auto cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <img className=" size-6 " src="/image/IconFlat.png" alt="" />
              </div>
              <div className="absolute inset-0 z-11 hover:animate-spin transition-all duration-300">
                <img
                  className="w-full h-full "
                  src="/image/TwistedContainer.png"
                  alt=""
                />
              </div>
            </div>
            <div>Efforless Property Management</div>
          </div>
          <ArrowUpRightIcon className="size-6  text-gray-30" />
        </div>
        <div className="flex justify-center gap-10 p-5 border-gray-15 border-solid border bg-gray-10 rounded-[10px]">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-15 h-15 mx-auto cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <img className=" size-6 " src="/image/IconSun.png" alt="" />
              </div>
              <div className="absolute inset-0 z-11 hover:animate-spin transition-all duration-300">
                <img
                  className="w-full h-full "
                  src="/image/TwistedContainer.png"
                  alt=""
                />
              </div>
            </div>
            <div>Smart Investments, Informed Decisions</div>
          </div>
          <ArrowUpRightIcon className="size-6  text-gray-30" />
        </div>
      </div>
    </div>
  );
};

export default UnlockCart;
