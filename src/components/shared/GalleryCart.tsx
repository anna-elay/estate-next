import Link from 'next/link';
import { PropertyProps } from "@/data/properties"; 

interface GalleryCartProps {
  properties: PropertyProps[]; 
}
const PropertyCard = ({
  image,
  title,
  description,
  bedrooms,
  bathrooms,
  type,
  price,
}: PropertyProps) => {
  
  return (
    <div className="bg-gray-08 p-7.5 border border-gray-15 rounded-xl max-w-104 min-w-90">
      <img src={image} alt={title} />
      <h4 className="text-xl pt-5">{title}</h4>
      <p>
        {description}
        <a className="underline text-absolute-white" href="#">
          Read More
        </a>
      </p>
      <div className="flex flex-wrap text-sm gap-1.5 py-6">
        <button className="btn-gray flex gap-1">
          <img src="/image/BedroomIcon.png" alt="" />
          {bedrooms}-Bedroom
        </button>
        <button className="btn-gray flex gap-1">
          <img src="/image/BathroomIcon.png" alt="" />
          {bathrooms}-Bathroom
        </button>
        <button className="btn-gray flex gap-1">
          <img src="/image/VillaIcon.png" alt="" />
          {type}
        </button>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-2.5">
          <p>Price</p>
          <span className="semibold text-xl">${price}</span>
        </div>
        <button className="btn-purple p-[14px_50px]">
          <Link href="/properties/details">View Property Details</Link>
        </button>
      </div>
    </div>
  );
};
export type { PropertyProps };

const GalleryCart = ({properties}: GalleryCartProps ) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-15 pb-10">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
     
    </div>
  );
};

export default GalleryCart;


