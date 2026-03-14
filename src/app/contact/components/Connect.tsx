"use client";
import { signupAction, SignupState } from "@/app/actions/signup";
import { SignupFormData, signupSchema } from "@/lib/schemas";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Connect = () => {
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
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  // Синхронизируем ошибки из Server Action с React Hook Form
  useEffect(() => {
    if (state.errors) {
      if (state.errors.name) {
        setError("name", {
          type: "server",
          message: state.errors.name[0],
        });
      }
      if (state.errors.email) {
        setError("email", {
          type: "server",
          message: state.errors.email[0],
        });
      }
      if (state.errors.phone) {
        setError("phone", { type: "server", message: state.errors.phone[0] });
      }
    }
  }, [state.errors, setError]);

  useEffect(() => {
    console.log("🎯 useEffect [state.success] сработал", state.success);
     if (state.success === true) {
        setTimeout(() => {
          alert(state.message || "Форма успешно отправлена!");
        }, 0);
       reset();
        console.log("Форма отправлена");
     }

     if (state.success === false) {
       // Можно добавить дополнительную логику для ошибки
       console.log("Форма не отправлена");
     }
    // if (state.success) {
    //         console.log("✅ Успех! Показываем alert");
    //   alert(state.message || "Форма успешно отправлена!");
    //   reset();
    // }
  }, [state.success, state.message]);

  // Обработчик отправки
  const onSubmit = async (data: SignupFormData) => {
    
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);


    formAction(formData);
  
  };

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="container mx-auto px-4 pt-20 lg:pt-30">
        <div className="flex flex-col items-start justify-center  pb-10 ">
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
          className="flex flex-col lg:grid grid-cols-3  p-12.5 border border-gray-15 rounded-xl gap-7.5"
        >
          {/* name */}
          <div className="flex flex-col ">
            <span className="pb-3.5 font-semibold">First Name</span>
            <input
              type="text"
              {...register("name")}
              className={`bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none ${
                errors.name ? "border-red-500" : "border-gray-15"
              }`}
              disabled={isPending}
              placeholder="Enter First Name"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col ">
            <span className="pb-3.5 font-semibold ">Last Name</span>
            <input
              type="text"
              className="bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
              placeholder="Enter Last Name"
            />
          </div>
          {/* email */}
          <div className="flex flex-col ">
            <span className="pb-3.5 font-semibold">Email</span>
            <input
              {...register("email")}
              className={`bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none ${errors.email ? "border-red-600" : "border-gray-15"}`}
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
          <div className="flex flex-col ">
            <span className="pb-3.5 font-semibold">Phone</span>
            <input
              {...register("phone")}
              className={`bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none ${errors.phone ? "border-red-600" : "border-gray-15"}`}
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
          <div className="flex flex-col ">
            <span className="pb-3.5 font-semibold">Inquiry Type</span>
            <div className="relative">
              <input
                className=" w-full bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
                type="text"
                placeholder="Select Inquiry Type"
              />
              <ChevronDownIcon className=" absolute right-2 top-1/2 transform -translate-y-1/2 -translate-x-5 w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="pb-3.5 font-semibold">
              How Did You Hear About Us?
            </span>
            <div className="relative">
              <input
                className=" w-full bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
                type="text"
                placeholder="Select "
              />
              <ChevronDownIcon className=" absolute right-2 top-1/2 transform -translate-y-1/2 -translate-x-5 w-5 h-5" />
            </div>
          </div>
          <div className="col-span-3  flex flex-col ">
            <span className="pb-3.5 font-semibold">Massage</span>
            <textarea
              className=" bg-gray-10 border border-gray-15 rounded-md p-[16px_20px] focus:outline-none"
              name="massage"
              id=""
              placeholder="Enter your Massage here"
            ></textarea>
          </div>
          <div className="col-span-3 flex flex-col gap-4 lg:flex-row lg:justify-between pt-7.5">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-6 h-6 cursor-pointer " />
              <span className="text-gray-60">
                I agree with <a href="#">Terms of Use</a> and
                <a href="#">Privacy Policy</a>
              </span>
            </label>
            {/* Общая ошибка формы */}
            {state.errors?._form && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {state.errors._form[0]}
              </div>
            )}

            {/* Сообщение об успехе */}
            {state.success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                {state.message}
              </div>
            )}
            <button
              type="submit"
              disabled={isPending}
              className="btn-purple rounded-md p-[14px_34px] hover:bg-purple-65!"
            >
              Send Your Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Connect;
