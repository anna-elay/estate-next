export interface QuestionsProps {
  id: number,
  question: string;
  answer: string;
  buttonText?: string;
}

export const questions: QuestionsProps[] = [
  {
    id: 1,
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    buttonText: "Read More",
  },
  {
    id: 2,
    question: "What documents do I need to sell my property through Estatein?",
    answer:
      "Find out about the necessary documentation for listing your property with us.",
    buttonText: "Read More",
  },
  {
    id: 3,
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
    buttonText: "Read More",
  },
  {
    id: 4,
    question: "How can I contact ?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
    buttonText: "Read More",
  },
];