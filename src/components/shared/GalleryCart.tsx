import React from 'react'

const GalleryCart = () => {
  return (
    <div className="grid gap-5 pt-15 pb-10">
      <div className="bg-gray-08 p-7.5 border border-gray-15 rounded-xl max-w-104">
        <img src="/image/ImageHome1.png" alt="" />
        <h4 className=" text-xl pt-5">Seaside Serenety Villa</h4>
        <p>
          A stuning 4-bedroom, 3-bathroom villa in a peacefull suburban
          neighborhood...{" "}
          <a className="underline text-absolute-white" href="#">
            Read More
          </a>{" "}
        </p>
        <div className="flex text-sm gap-1.5 py-6">
          <button className="btn-gray flex gap-1">
            <img src="/image/BedroomIcon.png" alt="" />
            4-Bedroom
          </button>
          <button className="btn-gray flex gap-1">
            <img src="/image/BathroomIcon.png" alt="" />
            3-Bathroom
          </button>
          <button className="btn-gray flex gap-1">
            <img src="/image/VillaIcon.png" alt="" />
            Villa
          </button>
        </div>
        <div className="flex gap-10">
          <div className=" flex flex-col gap-2.5">
            <p>Price</p>
            <span className="semibold text-xl">$550</span>
          </div>
          <button className="btn-purple p-[14px_50px]">
            View Property Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default GalleryCart