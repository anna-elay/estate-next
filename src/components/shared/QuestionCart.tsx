import { QuestionsProps } from "@/data/questions";


interface QuestionProps{
  questions: QuestionsProps;
}

const QuestionCart = ({questions}:QuestionProps) => {
  const {question, answer, buttonText} = questions;
  return (
    <div className="w-full  lg:max-w-105 border border-gray-15 rounded-xl min-h-55">
      <div className="p-6 sm:p-8 lg:p-10">
        <h4 className="text-base sm:text-lg lg:text-xl font-semibold">
          {question}
        </h4>

        <p className="text-sm sm:text-base lg:text-lg py-4 sm:py-5 lg:py-6 text-gray-400">
          {answer}
        </p>

        <button className="w-full sm:w-auto btn-dark px-4 lg:px-5 py-3 sm:py-3.5 lg:py-3.5 bg-gray-10! text-sm sm:text-base rounded-lg hover:bg-gray-800 transition-colors ">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
export default QuestionCart