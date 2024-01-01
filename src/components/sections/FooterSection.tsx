import React from "react";
import { Input } from "../ui/input";

function FooterSection() {
  return (
    <section className="mt-16 md:mt-[14rem] flex flex-col gap-[5rem] md:gap-[10rem] md:flex-row justify-between w-full  bg-footerBackground px-[4rem] pt-[7.6rem] pb-[2.5rem]">
      <div>
        <img src="/images/biccas_logo.png" alt="bicca logo" />

        <p className="text-customGray font-[500] text-[1.125rem] my-[1.88rem]">
          Get started now try our product
        </p>

        <div className="relative">
          <Input
            placeholder="Enter your email here"
            className="h-[3.75rem] pr-[5rem] text-customGray rounded-[4.375rem] bg-transparent"
          />
          <div className="absolute top-2 right-2">
            <img src="/images/arrow_right_icon.png" alt="arrow right icon" />
          </div>
        </div>

        <p className="text-white font-[500] text-[1.125rem] mt-[4.5rem]">
          © 2022 Biccas Inc. Copyright and rights reserved
        </p>
      </div>
      <div className="flex flex-grow flex-col gap-4 md:flex-row justify-between">
        <div>
          <p className="text-white font-[500] text-[1.125rem]">Support</p>
          <div className="my-5 flex flex-col gap-[1.25rem]">
            <p className="text-customGray font-[500] text-[1.125rem]">
              Help centre
            </p>
            <p className="text-customGray font-[500] text-[1.125rem]">
              Account information
            </p>
            <p className="text-customGray font-[500] text-[1.125rem]">About</p>
            <p className="text-customGray font-[500] text-[1.125rem]">
              Contact us
            </p>
          </div>
        </div>
        <div>
          <p className="text-white font-[500] text-[1.125rem]">
            Help and Solution
          </p>
          <div className="my-5 flex flex-col gap-[1.25rem]">
            <p className="text-customGray font-[500] text-[1.125rem]">
              Talk to support
            </p>
            <p className="text-customGray font-[500] text-[1.125rem]">
              Support docs
            </p>
            <p className="text-customGray font-[500] text-[1.125rem]">
              {" "}
              System status
            </p>
            <p className="text-customGray font-[500] text-[1.125rem]">
              Covid responde
            </p>
          </div>
        </div>
        <div>
          <p className="text-white font-[500] text-[1.125rem]">Product</p>
          <div className="my-5 flex flex-col gap-[1.25rem]">
            <p className="text-customGray font-[500] text-[1.125rem]">Update</p>
            <p className="text-customGray font-[500] text-[1.125rem]">
              Security
            </p>
            <p className="text-customGray font-[500] text-[1.125rem]">
              {" "}
              Beta test
            </p>
            <p className="text-customGray font-[500] text-[1.125rem]">
              Pricing product
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
