"use server";

import { prisma } from "@/db/prisma";
import { imagekit } from "@/lib/imagekit";
import { getServerSession } from "next-auth";

export async function viewProfile() {
  const session = await getServerSession();
  if (!session?.user?.email) throw new Error("Unauthorized");

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      id: true,
      email: true,
      name: true,
      about:true,
      image: true,
      gender: true,
      role: true,
      total_xp: true,
      created_at: true,
    },
  });

  if (!user) throw new Error("User not found");

  return user;
}

export async function editProfile(data: {
  name?: string;
  image?: string; 
  gender?: string;
  about?: string;
}) {
  const session = await getServerSession();
  if (!session?.user?.email) throw new Error("Unauthorized");

  let imageUrl: string | undefined;

  if (data.image) {
    const uploadRes = await imagekit.upload({
      file: data.image, 
      fileName: `profile_${session.user.email}_${Date.now()}.jpg`,
      folder: "/profiles",
    });

    imageUrl = uploadRes.url;
  }

  return prisma.user.update({
    where: { email: session.user.email },
    data: {
      name: data.name,
      gender: data.gender,
      about: data.about,
      ...(imageUrl && { image: imageUrl }),
    },
    select: {
      id: true,
      email: true,
      name: true,
      about: true,
      image: true,
      gender: true,
      role: true,
      total_xp: true,
      created_at: true,
    },
  });
}

