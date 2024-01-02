import React from "react";

function BenefitSection() {
  const benefits = [
    "Free Consulting With Experet Saving Money",
    "Online Banking",
    "Investment Report Every Month",
    "Saving Money For The Future",
    "Online Transection",
  ];
  return (
    <section className="flex flex-col md:flex-row gap-8 justify-between  mt-[8.12rem]">
      <div>
        <p className="text-[3.125rem] text-dark font-[600] mb-[1.88rem]">
          What Benefit Will You Get
        </p>

        <div className="flex flex-col gap-8">
          {benefits.map((benefit, index) => (
            <div className="flex gap-4" key={index}>
              <img
                src="/images/green_check_icon.png"
                alt="success check icon"
              />
              <p className="text-[1.125rem] font-[500] text-dark">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src="/images/benefits.png" alt="benefits" />
      </div>
    </section>
  );
}

export default BenefitSection;
