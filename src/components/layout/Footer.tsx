import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [touched, setTouched] = useState(false); 

  const validateEmail = (email: string) =>{
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
  }
   const handleSubmit = () => {
     setTouched(true);
     if (!email.trim()) {
       setError("Email can not be empty");
       return;
     }
     if (!validateEmail(email)) {
       setError("Enter the corect email");
       return;
     }
     setError("");
     alert("Email send");
     // очистка
     setEmail("");
     setTouched(false);
   };
   const handleChange = (e: any) => {
    setEmail(e.target.value)
    if(touched) {
      setError('')
    }
   };
   const handleKeyDown = (e: any) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
   }
 const inputBorderClass = error ? "border-red-500" : "border-gray-15";
  return (
    <div className="">
      <div className=" bg-cover w-full h-full  bg-[url(/image/Group1.png)] lg:p-[60px_80px] border-gray-15 border ">
        <div className="container mx-auto p-4 ">
          <div className="flex flex-col lg:flex-row lg:items-center gap-7.5 lg:gap-37 ">
            <div>
              <h4 className=" text-[28px] lg:text-[38px] ">
                Start Your Real Eastate Journey Today
              </h4>
              <p className="text-sm lg:text-base">
                Your dream property is just a click away. Whether you're looking
                for a new home, a strategic investment, or expert real estate
                advice, Eastatein is here to assist you every step of the way.
                Take the first step towards your real estate goals and explore
                our available properties or get in touch eith our team for
                personalized assistance.
              </p>
            </div>
            <button className=" btn-purple  w-full lg:w-fit  py-3.5 lg:p-[14px_20px]  text-nowrap ">
              <Link href={'/properties'}>Explore Properties</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="py-20 container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 p-4">
          <div>
            <Link href={"/"}>
              <div className="flex items-center gap-1 ">
                <Image
                  src="/image/Symbol.svg"
                  alt="logo"
                  className="max-w-7 sm:max-w-8 lg:max-w-12"
                  width={28}
                  height={28}
                ></Image>
                <span className="font-bold text-sm sm:text-lg lg:text-2xl ">
                  Estatein
                </span>
              </div>
            </Link>
            <div className="relative w-full pt-5">
              <input
                type="email"
                value={email}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter Your Email"
                className={`w-full outline-none hover:border focus:border focus:border-purple-60 text-absolute-white border border-gray-15 rounded-lg p-4 lg:p-[14px_20px ${inputBorderClass}`}
                aria-invalid={!!(error && touched)}
                aria-describedby="email-error"
              />
              <button
                onClick={handleSubmit}
                aria-label="Email send"
                className={`absolute right-4 top-12 -translate-y-1/2 transition-all ${
                  email.trim() ? "h-7 w-7" : "h-6 w-6"
                }`}
              >
                <img
                  className={`${email.trim() ? "h-7 w-7 bg-purple-60/15 rounded-lg" : "h-6 w-6"}`}
                  src="./image/FlyIcon.svg"
                  alt=""
                />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-10 lg:gap-17">
            <div className="border-b lg:border-b-0 border-gray-15 md:border-l md:pl-5 lg:border-l-0 lg:pl-0">
              <p>Home</p>
              <div className="flex flex-col gap-2 lg:gap-4 lg:pt-6">
                <Link href={"/#hero"} className=" font-medium hover:underline">
                  Hero Section
                </Link>
                <Link href={"/#detail"} className=" hover:underline">
                  Features
                </Link>
                <Link href={"/#reviews"} className=" hover:underline">
                  Properties
                </Link>
                <Link href={"/#question"} className=" hover:underline">
                  Testimonials
                </Link>
                <Link href={"/#reviews"} className=" hover:underline">
                  FAQ's
                </Link>
              </div>
            </div>
            <div className="pl-5 lg:pl-0 border-l lg:border-l-0 border-gray-15">
              <p>About</p>
              <div className="flex flex-col gap-2 lg:gap-4 lg:pt-6">
                <Link href={"/about/#main"} className="hover:underline">
                  Our Story
                </Link>
                <Link href={"/about/#story"} className="hover:underline">
                  Our Works
                </Link>
                <Link href={"/about/#work"} className="hover:underline">
                  How It Works
                </Link>
                <Link href={"/about/#team"} className="hover:underline">
                  Our Team
                </Link>
                <Link href={"/about/#client"} className="hover:underline">
                  Our Client
                </Link>
                <div className="lg:hidden border border-gray-15 h-px"></div>
              </div>
            </div>

            <div className="md:border-l border-gray-15 md:pl-5 lg:border-l-0 lg:pl-0 ">
              <p>Properies</p>
              <div className="flex flex-col gap-2 lg:gap-4 lg:pt-6">
                <Link
                  href={"/properties/#portfolio"}
                  className="hover:underline"
                >
                  Portfolio
                </Link>
                <Link
                  href={"/properties/#categories"}
                  className="hover:underline"
                >
                  Categories
                </Link>
                <div className="opacity-0">a</div>
                <div className="opacity-0">a</div>
                <div className="opacity-0">a</div>
                <div className="lg:hidden border border-gray-15 h-px"></div>
              </div>
            </div>
            <div className="pl-5 lg:pl-0 border-l lg:border-l-0 border-gray-15">
              <p>Services</p>
              <div className="flex flex-col gap-2 lg:gap-4 lg:pt-6">
                <Link href={"/services/#valuation"} className="hover:underline">
                  Valuation Mastery
                </Link>
                <Link href={"/services/#strategic"} className="hover:underline">
                  Strategic MArketing
                </Link>
                <Link
                  href={"/services/#negotiation"}
                  className="hover:underline"
                >
                  Negotiation Wizardry
                </Link>
                <Link href={"/services/#closing"} className="hover:underline">
                  Closing Success
                </Link>
                <Link href={"/services/#property"} className="hover:underline">
                  Property Managment
                </Link>
                <div className="lg:hidden border border-gray-15 h-px"></div>
              </div>
            </div>
            <div className="md:border-l border-gray-15 md:pl-5 lg:border-l-0 lg:pl-0">
              <p>Contact Us</p>
              <div className="flex flex-col gap-2 lg:gap-4 lg:pt-6">
                <Link href={"/contact/#contact"} className="hover:underline">
                  Contact Form
                </Link>
                <Link href={"/contact/#office"} className="hover:underline">
                  Our Office
                </Link>
                <div className="hidden md:opacity-0">a</div>
                <div className="hidden md:opacity-0">a</div>
                <div className="hidden md:opacity-0">a</div>
                <div className="lg:hidden border border-gray-15 h-px"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-15 py-3.5">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row gap-5 lg:justify-between items-center">
          <div className="flex flex-col items-center lg:flex-row gap-5">
            <div>
              @ {new Date().getFullYear()} Estatein. All Rights Reserved.
            </div>
            <span>Terms & Conditions</span>
          </div>
          <div className="flex gap-2">
            <div className=" bg-black w-10 h-10 rounded-full flex justify-center items-center">
              <Link href="#">
                <Image
                  src="/image/facebook.svg"
                  alt="Facebook "
                  width={15}
                  height={15}
                />
              </Link>
            </div>
            <div className=" bg-black w-10 h-10 rounded-full flex justify-center items-center">
              <Link href="#">
                <Image src="/image/in.svg" alt="In " width={20} height={20} />
              </Link>
            </div>
            <div className=" bg-black w-10 h-10 rounded-full flex justify-center items-center">
              <Link href="#">
                <Image
                  src="/image/twiter.svg"
                  alt="Twitter "
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <div className=" bg-black w-10 h-10 rounded-full flex justify-center items-center">
              <Link href="#">
                <Image
                  src="/image/youtube.svg"
                  alt="YouTube"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
