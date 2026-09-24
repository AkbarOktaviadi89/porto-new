"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Copy, Check, Download, Menu, X, Pause, Play, RotateCcw, ShieldCheck, GraduationCap, Plus, Maximize2, Award, Trophy, Fish, ShoppingCart, ChevronDown } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import Scene from "./scene";
import { BrandMark } from "@/components/brand-mark";
import { projects, experience, domains, certifications, competencies, education, courses, awards } from "@/lib/portfolio-data";
export default function Home() {
    const [project, setProject] = useState<number | null>(null);
    const [showAllExperience, setShowAllExperience] = useState(false);
    const [certificate, setCertificate] = useState<{ title: string; meta: string; image: string; width: number; height: number; alt: string } | null>(null);
    const [menu, setMenu] = useState(false);
    const [paused, setPaused] = useState(false);
    const [mode, setMode] = useState(0);
    const [reset, setReset] = useState(0);
    const [active, setActive] = useState("home");
    const [copied, setCopied] = useState(false);
    const [time, setTime] = useState("UTC+7");
    const [motion, setMotion] = useState(false);
    const progress = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPaused(media.matches);
        setMotion(!media.matches);
        const change = () => {
            setPaused(media.matches);
            setMotion(!media.matches);
        };
        media.addEventListener("change", change);
        const clock = () => setTime(new Intl.DateTimeFormat("en-GB", {
            timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", hour12: false
        }).format(new Date()) + " UTC+7");
        clock();
        const interval = setInterval(clock, 60000);
        const scroll = () => {
            if (progress.current)
                progress.current.style.transform = `scaleX(${window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)})`;
        };
        window.addEventListener("scroll", scroll, { passive: true });
        const observer = new IntersectionObserver(entries => entries.forEach(e => {
            if (e.isIntersecting)
                setActive(e.target.id);
        }), { rootMargin: "-20% 0px -55% 0px" });
        document.querySelectorAll("main section[id]").forEach(s => observer.observe(s));
        return () => {
            clearInterval(interval);
            observer.disconnect();
            window.removeEventListener("scroll", scroll);
            media.removeEventListener("change", change);
        };
    }, []);
    async function copyEmail() {
        try {
            await navigator.clipboard.writeText("akbaroktaviadi89@gmail.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
        catch {
            window.location.href = "mailto:akbaroktaviadi89@gmail.com";
        }
    }
    const projectCard = (p: (typeof projects)[number], i: number) => <button key={p.name} className={`project-card ${p.domain ? "is-live" : ""}`} onClick={() => setProject(i)}>
      <div className={`project-art art-${p.type}`}>
        <div className="art-top">
          <span>
            {p.category}
          </span>
          {p.domain && <span className="art-domain">{p.domain}</span>}
        </div>
        {p.type === "creator" ? <div className="creator-art">
          <span className="creator-word">jeon<span>.id</span></span>
          <div className="creator-links">
            <span>Links</span>
            <span>Shop <b>Rp</b></span>
            <span>Analytics <b>+1.2k</b></span>
          </div>
          <div className="art-caption">ONE LINK · SHARE · SELL · GROW</div>
        </div> : p.type === "queue" ? <div className="queue-art">
          <div className="queue-ticket">
            <span>NOW SERVING</span>
            <strong>A-012</strong>
            <span>Car wash · Bay 2</span>
          </div>
          <div className="queue-next">
            <span>A-013</span>
            <span>A-014</span>
            <span>A-015</span>
          </div>
          <div className="art-caption">REGISTER → QUEUE → WASH</div>
        </div> : p.type === "inventory" ? <div className="inventory-art">
          <span className="inventory-word">Stok<span>App</span></span>
          <div className="inventory-bars" aria-hidden="true">
            {[62, 88, 45, 74, 96, 58].map((h, k) => <i key={k} style={{ height: `${h}%` }}/>)}
          </div>
          <div className="art-caption">STOCK · PRODUCTION · PWA</div>
        </div> : p.type === "learning" ? <div className="learning-art">
          <span className="learning-word">noodu</span>
          <div className="learning-path">
            <span>Project</span>
            <ArrowRight size={16}/>
            <span>Mentor</span>
            <ArrowRight size={16}/>
            <span className="is-done"><Check size={13}/>Certificate</span>
          </div>
          <div className="art-caption">LEARN BY BUILDING REAL PROJECTS</div>
        </div> : p.type === "shop" ? <div className="shop-art">
          <div className="shop-card">
            <span className="shop-thumb" aria-hidden="true"><Fish size={30} strokeWidth={1.4}/></span>
            <div>
              <strong>Ikan Teri Premium</strong>
              <span>Rp 30.000 / kg</span>
            </div>
            <span className="shop-add"><ShoppingCart size={15}/></span>
          </div>
          <div className="shop-pay">
            <span>BCA</span>
            <span>BNI</span>
            <span>QRIS</span>
          </div>
          <div className="art-caption">CATALOG → CART → XENDIT CHECKOUT</div>
        </div> : p.type === "web" ? <div className="meta-art">
          <span className="meta-word">meta<span>tekno</span></span>
          <div className="meta-coordinate">THREE.JS EXPERIENCE / LARAVEL CMS</div>
          <div className="meta-caption">EXPLORE ANOTHER DIMENSION</div>
        </div> : p.type === "api" ? <div className="api-art">
          <span className="code-line"><b>JAVA</b> RESTful architecture</span>
          <div className="api-flow">
            <span>USER</span>
            <ArrowRight size={20}/>
            <span className="api-core">bytecode<span>REST API</span></span>
            <ArrowRight size={20}/>
            <span>DATA</span>
          </div>
          <div className="code-response">Learners <span>· Courses · Progress</span></div>
        </div> : <div className="security-art">
          <ShieldCheck size={92} strokeWidth={.7}/>
          <span className="security-title">Trust, verified.</span>
          <span className="security-caption">ASSESS → ANALYZE → MITIGATE</span>
        </div>}
        <span className="project-number">{String(i + 1).padStart(2, "0")} / PROJECT</span>
        <span className="project-open">View details <Plus size={16}/></span>
      </div>
      <div className="project-info">
        <h3>
          {p.name}
          {p.domain && <span className="live-badge">Live</span>}
        </h3>
        <span>
          {p.year}
        </span>
      </div>
      {p.domain && <p className="project-desc">
        {p.desc}
      </p>}
      <p className="project-sub">
        {p.tags.join(" / ")}
      </p>
    </button>;
    const nav = [{ id: "work", name: "Work" }, { id: "about", name: "About" }, { id: "journey", name: "Experience" }, { id: "credentials", name: "Certifications" }, { id: "contact", name: "Contact" }];
    return <div className={motion ? "portfolio motion-on" : "portfolio"}>
    <a href="#main" className="skip-link">Skip to content</a>
    <div className="scroll-progress" ref={progress}/>
    <header className="nav">
      <a className="brand" href="#home" aria-label="Akbar Oktaviadi, home">
        <span className="brand-name">Portfolio</span>
      </a>
      <nav aria-label="Main navigation" className={menu ? "nav-links open" : "nav-links"}>
        {nav.map(n => <a key={n.id} className={active === n.id ? "active" : ""} href={`#${n.id}`} onClick={() => setMenu(false)}>
          {n.name}
        </a>)}
      </nav>
      <a className="nav-contact" href="#contact" onClick={() => setMenu(false)}>Let’s talk <ArrowRight size={16}/></a>
      <button className="mobile-menu icon-button" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label={menu ? "Close menu" : "Open menu"}>
        {menu ? <X /> : <Menu />}
      </button>
    </header>
    <main id="main">
      <section id="home" className="hero">
        <div className="hero-top">
          <span>AKBAR OKTAVIADI</span>
          <span>BANDAR LAMPUNG, ID <span className="clock">
              {time}
            </span></span>
        </div>
        <div className="hero-main">
          <div className="hero-copy">
            <h1>Akbar<br /><span>Oktaviadi.</span></h1>
            <div className="hero-description">
              <p className="hero-role">Web Developer and Coding Mentor.<span>I build web applications and the infrastructure<br className="desktop-break"/> that keeps them connected, secure, and reliable.</span></p>
            </div>
            <div className="hero-actions">
              <a href="#work" className="primary-button">Explore my work <ArrowDown size={18}/></a>
              <a href="/CV-AkbarOktaviadi.pdf" download className="secondary-button">Download CV <Download size={17}/></a>
            </div>
          </div>
          <div className="scene-shell">
            <div className="scene-corner top-left">
              <span className="scene-title">SYSTEM ARCHITECTURE</span>
              <div className="mode-options" role="group" aria-label="Focus the diagram on a discipline">
                {["Backend", "Networking", "Security"].map((v, i) => <button key={v} onClick={() => setMode(i)} aria-pressed={mode === i} className={mode === i ? "selected" : ""}>
                  {v}
                </button>)}
              </div>
            </div>
            <Scene paused={paused} mode={mode} reset={reset}/>
            <div className="scene-bottom">
              <span>DRAG TO ORBIT · SELECT A NODE</span>
              <div className="scene-controls">
                <button className="icon-button" onClick={() => setPaused(!paused)} aria-label={paused ? "Play data flow" : "Pause data flow"}>
                  {paused ? <Play size={15}/> : <Pause size={15}/>}
                </button>
                <button className="icon-button" onClick={() => setReset(reset + 1)} aria-label="Reset architecture view">
                  <RotateCcw size={15}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="expertise-ribbon" role="region" aria-label="Areas of expertise">
        <div className="ribbon-track">
          {[0, 1].map(copy => <ul key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {["Backend development", "Network engineering", "Cybersecurity", "Linux system administration", "RESTful APIs", "MikroTik & Cisco"].map(t => <li key={t}>
              {t}
              <Plus />
            </li>)}
          </ul>)}
        </div>
      </div>
      <section id="work" className="section works">
        <div className="section-heading">
          <h2>Selected <span>work.</span></h2>
          <p>Products running in production, plus earlier<br />work in backend systems and security.</p>
        </div>
        <div className="projects projects-live">
          {projects.map((p, i) => p.domain && projectCard(p, i))}
        </div>
        <h3 className="projects-subheading">Earlier projects</h3>
        <div className="projects">
          {projects.map((p, i) => !p.domain && projectCard(p, i))}
        </div>
      </section>
      <section id="about" className="section about">
        <div className="about-content">
          <div className="identity">
            <Image className="identity-photo" src="/img/profile-new.png" alt="Akbar Oktaviadi smiling while working on a laptop" width={940} height={898} sizes="(max-width: 760px) 85px, 280px"/>
            <div className="identity-caption">
              <strong>Akbar Oktaviadi</strong>
              <span>Web Developer & Coding Mentor</span>
            </div>
            <a href="/CV-AkbarOktaviadi.pdf" download className="secondary-button">Download CV <Download size={16}/></a>
          </div>
          <div className="about-text">
            <h2>Engineering with context.<br /><span>Learning with purpose.</span></h2>
            <p className="about-lead">Good digital experiences begin with well-engineered foundations.</p>
            <p>I am an Informatics graduate from Universitas Teknokrat Indonesia, focused on web development, Linux system administration, and networking. I bring backend logic, reliable infrastructure, and security thinking together.</p>
            <p>Alongside building systems, I teach programming and computer networking. Sharing knowledge keeps me curious and challenges me to make complex ideas clear.</p>
            <div className="about-facts">
              <div>
                <strong>3.82<span>/4.00</span></strong>
                <span>GPA · Bachelor of Informatics</span>
              </div>
              <div>
                <strong>6</strong>
                <span>Certifications & competency awards</span>
              </div>
              <div>
                <strong>{projects.length}</strong>
                <span>Projects completed, {projects.filter(p => p.domain).length} live in production</span>
              </div>
            </div>
          </div>
        </div>
        <div className="domains">
          {domains.map((d, i) => <article key={d.title}>
            <div className="domain-top">
              <d.icon size={27} strokeWidth={1.3}/>
              <span>0{i + 1}</span>
            </div>
            <h3>
              {d.title}
            </h3>
            <p className="domain-line">
              {d.line}
            </p>
            <p>
              {d.desc}
            </p>
            <div className="tags">
              {d.tags.map(t => <span key={t}>
                {t}
              </span>)}
            </div>
          </article>)}
        </div>
      </section>
      <section id="journey" className="section journey">
        <div className="section-heading">
          <h2>Professional <span>experience.</span></h2>
          <p>Hands-on experience across development,<br />infrastructure, and technical education.</p>
        </div>
        <ol className="timeline" id="experience-list">
          {experience.slice(0, showAllExperience ? experience.length : 3).map(e => <li key={e.role}>
            <span className="experience-date">
              {e.date}
            </span>
            <div className="experience-body">
              <div className="experience-head">
                <h3>
                  {e.role}
                </h3>
                {e.date.includes("PRESENT") && <span className="current-badge">Current</span>}
              </div>
              <p className="experience-company">
                {e.company}
              </p>
              <p className="experience-desc">
                {e.desc}
              </p>
              <div className="tags">
                {e.tags.map(t => <span key={t}>
                  {t}
                </span>)}
              </div>
            </div>
          </li>)}
        </ol>
        {experience.length > 3 && <button className="load-more" onClick={() => setShowAllExperience(!showAllExperience)} aria-expanded={showAllExperience} aria-controls="experience-list">
          {showAllExperience ? "Show less" : `Load more (${experience.length - 3})`}
          <ChevronDown size={16}/>
        </button>}
        <div className="education">
          <div className="education-heading">
            <GraduationCap size={26} strokeWidth={1.5}/>
            <div>
              <h3>Education & training</h3>
              <p>A formal degree and intensive programs in security and backend engineering.</p>
            </div>
          </div>
          <div className="education-grid">
            {education.map(e => <article key={e.school} className={e.gpa ? "education-card is-degree" : "education-card"}>
              <div className="education-top">
                <span className="education-kind">{e.kind}</span>
                <span className="education-date">{e.date}</span>
              </div>
              <h4>{e.school}</h4>
              <p className="education-program">{e.program}</p>
              {e.gpa && <div className="education-gpa">
                <strong>{e.gpa}<span>/4.00</span></strong>
                <span>Cumulative GPA</span>
              </div>}
              <ul>
                {e.points.map(pt => <li key={pt}>
                  {pt}
                </li>)}
              </ul>
              <div className="tags">
                {e.tags.map(t => <span key={t}>
                  {t}
                </span>)}
              </div>
            </article>)}
          </div>
          <div className="courses">
            <span>Additional courses</span>
            <ul>
              {courses.map(c => <li key={c}>
                <Check size={14}/>
                {c}
              </li>)}
            </ul>
          </div>
        </div>
      </section>
      <section id="credentials" className="section credentials">
        <div className="section-heading">
          <h2>Certifications &<br /><span>recognition.</span></h2>
          <p>Training and certifications in<br />cybersecurity and network engineering.</p>
        </div>
        <div className="cert-grid">
          {certifications.map(c => <article key={c.code}>
            <div className="cert-top">
              <ShieldCheck size={21}/>
              <span>
                {c.date}
              </span>
            </div>
            <strong>
              {c.code}
            </strong>
            <h3>
              {c.name}
            </h3>
            {c.credential && <span className="credential-id">ID {c.credential}</span>}
            <div className="cert-footer">
              <span className="cert-org">
                {c.org}
              </span>
              {c.url && <a className="credential-link" href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`${c.credential ? "Verify" : "View"} ${c.code} certificate`}>{c.credential ? "Verify" : "View"} <ArrowUpRight size={14}/></a>}
            </div>
          </article>)}
        </div>
        <div className="competencies">
          <div className="competency-heading">
            <div>
              <h3>University competency certificates</h3>
              <p>Competence-based assessments · Universitas Teknokrat Indonesia</p>
            </div>
            <a href="https://www.linkedin.com/posts/akbar-oktaviadi_happy-to-be-able-to-obtain-a-competency-certificate-activity-7103346463262314496-UM3P" target="_blank" rel="noopener noreferrer">View LinkedIn post <ArrowUpRight size={15}/></a>
          </div>
          <div className="competency-grid">
            {competencies.map(c => <button key={c.image} className="competency-card" onClick={() => setCertificate({ title: c.title, meta: `Universitas Teknokrat Indonesia · ${c.date}`, image: c.image, width: 800, height: 565, alt: c.alt })}>
              <div className="competency-preview">
                <img src={c.image} alt={c.alt} width="800" height="565" loading="lazy"/>
              </div>
              <div className="competency-info">
                <span>{c.date}</span>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
                <span className="competency-cta">View certificate <Maximize2 size={15}/></span>
              </div>
            </button>)}
          </div>
        </div>
        <div className="awards">
          <div className="competency-heading">
            <div>
              <h3>Awards & recognition</h3>
              <p>Competitions and appreciation for work in networking, security, and metaverse development.</p>
            </div>
          </div>
          <div className="award-grid">
            {awards.map(a => <button key={a.image} className="award-card" onClick={() => setCertificate({ title: `${a.place} · ${a.title}`, meta: `${a.issuer} · ${a.date}`, image: a.image, width: a.width, height: a.height, alt: a.alt })}>
              <div className="award-preview">
                <Image src={a.image} alt={a.alt} width={a.width} height={a.height} sizes="(max-width: 760px) 90vw, 30vw"/>
              </div>
              <div className="award-info">
                <span className={a.place.includes("Place") ? "award-place is-winner" : "award-place"}>
                  {a.place.includes("Place") ? <Trophy size={13}/> : <Award size={13}/>}
                  {a.place}
                </span>
                <h4>{a.title}</h4>
                <p>{a.issuer}</p>
                <div className="award-bottom">
                  <span>{a.date}</span>
                  <span className="competency-cta">View certificate <Maximize2 size={14}/></span>
                </div>
              </div>
            </button>)}
          </div>
        </div>
      </section>
      <section id="contact" className="section contact">
        <div className="contact-top">
          <span>GET IN TOUCH</span>
          <span>BANDAR LAMPUNG, INDONESIA</span>
        </div>
        <h2>Have a project in mind?<br /><a href="mailto:akbaroktaviadi89@gmail.com">Let’s talk.<ArrowUpRight /></a></h2>
        <div className="contact-bottom">
          <div className="email-wrap">
            <a href="mailto:akbaroktaviadi89@gmail.com">akbaroktaviadi89@gmail.com</a>
            <button className="icon-button" onClick={copyEmail} aria-label="Copy email address">
              {copied ? <Check size={18}/> : <Copy size={18}/>}
            </button>
            <span role="status" className="copy-status">
              {copied ? "Email copied" : ""}
            </span>
          </div>
          <div className="contact-links">
            <a className="contact-button" href="https://wa.me/628988025991" target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={16}/></a>
            <a className="contact-button" href="https://www.linkedin.com/in/akbar-oktaviadi/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16}/></a>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <a className="brand" href="#home" aria-label="Akbar Oktaviadi, back to top">
        <BrandMark />
      </a>
      <span>© {new Date().getFullYear()} Akbar Oktaviadi</span>
      <div className="socials">
        <a href="https://github.com/AkbarOktaviadi89" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16}/></a>
        <a href="https://www.linkedin.com/in/akbar-oktaviadi/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16}/></a>
        <a href="https://instagram.com/akbaroktaa_" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={16}/></a>
      </div>
      <a href="#home" className="back-top">Back to top <ArrowUp size={16}/></a>
    </footer>
    <Dialog open={project !== null} onOpenChange={v => {
            if (!v)
                setProject(null);
        }}>
      <DialogContent className="project-dialog">
        {project !== null && <>
          <span className="dialog-meta">{projects[project].category} / {projects[project].year}</span>
          <DialogTitle className="dialog-title">
            {projects[project].name}
          </DialogTitle>
          <DialogDescription className="dialog-description">
            {projects[project].desc}
          </DialogDescription>
          <div className="dialog-role">
            <span>ROLE</span>
            <strong>
              {projects[project].role}
            </strong>
          </div>
          <h4>Contributions</h4>
          <ul>
            {projects[project].scope.map(s => <li key={s}>
              {s}
            </li>)}
          </ul>
          <div className="tags">
            {projects[project].tags.map(t => <span key={t}>
              {t}
            </span>)}
          </div>
          {projects[project].links.length > 0 && <div className="dialog-links">
            {projects[project].links.map(l => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label} <ArrowUpRight size={15}/>
            </a>)}
          </div>}
          <a href="mailto:akbaroktaviadi89@gmail.com" className="primary-button">Discuss a similar project <ArrowUpRight size={17}/></a>
          <nav className="dialog-pager" aria-label="Browse projects">
            <button onClick={() => setProject((project + projects.length - 1) % projects.length)}>
              <ArrowLeft size={16}/>
              <span>
                <small>Previous</small>
                {projects[(project + projects.length - 1) % projects.length].name}
              </span>
            </button>
            <button onClick={() => setProject((project + 1) % projects.length)}>
              <span>
                <small>Next</small>
                {projects[(project + 1) % projects.length].name}
              </span>
              <ArrowRight size={16}/>
            </button>
          </nav>
        </>}
      </DialogContent>
    </Dialog>
    <Dialog open={certificate !== null} onOpenChange={v => {
            if (!v)
                setCertificate(null);
        }}>
      <DialogContent className="certificate-dialog">
        {certificate && <>
          <div className="certificate-caption">
            <div>
              <DialogTitle className="certificate-title">
                {certificate.title}
              </DialogTitle>
              <DialogDescription className="certificate-meta">
                {certificate.meta}
              </DialogDescription>
            </div>
            <a href={certificate.image} target="_blank" rel="noopener noreferrer">Open full size <ArrowUpRight size={15}/></a>
          </div>
          <Image src={certificate.image} alt={certificate.alt} width={certificate.width} height={certificate.height} sizes="(max-width: 960px) 92vw, 880px"/>
        </>}
      </DialogContent>
    </Dialog>
  </div>;
}
