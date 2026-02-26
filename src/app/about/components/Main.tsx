import React from 'react'

import Grid from '../../../components/shared/Grid';
const Main = () => {
  return (
    <section id="main" className="scroll-mt-38">
      <div className="container mx-auto">
        <div className="flex gap-15 flex-col-reverse sm:flex-row pt-17.5 pb-30">
          <div className="w-1/2">
            <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
            <h2 className="text-[38px] pb-2.5">Our Journey</h2>
            <p>
              Our story is one of continuous grows and evolution. We started as
              a small team with big dreams, determinedto create a real estate
              platform that transcended the ordinary. Over the year, we've
              expanded our reach, forget valuable partnerships, and gained the
              trust of countless clients.
            </p>
            <div className="pt-12.5">
              <Grid />
            </div>
          </div>
          <div>
            <img src="/image/HomeAboutPage.png" alt="Home" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main