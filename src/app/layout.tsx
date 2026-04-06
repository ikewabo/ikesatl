import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'agent-id': string }, HTMLElement>;
    }
  }
}
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

        {/* ElevenLabs Conversational Agent */}
        {/* @ts-expect-error Custom ElevenLabs Web Component */}
        <elevenlabs-convai agent-id="agent_0201knhhmwnbfh6rqtxtn45psb8g"></elevenlabs-convai>
        <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" strategy="lazyOnload" />
      </body>
    </html>
  );
}
