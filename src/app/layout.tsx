import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WARRANTY CLAIM — A Free Checklist by Rozaili",
  description: "A free checklist by Rozaili for anyone about to file a warranty claim. Decided on facts, in writing.",
  authors: [{ name: "Rozaili" }],
  keywords: ["warranty claim", "checklist", "consumer rights", "Rozaili", "appliance warranty", "invoice records"],
  openGraph: {
    title: "WARRANTY CLAIM — A Free Checklist by Rozaili",
    description: "A warranty claim is decided on records. Keep yours, and ask for theirs in writing.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-[#363C47] selection:bg-[#DBEAFE] selection:text-[#1E3A8A]">
        {children}
      </body>
    </html>
  );
}
