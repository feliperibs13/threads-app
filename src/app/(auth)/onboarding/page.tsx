import AccountProfile from "@/components/forms/account-profile";
import React from "react";
import { currentUser } from "@clerk/nextjs/server";

export default async function OnboardingPage() {
  const user = await currentUser();
  const userInfo = {};
  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.fullName,
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="text-heading2-bold text-light-1">Onboarding</h1>
      <p className="text-light-2 mt-2 text-base-regular">
        Complete your profile now to use Threads
      </p>
      <section className="mt-9 bg-dark-2 p-10 rounded-xl">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}
