import React from 'react'

const HowItwork = () => {
  const steps = [
    {
      number: "Step 01",
      title: "Discover a World of Possibilities",
      text: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location.",
    },
    {
      number: "Step 02",
      title: "Narrowing Down Your Choices",
      text: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    },
    {
      number: "Step 03",
      title: "Personalised Guidance",
      text: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
    },
    {
      number: "Step 04",
      title: "See It for Yourself",
      text: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
    },
    {
      number: "Step 05",
      title: "Making Informed Decisions",
      text: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.",
    },
    {
      number: "Step 06",
      title: "Getting the Best Deal",
      text: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
    },
  ];
  return (
    <section id="work" className="scroll-mt-40">
      <div className="py-22.5 container mx-auto px-4 lg:px-20lg:px-20">
        <div className="flex flex-col items-start justify-center lg:w-1/2 pb-15px">
          <img className="-m-2.5 pb-1.5" src="/image/Stars.png" alt="Stars" />
          <h2 className=" text-[28px] lg:text-[38px] pb-2.5">
            Navigation the Eastatien Excperiens
          </h2>
          <p>
            At Estatein, we've designed a straightforward process to help you
            find and purchase your dream propertie with ease. Here's a
            step-by-step guide to how it all works.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7.5 lg:gap-5 pt-15">
          {steps.map((step, index) => (
            <div
              key={index}
              className={index >= 3 ? "hidden lg:block" : "block"}
            >
              <div className="border-l border-purple-60 p-[14px_26px]">
                {step.number}
              </div>
              <div className="p-10">
                <h4 className="text-xl">{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItwork