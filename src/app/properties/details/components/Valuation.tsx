import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Valuation = () => {
  return (
    <div>
      <div className="flex justify-between pt-20 pb-10">
        <div className="flex items-center gap-5">
          <h4 className="text-[24px]">Seaside Serenity Villa</h4>
          <div className="flex items-center">
            <MapPinIcon className="w-5 h-5" />
            <span className="text-[14px]">Malibu, California</span>
          </div>
        </div>
        <div>
          <p>Price</p>
          <span>$1,250,000</span>
        </div>
      </div>
      <div className="bg-gray-10 border border-gray-15 rounded-xl p-10 relative pb-25">
        <div>
          <div className="bg-black grid grid-cols-8 gap-2.5 border border-gray-15 p-2.5 rounded-xl">
            <img src="/image/Villa1.png" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="/image/Villa1.png" alt="" />
            <img src="" alt="" />
          </div>
          <div className="grid grid-cols-2  gap-7.5 py-5">
            <img src="/image/VillaBig1.png" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="bg-black p-2 inline-flex items-center rounded-full gap-2.5 absolute left-1/2 -translate-x-1/2">
          <button className="w-11 h-11 rounded-full bg-gray-10 border border-gray-15 flex justify-center items-center">
            <ArrowLeftIcon className="w-6 h-6 text-gray-50" />
          </button>
          <div className="flex gap-0.5">
            <div className="w-3 h-1 rounded-full bg-purple-60"></div>
            <div className="w-3 h-1 rounded-full bg-gray-30"></div>
            <div className="w-3 h-1 rounded-full bg-gray-30"></div>
            <div className="w-3 h-1 rounded-full bg-gray-30"></div>
            <div className="w-3 h-1 rounded-full bg-gray-30"></div>
            <div className="w-3 h-1 rounded-full bg-gray-30"></div>
          </div>
          <button className="w-11 h-11 rounded-full bg-gray-10 border border-gray-15 flex justify-center items-center">
            <ArrowRightIcon className="w-6 h-6 text-absolute-white" />
          </button>
        </div>
      </div>
      <div className="flex items-start gap-5 pt-5">
        <div className=" w-1/2 border border-gray-15 rounded-xl p-10">
          <h4 className="text-[20px]">Description</h4>
          <p className="pt-2.5 pb-10">
            Discover your own piece of paradise with the Seaside Serenity Villa.
            With an open floor plan, breathtaking ocean views from every room,
            and direct access to a pristine sandy beach, this property is the
            epitome of coastal living.
          </p>
          <div className="flex gap-2.5 border-t border-gray-15 pt-4  ">
            <div className="min-w-1/3 border-r border-gray-15">
              <div className="flex gap-1 pb-2">
                <img src="/image/BedroomIcon.png" alt="" />
                <p>Bedrooms</p>
              </div>
              <span>04</span>
            </div>
            <div className="min-w-1/3 border-r border-gray-15">
              <div className="flex gap-1 pb-2">
                <img src="/image/BathroomIcon.png" alt="" />
                <p>Bathrooms</p>
              </div>
              <span>03</span>
            </div>
            <div className="min-w-1/3">
              <div className="flex gap-1 pb-2">
                <img src="/image/AreaIcon.png" alt="" />
                <p>Area</p>
              </div>
              <span>2,500 Square Feet</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 border border-gray-15 rounded-xl p-10">
          <h4 className="text-[20px]">Key Features and Amenities</h4>
          <div className="flex flex-col gap-5 pt-10">
            <div className="border-l border-purple-60 bg-linear-to-r from-gray-10 flex gap-2.5 p-3.5 items-center">
              <BoltIcon className="w-5 h-5" />
              <p>Expansive oceanfront terracefor outdoor entertaining</p>
            </div>
            <div className="border-l border-purple-60 bg-linear-to-r from-gray-10 flex gap-2.5 p-3.5 items-center">
              <BoltIcon className="w-5 h-5" />
              <p>Gourmet kitchen with top-of-the-line appliances</p>
            </div>
            <div className="border-l border-purple-60 bg-linear-to-r from-gray-10 flex gap-2.5 p-3.5 items-center">
              <BoltIcon className="w-5 h-5" />
              <p>Privat beach access for morning strolls and sunset views</p>
            </div>
            <div className="border-l border-purple-60 bg-linear-to-r from-gray-10 flex gap-2.5 p-3.5 items-center">
              <BoltIcon className="w-5 h-5" />
              <p>Master suite with a spa-inspired bathroom and ocean-facing</p>
            </div>
            <div className="border-l border-purple-60 bg-linear-to-r from-gray-10 flex gap-2.5 p-3.5 items-center">
              <BoltIcon className="w-5 h-5" />
              <p>Private garage and ample storage space</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valuation;
