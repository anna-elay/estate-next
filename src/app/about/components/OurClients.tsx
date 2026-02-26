import {
  BoltIcon,
  Squares2X2Icon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const OurClients = () => {
  return (
    <section id='client' className="scroll-mt-25">
      <div className="pt-22.5 pb-30 container mx-auto">
        <div className="flex flex-col items-start justify-center w-1/2 pb-15px">
          <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
          <h2 className="text-[38px] pb-2.5">Our Valued Clients</h2>
          <p>
            At Estatein, we have had the privelege of working with a diverse range
            of clients across various industries. Here are some of the clients
            we've had the pleasure of serving.
          </p>
        </div>
        <div className="flex gap-10 pt-15 pb-10">
          <div className="border-4 border-gray-10 inner-border-1 rounded-xl p-10">
            <div className="flex justify-between">
              <div>
                <p>Since 2018</p>
                <h4>ABC Corporation</h4>
              </div>
              <button className="btn-gray rounded-lg!">Visit Website</button>
            </div>
            <div className="flex py-7.5">
              <div className="w-1/2 border-r border-gray-15 pr-5">
                <div className="flex items-center gap-1">
                  <Squares2X2Icon className="w-5 h-5 text-gray-60" />
                  <p>Domain</p>
                </div>
                <span>Commercial Real Estate</span>
              </div>
              <div className="pl-5">
                <div className="flex items-center gap-1">
                  <BoltIcon className="w-5 h-5 text-gray-60" />
                  <p>Category</p>
                </div>
                <span>Luxury Home Development</span>
              </div>
            </div>
            <div className="p-6 border border-gray-15 rounded-xl">
              <p>What Thay Said </p>
              <span>
                Eastatein's expertise in finding the perfect office space for you
                expanding operation was invaluable. They truly understand our
                business needs.
              </span>
            </div>
          </div>
          <div className="border-4 border-gray-10 inner-border-1 rounded-xl p-10">
            <div className="flex justify-between">
              <div>
                <p>Since 2019</p>
                <h4>GreenTech Enterprises</h4>
              </div>
              <button className="btn-gray rounded-lg!">Visit Website</button>
            </div>
            <div className="flex py-7.5">
              <div className="w-1/2 border-r border-gray-15 pr-5">
                <div className="flex items-center gap-1">
                  <Squares2X2Icon className="w-5 h-5 text-gray-60" />
                  <p>Domain</p>
                </div>
                <span>Commercial Real Estate</span>
              </div>
              <div className="pl-5">
                <div className="flex items-center gap-1">
                  <BoltIcon className="w-5 h-5 text-gray-60" />
                  <p>Category</p>
                </div>
                <span>Retail Space</span>
              </div>
            </div>
            <div className="p-6 border border-gray-15 rounded-xl">
              <p>What Thay Said</p>
              <span>
                Estatein's ability to identify prime retail locations helped us
                expand our brand presence. They are trusted partner in our growth.
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-10 border-t border-gray-15">
          <div className="flex gap-0.5">
            <div>01</div>
            <span className="text-gray-60">of</span>
            <div className="text-gray-60">10</div>
          </div>
          <div className="flex gap-2.5">
            <button className="bg-black border border-gray-15 rounded-full cursor-pointer">
              <ArrowLeftIcon className="p-2.5 size-11 text-gray-50" />
            </button>
            <button className=" bg-gray-10 border border-gray-15 rounded-full cursor-pointer">
              <ArrowRightIcon className="text-white p-2.5 size-11" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
