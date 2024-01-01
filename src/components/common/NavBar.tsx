"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import MainButton from "./MainButton";
import { useRouter } from "next/navigation";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleSignupNavigation = () => {
    router.push("/register");
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in  p-4">
        <div className="flex justify-between mx-[41px] items-center">
          <div>
            <img
              src="/images/biccas_logo.png"
              alt="logo"
              className="w-[6.8rem]"
            />
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <p
              className={`hover:text-black cursor-pointer flex items-center gap-2  font-[500] text-customGray`}
            >
              Home
            </p>
            <p
              className={`hover:text-black cursor-pointer flex items-center gap-2  font-[500] text-customGray`}
            >
              Product
            </p>
            <p
              className={`hover:text-black cursor-pointer flex items-center gap-2  font-[500] text-customGray`}
            >
              FAQ
            </p>
            <p
              className={`hover:text-black cursor-pointer flex items-center gap-2  font-[500] text-customGray`}
            >
              Blog
            </p>
            <p
              className={`hover:text-black cursor-pointer flex items-center gap-2  font-[500] text-customGray`}
            >
              About Us
            </p>
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <div
              className={`hover:text-black cursor-pointer flex items-center gap-2  font-[500] text-customGray`}
            >
              <Link
                href="/login"
                className="hover:text-black cursor-pointer flex items-center gap-2 "
              >
                Login
              </Link>
            </div>

            <MainButton text="Sign Up" action={handleSignupNavigation} />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img
              src="/images/biccas_logo.png"
              alt="logo"
              className="w-[7rem]"
            />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/svgs/hamburger.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              <p
                className={`hover:text-black cursor-pointer flex items-center gap-2  font-[500] text-customGray`}
              >
                Home
              </p>
              <p
                className={`hover:text-black cursor-pointer flex items-center gap-2  font-[500] text-customGray`}
              >
                Product
              </p>
              <p
                className={`hover:text-black cursor-pointer flex items-center gap-2  font-[500] text-customGray`}
              >
                FAQ
              </p>
              <p
                className={`hover:text-black cursor-pointer flex items-center gap-2  font-[500] text-customGray`}
              >
                Blog
              </p>
              <p
                className={`hover:text-black cursor-pointer flex items-center gap-2  font-[500] text-customGray`}
              >
                About Us
              </p>

              <div className="flex flex-col gap-[40px] select-none">
                <div
                  className={`hover:text-black cursor-pointer flex items-center gap-2  font-[500] text-customGray`}
                >
                  <Link
                    href="/login"
                    className="hover:text-black cursor-pointer flex items-center gap-2 "
                  >
                    Login
                  </Link>
                </div>

                <MainButton text="Sign Up" action={handleSignupNavigation} />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
