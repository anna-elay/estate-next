import React from 'react'

const StoryContainer = () => {
  return (
    
      <section id='story' className='scroll-mt-30'>
        <div className=" container mx-auto flex gap-30 pb-22.5 ">
          <div className="flex flex-col items-start justify-center w-1/2">
            <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
            <h2 className="text-[38px] pb-2.5">Our Values</h2>
            <p>
              Our story is one of continuous growth and evolution. We started as a
              small team with big dream, determined to create a real estate
              platform that trancended the ordinary.
            </p>
          </div>
          <div className="grid grid-cols-2 border-4 border-gray-10 inner-border-1 p-6.5 rounded-xl">
            <div>
              <div className="border-r border-gray-15 ">
                <div className="flex items-center gap-2.5  ">
                  <div className="w-15 h-15 border border-purple-60 rounded-full p-4 flex items-center justify-center">
                    <img src="/image/Star.svg" alt="" />
                  </div>
                  <h4 className="text-xl">Trust</h4>
                </div>
                <p>
                  Trust is the cornerstone of every successful real estate
                  transaction.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-15 h-15 border border-purple-60 rounded-full p-4 flex items-center justify-center">
                  <img src="/image/ExcellentHat.svg" alt="" />
                </div>
                <h4 className="text-xl">Excelence</h4>
              </div>
              <p>
                We set the bar high for ourselves. From the properties we list to
                the services we provide.
              </p>
            </div>
            <div className=" border-r border-gray-15 border-t">
              <div className="flex items-center gap-2.5">
                <div className="w-15 h-15 border border-purple-60 rounded-full p-4 flex items-center justify-center">
                  <img src="/image/ClientIcon.svg" alt="" />
                </div>
                <h4 className="text-xl">Client-Centric</h4>
              </div>
              <p>
                Your dreams and needs are at the center of our universe. We
                listen,understand.
              </p>
            </div>
            <div className=" border-t border-gray-15">
              <div className="flex items-center gap-2.5">
                <div className="w-15 h-15 border border-purple-60 rounded-full p-4 flex items-center justify-center">
                  <img src="/image/Star.svg" alt="" />
                </div>
                <h4 className="text-xl">Our Commitment</h4>
              </div>
              <p>
                We are dedicated to providing you with the highest level of
                service, professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>
    
  );
}

export default StoryContainer