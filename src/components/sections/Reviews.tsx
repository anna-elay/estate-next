import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import Testimonial from '../shared/Testimonial';

const Reviews = () => {
  return (
    <section id="reviews" className="scroll-mt-40">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="-m-2.5 max-w-13.5 ">
          <img src="/image/Stars.png" alt="" />
        </div>
        <div>
          <h3 className="text-[38px] py-2.5">What Our Clients Say</h3>
          <div className="flex gap-37">
            <p>
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Eastatein for their real
              eastate needs.
            </p>
            <button className="btn-dark p-[14px_20px] bg-gray-10 text-nowrap ">
              View All Testimonials
            </button>
          </div>
        </div>
        <Testimonial />
        <div className="flex justify-between">
          <div className="flex gap-0.5">
            <div>01</div>
            <span className="text-gray-60">of</span>
            <div className="text-gray-60">10</div>
          </div>
          <div className="flex gap-2.5">
            <button className="bg-black border border-gray-15 rounded-full cursor-pointer">
              <ArrowLeftIcon className="p-2.5 size-11 text-gray-50" />
            </button>
            <button className=" bg-gray-10 border border-gray-15 rounded-full cursor-pointer">
              <ArrowRightIcon className="text-white p-2.5 size-11" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
