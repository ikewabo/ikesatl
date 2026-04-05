import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ike's Cafe and Grill | Premium African Cuisine in Atlanta",
  description: "Experience the rich, authentic flavors of Africa at Ike's Cafe and Grill. Ultra-premium dining in Atlanta, GA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased dark`}>
      <body className="min-h-[100dvh] flex flex-col bg-zinc-950 text-zinc-50 font-sans selection:bg-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
