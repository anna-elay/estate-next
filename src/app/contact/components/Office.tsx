import React from 'react'

const Office = () => {
  return (
    <section id="office" className="scroll-mt-30 pb-10 lg:pb-0">
      <div className="bg-[url(/image/AbstractDesign2.svg)] bg-cover bg-center bg-no-repeat lg:p-15 p-4">
        <div className="lg:grid grid-cols-4 gap-5">
          <div className='grid grid-cols-4 gap-2'>
            <div className="col-span-2 ">
              <img src="/image/Office1.png" alt="" />
            </div>
            <div className="col-span-2 ">
              <img src="/image/Office2.png" alt="" />
            </div>
            <div className="col-span-2 ">
              <img src="/image/Office3.png" alt="" />
            </div>
            <div >
              <img src="/image/Office4.png" alt="" />
            </div>
            <div >
              <img src="/image/Office5.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col lg:items-start lg:justify-center lg:col-span-2 pt-10 lg:pt-0 pb-4 lg:pb-0">
            <img className="-m-2.5 pb-1.5 max-w-15" src="/image/Stars.png" alt="Stars" />
            <h2 className="text-[38px] pb-2.5">
              Smart Investments, Informed Decisions
            </h2>
            <p>
              Building a real estate portfolio requires a strategic approach.
              Estatein's Investments Advisory Service empowers you to make smart
              investments and informed decisions.
            </p>
          </div>
          <div className="col-span-2 ">
            <img src="/image/Office6.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Office