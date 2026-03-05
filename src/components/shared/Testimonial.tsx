
import { TestimonialData } from "@/data/testimonials";
import { StarIcon } from "@heroicons/react/16/solid";
interface TestimonialProps {
  testimonial: TestimonialData;
}

const Testimonial = ({testimonial}: TestimonialProps) => {
    const { rating, title, text, author, location, avatar } = testimonial;
  return (
    <div className="grid gap-5 pt-15 pb-10">
      <div className="bg-gray-08 p-10 border border-gray-15 rounded-xl max-w-107">
        <div className="flex gap-2">
          {[...Array(rating)].map((_, i) => (
            <div
              key={i}
              className="w-9.5 h-9 bg-gray-10 border border-gray-15 rounded-full flex justify-center items-center"
            >
              <StarIcon className="size-5 text-yellow-star" />
            </div>
          ))}
        </div>
        <h4 className="text-xl pt-7.5 pb-2.5">{title}</h4>
        <p className="text-absolute-white! pb-7.5 ">{text}</p>
        <div className="flex gap-2.5">
          <img src={avatar} alt={author} />
          <div>
            <div>{author}</div>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
