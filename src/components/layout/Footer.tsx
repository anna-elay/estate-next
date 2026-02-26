import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="">
      <div className=" bg-cover w-full h-full  bg-[url(/image/Group1.png)] lg:p-[60px_80px] border-gray-15 border ">
        <div className="container mx-auto p-4 ">
          <div className="flex flex-col lg:flex-row lg:items-center gap-7.5 lg:gap-37 ">
            <div >
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
              Explore Properties
            </button>
          </div>
        </div>
      </div>
      <div className="py-20 container mx-auto">
        <div className="flex lg:gap-16">
          <div>
            <Link href={"/"}>
              <div className="flex ">
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
            <input type="email" placeholder="Enter Your Email" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-17">
            <div>
              <p>Home</p>
              <div className="flex flex-col lg:gap-4 lg:pt-6">
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
            <div>
              <p>About</p>
              <div className="flex flex-col lg:gap-4 lg:pt-6">
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
              </div>
            </div>
            <div>
              <p>Properies</p>
              <div className="flex flex-col lg:gap-4 lg:pt-6">
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
              </div>
            </div>
            <div>
              <p>Services</p>
              <div className="flex flex-col lg:gap-4 lg:pt-6">
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
              </div>
            </div>
            <div>
              <p>Contact Us</p>
              <div className="flex flex-col lg:gap-4 lg:pt-6">
                <Link href={"/contact/#contact"} className="hover:underline">
                  Contact Form
                </Link>
                <Link href={"/contact/#office"} className="hover:underline">
                  Our Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-15 py-3.5">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-5">
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
