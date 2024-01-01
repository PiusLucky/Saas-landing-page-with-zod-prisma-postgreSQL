import React from "react";

function SupportOurPartnerSection() {
  const features = [
    {
      id: 0,
      title: "Publishing",
      iconPath: "/images/publishing_icon.png",
      description:
        "Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd",
    },
    {
      id: 1,
      title: "Analytics",
      iconPath: "/images/analytics_icon.png",
      description: "Analyze your performance and create goegeous report",
    },
    {
      id: 2,
      title: "Engagement",
      iconPath: "/images/engagement_icon.png",
      description: "Quiuckly navigate you anda engage with your adience",
    },
  ];
  return (
    <section className="flex justify-between flex-col  gap-8 md:flex-row bg-[#F9F8FE] z-10 px-4 md:px-[3.25rem] py-[3.75rem]">
      <div>
        <p className="text-[3.125rem] text-dark font-[600] mb-[1.88rem]">
          How we support our pratner all over the world
        </p>
        <p className="text-customGray">
          SaaS become a common delivery model for many business application,
          including office software, messaging software, payroll processing
          software, DBMS software, management software
        </p>

        <section className="flex  gap-4 mt-[4.56rem]">
          <div className="flex flex-col gap-[1.12rem]">
            <div>
              <img src="/images/full_star.png" alt="full star" />
            </div>

            <p className="font-semibold">
              <span className="font-[700]">4.9</span> / 5 rating
            </p>
            <p className="font-[700] text-customGray">databricks</p>
          </div>
          <div className="flex flex-col gap-[1.12rem]">
            <div>
              <img src="/images/not_full_star.png" alt="half star" />
            </div>

            <p className="font-semibold">
              <span className="font-[700]">4.8</span> / 5 rating
            </p>
            <p className="font-[700] text-customGray">Chainalysis</p>
          </div>
        </section>
      </div>

      <div className="flex-grow flex gap-[4rem] flex-col">
        {features.map((feature) => (
          <div key={feature.id} className="flex gap-[1.31rem] items-center">
            <div className="hidden md:block">
              <div className="flex w-[4rem] h-[4rem]">
                <img src={feature.iconPath} alt="feature icon" />
              </div>
            </div>
            <div className="flex flex-col gap-[0.63rem]">
              <p className="text-dark font-[700] text-[1.75rem]">
                {feature.title}
              </p>
              <p className="text-customGray text-[1.125rem]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SupportOurPartnerSection;
