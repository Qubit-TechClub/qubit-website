"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Profile: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-400 text-lg animate-pulse">
          Loading Profile...
        </p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">
          You need to login to view your profile.
        </p>
      </div>
    );
  }

  const user = session.user;

  return (
    <div className="min-h-screen text-white flex flex-col md:flex-row max-w-6xl mx-auto px-6 md:px-0 py-12 gap-12">

      <div className="w-full md:w-1/2 flex flex-col gap-8">
        <div className="relative bg-gray-600 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8">
          <Image
            src={
              user?.image ||
              "https://png.pngtree.com/png-vector/20250601/ourlarge/pngtree-3d-animated-robot-avatar-png-image_16445053.png"
            }
            alt="Profile Image"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-lime-500 object-cover"
          />

          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="text-3xl font-bold">{user?.name}</h1>
            <p className="text-sm text-gray-300">{user?.email}</p>
            <p className="text-sm">
              Role:{" "}
              <span className="font-medium text-lime-400">
                {user?.role || "Member"}
              </span>
            </p>
            <p className="text-sm">
              Joined:{" "}
              <span className="font-medium text-gray-200">January 2025</span>
            </p>
          </div>
          <Image src="/trophy.png" alt="" className="hidden lg:block absolute h-32 w-32 right-2 bottom-2 pointer-events-none" />
        </div>

        <div className="bg-gray-600 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-300 text-sm">
            Passionate about technology, coding, and collaborating with
            like-minded members in our tech club. Always eager to learn new
            tools and frameworks.
          </p>
        </div>

        <div className="bg-gray-600 p-6 rounded-2xl shadow-lg flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">AURA</h3>
            <p className="text-3xl font-bold text-lime-400">999 🔥</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Level</h3>
            <p className="text-3xl font-bold text-lime-400">Pro</p>
          </div>
        </div>

        <div className="bg-gray-600 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Past Events</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((event) => (
              <div
                key={event}
                className="bg-gray-700 p-4 rounded-lg flex justify-center items-center text-gray-200"
              >
                Event {event}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden w-full md:w-1/2 md:flex flex-col justify-start items-center gap-10 lg:-mt-10">
        <Image
          src="https://framerusercontent.com/images/EEfzIxKu8ijHqN0QXlbXIfUowI.png?scale-down-to=2048"
          alt="Decorative"
          className="w-[80%] h-auto object-cover pointer-events-none"
        />
        <Image src="/avatarStand.png" alt="" className="w-[60%] pointer-events-none lg:-mr-10" />
      </div>
    </div>
  );
};

export default Profile;
