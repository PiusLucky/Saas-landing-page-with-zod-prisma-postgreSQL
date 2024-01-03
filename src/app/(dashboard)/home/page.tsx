"use client";

import DashboardNavBar from "@/components/common/DashboardNavBar";
import MainButton from "@/components/common/MainButton";
import DashboardContentSection from "@/components/sections/DashboardContentSection";
import makeApiCallService from "@/service/apiService";
import { IUserProfileResponse } from "@/types";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [userProfile, setUserProfile] = useState<IUserProfileResponse | null>(
    null
  );

  const handleVerifyUser = async () => {
    if (verifyLoading) return;
    try {
      setVerifyLoading(true);
      const verifyResponse = await makeApiCallService<IUserProfileResponse>(
        "/api/dashboard/user-profile",
        {
          method: "POST",
          body: {},
        }
      );

      if (verifyResponse?.response?.meta?.success) {
        setRefreshKey(Math.random());
      }
      setVerifyLoading(false);
    } catch (err) {
      setVerifyLoading(false);
    }
  };

  useEffect(() => {
    async function fetch() {
      try {
        const response = await makeApiCallService<IUserProfileResponse>(
          "/api/dashboard/user-profile",
          {
            method: "GET",
          }
        );
        setUserProfile(response as IUserProfileResponse);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }

    fetch();
  }, [refreshKey]);

  return (
    <div className="mx-4 md:mx-16 mt-4 pb-16 ">
      <DashboardNavBar loading={loading} userProfile={userProfile} />
      <div className="flex justify-end mt-[1.49rem] ">
        {userProfile?.response?.data?.is_verified ? (
          <MainButton
            text="Verified"
            classes="bg-white cursor-not-allowed rounded-[1.0625rem] hover:bg-white text-primary font-[700] w-[6.1875rem] h-[2.875rem] button-shadow"
            iconRoute="/images/success_verify_icon.png"
          />
        ) : (
          <MainButton
            text="Verify me"
            dataLoadingText="Wait..."
            classes={`${
              verifyLoading ? "cursor-wait" : ""
            } bg-white rounded-[1.0625rem] hover:bg-white text-primary font-[700] w-[6.1875rem] h-[2.875rem] button-shadow`}
            action={handleVerifyUser}
            isLoading={verifyLoading}
          />
        )}
      </div>
      <DashboardContentSection
        loading={loading}
        userProfile={userProfile}
        refreshKey={refreshKey}
      />
    </div>
  );
}

export default Dashboard;
