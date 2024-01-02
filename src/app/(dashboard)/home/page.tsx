import DashboardNavBar from "@/components/common/DashboardNavBar";
import MainButton from "@/components/common/MainButton";
import DashboardContentSection from "@/components/sections/DashboardContentSection";
import React from "react";

function Dashboard() {
  return (
    <div className="mx-4 md:mx-16 mt-4 pb-16">
      <DashboardNavBar />
      <div className="flex justify-end mt-[1.49rem]">
        <MainButton
          text="Verify me"
          classes="bg-white rounded-[1.0625rem] hover:bg-white text-primary font-[700] w-[6.1875rem] h-[2.875rem] button-shadow"
        />
      </div>
      <DashboardContentSection />
    </div>
  );
}

export default Dashboard;
