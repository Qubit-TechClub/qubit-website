import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qubit - Sign Up",
  description: "Sign Up now to level up your game",
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
