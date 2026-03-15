export interface TestimonialData {
  id: string;
  rating: number;
  title: string;
  text: string;
  author: string;
  location: string;
  avatar: string;
}
export const testimonials: TestimonialData[] = [
  {
    id: "1",
    rating: 5,
    title: "Exceptional Service!",
    text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    author: "Wade Warren",
    location: "USA, California",
    avatar: "/image/Emelie.svg",
  },
  {
    id: "2",
    rating: 4,
    title: "Efficient and Reliable",
    text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    author: "Emelie Thomson",
    location: "USA, Florida",
    avatar: "/image/Wide.svg",
  },
  {
    id: "3",
    rating: 5,
    title: "Trusted Advisors",
    text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    author: "John Mans",
    location: "USA, Nevada",
    avatar: "/image/John.svg",
  },
  {
    id: "4",
    rating: 5,
    title: "Trusted Advisors",
    text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    author: " Mans",
    location: "USA",
    avatar: "/image/David.svg",
  },
];

