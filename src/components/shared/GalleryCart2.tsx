import React from 'react'

const GalleryCart2 = () => {
  return (
    <div className="grid gap-5 pt-15 pb-10">
      <div className="bg-black p-7.5 border border-gray-15 rounded-xl max-w-104">
        <img className="pb-6" src="/image/ImageHome1.png" alt="" />
        <div className="inline-block rounded-[28px] bg-gray-10 border border-gray-15 p-[6px_12px]">
          Coastal Escapes - Where Waves Becon
        </div>
        <h4 className=" text-xl pt-5">Seaside Serenety Villa</h4>
        <p>
          Wake up to the soothing melody of waves. This beachfront villa
          offers...
          <a className="underline text-absolute-white" href="#">
            Read More
          </a>
        </p>
        <div className="flex gap-10 pt-6.5">
          <div className=" flex flex-col gap-2.5">
            <p>Price</p>
            <span className="semibold text-xl">$1,250,000</span>
          </div>
          <button className="btn-purple p-[14px_40px] text-nowrap">
            View Property Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default GalleryCart2