import { Code2, Network, ShieldCheck } from "lucide-react";
type ProjectLink = { label: string; href: string };
// Add live-site, repository, or report URLs here to show them in the project dialog.
export const projects: { name: string; category: string; year: string; type: string; title: string; desc: string; tags: string[]; role: string; scope: string[]; links: ProjectLink[]; icon: string }[] = [
    {
        name: "Metatekno", category: "Creative development", year: "2025", type: "web", title: "A new dimension of the web.", desc: "An interactive metaverse website combining dynamic 3D experiences with an accessible content management system.", tags: ["Three.js", "Laravel", "CMS"], role: "Web Developer", scope: ["Developed the interactive homepage with dynamic 3D objects using Three.js.", "Built the Laravel backend and CMS for managing text, images, and 3D objects.", "Connected the visual experience to content workflows designed for non-technical administrators."], links: [], icon: "◎"
    },
    {
        name: "Bytecode", category: "Backend engineering", year: "2023", type: "api", title: "Built for the way we learn.", desc: "A Java backend for a MOOC platform, connecting learners, courses, and learning progress through RESTful APIs.", tags: ["Java", "REST API", "Database"], role: "Backend Developer", scope: ["Developed and maintained backend functionality for the learning platform.", "Designed and implemented RESTful APIs to support platform features.", "Integrated user, course, and learning-progress data in collaboration with frontend developers."], links: [], icon: "{ }"
    },
    {
        name: "Badstore", category: "Security assessment", year: "2024", type: "security", title: "Find the gaps. Strengthen the system.", desc: "A penetration testing assessment of the Badstore training environment, from vulnerability discovery to remediation recommendations.", tags: ["Burp Suite", "OWASP ZAP", "Pentest"], role: "Penetration Tester", scope: ["Performed penetration testing on the Badstore website to identify security vulnerabilities.", "Used Burp Suite and OWASP ZAP to assess the application.", "Prepared and presented a report covering findings, risk assessment, and remediation recommendations."], links: [], icon: "[ / ]"
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
