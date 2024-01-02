import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function DashboardNavBar() {
  return (
    <div className="flex gap-4 items-center justify-end">
      <div>
        <Avatar className="w-[2.07463rem] h-[2.07463rem]">
          <AvatarImage src="" className="object-cover" />
          <AvatarFallback>LP</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <img src="/images/chevron_down_icon.png" alt="chevron down" />
      </div>
    </div>
  );
}

export default DashboardNavBar;
