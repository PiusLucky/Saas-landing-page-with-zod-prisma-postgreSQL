import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

interface ExtendedInputProps extends InputProps {
  startIcon?: "email" | "padlock" | "user";
}

const Input = React.forwardRef<HTMLInputElement, ExtendedInputProps>(
  ({ className, startIcon, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
            className,
            startIcon ? "pl-[3.8rem]" : ""
          )}
          ref={ref}
          {...props}
        />
        {startIcon && (
          <div className="absolute top-[1.2rem] left-[1.62rem]">
            <img
              src={
                startIcon === "email"
                  ? "/images/mail_icon.png"
                  : startIcon === "user"
                  ? "/images/user_icon.png"
                  : "/images/lock_icon.png"
              }
            />
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
