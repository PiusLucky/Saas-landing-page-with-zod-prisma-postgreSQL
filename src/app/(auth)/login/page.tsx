import LoginForm from "@/components/forms/LoginForm";
import React from "react";

function LoginPage() {
  return (
    <div className="flex">
      <div className="relative hidden lg:block">
        <img
          src="/images/auth_large.png"
          alt="large auth splash image"
          className="h-screen"
        />
        <div className="absolute top-[40%] left-[10%]">
          <p className="text-[2.5rem] font-[700]">Biccas</p>
          <p className="text-[#191A15] text-[1.25rem] font-[700]">
            We&apos;re here to Increase your{" "}
            <span className="text-primary">Productivity</span>
          </p>
        </div>
      </div>
      <div className="flex-grow">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
