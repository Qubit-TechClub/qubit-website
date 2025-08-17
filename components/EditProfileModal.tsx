"use client";

import { useState } from "react";
import { editProfile } from "@/actions/user";

const EditProfileModal = ({
  onClose,
  user,
}: {
  onClose: () => void;
  user: any;
}) => {
  const [name, setName] = useState(user?.name || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [about, setAbout] = useState(user?.about || "");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);

      let base64Image: string | undefined;
      if (image) {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        base64Image = await new Promise<string>((resolve) => {
          reader.onloadend = () => resolve(reader.result as string);
        });
      }

      await editProfile({
        name,
        gender,
        about,
        ...(base64Image && { image: base64Image }),
      });

      onClose();
      window.location.reload();
    } catch (err) {
      console.error("Failed to update profile:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 px-6 md:px-0">
      <div className="bg-gray-800 p-6 rounded-2xl w-full max-w-3xl relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          Edit Profile
        </h2>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">
              Profile Picture
            </label>
            <div className="flex items-center gap-4">
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : user?.image || "/avatar.png"
                }
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border-2 border-lime-400"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="text-sm text-gray-300"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-400"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">About</label>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Tell something interesting about you..."
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 h-24 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
          </div>

          <button
            onClick={handleSave}
            disabled={loading}
            className="mt-2 bg-lime-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-lime-500 transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
