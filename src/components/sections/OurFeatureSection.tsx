import React from "react";
import MainButton from "../common/MainButton";

function OurFeatureSection() {
  const features = [
    {
      id: 0,
      title: "Collboration Teams",
      imagePath: "/images/collabo.png",
      description: "Here you can handle projects together with team virtually",
    },
    {
      id: 1,
      title: "Cloud Storage",
      imagePath: "/images/cloud.png",
      description:
        "No nedd to worry about storage because we provide storage up to 2 TB",
    },
    {
      id: 2,
      title: "Daily Analytics",
      imagePath: "/images/daily.png",
      description:
        "We always provide useful informatin to make it easier for you every day",
    },
  ];
  return (
    <section>
      <div className="mt-[6rem] flex flex-col gap-4 md:gap-[3rem] md:flex-row items-center">
        <p className="text-3xl md:text-[3.125rem] font-[600] text-dark leading-[2.9rem]">
          Our Features you cab get
        </p>
        <p className="text-[1.125rem] font-[500] text-customGray">
          We offer a variety of interesting features that you can help increase
          yor productivity at work and manage your projrct esaly
        </p>

        <MainButton
          text="Get Started"
          classes="rounded-[4.375rem] w-[10.125rem] h-[3rem]"
        />
      </div>

      <div className="mt-[5.75rem] flex flex-col md:flex-row gap-8 justify-between items-center">
        {features.map((feature) => (
          <div className="flex flex-col gap-[1.88rem]" key={feature.id}>
            <div>
              <img src={feature.imagePath} alt="display image" />
            </div>

            <p className="text-[1.875rem] font-[600]">{feature.title}</p>
            <p className="text-customGray">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurFeatureSection;
