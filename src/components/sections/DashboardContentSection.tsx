"use client";

import React, { useEffect, useState } from "react";
import DashboardTable from "../tables/DashboardTable";
import {
  IUserProfileResponse,
  IUsersListingResponse,
  IUsersMetricResponse,
} from "@/types";
import { Skeleton } from "../ui/skeleton";
import makeApiCallService from "@/service/apiService";

interface IProps {
  loading: boolean;
  userProfile: IUserProfileResponse | null;
  refreshKey: number;
}

function DashboardContentSection({ loading, userProfile, refreshKey }: IProps) {
  const [loadingDashboardContent, setLoadingDashboardContent] = useState(true);
  const [usersMetric, setUsersMetric] = useState<IUsersMetricResponse | null>(
    null
  );

  const [
    usersListing,
    setUsersListing,
  ] = useState<IUsersListingResponse | null>(null);

  const userMetric = [
    {
      iconPath: "/images/user_alt_icon.png",
      title: "Users",
      count: usersMetric?.response?.data?.totalUsers,
    },
    {
      iconPath: "/images/stylish_check_icon.png",
      title: "Total Verified",
      count: usersMetric?.response?.data?.totalVerifiedUsers,
    },
    {
      iconPath: "/images/channel_icon.png",
      title: "Channels",
      count: usersMetric?.response?.data?.totalChannels,
    },
  ];

  useEffect(() => {
    async function fetch() {
      try {
        const usersMetricResponse = await makeApiCallService<
          IUsersMetricResponse
        >("/api/dashboard/users-metric", {
          method: "GET",
        });

        const usersListingResponse = await makeApiCallService<
          IUsersListingResponse
        >("/api/dashboard/users-listing", {
          method: "GET",
        });

        setUsersMetric(usersMetricResponse as IUsersMetricResponse);

        setUsersListing(usersListingResponse as IUsersListingResponse);

        setLoadingDashboardContent(false);
      } catch (err) {
        setLoadingDashboardContent(false);
      }
    }

    fetch();
  }, [refreshKey]);

  return (
    <section>
      <div>
        <div className="text-2xl mt-8 md:text-[3rem] flex gap-4 items-center">
          <span className="text-[#6D7580]">Hi </span>
          {loading ? (
            <Skeleton className="w-[10rem] h-[2rem]" />
          ) : (
            <span className="text-[#2B3A4B]">
              {userProfile?.response?.data?.full_name},
            </span>
          )}
        </div>
        <div className="text-[#858C94] mt-4 md:text-[1.5rem] flex gap-4">
          It&apos;s nice to see you back. Channel{" "}
          <strong>
            {loading ? (
              <Skeleton className="w-[5rem] h-[2rem]" />
            ) : (
              <span className="text-[#2B3A4B]">
                ({userProfile?.response?.data?.randomize_channel})
              </span>
            )}
          </strong>
        </div>
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
              <div className="text-[#A3AED0] text-[1rem]">
                {loadingDashboardContent ? (
                  <Skeleton className="w-[5rem] h-[2rem]" />
                ) : (
                  <span>{metric.title}</span>
                )}
              </div>
              <div className="text-[#1B2559] text-[2.25rem]">
                {loadingDashboardContent ? (
                  <Skeleton className="w-[5rem] h-[2rem]" />
                ) : (
                  <span>{metric.count}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {loadingDashboardContent ? (
        <div className="flex flex-col gap-8">
          <Skeleton className="h-[3rem] w-full" />
          <Skeleton className="h-[3rem] w-full" />
          <Skeleton className="h-[3rem] w-full" />
        </div>
      ) : (
        <DashboardTable usersListing={usersListing} />
      )}
    </section>
  );
}

export default DashboardContentSection;
