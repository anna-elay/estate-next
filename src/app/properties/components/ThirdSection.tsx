"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

// Схема валидации
const formSchema = z.object({
  firstName: z.string().min(1, "Name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Wrong email"),
  phone: z.string().optional(),
  preferredLocation: z.string().min(1, "Select the location"),
  propertyType: z.string().min(1, "Select the type of real estate"),
  bathrooms: z.string().min(1, "Select the quantity"),
  bedrooms: z.string().min(1, "Select the quantity"),
  budget: z.string().min(1, "Select the butget"),
  contactMethod: z.string().min(1, "Select the communication method"),
  contactEmail: z
    .string()
    .email("Wrong email")
    .optional()
    .or(z.literal("")),
  message: z.string().min(10, "Minimum 10 symbols"),
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, "Agreement with the terms is required"),
});

type FormData = z.infer<typeof formSchema>;

// Опции для выпадающих списков
const LOCATIONS = ["New York", "Los Angeles", "Miami", "Chicago", "Austin"];
const PROPERTY_TYPES = ["Apartment", "House", "Condo", "Townhouse", "Villa"];
const BATHROOMS = ["1", "2", "3", "4", "5+"];
const BEDROOMS = ["1", "2", "3", "4", "5+"];
const BUDGETS = [
  "$100k - $300k",
  "$300k - $500k",
  "$500k - $700k",
  "$700k - $1M",
  "$1M+",
];
const CONTACT_METHODS = ["Phone", "Email"];

const ThirdSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      preferredLocation: "",
      propertyType: "",
      bathrooms: "",
      bedrooms: "",
      budget: "",
      contactMethod: "Phone",
      contactEmail: "",
      message: "",
      termsAccepted: false,
    },
  });

  const contactMethod = watch("contactMethod");

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Form submitted:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      reset();
      alert("The form has been successfully send!");
    } catch (error) {
      console.error("Error:", error);
      alert("Sending error");
    }
  };

  // Компонент выпадающего списка
  const SelectField = ({
    name,
    label,
    options,
    placeholder,
  }: {
    name: keyof FormData;
    label: string;
    options: string[];
    placeholder: string;
  }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const value = watch(name);

    return (
      <div className="relative">
        <div className="flex flex-col">
          <span className="pb-3.5 text-gray-300">{label}</span>
          <div className="relative">
            <input
              {...register(name)}
              readOnly
              // value={value}
              onClick={() => setIsOpen(!isOpen)}
              className={`w-full bg-gray-10 border rounded-md p-[16px_20px] focus:outline-none cursor-pointer
                ${errors[name] && touchedFields[name] ? "border-red-500" : "border-gray-15"}`}
              placeholder={placeholder}
            />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>
          {errors[name] && touchedFields[name] && (
            <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
          )}
        </div>

        {/* Выпадающий список */}
        {/* Выпадающий список с эффектом жидкого стекла */}
        {isOpen && (
          <div className="absolute z-50 mt-1 w-full">
            {/* Основной контейнер с эффектом */}
            <div className="relative rounded-md shadow-lg overflow-hidden">
              {/* Стеклянный слой (размытие) - работает как в рабочем примере */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backdropFilter: "blur(10px) saturate(180%)",
                  WebkitBackdropFilter: "blur(10px) saturate(180%)",
                  background: "rgba(14, 16, 21, 0.4)",
                  maskImage:
                    "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
                }}
              />

              {/* Контент (опции) */}
              <div className="relative z-10 border border-gray-15 rounded-md bg-gray-08/50">
                {options.map((option) => (
                  <div
                    key={option}
                    className="p-3 hover:bg-gray-10/80 cursor-pointer transition-colors"
                    onClick={() => {
                      setValue(name, option as any, { shouldValidate: true });
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="px-5 lg:px-20 pb-20 lg:pb-30">
      {/* Заголовок */}
      <div className="flex flex-col items-start justify-center pb-15px">
        <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
        <h2 className="text-[38px] pb-2.5">Let's Make It Happen</h2>
        <p className="max-w-260 pb-15">
          Ready to take the first step toward your dream property? Fill out the
          form below, and our real estate wizards will work their magic to find
          your perfect match. Don't wait; let's embark on this exciting journey
          together.
        </p>
      </div>

      {/* Форма */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-7.5 p-12.5 border border-gray-15 rounded-xl">
          {/* Имя */}
          <div className="flex flex-col">
            <label className="pb-3.5 text-gray-300">First Name</label>
            <input
              {...register("firstName")}
              className={`bg-gray-10 border rounded-md p-[16px_20px] focus:outline-none
                ${errors.firstName && touchedFields.firstName ? "border-red-500" : "border-gray-15"}`}
              type="text"
              placeholder="Enter First Name"
            />
            {errors.firstName && touchedFields.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Фамилия */}
          <div className="flex flex-col">
            <label className="pb-3.5 text-gray-300">Last Name</label>
            <input
              {...register("lastName")}
              className={`bg-gray-10 border rounded-md p-[16px_20px] focus:outline-none
                ${errors.lastName && touchedFields.lastName ? "border-red-500" : "border-gray-15"}`}
              type="text"
              placeholder="Enter Last Name"
            />
            {errors.lastName && touchedFields.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="pb-3.5 text-gray-300">Email</label>
            <input
              {...register("email")}
              className={`bg-gray-10 border rounded-md p-[16px_20px] focus:outline-none
                ${errors.email && touchedFields.email ? "border-red-500" : "border-gray-15"}`}
              type="email"
              placeholder="Enter your Email"
            />
            {errors.email && touchedFields.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Телефон */}
          <div className="flex flex-col">
            <label className="pb-3.5 text-gray-300">Phone</label>
            <input
              {...register("phone")}
              className={`bg-gray-10 border rounded-md p-[16px_20px] focus:outline-none
                ${errors.phone && touchedFields.phone ? "border-red-500" : "border-gray-15"}`}
              type="tel"
              placeholder="Enter Phone Number"
            />
            {errors.phone && touchedFields.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Preferred Location - Select */}
          <SelectField
            name="preferredLocation"
            label="Preferred Location"
            options={LOCATIONS}
            placeholder="Select Location"
          />

          {/* Property Type - Select */}
          <SelectField
            name="propertyType"
            label="Property Type"
            options={PROPERTY_TYPES}
            placeholder="Select Property Type"
          />

          {/* Bathrooms - Select */}
          <SelectField
            name="bathrooms"
            label="№ of Bathrooms"
            options={BATHROOMS}
            placeholder="Select no. of bathrooms"
          />

          {/* Bedrooms - Select */}
          <SelectField
            name="bedrooms"
            label="No. of Bedrooms"
            options={BEDROOMS}
            placeholder="Select no. of bedrooms"
          />

          {/* Budget - Select (col-span-2) */}
          <div className="lg:col-span-2">
            <SelectField
              name="budget"
              label="Budget"
              options={BUDGETS}
              placeholder="Select Budget"
            />
          </div>

          {/* Preferred Contact Method - Phone */}
          <div className="relative">
            <div className="flex flex-col">
              <span className="pb-3.5 text-gray-300">
                Preffered Contact Method
              </span>
              <div className="relative">
                <input
                  {...register("phone")}
                  className={`w-full pl-10 bg-gray-10 border rounded-md p-[16px_20px] focus:outline-none
          ${errors.phone && touchedFields.phone ? "border-red-500" : "border-gray-15"}`}
                  type="tel"
                  placeholder="Enter Your Number"
                />
                <PhoneIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                {/* Точка: фиолетовая если поле заполнено, пустая если нет */}
                <div
                  className={`w-2.5 h-2.5 rounded-full absolute right-4 top-1/2 -translate-y-1/2 transition-colors
        ${watch("phone") ? "bg-purple-60" : "border border-purple-60 bg-transparent"}`}
                ></div>
              </div>
            </div>
            {errors.phone && touchedFields.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Contact Email */}
          <div className="lg:flex items-end justify-end">
            <div className="relative w-full">
              <div className="flex flex-col">
                <span className="pb-3.5 text-gray-300"></span>
                <div className="relative">
                  <input
                    {...register("contactEmail")}
                    className={`w-full bg-gray-10 border rounded-md p-[16px_34px] focus:outline-none
            ${errors.contactEmail && touchedFields.contactEmail ? "border-red-500" : "border-gray-15"}`}
                    type="email"
                    placeholder="Enter Your Email"
                  />
                  <EnvelopeIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <div
                    className={`w-2.5 h-2.5 rounded-full absolute right-4 top-1/2 -translate-y-1/2 transition-colors
          ${watch("contactEmail") ? "bg-purple-60" : "border border-purple-60 bg-transparent"}`}
                  ></div>
                </div>
              </div>
              {/* {errors.contactEmail && touchedFields.contactEmail && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contactEmail.message}
                </p>
              )} */}
            </div>
          </div>

          {/* Message */}
          <div className="lg:col-span-4 flex flex-col">
            <label className="pb-3.5 text-gray-300">Message</label>
            <textarea
              {...register("message")}
              className={`w-full bg-gray-10 border rounded-md p-[16px_20px] focus:outline-none min-h-30
                ${errors.message && touchedFields.message ? "border-red-500" : "border-gray-15"}`}
              placeholder="Enter your Message here"
            />
            {errors.message && touchedFields.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        {/* Чекбокс и кнопка */}
        <div className="flex flex-col lg:flex-row gap-5 lg:justify-between pt-7.5">
          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                {...register("termsAccepted")}
                className="w-6 h-6 cursor-pointer accent-purple-60"
              />
              <span className="text-gray-300">
                I agree with{" "}
                <a href="#" className="text-purple-65 hover:underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-purple-65 hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>
            {errors.termsAccepted && touchedFields.termsAccepted && (
              <p className="text-red-500 text-sm mt-1 ml-8">
                {errors.termsAccepted.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn-purple rounded-md p-[14px_34px] transition-all
              ${isSubmitting ? "opacity-50 cursor-wait" : "hover:opacity-90"}`}
          >
            {isSubmitting ? "Sending..." : "Send Your Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ThirdSection;

