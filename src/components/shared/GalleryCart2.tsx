interface GalleryCartProps {
  id: number;
  image: string;
  title: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  type: string;
  price: number;
}

const GalleryCart2 = ({
  id,
  image,
  title,
  description,
  bedrooms,
  bathrooms,
  type,
  price,
}: GalleryCartProps) => {
  return (
    <div className="grid gap-5 pt-15 pb-10" key={id}>
      <div className="bg-gray-08 p-7.5 border border-gray-15 rounded-xl lg:max-w-98 md:max-w-88 max-w-86">
        <img className="pb-6" src={image} alt={title} />
        <div className="inline-block rounded-[28px] bg-gray-10 border border-gray-15 p-[6px_12px]">
          {type}
        </div>
        <h4 className="text-xl pt-5">{title}</h4>
        <p>
          {description}
          <a className="underline text-absolute-white" href="#">
            Read More
          </a>
        </p>
        <div className="flex gap-8 pt-6.5">
          <div className="flex flex-col gap-2.5">
            <p>Price</p>
            <span className="semibold text-xl">${price.toLocaleString()}</span>
          </div>
          <button className="btn-purple p-[14px_31px] lg:p-[14px_37px] text-nowrap">
            View Property Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCart2;

