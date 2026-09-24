import { Code2, Network, ShieldCheck } from "lucide-react";
type ProjectLink = { label: string; href: string };
type Project = { name: string; category: string; year: string; type: "creator" | "queue" | "inventory" | "learning" | "web" | "api" | "security"; domain?: string; desc: string; tags: string[]; role: string; scope: string[]; links: ProjectLink[] };
// Projects with a domain are live products and are listed first.
export const projects: Project[] = [
    {
        name: "Jeon.id", category: "Creator platform", year: "2026", type: "creator", domain: "jeon.id", desc: "An all-in-one link-in-bio platform for Indonesian creators to share content, sell digital products, and grow their audience from a single page.", tags: ["Next.js", "Golang", "PostgreSQL"], role: "Full-stack Developer", scope: ["Built the creator dashboard and public profile pages with Next.js.", "Developed the REST API in Go (Gin) on PostgreSQL and Redis.", "Supports custom themes, digital product sales, memberships, and click and revenue analytics.", "Containerized the stack with Docker and automated staging and production deploys with GitHub Actions."], links: [{ label: "Visit jeon.id", href: "https://jeon.id" }]
    },
    {
        name: "PIKO Queue System", category: "Queue management", year: "2025", type: "queue", domain: "antrian.piko.co.id", desc: "A car queue management system for PIKO Carwash & Cafe that registers incoming vehicles and keeps the wash queue organized for staff.", tags: ["Laravel", "PHP", "Queue system"], role: "Web Programmer", scope: ["Built the Laravel application behind the car wash queue, from vehicle registration to queue status.", "Restricted the queue form to signed-in staff accounts.", "Deployed and maintain it in production as part of PIKO's internal systems."], links: [{ label: "Visit antrian.piko.co.id", href: "https://antrian.piko.co.id" }]
    },
    {
        name: "PIKO Inventory System", category: "Inventory management", year: "2025", type: "inventory", domain: "d.piko.co.id", desc: "StokApp, an inventory system that tracks PIKO's stock and production, installable as a progressive web app for quick access on staff devices.", tags: ["Next.js", "PWA", "Inventory"], role: "Web Programmer", scope: ["Built the stock and production management app with Next.js.", "Made it installable as a PWA so staff can launch it from the home screen.", "Runs in production behind account sign-in for PIKO staff."], links: [{ label: "Visit d.piko.co.id", href: "https://d.piko.co.id" }]
    },
    {
        name: "Noodu", category: "Learning platform", year: "2026", type: "learning", domain: "noodu.id", desc: "A project-based learning platform for digital careers, where learners build real projects with practitioner mentors instead of only watching videos.", tags: ["Next.js", "PostgreSQL", "Redis"], role: "Web Developer", scope: ["Developed the Next.js platform, including the CMS-driven public website.", "Supports three learning paths: one-on-one case project mentoring, cohort training, and self-paced courses with quizzes and certificates.", "Structured as a Turborepo monorepo on PostgreSQL and Redis."], links: [{ label: "Visit noodu.id", href: "https://noodu.id" }]
    },
    {
        name: "Metatekno", category: "Creative development", year: "2025", type: "web", desc: "A metaverse-themed website that pairs interactive Three.js scenes with a Laravel CMS, so non-technical admins can update text, images, and 3D objects.", tags: ["Three.js", "Laravel", "CMS"], role: "Web Developer", scope: ["Built the interactive homepage with dynamic 3D objects rendered in Three.js.", "Developed the Laravel backend and a CMS for managing text, images, and 3D objects.", "Connected the visual experience to content workflows designed for non-technical administrators."], links: []
    },
    {
        name: "Bytecode", category: "Backend engineering", year: "2023", type: "api", desc: "The Java backend of a MOOC platform, serving learners, courses, and learning progress through RESTful APIs.", tags: ["Java", "REST API", "Database"], role: "Backend Developer", scope: ["Developed and maintained backend features for the learning platform in Java.", "Designed and implemented the RESTful APIs behind platform features.", "Integrated the database for user data, course content, and learning-progress tracking.", "Worked with front-end developers to keep integration smooth."], links: []
    },
    {
        name: "Badstore Pentest", category: "Security assessment", year: "2024", type: "security", desc: "A penetration test of the Badstore training web app, from vulnerability discovery to a risk-rated report with remediation advice.", tags: ["Burp Suite", "OWASP ZAP", "Pentest"], role: "Penetration Tester", scope: ["Tested the Badstore website to identify security vulnerabilities.", "Assessed the application with Burp Suite and OWASP ZAP.", "Wrote and presented a report covering findings, risk assessment, and remediation recommendations."], links: []
    }
];
export const experience = [
    {
        date: "NOV 2025 — PRESENT", role: "Teacher", company: "Algorithmics Global", desc: "Teach game development with Roblox Studio, Python fundamentals, and visual programming, helping students develop creativity and problem-solving skills.", tags: ["Roblox Studio", "Python", "Visual programming"]
    },
    {
        date: "AUG 2025 — PRESENT", role: "Web Programmer & System Administrator", company: "PIKO Carwash & Cafe", desc: "Develop business applications, administer servers and deployments, integrate APIs, and manage firewalls, SSL, databases, backups, and disaster recovery.", tags: ["Web applications", "Linux servers", "API integration", "Firewall & SSL", "Backups"]
    },
    {
        date: "DEC 2024 — MAR 2025", role: "IT Support Technician Intern", company: "Diskominfo Pesawaran", desc: "Supported hardware installation and maintenance, troubleshot LAN and internet connectivity, and contributed to website development using Laravel.", tags: ["Hardware support", "LAN troubleshooting", "Laravel"]
    },
    {
        date: "JUL 2023 — JAN 2025", role: "Teaching Assistant", company: "Universitas Teknokrat Indonesia", desc: "Supported networking and programming lectures, guided discussions, and helped students understand complex technical concepts.", tags: ["Networking", "Programming"]
    },
    {
        date: "FEB 2023 — OCT 2024", role: "Network Systems Tutor", company: "Universitas Teknokrat Indonesia", desc: "Delivered practical and theoretical training in computer networking and network security.", tags: ["Computer networking", "Network security"]
    },
    {
        date: "NOV 2019 — MAR 2020", role: "Network Administrator", company: "BLC Pesawaran", desc: "Taught MTCNA topics, installed client Wi-Fi networks, and resolved network and server issues.", tags: ["MikroTik (MTCNA)", "Wi-Fi installation", "Server troubleshooting"]
    }
];
export const domains = [
    {
        icon: Code2, title: "Backend", line: "The logic behind the experience.", desc: "Web applications, RESTful APIs, and database integrations designed around real operational needs.", tags: ["Laravel", "Java", "RESTful API", "Python", "Database"]
    },
    {
        icon: Network, title: "Infrastructure", line: "Connected. Reliable. Ready.", desc: "Linux servers, deployments, backups, routing, and reliable connectivity for everyday operations.", tags: ["Linux", "MikroTik", "Cisco", "Docker", "Networking"]
    },
    {
        icon: ShieldCheck, title: "Cybersecurity", line: "Security starts with understanding.", desc: "Vulnerability assessment, threat analysis, and practical remediation to strengthen system security.", tags: ["Penetration testing", "Threat intelligence", "Burp Suite", "OWASP ZAP"]
    }
];
export const certifications = [{
        code: "CEH", name: "Certified Ethical Hacker", org: "EC-Council", date: "JUN 2024", credential: null, url: null
    }, {
        code: "CTIA", name: "Certified Threat Intelligence Analyst", org: "EC-Council", date: "JUN 2024", credential: null, url: null
    }, {
        code: "MTCRE", name: "MikroTik Certified Routing Engineer", org: "MikroTik", date: "NOV 2020", credential: "2011RE4583", url: "https://mikrotik.com/training/certificates/c194583ce91199d20948"
    }, {
        code: "MTCNA", name: "MikroTik Certified Network Associate", org: "MikroTik", date: "OCT 2020", credential: "2010NA4308", url: "https://mikrotik.com/training/certificates/c194308ce66b4a5988f7"
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
