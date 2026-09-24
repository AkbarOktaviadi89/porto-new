import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { siteDescription, siteTitle, siteUrl } from "@/lib/site";
import { themeScript } from "./theme-toggle";
import "./globals.css";
import "./dark.css";
const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: siteTitle,
    description: siteDescription,
    alternates: { canonical: "/" },
    openGraph: {
        type: "profile",
        url: "/",
        siteName: "Akbar Oktaviadi",
        title: siteTitle,
        description: siteDescription,
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: siteTitle,
        description: siteDescription,
    },
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
    },
};
const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Akbar Oktaviadi",
    jobTitle: "Web Developer and Coding Mentor",
    url: siteUrl,
    image: `${siteUrl}/img/profile-new.png`,
    email: "mailto:akbaroktaviadi89@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Bandar Lampung", addressCountry: "ID" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Universitas Teknokrat Indonesia" },
    knowsAbout: ["Web development", "Laravel", "Next.js", "Golang", "Teaching programming", "Computer networking", "Cybersecurity"],
    sameAs: ["https://github.com/AkbarOktaviadi89", "https://www.linkedin.com/in/akbar-oktaviadi/", "https://instagram.com/akbaroktaa_"],
};
export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }}/>
      </head>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}/>
        {children}
      </body>
    </html>);
}
