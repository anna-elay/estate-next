import React from 'react'

const WorkContainer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-start justify-center w-1/2 pb-15px">
        <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
        <h2 className="text-[38px] pb-2.5">Our Achievements</h2>
        <p>
          Our story is one of continuous growth and evolution. We started as a
          small team with big dream, determined to create a real estate platform
          that trancended the ordinary.
        </p>
      </div>
      <div className="flex gap-12.5 pt-15">
        <div className=" p-10 border-4 border-gray-10 inner-border-1 rounded-2.5 rounded-[10px]">
          <h4 className="text-2xl pb-6">3+ Years of Excellence</h4>
          <p>
            With over 3 years in the industry, we've ammased a wealth of
            knowledge and experience.
          </p>
        </div>
        <div className=" lg:min-w-95 p-10 border-4 border-gray-10 inner-border-1 rounded-2.5 rounded-[10px]">
          <h4>Happy Clients</h4>
          <p>
            Our greatest achievement is the satisfaction of our clients. Their
            success stories fuel our passion for what we do.
          </p>
        </div>
        <div className=" lg:min-w-95 p-10 border-4 border-gray-10 inner-border-1 rounded-2.5 rounded-[10px]">
          <h4>Industry Recognition</h4>
          <p>
            We've earned the respect of our pears and industry leaders, with
            accolades and awards that reflect our commitment of excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkContainer