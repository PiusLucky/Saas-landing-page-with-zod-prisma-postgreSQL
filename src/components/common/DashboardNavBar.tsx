"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { IUserProfileResponse } from "@/types";

interface IProps {
  loading: boolean;
  userProfile: IUserProfileResponse | null;
}

function getInitials(inputString: string) {
  const words = inputString.split(" ");
  const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
  return initials;
}

function DashboardNavBar({ loading, userProfile }: IProps) {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <div className="flex justify-end">
      <Popover>
        <PopoverTrigger>
          <div className="flex gap-4 items-center ">
            {loading ? (
              <Skeleton className="w-[2.07463rem] h-[2.07463rem] rounded-full" />
            ) : (
              <div>
                <Avatar className="w-[2.07463rem] h-[2.07463rem]">
                  <AvatarImage src="" className="object-cover" />
                  <AvatarFallback>
                    {getInitials(userProfile?.response?.data?.full_name || "")}
                  </AvatarFallback>
                </Avatar>
              </div>
            )}

            <div>
              <img src="/images/chevron_down_icon.png" alt="chevron down" />
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="w-[100px] cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DashboardNavBar;
