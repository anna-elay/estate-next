import React from 'react'

const Negotiation = () => {
  return (
    <div className="container mx-auto p-4">
      <img src="/image/Stars3.svg" alt="" />
      <h3 className=" text-[28px] lg:text-[38px] font-semibold pb-2.5">
        Comprehensive Prising
      </h3>
      <p>
        At Estatein, transparensy is key.We want you to have a clear
        understanding of all costs accosiated with your property investment.
        Below, we break down the prising for Seaside Serenity Villa to help you
        make an informed desition.
      </p>
      <div className="pt-15 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-center bg-gray-10 border border-gray-15 rounded-lg p-[20px_40px]">
          <span className="border-b lg:border-b-0 lg:border-r border-gray-15 pb-2.5 lg:pb-0 lg:pr-4">
            Note
          </span>
          <p className="lg:pl-4 text-[14px]! pt-2.5 lg:pt-0">
            The figures provided abive the estimates and may vary depending on
            the property, location, and individual circumstances.
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row">
          <div>
            <p>Listing Price</p>
            <span className="font-semibold text-[30px] pr-20 pt-4">
              $1,250,000
            </span>
          </div>
          <div className="flex flex-col gap-12.5 w-full">
            <div className="p-10 border border-gray-15 rounded-xl w-full">
              <div>
                <div className="flex justify-between">
                  <h5 className="text-[20px] font-semibold">Additional Fees</h5>
                  <button className="btn-gray rounded-lg! p-[14px_20px] text-[14px] font-medium">
                    Learn More
                  </button>
                </div>
                <div className="bg-gray-15 h-px my-7.5"></div>

                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <div className=" ">
                    <p>Property Transfer Tax</p>
                    <div className="flex items-center pt-3 pb-5">
                      <span className="pr-4 font-semibold text-[20px]">
                        $25,000
                      </span>
                      <p className="bg-gray-10 border border-gray-15 rounded-[28px] p-[6px_12px] lg:inline text-[14px]! ">
                        Based on the sale price and local regulations
                      </p>
                    </div>
                  </div>
                  <div className="lg:border-l border-t pt-5 lg:border-t-0 border-gray-15 lg:pl-5">
                    <p>Legal Fees</p>
                    <div className="flex items-center pt-3">
                      <span className="pr-5.5 font-semibold text-[20px]">
                        $3,000
                      </span>
                      <p className="bg-gray-10 border border-gray-15 rounded-[28px] p-[6px_12px] lg:inline text-[14px]!">
                        Approximate cost for legal services, including title
                        transfer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-15 h-px my-7.5"></div>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <div className="min-w-76">
                    <p>Home Inspection</p>
                    <div className="pt-3 pb-5">
                      <span className="pr-4 font-semibold text-[20px]">
                        $500
                      </span>
                      <p className="bg-gray-10 border border-gray-15 rounded-[28px] p-[6px_12px] inline text-[14px]!">
                        Recomended for due diligence
                      </p>
                    </div>
                  </div>
                  <div className="lg:border-l border-t lg:border-t-0 border-gray-15  pt-5 lg:pl-5 pr-13">
                    <p>Property Insurance</p>
                    <div className="flex items-center pt-3">
                      <span className="pr-4 font-semibold text-[20px]">
                        $1,200
                      </span>
                      <p className="bg-gray-10 border border-gray-15 rounded-[28px] p-[6px_12px] lg:inline text-[14px]!">
                        Annual cost for comprehensive property insurance
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-15 h-px my-7.5"></div>
                <div className=" ">
                  <p>Mortgage Fees</p>
                  <div className="flex items-center pt-3 pb-5">
                    <span className="pr-4 font-semibold text-[20px]">
                      Varies
                    </span>
                    <p className="bg-gray-10 border border-gray-15 rounded-[28px] p-[6px_12px] lg:inline text-[14px]!">
                      If applicable, consult with your lender for specific
                      details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 border border-gray-15 rounded-xl w-full">
              <div className="flex justify-between">
                <h5 className="text-[20px] font-semibold">Monthly Cost</h5>
                <button className="btn-gray rounded-lg! p-[14px_20px] text-[14px] font-medium">
                  Learn More
                </button>
              </div>
              <div className="bg-gray-15 h-px my-7.5"></div>
              <div className=" ">
                <p>Property Transfer Tax</p>
                <div className="flex items-center pt-3">
                  <span className="pr-4 font-semibold text-[20px]">$1,250</span>
                  <p className="bg-gray-10 border border-gray-15 rounded-[28px] p-[6px_12px] lg:inline text-[14px]!">
                    Approximate monthly property tax based on the sale price and
                    local rates
                  </p>
                </div>
              </div>
              <div className="bg-gray-15 h-px my-7.5"></div>
              <div className=" ">
                <p>Homeowner's Association Fee</p>
                <div className="flex items-center pt-3">
                  <span className="pr-4 font-semibold text-[20px]">$300</span>
                  <p className="bg-gray-10 border border-gray-15 rounded-[28px] p-[6px_12px] lg:inline text-[14px]!">
                    Monhly fee for common area maintenance and security
                  </p>
                </div>
              </div>
            </div>

            <div className="p-10 border border-gray-15 rounded-xl w-full">
              <div className="flex justify-between">
                <h5 className="text-[20px] font-semibold">
                  Total Initial Cost
                </h5>
                <button className="btn-gray rounded-lg! p-[14px_20px] text-[14px] font-medium">
                  Learn More
                </button>
              </div>
              <div className="flex flex-col lg:grid lg:grid-cols-2   gap-5">
                <div className="bg-gray-15 h-px mb-2.5 mt-7.5 col-span-2"></div>

                <div className="lg:border-r border-b lg:border-b-0 pb-5 lg:pb-0 border-gray-15 ">
                  <p>Listing Price</p>
                  <div className="pt-3">
                    <span className="pr-4 font-semibold text-[20px]">
                      $1,250,000
                    </span>
                  </div>
                </div>
                <div className="py-5 lg:py-0 ">
                  <p>Additional Fees</p>
                  <div className="flex items-center pt-3">
                    <span className="pr-4 font-semibold text-[20px]">
                      $29,700
                    </span>
                    <p className="bg-gray-10 border border-gray-15 rounded-[28px] p-[6px_12px] lg:inline text-[14px]!">
                      Property transfer tax, legal fees, inspection, insurance
                    </p>
                  </div>
                </div>

                <div className="bg-gray-15 h-px my-2.5 col-span-2"></div>

                <div className=" lg:border-r border-b lg:border-b-0 pb-5 lg:pb-0 border-gray-15 ">
                  <p>Down Payment</p>
                  <div className="pt-3">
                    <span className="pr-4 font-semibold text-[20px]">
                      $250,000
                    </span>
                    <p className="bg-gray-10 border border-gray-15 rounded-[28px] p-[6px_12px] inline text-[14px]!">
                      20%
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 lg:pt-0 ">
                  <p>Property Transfer Tax</p>
                  <div className="pt-3">
                    <span className="pr-4 font-semibold text-[20px]">
                      $1,000,000
                    </span>
                    <p className="bg-gray-10 border border-gray-15 rounded-[28px] p-[6px_12px] inline text-[14px]!">
                      If applicable
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 border border-gray-15 rounded-xl w-full">
              <div className="flex justify-between">
                <h5 className="text-[20px] font-semibold">
                  Monthly Experenses
                </h5>
                <button className="btn-gray rounded-lg! p-[14px_20px] text-[14px] font-medium">
                  Learn More
                </button>
              </div>

              <div className="flex flex-col lg:grid lg:grid-cols-2  gap-5">
                <div className="bg-gray-15 h-px mb-2.5 mt-7.5 col-span-2"></div>
                <div className="lg:border-r border-b lg:border-b-0 pb-5 lg:pb-0 border-gray-15 ">
                  <p>Property Taxes</p>
                  <div className="pt-3">
                    <span className="pr-4 font-semibold text-[20px]">
                      $1,250
                    </span>
                  </div>
                </div>

                <div className=" ">
                  <p>Homeowner's Association Fee</p>
                  <div className="pt-3">
                    <span className="pr-4 font-semibold text-[20px]">$300</span>
                  </div>
                </div>
                <div className="bg-gray-15 h-px my-2.5 col-span-2"></div>
                <div className=" lg:border-r border-b lg:border-b-0 pb-5 lg:pb-0 border-gray-15 ">
                  <p>Mortgage Payment</p>
                  <div className="flex pt-3">
                    <span className="pr-4  text-[20px]">
                      Varies based terms and interest rate
                    </span>
                    <p className="hidden bg-gray-10 border border-gray-15 rounded-[28px] p-[6px_12px] lg:inline text-[14px]!">
                      If applicable
                    </p>
                  </div>
                </div>

                <div className=" ">
                  <p>Property Insurance</p>
                  <div className="flex pt-3">
                    <span className="pr-4 font-semibold text-[20px]">$100</span>
                    <p className="bg-gray-10 border border-gray-15 rounded-[28px] p-[6px_12px] lg:inline text-[14px]!">
                      Approximate monthly cost
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Negotiation