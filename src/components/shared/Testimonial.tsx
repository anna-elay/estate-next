import { StarIcon } from "@heroicons/react/16/solid";

const Testimonial = () => {
  return (
    <div className="grid gap-5 pt-15 pb-10">
      <div className="bg-gray-08 p-10 border border-gray-15 rounded-xl max-w-107">
        <div className="flex gap-2">
          <div className="w-9.5 h-9 bg-gray-10 border border-gray-15 rounded-full flex justify-center items-center">
            <StarIcon className="size-5 text-yellow-star" />
          </div>
          <div className="w-9.5 h-9 bg-gray-10 border border-gray-15 rounded-full flex justify-center items-center">
            <StarIcon className="size-5 text-yellow-star" />
          </div>
          <div className="w-9.5 h-9 bg-gray-10 border border-gray-15 rounded-full flex justify-center items-center">
            <StarIcon className="size-5 text-yellow-star" />
          </div>
          <div className="w-9.5 h-9 bg-gray-10 border border-gray-15 rounded-full flex justify-center items-center">
            <StarIcon className="size-5 text-yellow-star" />
          </div>
          <div className="w-9.5 h-9 bg-gray-10 border border-gray-15 rounded-full flex justify-center items-center">
            <StarIcon className="size-5 text-yellow-star" />
          </div>
        </div>
        <h4 className="text-xl pt-7.5 pb-2.5">Exeptional Service</h4>
        <p className="text-absolute-white! pb-7.5 ">
          Eastatein provided us with top-notch service. They helpedus sell our
          property quickly and at great price. We couldn't be happier with the
          results.{" "}
        </p>
        <div className="flex gap-2.5">
          <img src="/image/Emelie.svg" alt="" />
          <div>
            <div>Emilia Tomson</div>
            <p>USA, Florida</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
