import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import GalleryCart from '../shared/GalleryCart';

const Details = () => {
  return (
    <section id="detail" className="scroll-mt-10">
      <div className="container mx-auto">
        <div className="py-22.5">
          <div className="-m-2.5 max-w-13.5 ">
            <img src="/image/Stars.png" alt="" />
          </div>
          <div>
            <h3 className="text-[38px] py-2.5">Featured Properties</h3>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 lg:gap-37">
              <p className="order-1 ">
                Explore our handpicked selection of featured properties. Each
                listing offers of glimpse into exeptional homes and investments
                available through Estatein. Click "View Details" for more
                information.{" "}
              </p>
              <button className="order-3 lg:order-2 btn-dark p-[14px_20px] bg-gray-10 text-nowrap ">
                View All Properties
              </button>
            </div>
            <div className="order-2 my-4 lg:order-3 lg:my-6">
              <GalleryCart />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-0.5">
              <div>01</div>
              <span className="text-gray-60">of</span>
              <div className="text-gray-60">60</div>
            </div>
            <div className="flex gap-2.5">
              <button className="bg-gray-15 border border-gray-15 rounded-full cursor-pointer">
                <ArrowLeftIcon className="p-2.5 size-11 text-gray-50" />
              </button>
              <button className=" bg-gray-10 border border-gray-15 rounded-full cursor-pointer">
                <ArrowRightIcon className="text-white p-2.5 size-11" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
