import React from 'react'

const HowItwork = () => {
  return (
    <section id='work' className='scroll-mt-40'>
      <div className="py-22.5 container mx-auto">
        <div className="flex flex-col items-start justify-center w-1/2 pb-15px">
          <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
          <h2 className="text-[38px] pb-2.5">
            Navigation the Eastatien Excperiens
          </h2>
          <p>
            At Estatein, we've designed a straightforward process to help you find
            and purchase your dream propertie with ease. Here's a step-by-step
            guide to how it all works.
          </p>
        </div>
        <div className="flex flex-col pt-15">
          <div className="flex">
            <div className="min-w-95">
              <div className="border-l border-purple-60 p-[14px_26px]">
                Step 01
              </div>
              <div className="p-10">
                <h4 className="text-xl">Discover a World of Possibilities</h4>
                <p>
                  Your journey begins with exploring our carefully currated
                  property listings. Use our intuitive search tools to filter
                  properties based on your preferences,including location.
                </p>
              </div>
            </div>
            <div className="min-w-95">
              <div className="border-l border-purple-60 p-[14px_26px]">
                Step 02
              </div>
              <div className="p-10">
                <h4 className="text-xl">Narrowing Down Your Choices</h4>
                <p>
                  Once you've found properties that catch you eye, save them to
                  you account or make a shortlist. This allow you to compare and
                  revist your as your make your decision.{" "}
                </p>
              </div>
            </div>
            <div className="min-w-95">
              <div className="border-l border-purple-60 p-[14px_26px]">
                Step 03
              </div>
              <div className="p-10 fill-indigo-100 drop-shadow-lg drop-shadow-indigo-100/50 ">
                <h4 className="text-xl fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50  ">
                  Personalised Guidance
                </h4>
                <p>
                  Have questions about a property or need more information? Our
                  dedicated team of real estate experts is just a call or massage
                  away.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-10 flex">
            <div className="min-w-95">
              <div className="border-l border-purple-60 p-[14px_26px]">
                Step 04
              </div>
              <div className="p-10">
                <h4 className="text-xl">See If for Youself</h4>
                <p>
                  Arrange viewings of the properties you're interested in. We'll
                  coordinate with the property owners and accompany you to ensure
                  you get a firsthand look at you potencial new home.{" "}
                </p>
              </div>
            </div>
            <div className="min-w-95">
              <div className="border-l border-purple-60 p-[14px_26px]">
                Step 05
              </div>
              <div className="p-10">
                <h4 className="text-xl">Makein Informed Decisions</h4>
                <p>
                  Before making an offer, your team will assist you with due
                  deligence, including property inspections, legal checks, and
                  market analysis. We want you to be fully informed.
                </p>
              </div>
            </div>
            <div className="min-w-95">
              <div className="border-l border-purple-60 p-[14px_26px]">
                Step 06
              </div>
              <div className="p-10">
                <h4 className="text-xl">Geating the Best Deal</h4>
                <p>
                  We'll help you negotiate the best tearms and prepare your offer.
                  Our goal is to secure the property at the right price and on
                  favorable terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItwork