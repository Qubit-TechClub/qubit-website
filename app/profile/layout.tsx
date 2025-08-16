import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qubit - Profile",
  description: "User Profile Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        {children}
      </div>
  );
}
