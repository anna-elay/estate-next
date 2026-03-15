"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import QuestionCart from "../shared/QuestionCart";
import { useState, useEffect } from "react";
import { QuestionsProps } from "@/data/questions";

interface ReviewProps {
  question: QuestionsProps[];
}

const Questions = ({ question }: ReviewProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3); // По умолчанию 3 для десктопа

  // Определяем количество карточек в зависимости от ширины экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerPage(3); // Десктоп - 3 карточки
      } else if (window.innerWidth >= 768) {
        setCardsPerPage(2); // Планшет - 2 карточки
      } else {
        setCardsPerPage(1); // Мобильные - 1 карточка
      }
    };

    handleResize(); // Устанавливаем при монтировании
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(question.length / cardsPerPage);

  // Сбрасываем на первую страницу при изменении количества карточек на странице
  useEffect(() => {
    setCurrentPage(0);
  }, [cardsPerPage]);

  if (!question.length) {
    return null;
  }

  const nextSlide = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevSlide = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getCurrentQuestions = () => {
    const startIndex = currentPage * cardsPerPage;
    return question.slice(startIndex, startIndex + cardsPerPage);
  };

  return (
    <section id="question" className="scroll-mt-25">
      <div className="py-22.5">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="-m-2.5 max-w-13.5">
            <img src="/image/Stars.png" alt="" />
          </div>
          <div className="pb-15 pt-5">
            <h3 className="text-[28px] lg:text-[38px] py-2.5">
              What Our Clients Say
            </h3>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 lg:gap-37">
              <p>
                Read the success stories and heartfelt testimonials from our
                valued clients. Discover why they chose Eastatein for their real
                eastate needs.
              </p>
              <button className="btn-dark p-[14px_20px] bg-gray-10 text-nowrap">
                View All Testimonials
              </button>
            </div>
          </div>

          {/* Сетка с вопросами */}
          <div className="pb-12.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {getCurrentQuestions().map((q, index) => (
              <QuestionCart key={q.id || index} questions={q} />
            ))}
          </div>

          {/* Пагинация (показываем только если есть больше одной страницы) */}
          {totalPages > 1 && (
            <div className="flex justify-between pt-10 border-t border-gray-15">
              <div className="flex gap-0.5">
                <div>{currentPage + 1}</div>
                <span className="text-gray-60">of</span>
                <div className="text-gray-60">{totalPages}</div>
              </div>
              <div className="flex gap-2.5">
                <button
                  onClick={prevSlide}
                  disabled={currentPage === 0}
                  className={`bg-gray-08 border border-gray-15 rounded-full cursor-pointer ${
                    currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <ArrowLeftIcon className="p-2.5 size-11 text-absolute-white" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentPage === totalPages - 1}
                  className={`bg-gray-08 border border-gray-15 rounded-full cursor-pointer ${
                    currentPage === totalPages - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <ArrowRightIcon className="text-white p-2.5 size-11" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Questions;

// "use client";
// import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
// import QuestionCart from "../shared/QuestionCart";
// import { useState } from "react";
// import { QuestionsProps } from "@/data/questions";

// interface ReviewProps {
//   question: QuestionsProps[];
// }

// const Questions = ({ question }: ReviewProps) => {
//   const [currentPage, setCurrentPage] = useState(0);
//   if (!question.length) {
//     return null;
//   }
//   const nextSlide = () => {
//     if (currentPage < question.length - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };
//   return (
//     <section id="question" className="scroll-mt-25">
//       <div className="py-22.5 ">
//         <div className="container mx-auto px-4 lg:px-20 ">
//           <div className="-m-2.5 max-w-13.5 ">
//             <img src="/image/Stars.png" alt="" />
//           </div>
//           <div className="pb-15 pt-5">
//             <h3 className="text-[28px] lg:text-[38px]py-2.5">
//               What Our Clients Say
//             </h3>
//             <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 lg:gap-37">
//               <p>
//                 Read the success stories and heartfelt testimonials from our
//                 valued clients. Discover why they chose Eastatein for their real
//                 eastate needs.
//               </p>
//               <button className="btn-dark p-[14px_20px] bg-gray-10 text-nowrap">
//                 View All Testimonials
//               </button>
//             </div>
//           </div>
//           <div className="pb-12.5">
//             <QuestionCart questions={question[currentPage]} />
//           </div>

//           <div className="flex justify-between pt-10 border-t border-gray-15">
//             <div className="flex gap-0.5">
//               <div>{currentPage + 1}</div>
//               <span className="text-gray-60">of</span>
//               <div className="text-gray-60">{question.length}</div>
//             </div>
//             <div className="flex gap-2.5">
//               <button
//                 onClick={prevSlide}
//                 disabled={currentPage === 0}
//                 className={`bg-gray-08 border border-gray-15 rounded-full cursor-pointer ${
//                   currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//               >
//                 <ArrowLeftIcon className="p-2.5 size-11 text-absolute-white" />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 disabled={currentPage === question.length - 1}
//                 className={`bg-gray-08 border border-gray-15 rounded-full cursor-pointer ${
//                   currentPage === question.length - 1
//                     ? "opacity-50 cursor-not-allowed"
//                     : ""
//                 }`}
//               >
//                 <ArrowRightIcon className="text-white p-2.5 size-11 " />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Questions;
