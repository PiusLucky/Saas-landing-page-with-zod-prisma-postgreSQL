"use client";

import React from "react";
import MainButton from "../common/MainButton";
import { useRouter } from "next/navigation";

function HeroSection() {
  const router = useRouter();
  const handleRegisterNavigation = () => {
    router.push("/register");
  };
  return (
    <section className="flex flex-col gap-8 md:flex-row justify-between">
      <div className="z-10">
        <p className="mb-[1.87rem] text-3xl lg:text-[5rem] text-dark lg:leading-[5.625rem] font-[700]">
          We&apos;re here to Increase your Productivity
        </p>
        <img src="/images/stylish_underline.png" alt="stylish underline" />
        <p className="my-[3.13rem] text-[1.125rem] font-[500]">
          Let&apos;s make your work more organize and easily using the Taskio
          Dashboard with many of the latest featuresin managing work every day.
        </p>
        <div className="flex gap-4 md:gap-[2.81rem]">
          <MainButton
            text="Get Started"
            classes="w-[10rem] h-[3.275rem] rounded-[2.5rem]"
            action={handleRegisterNavigation}
          />
          <div className="flex gap-3 items-center">
            <img src="/images/play_icon.png" alt="play icon" />
            <p>View Demo</p>
          </div>
        </div>
      </div>
      <div className="z-10">
        <img src="/images/guy_credit.png" alt="guy with credits" />
      </div>
    </section>
  );
}

export default HeroSection;
