import { ChevronDownIcon } from "@heroicons/react/24/outline";

const ThirdSection = () => {
  return (
    <div className="px-20 pb-30">
      <div className="flex flex-col items-start justify-center  pb-15px">
        <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
        <h2 className="text-[38px] pb-2.5">Let's Make It Happen</h2>
        <p className="max-w-260 pb-15">
          Ready to take the first step toward your dream property? Fill out the
          form below, and our real estate wizards will work their magic to find
          your perfect match. Dont't wait; let's embark on this excisting
          journey together.
        </p>
      </div>
      <div className=" grid grid-cols-4 gap-7.5 p-12.5 border border-gray-15 rounded-xl">
        <div className="flex flex-col max-w-65">
          <span className="pb-3.5">First Name</span>
          <input
            className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            type="text"
            placeholder="Enter First Name"
          />
        </div>
        <div className="flex flex-col max-w-65">
          <span className="pb-3.5">Last Name</span>
          <input
            className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            type="text"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="flex flex-col max-w-65">
          <span className="pb-3.5">Email</span>
          <input
            className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            type="text"
            placeholder="Enter your Email"
          />
        </div>
        <div className="flex flex-col max-w-65">
          <span className="pb-3.5">Phone</span>
          <input
            className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            type="text"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="flex flex-col max-w-65">
          <span className="pb-3.5">Preffered Location</span>
          <div className="relative">
            <input
              className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
              type="text"
              placeholder="Select Location"
            />
            <ChevronDownIcon className=" absolute right-2 top-1/2 transform -translate-y-1/2 -translate-x-5 w-5 h-5" />
          </div>
        </div>
        <div className="flex flex-col max-w-65">
          <span className="pb-3.5">First Name</span>
          <input
            className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            type="text"
            placeholder="Enter First Name"
          />
        </div>
        <div className="flex flex-col max-w-65">
          <span className="pb-3.5">First Name</span>
          <input
            className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            type="text"
            placeholder="Enter First Name"
          />
        </div>
        <div className="flex flex-col max-w-65">
          <span className="pb-3.5">First Name</span>
          <input
            className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            type="text"
            placeholder="Enter First Name"
          />
        </div>
        <div className=" col-span-2 flex flex-col ">
          <span className="pb-3.5">First Name</span>
          <input
            className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            type="text"
            placeholder="Enter First Name"
          />
        </div>
        <div className="flex flex-col max-w-65">
          <span className="pb-3.5">First Name</span>
          <input
            className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            type="text"
            placeholder="Enter First Name"
          />
        </div>
        <div className="flex flex-col max-w-65">
          <span className="pb-3.5">First Name</span>
          <input
            className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            type="text"
            placeholder="Enter First Name"
          />
        </div>
        <div className="col-span-4 row-span-3 flex flex-col ">
          <span className="pb-3.5">Massage</span>
          <textarea
            className="w-full bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            name="massage"
            id=""
            placeholder="Enter your Massage here"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-between pt-7.5">
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
  );
};

export default ThirdSection;
