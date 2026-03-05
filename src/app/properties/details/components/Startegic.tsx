import React from 'react'

function Startegic() {
  return (
    <div className=" container mx-auto flex flex-col lg:flex-row  gap-10 lg:gap-20 py-30">
      <div className="lg:max-w-110 ">
        <h3 className=" text-[28px] lg:text-[38px]">Inquire About Seaside Sereity Villa</h3>
        <p>
          Interesting in this property? Fill out th e form below, and our real
          estate experts will get back to you with more details, including
          scheduling a viewing and answering any questions you may have.
        </p>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 border border-gray-15 rounded-xl p-10 gap-7.5 ">
        <div className="flex flex-col max-w-80">
          <span className="pb-3.5">First Name</span>
          <input
            className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            type="text"
            placeholder="Enter First Name"
          />
        </div>
        <div className="flex flex-col max-w-80">
          <span className="pb-3.5">Last Name</span>
          <input
            className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            type="text"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="flex flex-col max-w-80">
          <span className="pb-3.5">Email</span>
          <input
            className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            type="email"
            placeholder="Enter your Email"
          />
        </div>
        <div className="flex flex-col max-w-80">
          <span className="pb-3.5">Phone</span>
          <input
            className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            type="phone"
            placeholder="Enter Phone Number"
          />
        </div>

        <div className=" md:row-span-2 flex flex-col md:col-span-2 ">
          <span className="pb-3.5">Selected Property</span>
          <input
            className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            type="text"
            placeholder="Seaside Serenity"
          />
        </div>
        <div className="md:col-span-2 md:row-span-3 flex flex-col ">
          <span className="pb-3.5">Massage</span>
          <textarea
            className="w-full bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
            name="massage"
            id=""
            placeholder="Enter your Massage here"
          ></textarea>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between pt-7.5 gap-20">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-6 h-6 cursor-pointer " />
            <p className="text-nowrap">
              I agree with <a href="#">Terms of Use</a> and{" "}
              <a href="#">Privacy Policy</a>
            </p>
          </label>
          <button className=" text-nowrap btn-purple rounded-md p-[14px_34px]">
            Send Your Massage
          </button>
        </div>
      </div>
    </div>
  );
}

export default Startegic