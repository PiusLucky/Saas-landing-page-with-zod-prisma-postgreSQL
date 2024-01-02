import React from "react";
import DashboardTable from "../tables/DashboardTable";

function DashboardContentSection() {
  const userMetric = [
    {
      iconPath: "/images/user_alt_icon.png",
      title: "Users",
      count: "450",
    },
    {
      iconPath: "/images/stylish_check_icon.png",
      title: "Total Verified",
      count: "350",
    },
    {
      iconPath: "/images/channel_icon.png",
      title: "Channels",
      count: "3",
    },
  ];
  return (
    <section>
      <div>
        <p className="text-[3rem]">
          <span className="text-[#6D7580]">Hi </span>
          <span className="text-[#2B3A4B]">Lucky,</span>
        </p>
        <p className="text-[#858C94] text-[1.5rem]">
          It&apos;s nice to see you back.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-16 mt-[3.69rem] mb-[5.44rem]">
        {userMetric.map((metric, index) => (
          <div
            className="dashboard-card-shadow flex gap-[1.64rem] p-[1.25rem] flex-grow"
            key={index}
          >
            <div>
              <img src={metric.iconPath} alt="metric icon" />
            </div>

            <div className="flex flex-col gap-[0.46rem]">
              <p className="text-[#A3AED0] text-[1rem]">{metric.title}</p>
              <p className="text-[#1B2559] text-[2.25rem]">{metric.count}</p>
            </div>
          </div>
        ))}
      </div>
      <DashboardTable />
    </section>
  );
}

export default DashboardContentSection;
