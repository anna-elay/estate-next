import React from 'react'

const Grid = () => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 ">
        <div className="flex flex-col  justify-center items-center sm:items-start sub-bg-color p-4">
          <h2 className="md:text-2xl bold">200+</h2>
          <p className="  2xl:text-lg text-gray-60">Happy Customers</p>
        </div>
        <div className="flex sub-bg-color flex-col justify-center items-center sm:items-start p-2.5 xs:p-1">
          <h2 className="lg:text-2xl bold">10k+</h2>
          <p className="  2xl:text-lg text-gray-60  ">Properties For Clients</p>
        </div>
        <div className="flex flex-col sub-bg-color justify-center items-center sm:items-start p-4 col-span-2 sm:col-span-1">
          <h2 className="lg:text-2xl bold">16+</h2>
          <p className=" 2xl:text-lg text-gray-60  ">Years of Experiens</p>
        </div>
      </div>
    </div>
  );
}

export default Grid