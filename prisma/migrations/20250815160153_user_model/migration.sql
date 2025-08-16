-- CreateEnum
CREATE TYPE "public"."RoleName" AS ENUM ('PRESIDENT', 'CORE_MEMBER', 'VOLUNTEER', 'MEMBER', 'OTHER');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "gender" TEXT,
    "role" "public"."RoleName" NOT NULL DEFAULT 'MEMBER',
    "total_xp" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");
