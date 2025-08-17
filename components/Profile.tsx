"use client";

import React, { useState } from "react";
import EditProfileModal from "./EditProfileModal";

type User = {
  id: string;
  email: string;
  name: string | null;
  about: string | null;
  image: string | null;
  gender: string | null;
  role: string;
  total_xp: number;
  created_at: Date;
};

const Profile: React.FC<{ user: User }> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen text-white flex flex-col md:flex-row max-w-6xl mx-auto px-6 md:px-0 py-12 gap-12">
      {/* LEFT SIDE */}
      <div className="w-full md:w-2/3 flex flex-col gap-8">
        {/* Profile Card */}
        <div className="relative bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8">
          <img
            src={user?.image || "/avatar.png"}
            alt="Profile Image"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-lime-400/50 object-cover"
          />

          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="text-3xl font-bold">{user?.name}</h1>
            <p className="text-sm text-gray-300">{user?.email}</p>
            <p className="text-sm">
              Role:{" "}
              <span className="text-lime-400 font-bold">
                {user?.role || "Member"}
              </span>
            </p>
            <p className="text-sm">
              Gender:{" "}
              <span className="text-lime-400 font-bold">
                {user?.gender || "NA"}
              </span>
            </p>
            <p className="text-sm">
              Joined:{" "}
              <span className="font-medium text-gray-200">
                {new Date(user.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>
          </div>

          {/* Trophy Decoration */}
          <img
            src="/trophy.png"
            alt="Trophy"
            className="hidden lg:block absolute h-32 w-32 right-2 bottom-2 pointer-events-none"
          />

          {/* Edit Button */}
          <button
            onClick={() => setIsEditing(true)}
            className="absolute right-2 top-2 md:right-5 md:top-5 bg-lime-400 text-black px-2 py-1 md:px-4 md:py-2 rounded-lg"
          >
            Edit Profile
          </button>
        </div>

        {/* About Section */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-300 text-sm">
            {user?.about || "Add Something Interesting about You"}
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-lg font-semibold">AURA</h3>
            <p className="text-3xl font-bold text-lime-400">999 🔥</p>
          </div>
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-lg font-semibold">Level</h3>
            <p className="text-3xl font-bold text-lime-400">Pro</p>
          </div>
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-lg font-semibold">Rank</h3>
            <p className="text-3xl font-bold text-lime-400">#12</p>
          </div>
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-lg font-semibold">Events</h3>
            <p className="text-3xl font-bold text-lime-400">5</p>
          </div>
        </div>

        {/* Past Events */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
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

      {/* RIGHT SIDE */}
      <div className="hidden w-full md:w-1/3 md:flex flex-col justify-start items-end gap-10">
        <img
          src="/authImage.png"
          alt="Decorative"
          className="w-[90%] h-auto object-cover pointer-events-none"
        />
        <img
          src="/avatarStand.png"
          alt="Avatar Stand"
          className="w-[95%] pointer-events-none lg:-mr-6"
        />
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <EditProfileModal user={user} onClose={() => setIsEditing(false)} />
      )}
    </div>
  );
};

export default Profile;
