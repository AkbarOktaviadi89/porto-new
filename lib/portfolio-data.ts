import { Code2, GraduationCap, ShieldCheck } from "lucide-react";
type ProjectLink = { label: string; href: string };
type Project = { name: string; category: string; year: string; type: "creator" | "queue" | "inventory" | "learning" | "shop" | "tracker" | "paper" | "web" | "api" | "security"; domain?: string; desc: string; tags: string[]; role: string; scope: string[]; links: ProjectLink[] };
// Projects with a domain are live products and are listed first.
export const projects: Project[] = [
    {
        name: "Jeon.id", category: "Creator platform", year: "2026", type: "creator", domain: "jeon.id", desc: "An all-in-one link-in-bio platform for Indonesian creators to share content, sell digital products, and grow their audience from a single page.", tags: ["Next.js", "Golang", "PostgreSQL"], role: "Full-stack Developer", scope: ["Built the creator dashboard and public profile pages with Next.js.", "Developed the REST API in Go (Gin) on PostgreSQL and Redis.", "Supports custom themes, digital product sales, memberships, and click and revenue analytics.", "Containerized the stack with Docker and automated staging and production deploys with GitHub Actions."], links: [{ label: "Visit jeon.id", href: "https://jeon.id" }]
    },
    {
        name: "Noodu", category: "Learning platform", year: "2026", type: "learning", domain: "noodu.id", desc: "A project-based learning platform for digital careers, where learners build real projects with practitioner mentors instead of only watching videos.", tags: ["Next.js", "PostgreSQL", "Redis"], role: "Web Developer", scope: ["Developed the Next.js platform, including the CMS-driven public website.", "Supports three learning paths: one-on-one case project mentoring, cohort training, and self-paced courses with quizzes and certificates.", "Structured as a Turborepo monorepo on PostgreSQL and Redis."], links: [{ label: "Visit noodu.id", href: "https://noodu.id" }]
    },
    {
        name: "CyberTrack", category: "Bug bounty learning", year: "2026", type: "tracker", domain: "cyber-track-v1.vercel.app", desc: "A bug bounty learning OS that keeps cybersecurity writeups, tools, and cheatsheets in one place and tracks learning progress across topics.", tags: ["Next.js", "Supabase", "Cybersecurity"], role: "Full-stack Developer", scope: ["Built the app with Next.js and Supabase for authentication and data storage.", "Organized study material into writeups, a tools library, and cheatsheets.", "Tracks learning progress so it is clear what has been covered and what comes next."], links: [{ label: "Visit CyberTrack", href: "https://cyber-track-v1.vercel.app/" }]
    },
    {
        name: "Kubbahari", category: "E-commerce", year: "2026", type: "shop", domain: "kubbahari.web.id", desc: "An online store for the Kelompok Usaha Bersama Bahari fishing cooperative, selling premium dried anchovies and squid sourced directly from local fishermen.", tags: ["Laravel", "Xendit", "WhatsApp API"], role: "Web Developer", scope: ["Built the Laravel 10 storefront with a product catalog, cart, and checkout.", "Integrated Xendit payments (bank transfer and QRIS) with webhook-based order status updates.", "Sent order notifications over WhatsApp through the Fonnte API.", "Added an admin panel for products, orders, testimonials, and store settings."], links: [{ label: "Visit kubbahari.web.id", href: "https://kubbahari.web.id" }]
    },
    {
        name: "PIKO Queue System", category: "Queue management", year: "2025", type: "queue", domain: "antrian.piko.co.id", desc: "A car queue management system for PIKO Carwash & Cafe that registers incoming vehicles and keeps the wash queue organized for staff.", tags: ["Laravel", "PHP", "Queue system"], role: "Web Developer", scope: ["Built the Laravel application behind the car wash queue, from vehicle registration to queue status.", "Restricted the queue form to signed-in staff accounts.", "Deployed and maintain it in production as part of PIKO's internal systems."], links: [{ label: "Visit antrian.piko.co.id", href: "https://antrian.piko.co.id" }]
    },
    {
        name: "PIKO Inventory System", category: "Inventory management", year: "2025", type: "inventory", domain: "d.piko.co.id", desc: "StokApp, an inventory system that tracks PIKO's stock and production, installable as a progressive web app for quick access on staff devices.", tags: ["Next.js", "PWA", "Inventory"], role: "Web Developer", scope: ["Built the stock and production management app with Next.js.", "Made it installable as a PWA so staff can launch it from the home screen.", "Runs in production behind account sign-in for PIKO staff."], links: [{ label: "Visit d.piko.co.id", href: "https://d.piko.co.id" }]
    },
    {
        name: "Metatekno", category: "Creative development", year: "2025", type: "web", desc: "A metaverse-themed website that pairs interactive Three.js scenes with a Laravel CMS, so non-technical admins can update text, images, and 3D objects.", tags: ["Three.js", "Laravel", "CMS"], role: "Web Developer", scope: ["Built the interactive homepage with dynamic 3D objects rendered in Three.js.", "Developed the Laravel backend and a CMS for managing text, images, and 3D objects.", "Connected the visual experience to content workflows designed for non-technical administrators."], links: []
    },
    {
        name: "Bytecode", category: "Backend engineering", year: "2023", type: "api", desc: "The Java backend of a MOOC platform, serving learners, courses, and learning progress through RESTful APIs.", tags: ["Java", "REST API", "Database"], role: "Backend Developer", scope: ["Developed and maintained backend features for the learning platform in Java.", "Designed and implemented the RESTful APIs behind platform features.", "Integrated the database for user data, course content, and learning-progress tracking.", "Worked with front-end developers to keep integration smooth."], links: []
    },
    {
        name: "Badstore Pentest", category: "Security assessment", year: "2024", type: "security", desc: "A penetration test of the Badstore training web app, from vulnerability discovery to a risk-rated report with remediation advice.", tags: ["Burp Suite", "OWASP ZAP", "Pentest"], role: "Penetration Tester", scope: ["Tested the Badstore website to identify security vulnerabilities.", "Assessed the application with Burp Suite and OWASP ZAP.", "Wrote and presented a report covering findings, risk assessment, and remediation recommendations."], links: []
    },
    {
        name: "Centralized Wireless Network", category: "Paper · Networking", year: "2020", type: "paper", desc: "A paper on designing and implementing a centrally managed wireless network for a company, focused on scalability, security, and easy monitoring.", tags: ["Wireless", "Network design", "Paper"], role: "Author", scope: ["Designed and implemented a centrally managed wireless network to support company operations.", "Used network devices and management systems for scalability, security, and easy monitoring.", "Tuned access point configuration for stable, secure coverage across the work area."], links: []
    }
];
export const experience = [
    {
        date: "NOV 2025 — PRESENT", role: "Teacher", company: "Algorithmics Global", points: ["Teach game development with Roblox Studio, focusing on game design, creativity, and problem solving.", "Introduce Python fundamentals and visual programming to build coding and computational thinking skills."], tags: ["Roblox Studio", "Python", "Visual programming"]
    },
    {
        date: "AUG 2025 — PRESENT", role: "Web Developer & System Administrator", company: "PIKO Carwash & Cafe", points: ["Develop, maintain, and optimize web applications that support daily business operations.", "Manage server infrastructure and deployments, and tune system performance.", "Implement security measures including firewalls, SSL, and access control.", "Handle database management, backups, and disaster recovery.", "Monitor system health, troubleshoot issues, and keep services highly available.", "Integrate APIs and external services with the team and maintain technical documentation."], tags: ["Web applications", "Linux servers", "API integration", "Firewall & SSL", "Backups"]
    },
    {
        date: "DEC 2024 — MAR 2025", role: "IT Support Technician Intern", company: "Diskominfo Pesawaran", points: ["Installed, configured, and maintained computers, printers, routers, and switches.", "Troubleshot LAN and internet connectivity to keep office operations running.", "Contributed to developing and maintaining the Diskominfo Pesawaran website with Laravel."], tags: ["Hardware support", "LAN troubleshooting", "Laravel"]
    },
    {
        date: "JUL 2023 — JAN 2025", role: "Teaching Assistant", company: "Universitas Teknokrat Indonesia", points: ["Supported lecturers in delivering networking and programming courses.", "Explained complex topics, guided discussions, and answered student questions.", "Occasionally led teaching sessions to reinforce course objectives."], tags: ["Networking", "Programming"]
    },
    {
        date: "FEB 2023 — OCT 2024", role: "Network Systems Tutor", company: "Universitas Teknokrat Indonesia", points: ["Delivered theory and hands-on training in computer networking and network security to members."], tags: ["Computer networking", "Network security"]
    },
    {
        date: "NOV 2019 — MAR 2020", role: "Network Administrator", company: "BLC Pesawaran", points: ["Taught MTCNA (MikroTik Certified Network Associate) material.", "Installed Wi-Fi networks for clients.", "Resolved network and server issues such as errors and dropped connections."], tags: ["MikroTik (MTCNA)", "Wi-Fi installation", "Server troubleshooting"]
    }
];
export const domains = [
    {
        icon: Code2, title: "Web development", line: "From idea to production.", desc: "Web applications, RESTful APIs, and database integrations built around real operational needs, then deployed and maintained in production.", tags: ["Laravel", "Next.js", "Golang", "PostgreSQL", "REST API"]
    },
    {
        icon: GraduationCap, title: "Mentoring", line: "Making complex ideas clear.", desc: "Teaching programming and computer networking to kids, vocational students, and university students, from first lines of code to hands-on labs.", tags: ["Python", "Roblox Studio", "Networking", "MikroTik"]
    },
    {
        icon: ShieldCheck, title: "Infrastructure & security", line: "Reliable, and secure by default.", desc: "Linux servers, deployments, backups, and firewalls, backed by penetration testing work recognized with a Hall of Fame listing.", tags: ["Linux", "Docker", "Firewall & SSL", "Pentest", "CEH"]
    }
];
export const certifications = [{
        code: "CEH", name: "Certified Ethical Hacker", org: "EC-Council", date: "JUN 2024", credential: null, url: "https://drive.google.com/file/d/1BNBujGlzD30ZQy4aKemyqbzc8AJ8tEhL/view?usp=sharing"
    }, {
        code: "CTIA", name: "Certified Threat Intelligence Analyst", org: "EC-Council", date: "JUN 2024", credential: null, url: "https://drive.google.com/file/d/1px46pOTkldGRPXKTFigQUNAfG3nKN_oJ/view?usp=sharing"
    }, {
        code: "MTCRE", name: "MikroTik Certified Routing Engineer", org: "MikroTik", date: "NOV 2020", credential: "2011RE4583", url: "https://mikrotik.com/training/certificates/c194583ce91199d20948"
    }, {
        code: "MTCNA", name: "MikroTik Certified Network Associate", org: "MikroTik", date: "OCT 2020", credential: "2010NA4308", url: "https://mikrotik.com/training/certificates/c194308ce66b4a5988f7"
    }, {
        code: "JrPT", name: "Jr Penetration Tester", org: "TryHackMe", date: "FEB 2023", credential: "THM-0MFJXFIKOK", url: "https://tryhackme.com/certificate/THM-0MFJXFIKOK"
    }, {
        code: "PenTest+", name: "CompTIA PenTest+ Path", org: "TryHackMe", date: "MAR 2023", credential: "THM-GIDJNPHAP9", url: "https://tryhackme.com/certificate/THM-GIDJNPHAP9"
    }];
export const competencies = [
    {
        title: "Junior Network Technician", date: "JUNE 10, 2023", image: "/credentials/junior-network-technician.jpg", desc: "Passed the university’s competence-based assessment in network technology.", alt: "Certificate of Competence awarded to Akbar Oktaviadi as a Junior Network Technician on June 10, 2023"
    },
    {
        title: "Junior Mobile Application Programmer", date: "JUNE 10, 2023", image: "/credentials/junior-mobile-application-programmer.jpg", desc: "Passed the university’s competence-based assessment in mobile application programming.", alt: "Certificate of Competence awarded to Akbar Oktaviadi as a Junior Mobile Application Programmer on June 10, 2023"
    }
];
export const education = [
    {
        kind: "Degree", school: "Universitas Teknokrat Indonesia", program: "Bachelor of Informatics", date: "JUL 2021 — JUL 2025", gpa: "3.82", points: ["Teaching assistant for networking and programming courses.", "Mawapres award for Work of Innovation in Metaverse Development (2024).", "Competency certificates as Junior Network Technician and Junior Mobile Application Programmer."], tags: ["Informatics", "Networking", "Web development"]
    },
    {
        kind: "Training", school: "Metrodata Academy", program: "Cyber Red Team · Threat Analyst & Penetration Tester", date: "MAR 2024 — JUN 2024", gpa: null, points: ["Performed vulnerability assessments and penetration tests on a range of systems.", "Simulated cyberattacks with the team and developed mitigation strategies.", "Took part in threat hunting and threat analysis to strengthen security posture."], tags: ["Penetration testing", "Threat hunting", "Red teaming"]
    },
    {
        kind: "Training", school: "Binar Academy", program: "Backend Java", date: "AUG 2023 — DEC 2023", gpa: null, points: ["Built backend applications in Java with a focus on RESTful APIs.", "Worked with front-end developers to integrate user interface elements.", "Participated in code reviews and knowledge sharing within the team."], tags: ["Java", "RESTful API", "Code review"]
    }
];
export const courses = ["Linux System Administration", "Cloud Practitioner Essentials", "Docker Fundamentals"];
export const awards = [
    {
        place: "1st Place", title: "MikroTik–APJII Network Olympiad 2020", issuer: "MikroTik & APJII · National, vocational high school level", date: "OCT 2020", image: "/credentials/award-mikrotik-apjii-olympiad-2020.jpg", width: 608, height: 860, alt: "Certificate naming Akbar Oktaviadi 1st place in the national MikroTik–APJII Network Olympiad 2020"
    },
    {
        place: "1st Place", title: "Cyber Security Competition", issuer: "Gebyar Mahasiswa FTIK 2024 · Universitas Teknokrat Indonesia", date: "NOV 2024", image: "/credentials/award-cyber-security-competition-2024.jpg", width: 3084, height: 2248, alt: "Certificate naming Akbar Oktaviadi 1st winner of the Cyber Security Competition at Gebyar Mahasiswa FTIK 2024"
    },
    {
        place: "2nd Place", title: "Mobile Programming II", issuer: "Teknokrat Academic Expo 2024 · Team Combased Teknokrat", date: "JAN 2024", image: "/credentials/award-mobile-programming-expo-2024.jpg", width: 2640, height: 1916, alt: "Certificate awarding team Combased Teknokrat 2nd place in Mobile Programming II at Teknokrat Academic Expo 2024"
    },
    {
        place: "Award", title: "Work of Innovation in Metaverse Development", issuer: "Universitas Teknokrat Indonesia", date: "MAR 2024", image: "/credentials/award-metaverse-innovation-2024.jpg", width: 2568, height: 1804, alt: "Certificate of appreciation from Universitas Teknokrat Indonesia to Akbar Oktaviadi for innovation in metaverse development"
    },
    {
        place: "Appreciation", title: "Metaverse School of SMA Al-Kautsar", issuer: "SMA Al-Kautsar Bandar Lampung", date: "AUG 2024", image: "/credentials/award-metaverse-school-al-kautsar-2024.jpg", width: 2568, height: 1824, alt: "Certificate of appreciation to Akbar Oktaviadi for contributions to the Metaverse School of SMA Al-Kautsar"
    }
];
export const teaching = [
    {
        org: "Algorithmics Global", role: "Coding teacher", audience: "Kids", date: "2025 — now", topics: ["Roblox Studio", "Python", "Visual programming"], desc: "Game development and Python fundamentals, built around design, creativity, and problem solving."
    },
    {
        org: "Universitas Teknokrat Indonesia", role: "Teaching assistant", audience: "University", date: "2023 — 2025", topics: ["Networking", "Programming"], desc: "Supported networking and programming courses, guided discussions, and led occasional sessions."
    },
    {
        org: "Universitas Teknokrat Indonesia", role: "Network systems tutor", audience: "University", date: "2023 — 2024", topics: ["Networking", "Network security"], desc: "Theory and hands-on training in computer networking and network security for student members."
    },
    {
        org: "Vocational high school", role: "MikroTik instructor", audience: "Vocational", date: "2022", topics: ["MTCNA", "Routing", "Wireless", "Firewall"], desc: "MTCNA material covering routing, bridging, wireless, and firewall, with hands-on MikroTik configuration."
    },
    {
        org: "BLC Pesawaran", role: "MTCNA trainer", audience: "Adults", date: "2019 — 2020", topics: ["MTCNA", "MikroTik"], desc: "Taught MTCNA topics alongside network administration work."
    }
];
