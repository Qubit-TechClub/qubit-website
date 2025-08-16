import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Qubit - Tech Club Website",
  description: "Tech Club website of PWIOI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
