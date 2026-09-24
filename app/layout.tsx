import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
export const metadata: Metadata = {
    title: "Akbar Oktaviadi — Web Developer and Coding Mentor",
    description: "Akbar Oktaviadi is a web developer and coding mentor based in Bandar Lampung, Indonesia, with a background in networking and cybersecurity. Explore selected projects, professional experience, and certifications.",
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
    },
};
export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>);
}
