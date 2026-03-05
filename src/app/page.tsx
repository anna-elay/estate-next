import Details from "@/components/sections/Details";
import Hero from "@/components/sections/Hero";
import Reviews from "@/components/sections/Reviews";
import Questions from "../components/sections/Questions";
import { properties } from "@/data/properties"; 
import { testimonials } from "@/data/testimonials";
import { questions } from "@/data/questions";


export default function Home() {
  return (
    <>
      <Hero />
      <Details properties={properties} />
      <Reviews testimonials={testimonials}/>
      <Questions question={questions} />
    </>
  );
}
