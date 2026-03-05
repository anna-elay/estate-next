export interface PropertyProps {
  id: number
  image: string;
  title: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  type: string;
  price: number;
}

export const properties: PropertyProps[] = [
  {
    id: 1,
    image: "/image/ImageHome1.png",
    title: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
    bedrooms: 4,
    bathrooms: 3,
    type: "Villa",
    price: 550,
  },
  {
    id: 2,
    image: "/image/ImageHome2.png",
    title: "Modern Downtown Loft",
    description:
      "Contemporary 2-bedroom loft in the heart of the city with amazing views...",
    bedrooms: 2,
    bathrooms: 2,
    type: "Loft",
    price: 750,
  },
  {
    id: 3,
    image: "/image/ImageHome3.png",
    title: "Mountain View Retreat",
    description:
      "Cozy 3-bedroom cabin surrounded by nature with breathtaking mountain views...",
    bedrooms: 3,
    bathrooms: 2,
    type: "Cabin",
    price: 450,
  },
  {
    id: 4,
    image: "/image/ImageHome2.png",
    title: "Mountain View Retreat",
    description:
      "Cozy 3-bedroom cabin surrounded by nature with breathtaking mountain views...",
    bedrooms: 3,
    bathrooms: 1,
    type: "Cabin",
    price: 10,
  },
];
