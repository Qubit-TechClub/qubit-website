import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qubit - Sign In",
  description: "Login now to level up your game",
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
