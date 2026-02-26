import React from 'react'

const OurTeam = () => {
  return (
    <section id='team' className='scroll-mt-45'>
      <div className='container mx-auto'>
        <div className="flex flex-col items-start justify-center w-1/2 pb-15px">
          <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
          <h2 className="text-[38px] pb-2.5">Meet the Eastate Team</h2>
          <p>
            At Estatein, our success is driven by the dedication and expertise of
            our team. Get to know the people behind our mission to make your real
            estate dreams a reality.
          </p>
        </div>
        <div className="pt-15 flex gap-5">
          <div className="  p-6 rounded-xl border border-gray-15 max-w-75">
            <div className="relative">
              <img src="image/Max.png" alt="" />
            </div>
            <button className=" absolute bottom translate-x-23 -translate-y-5 btn-purple z-10 rounded-full!">
              <a href="#">
                <img className="p-[10px_20px]" src="/image/BirdIcon.svg" alt="" />
              </a>
            </button>
            <h5 className="pt-12.5 text-xl pb-1 text-center">Max Mitchell</h5>
            <p className="text-center pb-5">Founder</p>
            <div className=" flex justify-between items-center p-2.5 bg-gray-10 border border-gray-15 rounded-full">
              <span className="m-2.5">Say Hello</span>
              <button className="btn-purple rounded-full!">
                <a href="#">
                  <img className="p-2 " src="/image/FlyIcon.svg" alt="" />
                </a>
              </button>
            </div>
          </div>
          <div className="  p-6 rounded-xl border border-gray-15 max-w-75">
            <div className="relative">
              <img src="/image/Sarah.png" alt="" />
            </div>
            <button className=" absolute bottom translate-x-23 -translate-y-5 btn-purple z-10 rounded-full!">
              <a href="#">
                <img className="p-[10px_20px]" src="/image/BirdIcon.svg" alt="" />
              </a>
            </button>
            <h5 className="pt-12.5 text-xl pb-1 text-center">Sarah Jonson</h5>
            <p className="text-center pb-5">Chief Real Eastate Officer</p>
            <div className=" flex justify-between items-center p-2.5 bg-gray-10 border border-gray-15 rounded-full">
              <span className="m-2.5">Say Hello</span>
              <button className="btn-purple rounded-full!">
                <a href="#">
                  <img className="p-2 " src="/image/FlyIcon.svg" alt="" />
                </a>
              </button>
            </div>
          </div>
          <div className="  p-6 rounded-xl border border-gray-15 max-w-75">
            <div className="relative">
              <img src="/image/David.png" alt="" />
            </div>
            <button className=" absolute bottom translate-x-23 -translate-y-5 btn-purple z-10 rounded-full!">
              <a href="#">
                <img className="p-[10px_20px]" src="/image/BirdIcon.svg" alt="" />
              </a>
            </button>
            <h5 className="pt-12.5 text-xl pb-1 text-center">David Brown</h5>
            <p className="text-center pb-5">Head of Property Managment</p>
            <div className=" flex justify-between items-center p-2.5 bg-gray-10 border border-gray-15 rounded-full">
              <span className="m-2.5">Say Hello</span>
              <button className="btn-purple rounded-full!">
                <a href="#">
                  <img className="p-2 " src="/image/FlyIcon.svg" alt="" />
                </a>
              </button>
            </div>
          </div>
          <div className="  p-6 rounded-xl border border-gray-15 max-w-75">
            <div className="relative">
              <img src="/image/Micael.png" alt="" />
            </div>
            <button className=" absolute bottom translate-x-23 -translate-y-5 btn-purple z-10 rounded-full!">
              <a href="#">
                <img className="p-[10px_20px]" src="/image/BirdIcon.svg" alt="" />
              </a>
            </button>
            <h5 className="pt-12.5 text-xl pb-1 text-center">Michael Turner</h5>
            <p className="text-center pb-5">Legal Counsel</p>
            <div className=" flex justify-between items-center p-2.5 bg-gray-10 border border-gray-15 rounded-full">
              <span className="m-2.5">Say Hello</span>
              <button className="btn-purple rounded-full!">
                <a href="#">
                  <img className="p-2 " src="/image/FlyIcon.svg" alt="" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam