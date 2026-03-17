import Link from 'next/link';
import React from 'react'

const ValueContainer = () => {
  return (
    <div className="container mx-auto px-4 lg:pb-20 pb-10">
      <section id="property" className="scroll-mt-25">
        <div className="flex flex-col items-start justify-center  pb-10 lg:pb-15px pt-20 lg:pt-22.5">
          <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
          <h2 className="text-[24px] lg:text-[38px] pb-2.5">Unlock Property Value</h2>
          <p>
            Selling your property should be a rewarding experience, and at
            Estatein, we make sure it is. Our Property Selling Service is
            designed to maximize the value of you property, ensuring you get the
            best deal possible. Explore the categories below see how we can help
            you at every step of you selling journey.
          </p>
        </div>
      </section>

      <div className="flex flex-col lg:grid grid-cols-3 gap-5 pt-15">
        <div className="relative ">
          <div className="p-10 border border-gray-15 rounded-[10px] ">
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

        <section id="strategic" className="scroll-mt-40 ">
          <div className="relative ">
            <div className="p-10 border border-gray-15 rounded-[10px] ">
              <div className="flex items-center gap-4 pb-5">
                <div className="w-15 h-15  cursor-pointer flex items-center justify-center">
                  <div className="absolute ">
                    <img
                      className=" size-6 "
                      src="/image/IconPhoto.png"
                      alt=""
                    />
                  </div>
                  <div className="absolute z-10   hover:animate-spin transition-all duration-300 ">
                    <img
                      className="size-15 "
                      src="/image/TwistedContainer.png"
                      alt=""
                    />
                  </div>
                </div>
                <h3 className="text-[20px] font-semibold">
                  Strategic Marketing
                </h3>
              </div>
              <p>
                Selling a property requires more then just a listing; it demands
                a strategic marketing.{" "}
              </p>
            </div>
          </div>
        </section>

        <section id="negotiation" className="scroll-mt-40 ">
          <div className="relative ">
            <div className="p-10 border border-gray-15 rounded-[10px] ">
              <div className="flex items-center gap-4 pb-5">
                <div className="w-15 h-15  cursor-pointer flex items-center justify-center">
                  <div className="absolute ">
                    <img
                      className=" size-6 "
                      src="/image/IconPhoto.png"
                      alt=""
                    />
                  </div>
                  <div className="absolute z-10   hover:animate-spin transition-all duration-300 ">
                    <img
                      className="size-15 "
                      src="/image/TwistedContainer.png"
                      alt=""
                    />
                  </div>
                </div>
                <h3 className="text-[20px] font-semibold">
                  Negotiation Wizardry
                </h3>
              </div>
              <p>
                Negotiation the best deal is an art, and our negotiation experts
                are masters of it.
              </p>
            </div>
          </div>
        </section>

        <section id="closing" className="scroll-mt-40 ">
          <div className="relative ">
            <div className="p-10 border border-gray-15 rounded-[10px] ">
              <div className="flex items-center gap-4 pb-5">
                <div className="w-15 h-15  cursor-pointer flex items-center justify-center">
                  <div className="absolute ">
                    <img
                      className=" size-6 "
                      src="/image/IconPhoto.png"
                      alt=""
                    />
                  </div>
                  <div className="absolute z-10   hover:animate-spin transition-all duration-300 ">
                    <img
                      className="size-15 "
                      src="/image/TwistedContainer.png"
                      alt=""
                    />
                  </div>
                </div>
                <h3 className="text-[20px] font-semibold">Closing Success</h3>
              </div>
              <p>
                A successful sale is note complete until the closing. We guide
                you through the intricate closing process.
              </p>
            </div>
          </div>
        </section>
        <div className=" col-span-2 bg-[url('/image/AbstractDesign2.svg')] bg-cover p-10 border border-gray-15 rounded-[10px] bg-gray-10">
          <div className="flex flex-col lg:flex-row gap-5 lg:justify-between pb-5">
            <h3 className="text-[24px] font-bold">
              Unlock the Value of You Property Today
            </h3>
            <Link href={'/properties'}>
              <button className="btn-dark p-[14px_20px] rounded-lg text-nowrap">
                Learn More
              </button>
            </Link>
          </div>
          <p>
            Ready to unlock the true value of your property? Explore our
            Property Selling Service categories and let us help you achieve the
            best deal possible for you valuable asset.
          </p>
        </div>
      </div>


      <section id='management' >
        <div className="flex flex-col items-start justify-center  pb-15px pt-22.5">
          <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
          <h2 className="text-[28px] lg:text-[38px] pb-2.5">Effortless Property Management </h2>
          <p>
            Owning a property should be a pleasure, not a hassle. Estatein's
            Property Management Service takes the stress out of property
            ownership, offering comprehensive solutions tailored to your needs.
            Explore the categories below to see how we can make property
            management effortless for you.
          </p>
        </div>
        <div className=" flex flex-col lg:grid grid-cols-3 gap-5 pt-15 ">
          <div className="relative ">
            <div className="p-10 border border-gray-15 rounded-[10px] ">
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
                <h3 className="text-[20px] font-semibold">Tenant Harmony</h3>
              </div>
              <p>
                Our Tenant Management services ensure that your tenants have a
                smoth and reducing vacancies.
              </p>
            </div>
          </div>
          <div className="relative ">
            <div className="p-10 border border-gray-15 rounded-[10px] ">
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
                <h3 className="text-[20px] font-semibold">Maintenance Ease</h3>
              </div>
              <p>
                Say goodbye to property maintenance headaches. We handle all
                aspects of property upkeep.
              </p>
            </div>
          </div>
          <div className="relative ">
            <div className="p-10 border border-gray-15 rounded-[10px] ">
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
                <h3 className="text-[20px] font-semibold">
                  Finansial Peace of Mind
                </h3>
              </div>
              <p>
                Managing property finances can be complex. Our finansial experts
                take care of rent collection
              </p>
            </div>
          </div>
          <div className="relative ">
            <div className="p-10 border border-gray-15 rounded-[10px] ">
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
                <h3 className="text-[20px] font-semibold">Legal Guardian</h3>
              </div>
              <p>
                Stay compliant with property laws and regulations efforlessly.
              </p>
            </div>
          </div>
          <div className=" col-span-2 bg-[url('/image/AbstractDesign2.svg')] bg-cover p-10 border border-gray-15 rounded-[10px] bg-gray-10">
            <div className="flex flex-col lg:flex-row gap-5 lg:justify-between pb-5">
              <h3 className="text-[24px] font-bold">
                Experience Efforless Property Management
              </h3>
              <Link href={'/about'}>
                <button className="btn-dark p-[14px_20px] rounded-lg text-nowrap">
                  Learn More
                </button>
              </Link>
            </div>
            <p>
              Ready to experiens hassle-free property management? Explore our
              Property Managemenet Servise categories and let us handle the
              complexities while you enjoy the benefits of property ownership.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ValueContainer