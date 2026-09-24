import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
    title: "Akbar Oktaviadi — Backend, Networks & Cybersecurity",
    description: "Akbar Oktaviadi is a backend developer, network engineer, and cybersecurity enthusiast based in Bandar Lampung, Indonesia. Explore selected projects, professional experience, and certifications.",
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
    },
};
export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<html lang="en">
      <body className="antialiased">{children}</body>
    </html>);
}
