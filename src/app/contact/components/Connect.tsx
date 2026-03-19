

"use client";
import { signupAction, SignupState } from "@/app/actions/signup";
import { SignupFormData, signupSchema } from "@/lib/schemas";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState, useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";

const Connect = () => {
  const [inquiryType, setInquiryType] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isHearAboutOpen, setIsHearAboutOpen] = useState(false);
  const [message, setMessage] = useState("");

  // Refs для полей формы
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const inquiryTypeRef = useRef<HTMLDivElement>(null);
  const hearAboutRef = useRef<HTMLDivElement>(null);
  const termsRef = useRef<HTMLLabelElement>(null);

  // useActionState для связи с Server Action
  const [state, formAction, isPending] = useActionState<SignupState, FormData>(
    signupAction,
    {},
  );

  // React Hook Form с валидацией через Zod
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
    trigger,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // Функция для скролла к полю с ошибкой
  const scrollToField = (fieldName: string) => {
    let element: HTMLElement | null = null;

    switch (fieldName) {
      case "name":
        element = firstNameRef.current;
        break;
      case "email":
        element = emailRef.current;
        break;
      case "phone":
        element = phoneRef.current;
        break;
      case "inquiryType":
        element = inquiryTypeRef.current;
        break;
      case "hearAbout":
        element = hearAboutRef.current;
        break;
      case "terms":
        element = termsRef.current;
        break;
      default:
        return;
    }

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });

      // Добавляем подсветку для поля
      element.classList.add("error-shake");
      setTimeout(() => {
        element.classList.remove("error-shake");
      }, 500);
    }
  };

  // Опции для выпадающих списков
  const inquiryOptions = [
    "Buying Property",
    "Selling Property",
    "Renting/Leasing",
    "Property Valuation",
    "Investment Advice",
    "Other",
  ];

  const hearAboutOptions = [
    "Google Search",
    "Social Media",
    "Friend Referral",
    "Advertisement",
    "News Article",
    "Real Estate Agent",
    "Previous Client",
  ];

  // Синхронизируем ошибки из Server Action с React Hook Form
  useEffect(() => {
    if (state.errors) {
      if (state.errors.name) {
        setError("name", {
          type: "server",
          message: state.errors.name[0],
        });
        scrollToField("name");
        alert(`❌ Error: ${state.errors.name[0]}`);
      }
      if (state.errors.email) {
        setError("email", {
          type: "server",
          message: state.errors.email[0],
        });
        scrollToField("email");
        alert(`❌ Error: ${state.errors.email[0]}`);
      }
      if (state.errors.phone) {
        setError("phone", { type: "server", message: state.errors.phone[0] });
        scrollToField("phone");
        alert(`❌ Error: ${state.errors.phone[0]}`);
      }
    }
  }, [state.errors, setError]);

  useEffect(() => {
    console.log("🎯 useEffect [state.success] сработал", state.success);
    if (state.success === true) {
      alert("✅ SUCCESS: " + (state.message || "Your message has been sent!"));
      reset();
      setInquiryType("");
      setHearAbout("");
      setMessage("");
      console.log("Форма отправлена");
    }

    if (state.success === false) {
      alert(
        "❌ ERROR: " +
          (state.message || "Failed to send form. Please try again."),
      );
      console.log("Форма не отправлена");
    }
  }, [state.success, state.message, reset]);

  // Обработчик отправки с имитацией
  const onSubmit = async (data: SignupFormData) => {
    alert("⏳ Sending your message...");

    // Валидация всех полей перед отправкой
    const isFirstNameValid = await trigger("name");

    if (!isFirstNameValid) {
      scrollToField("name");
      alert("❌ Please enter your first name");
      return;
    }

    if (!data.email || errors.email) {
      scrollToField("email");
      alert("❌ Please enter a valid email");
      return;
    }

    if (!data.phone || errors.phone) {
      scrollToField("phone");
      alert("❌ Please enter your phone number");
      return;
    }

    // Inquiry Type - опционально
    // if (!inquiryType) {
    //   setError("root", {
    //     type: "manual",
    //     message: "Please select an inquiry type",
    //   });
    //   scrollToField("inquiryType");
    //   alert("❌ Please select an inquiry type");
    //   return;
    // }

    // Hear About - опционально
    // if (!hearAbout) {
    //   setError("root", {
    //     type: "manual",
    //     message: "Please tell us how you heard about us",
    //   });
    //   scrollToField("hearAbout");
    //   alert("❌ Please tell us how you heard about us");
    //   return;
    // }

    // Проверка чекбокса
    const termsCheckbox = document.querySelector(
      'input[type="checkbox"]',
    ) as HTMLInputElement;
    if (!termsCheckbox?.checked) {
      setError("root", {
        type: "manual",
        message: "Please agree to Terms of Use and Privacy Policy",
      });
      scrollToField("terms");
      alert("❌ Please agree to Terms & Privacy Policy");
      return;
    }

    alert(
      `📝 Sending: ${data.name}, ${data.email}, ${inquiryType || "Not specified"}, Message: ${message || "No message"}`,
    );

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("inquiryType", inquiryType);
    formData.append("hearAbout", hearAbout);
    formData.append("message", message);

    // Имитация отправки с задержкой
    setTimeout(() => {
      formAction(formData);
    }, 1000);
  };

  // Регистрируем поля с кастомными ref
  const { ref: nameRef, ...nameRegister } = register("name");
  const { ref: emailRefRegister, ...emailRegister } = register("email");
  const { ref: phoneRefRegister, ...phoneRegister } = register("phone");

  // Функция для объединения refs
  const combineRefs = (...refs: any[]) => {
    return (element: any) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(element);
        } else if (ref && typeof ref === "object") {
          ref.current = element;
        }
      });
    };
  };

  return (
    <section id="contact" className="scroll-mt-20 relative">
      <div className="container mx-auto px-4 pt-20 lg:pt-30">
        <div className="flex flex-col items-start justify-center pb-10">
          <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
          <h2 className="text-[28px] lg:text-[38px] pb-2.5">
            Smart Investments, Informed Decisions
          </h2>
          <p>
            Building a real estate portfolio requires a strategic approach.
            Estatein's Investments Advisory Service empowers you to make smart
            investments and informed decisions.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col lg:grid grid-cols-3 p-12.5 border border-gray-15 rounded-xl gap-7.5"
        >
          {/* name */}
          <div className="flex flex-col">
            <span className="pb-3.5 font-semibold">
              First Name <span className="text-red-500">*</span>
            </span>
            <input
              ref={combineRefs(nameRef, firstNameRef)}
              type="text"
              {...nameRegister}
              className={`bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none transition-all ${
                errors.name ? "border-red-500 error-field" : "border-gray-15"
              }`}
              disabled={isPending}
              placeholder="Enter First Name"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <span className="pb-3.5 font-semibold">Last Name</span>
            <input
              ref={lastNameRef}
              type="text"
              className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
              placeholder="Enter Last Name"
            />
          </div>

          {/* email */}
          <div className="flex flex-col">
            <span className="pb-3.5 font-semibold">
              Email <span className="text-red-500">*</span>
            </span>
            <input
              ref={combineRefs(emailRefRegister, emailRef)}
              {...emailRegister}
              className={`bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none transition-all ${
                errors.email ? "border-red-600 error-field" : "border-gray-15"
              }`}
              type="email"
              placeholder="Enter your Email"
              disabled={isPending}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* phone */}
          <div className="flex flex-col">
            <span className="pb-3.5 font-semibold">
              Phone <span className="text-red-500">*</span>
            </span>
            <input
              ref={combineRefs(phoneRefRegister, phoneRef)}
              {...phoneRegister}
              className={`bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none transition-all ${
                errors.phone ? "border-red-600 error-field" : "border-gray-15"
              }`}
              type="text"
              placeholder="Enter Phone Number"
              required
              disabled={isPending}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Inquiry Type - Custom Dropdown (опционально) */}
          <div className="flex flex-col relative" ref={inquiryTypeRef}>
            <span className="pb-3.5 font-semibold">
              Inquiry Type <span className="text-gray-60 text-sm"></span>
            </span>
            <div className="relative">
              <div
                onClick={() => !isPending && setIsInquiryOpen(!isInquiryOpen)}
                className={`w-full bg-gray-10 border rounded-md p-[16px_20px] focus:outline-none cursor-pointer flex justify-between items-center transition-all border-gray-15
                ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <span className={inquiryType ? "text-white" : "text-gray-60"}>
                  {inquiryType || "Select Inquiry Type"}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    isInquiryOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Dropdown menu */}
              {isInquiryOpen && (
                <div className="absolute z-50 w-full mt-1 bg-gray-08 border border-gray-15 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {inquiryOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setInquiryType(option);
                        setIsInquiryOpen(false);
                      }}
                      className="p-3 hover:bg-gray-800 cursor-pointer transition-colors"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* How Did You Hear About Us - Custom Dropdown (опционально) */}
          <div className="flex flex-col relative" ref={hearAboutRef}>
            <span className="pb-3.5 font-semibold">
              How Did You Hear About Us?{" "}
            </span>
            <div className="relative">
              <div
                onClick={() =>
                  !isPending && setIsHearAboutOpen(!isHearAboutOpen)
                }
                className={`w-full bg-gray-10 border rounded-md p-[16px_20px] focus:outline-none cursor-pointer flex justify-between items-center transition-all border-gray-15
                ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <span className={hearAbout ? "text-white" : "text-gray-60"}>
                  {hearAbout || "Select an option "}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    isHearAboutOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Dropdown menu */}
              {isHearAboutOpen && (
                <div className="absolute z-50 w-full mt-1 bg-gray-08 border border-gray-15 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {hearAboutOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setHearAbout(option);
                        setIsHearAboutOpen(false);
                      }}
                      className="p-3 hover:bg-gray-800 cursor-pointer transition-colors"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Message (опционально) */}
          <div className="col-span-3 flex flex-col">
            <span className="pb-3.5 font-semibold">
              Message <span className="text-gray-500 text-sm"></span>
            </span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
              placeholder="Enter your Message"
              rows={4}
            ></textarea>
          </div>

          {/* Submit Section */}
          <div className="col-span-3 flex flex-col gap-4 lg:flex-row lg:justify-between pt-7.5">
            <label className="flex items-center gap-2" ref={termsRef}>
              <input
                type="checkbox"
                className="w-6 h-6 cursor-pointer accent-purple-60 "
              />
              <span className="text-gray-60">
                I agree with{" "}
                <a href="#" className="text-purple-60 hover:underline">
                  Terms of Use
                </a>{" "}
                and
                <a href="#" className="text-purple-60 hover:underline">
                  Privacy Policy
                </a>{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>

            {/* Общая ошибка формы */}
            {(errors.root || state.errors?._form) && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md animate-pulse">
                {errors.root?.message || state.errors?._form?.[0]}
              </div>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="btn-purple rounded-md p-[14px_34px] hover:bg-purple-65! disabled:opacity-50 disabled:cursor-not-allowed relative"
            >
              {isPending ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Your Message"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-5px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(5px);
          }
        }

        .error-shake {
          animation: shake 0.5s ease-in-out;
        }

        .error-field {
          border-color: #ef4444 !important;
          box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Connect;
