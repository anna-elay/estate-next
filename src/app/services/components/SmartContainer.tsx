import React from 'react'

const SmartContainer = () => {
  return (
    <div className=" container mx-auto flex gap-12.5 pt-22.5">
      <div className="w-1/2 ">
        <div className="flex flex-col items-start justify-center  pb-10 ">
          <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
          <h2 className="text-[38px] pb-2.5">
            Smart Investments, Informed Decisions
          </h2>
          <p>
            Building a real estate portfolio requires a strategic approach.
            Estatein's Investments Advisory Service empowers you to make smart
            investments and informed decisions.
          </p>
        </div>
        <div className="p-10 border border-gray-15 rounded-[10px]  bg-[url('/image/AbstractDesign2.svg')] ">
          <div className="flex flex-col gap-5 ">
            <h4 className="text-[22px] font-semibold">
              Unlock You Investment Potential
            </h4>
            <span>
              Explore our Property Managment Service categories and let us
              handle the complexities while you enjoy the benefits of property
              ownership
            </span>
            <button className="btn-dark py-3.5">Learn More</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 w-2/2">
        <div className="p-10  border-10 border-gray-10 inner-border-1 rounded-[10px] ">
          <div className="flex items-center gap-4 pb-5">
            <div className="w-15 h-15  cursor-pointer flex items-center justify-center">
              <div className="absolute ">
                <img className=" size-6 " src="/image/IconPhoto.png" alt="" />
              </div>
              <div className="absolute z-10   hover:animate-spin transition-all duration-300 ">
                <img
                  className="size-15 "
                  src="/image/TwistedContainer.png"
                  alt=""
                />
              </div>
            </div>
            <h3 className="text-[20px] font-semibold">Market Insight</h3>
          </div>
          <p>
            Stay ahead of market trends with our expert Market Analisis. We
            provide in-depth insights into real estate market conditions.
          </p>
        </div>
        <div className="p-10  border-10 border-gray-10 inner-border-1 rounded-[10px] ">
          <div className="flex items-center gap-4 pb-5">
            <div className="w-15 h-15  cursor-pointer flex items-center justify-center">
              <div className="absolute ">
                <img className=" size-6 " src="/image/IconPhoto.png" alt="" />
              </div>
              <div className="absolute z-10   hover:animate-spin transition-all duration-300 ">
                <img
                  className="size-15 "
                  src="/image/TwistedContainer.png"
                  alt=""
                />
              </div>
            </div>
            <h3 className="text-[20px] font-semibold">Valuation Mastery</h3>
          </div>
          <p>
            Discover the true worth of you property with our expert valuation
            services.
          </p>
        </div>
        <div className="p-10  border-10 border-gray-10 inner-border-1 rounded-[10px] ">
          <div className="flex items-center gap-4 pb-5">
            <div className="w-15 h-15  cursor-pointer flex items-center justify-center">
              <div className="absolute ">
                <img className=" size-6 " src="/image/IconPhoto.png" alt="" />
              </div>
              <div className="absolute z-10   hover:animate-spin transition-all duration-300 ">
                <img
                  className="size-15 "
                  src="/image/TwistedContainer.png"
                  alt=""
                />
              </div>
            </div>
            <h3 className="text-[20px] font-semibold">Valuation Mastery</h3>
          </div>
          <p>
            Discover the true worth of you property with our expert valuation
            services.
          </p>
        </div>
        <div className="p-10 border-10  border-gray-10 inner-border-1 rounded-[10px] ">
          <div className="flex items-center gap-4 pb-5">
            <div className="w-15 h-15  cursor-pointer flex items-center justify-center">
              <div className="absolute ">
                <img className=" size-6 " src="/image/IconPhoto.png" alt="" />
              </div>
              <div className="absolute z-10   hover:animate-spin transition-all duration-300 ">
                <img
                  className="size-15 "
                  src="/image/TwistedContainer.png"
                  alt=""
                />
              </div>
            </div>
            <h3 className="text-[20px] font-semibold">Valuation Mastery</h3>
          </div>
          <p>
            Discover the true worth of you property with our expert valuation
            services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SmartContainer