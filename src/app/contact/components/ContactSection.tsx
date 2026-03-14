import React from 'react'
import UnlockCart from '../../../components/shared/UnlockCart';

const Contact = () => {
  return (
    <div>
      <div className="relative bg-linear-to-r from-gray-15 border-b border-gray-15 ">
        <div className="py-12.5 px-4 lg:pt-25 lg:pb-32.5 lg:px-20">
          <h2 className="text-[28px] lg:text-[38px] pb-2.5">Get in Touch with Estatein</h2>
          <p>
            Welcome to Estatein Contact Us page. We're here to assist you with
            any inquries, requests, or feedback you may have. Whether you're
            loking to buy or sell a property, explore investment opportunities,
            or simply want to connect,we're just a massage away. Reach out to
            us, and let's start a conversation.
          </p>
        </div>
      </div>
      <UnlockCart/>
    </div>
  );
}

export default Contact