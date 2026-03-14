
'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


const formSchema = z.object({
  firstName: z.string().min(1, "Name is required"),
  lastName: z.string().min(1, "Lastname is required"),
  email: z.string().email("Incorrect email"),
  phone: z
    .string()
    .min(10, "Must contain at least 10 digits")
    .regex(/^[\d\s\+\-\(\)]+$/, "Incorrect format"),
  selectedProperty: z.string().min(1, "Specify an object"),
  message: z.string().min(10, "Must contain at least 10 symbols"),
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, "Agreement with terms is required"),
});

type FormData = z.infer<typeof formSchema>;

function Strategic() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting, isValid },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur", // Валидация при потере фокуса
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      selectedProperty: "Seaside Serenity",
      message: "",
      termsAccepted: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      alert("The form has been successfully submitted!");
      reset(); 
    } catch (error) {
      console.error("Sending error:", error);
      alert("An error has occurred. Try again.");
    }
  };

  const watchedFields = watch();
  const allFieldsFilled = Object.values(watchedFields).every(
    (value) => value && (typeof value !== "boolean" || value === true),
  );

  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 py-30">
      <div className="lg:max-w-110">
        <h3 className="text-[28px] lg:text-[38px]">
          Inquire About Seaside Serenity Villa
        </h3>
        <p className="text-gray-400 mt-4">
          Interested in this property? Fill out the form below, and our real
          estate experts will get back to you with more details, including
          scheduling a viewing and answering any questions you may have.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 border border-gray-15 rounded-xl p-10 gap-7.5 w-full"
      >
        {/* First Name */}
        <div className="flex flex-col max-w-80">
          <label className="pb-3.5 text-gray-300">First Name</label>
          <input
            {...register("firstName")}
            className={`bg-gray-10 border rounded-md p-[16px_20px] focus:outline-none focus:border-2 transition-colors
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

        {/* Last Name */}
        <div className="flex flex-col max-w-80">
          <label className="pb-3.5 text-gray-300">Last Name</label>
          <input
            {...register("lastName")}
            className={`bg-gray-10 border rounded-md p-[16px_20px] focus:outline-none focus:border-2
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
        <div className="flex flex-col max-w-80">
          <label className="pb-3.5 text-gray-300">Email</label>
          <input
            {...register("email")}
            className={`bg-gray-10 border rounded-md p-[16px_20px] focus:outline-none focus:border-2
              ${errors.email && touchedFields.email ? "border-red-500" : "border-gray-15"}`}
            type="email"
            placeholder="Enter your Email"
          />
          {errors.email && touchedFields.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col max-w-80">
          <label className="pb-3.5 text-gray-300">Phone</label>
          <input
            {...register("phone")}
            className={`bg-gray-10 border rounded-md p-[16px_20px] focus:outline-none focus:border-2
              ${errors.phone && touchedFields.phone ? "border-red-500" : "border-gray-15"}`}
            type="tel"
            placeholder="Enter Phone Number"
          />
          {errors.phone && touchedFields.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div className="md:col-span-2 flex flex-col">
          <label className="pb-3.5 text-gray-300">Selected Property</label>
          <input
            {...register("selectedProperty")}
            className={`bg-gray-10 border rounded-md p-[16px_20px] focus:outline-none focus:border-2 max-w-[calc(80*2+1.875rem)]
              ${errors.selectedProperty && touchedFields.selectedProperty ? "border-red-500" : "border-gray-15"}`}
            type="text"
            placeholder="Seaside Serenity"
          />
          {errors.selectedProperty && touchedFields.selectedProperty && (
            <p className="text-red-500 text-sm mt-1">
              {errors.selectedProperty.message}
            </p>
          )}
        </div>
        <div className="md:col-span-2 flex flex-col">
          <label className="pb-3.5 text-gray-300">Message</label>
          <textarea
            {...register("message")}
            className={`w-full bg-gray-10 border rounded-md p-[16px_20px] focus:outline-none focus:border-2
              ${errors.message && touchedFields.message ? "border-red-500" : "border-gray-15"}`}
            placeholder="Enter your Message here"
            rows={5}
          />
          {errors.message && touchedFields.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2 flex flex-col lg:flex-row lg:justify-between pt-7.5 gap-6 items-start lg:items-center">
          <div className="flex flex-col">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                {...register("termsAccepted")}
                className="w-6 h-6 cursor-pointer accent-purple-600"
              />
              <p className="text-nowrap text-gray-300">
                I agree with{" "}
                <a href="#" className="text-purple-400 hover:underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-purple-400 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </label>
            {errors.termsAccepted && touchedFields.termsAccepted && (
              <p className="text-red-500 text-sm mt-1 ml-8">
                {errors.termsAccepted.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || (touchedFields.termsAccepted && !isValid)}
            className={`text-nowrap rounded-md p-[14px_34px] transition-all
              ${
                isSubmitting
                  ? "bg-gray-500 cursor-wait"
                  : "bg-purple-600 hover:bg-purple-700"
              } 
              text-white font-medium
              disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isSubmitting ? "Sending..." : "Send Your Message"}
          </button>
        </div>
        {allFieldsFilled && !isSubmitting && (
          <p className="md:col-span-2 text-green-500 text-sm text-center">
            ✓ All fields completed! Ready to submit.
          </p>
        )}
      </form>
    </div>
  );
}

export default Strategic;


