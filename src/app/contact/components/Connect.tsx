import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Connect = () => {
  return (
    <section id='contact' className="scroll-mt-20">
      <div className="container mx-auto pt-30">
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
        <div className=" grid grid-cols-3  p-12.5 border border-gray-15 rounded-xl gap-7.5">
          <div className="flex flex-col ">
            <span className="pb-3.5">First Name</span>
            <input
              className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
              type="text"
              placeholder="Enter First Name"
            />
          </div>
          <div className="flex flex-col ">
            <span className="pb-3.5">Last Name</span>
            <input
              className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
              type="text"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="flex flex-col ">
            <span className="pb-3.5">Email</span>
            <input
              className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
              type="text"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col ">
            <span className="pb-3.5">Phone</span>
            <input
              className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
              type="text"
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="flex flex-col ">
            <span className="pb-3.5">Preffered Location</span>
            <div className="relative">
              <input
                className=" w-full bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
                type="text"
                placeholder="Select Location"
              />
              <ChevronDownIcon className=" absolute right-2 top-1/2 transform -translate-y-1/2 -translate-x-5 w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="pb-3.5">First Name</span>
            <div className="relative">
              <input
                className=" w-full bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
                type="text"
                placeholder="Select Location"
              />
              <ChevronDownIcon className=" absolute right-2 top-1/2 transform -translate-y-1/2 -translate-x-5 w-5 h-5" />
            </div>
          </div>
          <div className="col-span-3  flex flex-col ">
            <span className="pb-3.5">Massage</span>
            <textarea
              className=" bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
              name="massage"
              id=""
              placeholder="Enter your Massage here"
            ></textarea>
          </div>
          <div className="col-span-3 flex justify-between pt-7.5">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-6 h-6 cursor-pointer " />
              <span>
                I agree with <a href="#">Terms of Use</a> and
                <a href="#">Privacy Policy</a>
              </span>
            </label>
            <button className="btn-purple rounded-md p-[14px_34px]">
              Send Your Massage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
