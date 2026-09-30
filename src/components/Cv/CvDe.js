import React from "react";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhone,
    FaRegStar,
    FaStar,
} from "react-icons/fa";
import {
    AsideBlock,
    AsideBlockh3,
    AsideBlockh3p,
    AsideBlocksocial,
    AsideBlocksociali,
    AsideBlocksocialp,
    AsideBlockstarh3,
    AsideLeft,
    Footer,
    Footerh2,
    GridLayout,
    Header,
    Headerh1,
    Headerp,
    Main,
    Mainexperience,
    Mainexperiencecontent,
    Mainexperiencecontenth3,
    Mainexperiencecontentp,
    Mainexperiencecontentul,
    Mainexperiencetimeline,
    Mainexperiencetimelinep,
    Mainh2,
    Mainp,
    Picture,
    Pictureimg,
} from "./Cv.elements";
import profile from "../../images/profile.jpg";

/* ---------- Daten ---------- */

const contacts = [
    { icon: <FaPhone />, label: "+41 76 625 55 08", href: "tel:+41766255508" },
    { icon: <FaEnvelope />, label: "aymentli@gmail.com", href: "mailto:aymentli@gmail.com" },
    { icon: <FaLinkedin />, label: "mohamed-aymen-tlili", href: "https://www.linkedin.com/in/mohamed-aymen-tlili" },
    { icon: <FaGithub />, label: "Mohamed-Aymen-TLILI", href: "https://github.com/Mohamed-Aymen-TLILI" },
    { icon: <FaMapMarkerAlt />, label: "Ecublens VD, Schweiz" },
];

const skills = [
    {
        title: "Anwendungs- & API-Sicherheit",
        items: "OWASP Top 10, Secure Code Review, OAuth2, OpenID Connect, JWT, Spring Security, RBAC & feingranulare Autorisierung, TLS, Eingabevalidierung, Secure SDLC",
    },
    {
        title: "Offensive Security & Audit",
        items: "Sicherheitstests von Webanwendungen und Infrastrukturen, Tests von Authentifizierung und Zugriffskontrolle, Schwachstellenanalyse, Risikoanalyse, priorisierte Massnahmenpläne, technisches Reporting",
    },
    {
        title: "KI-Sicherheit",
        items: "OWASP Top 10 für LLM- / GenAI-Anwendungen, Prompt Injection, Datenabfluss über den Modellkontext, serverseitige Autorisierung hinter LLM-Endpunkten, Risiken der KI-Lieferkette, EU AI Act",
    },
    {
        title: "DevSecOps & Cloud-Sicherheit",
        items: "Härtung von CI/CD-Pipelines (Azure DevOps, GitLab CI, GitHub Actions, Jenkins), HashiCorp Vault, SonarQube, Least Privilege, Docker, Kubernetes, Terraform, Azure, GCP",
    },
    {
        title: "Governance & Datenschutz",
        items: "Sicherheits-Governance, Compliance, Datenminimierung, Anonymisierung, Zugriffstrennung, Nachvollziehbarkeit (nDSG / DSGVO)",
    },
    {
        title: "Java & Architektur",
        items: "Java 8 → 21, Spring Boot, Spring WebFlux, Hibernate / JPA, REST & OpenAPI, Microservices, ereignisgesteuerte Architektur (Kafka, RabbitMQ, NiFi)",
    },
    {
        title: "Daten & Monitoring",
        items: "Oracle, SQL Server, PostgreSQL, MongoDB, Redis, Elasticsearch · Prometheus, Grafana, Kibana, JMeter",
    },
    {
        title: "Scripting & Frontend",
        items: "PowerShell, Bash, Python · Angular, React, Vue.js, TypeScript",
    },
];

const languages = [
    { name: "Französisch", level: "Muttersprache", stars: 5 },
    { name: "Englisch", level: "Fliessend", stars: 4 },
    { name: "Deutsch", level: "Gute Kenntnisse (B2)", stars: 3 },
];

const experiences = [
    {
        from: "Jan. 2026",
        to: "Apr. 2026",
        title: "Information Security Engineer — Infrastruktur & DevSecOps",
        company: "Lab4Tech, Lausanne (Schweiz) — Security-Mandat im Rahmen des MSc",
        stack: "Azure | Azure DevOps | CI/CD | Secrets Management | PowerShell | Bash | Python | Windows | GNU/Linux",
        bullets: [
            "Absicherung der Software-Lieferkette und der CI/CD-Pipelines; Risikoanalyse der Build- und Deployment-Prozesse.",
            "Technische Infrastruktur-Audits und Schwachstellenanalysen, geliefert als priorisierte Massnahmenpläne statt reiner Befundlisten.",
            "Sichere Verwaltung von Secrets und Konfigurationen; Automatisierung wiederkehrender Sicherheitsaufgaben in PowerShell, Bash und Python.",
            "Arbeiten zu Governance, Compliance und Datenschutz mit strukturiertem Reporting für technische und nicht-technische Stakeholder.",
        ],
    },
    {
        from: "Aug. 2025",
        to: "Jan. 2026",
        title: "Application Security Engineer — Offensive Security",
        company: "Pawn and Patch (Frankreich) — Security-Mandat im Rahmen des MSc",
        stack: "Web- & Infrastruktur-Sicherheitstests | OWASP Top 10 | OWASP Top 10 für LLM | Tests der Zugriffskontrolle | Risikoanalyse",
        bullets: [
            "Sicherheitstests von Webanwendungen und Infrastrukturen; Schwachstellenanalyse gemäss OWASP Top 10.",
            "Bewertung von Authentifizierungs-, Autorisierungs- und Datenzugriffsmechanismen zur Identifikation ausnutzbarer Schwachstellen.",
            "Analyse der Angriffsfläche KI-gestützter Funktionen: Prompt Injection, Datenabfluss über den Modellkontext und Umgehung der Autorisierung an LLM-Endpunkten.",
            "Technische Risikobewertungen mit reproduzierbaren Befunden, identifiziertem Codepfad und konkreter, für Entwickler direkt umsetzbarer Korrektur.",
        ],
    },
    {
        from: "Feb. 2025",
        to: "Sept. 2025",
        title: "Senior Backend Engineer — Java / Sichere Architektur",
        company: "SQLI — Kunde: Staat Freiburg (Schweiz)",
        stack: "Java 21 | Spring Boot | Spring Security | OAuth2 | Hibernate | Oracle | SQL Server | Vault | Azure | Terraform | Docker | Angular",
        bullets: [
            "Modernisierung einer geschäftskritischen kantonalen Fachanwendung mit hohen Anforderungen an Sicherheit, Datenschutz, Nachvollziehbarkeit und Betriebskontinuität.",
            "Umsetzung von Authentifizierung und Autorisierung mit Spring Security und OAuth2; Secrets-Verwaltung mit HashiCorp Vault.",
            "Konzeption sicherer REST-APIs und Schnittstellen zu Drittsystemen; Mitwirkung an Architekturentscheidungen und Design-Reviews.",
            "Containerisierung mit Docker und Bereitstellung der Azure-Infrastruktur mit Terraform; Betreuung der Umgebungen bis zur Abnahme in der Vorproduktion.",
            "Personendaten von Bürgerinnen und Bürgern: Zugriffstrennung, Datenminimierung und Nachvollziehbarkeit von Anfang an im Design verankert.",
        ],
    },
    {
        from: "Okt. 2024",
        to: "Jan. 2025",
        title: "Senior Backend Engineer — Java",
        company: "SQLI — Kunde: SGS, Genf (Schweiz)",
        stack: "Java 21 | Spring Boot | Spring Security | Feign | Drools | SQL Server | RabbitMQ | Elasticsearch | Jenkins | Docker | Azure | Vault",
        bullets: [
            "Zwei internationale Unternehmensportale für mehrere Gesellschaften der Gruppe, mit Anbindung zahlreicher interner und externer Systeme.",
            "Konzeption und Weiterentwicklung abgesicherter REST-Services; Modernisierung bestehender Komponenten und Aufbau neuer Schnittstellen.",
            "Asynchrone Integration mit RabbitMQ, Service-Clients mit Feign, Geschäftsregeln mit Drools; Optimierung von Elasticsearch und SQL Server.",
            "Jenkins-Pipelines und Docker-Deployments; Produktionssupport Level 2/3 mit Vault-verwalteten Secrets auf Azure.",
        ],
    },
    {
        from: "März 2024",
        to: "Okt. 2024",
        title: "Backend Engineer — Java / Spring Boot",
        company: "Alptis Assurances, Lyon (Frankreich) — Krankenversicherung",
        stack: "Java 17/21 | Spring Boot | Spring Security | Hibernate | OpenAPI | Drools | PostgreSQL | MongoDB | RabbitMQ | Docker | GitHub Actions",
        bullets: [
            "Verarbeitung sensibler Gesundheitsdaten in einem streng regulierten Umfeld; APIs abgesichert mit Spring Security.",
            "Entwicklung von REST-APIs mit OpenAPI-Dokumentation; Umsetzung komplexer regulatorischer Regeln mit Drools auf PostgreSQL und MongoDB.",
            "Migration auf Java 17 und anschliessend Java 21: Aktualisierung der Abhängigkeiten, Regressionskontrolle, ohne Serviceunterbruch.",
            "Automatisierung der Deployments mit GitHub Actions.",
        ],
    },
    {
        from: "Nov. 2022",
        to: "Jan. 2024",
        title: "Backend Engineer — Verteilte & ereignisgesteuerte Architektur",
        company: "Devoteam — Kunde: Carrefour, Massy (Frankreich)",
        stack: "Java 17 | Spring WebFlux | Kafka | Apache NiFi | PostgreSQL | Redis | Elasticsearch | Docker | Kubernetes | Terraform | Jenkins | GCP",
        bullets: [
            "OneInvoice: verteilte, ereignisgesteuerte Rechnungsplattform für mehrere Gesellschaften der Gruppe, betrieben auf Google Cloud.",
            "Mitwirkung an der Plattformarchitektur; Entwicklung reaktiver Microservices mit Spring WebFlux und Project Reactor.",
            "Kafka- und Apache-NiFi-Flows mit Fehlerbehandlung, Retry-Mechanismen, Idempotenz und End-to-End-Nachverfolgbarkeit.",
            "CI/CD mit Docker, Kubernetes, Terraform und Jenkins; Loganalyse, Produktionskorrekturen sowie Last- und Performancetests.",
        ],
    },
    {
        from: "Sept. 2020",
        to: "Nov. 2022",
        title: "Full-Stack Engineer — Java / Angular",
        company: "Groupe Canal+, Issy-les-Moulineaux (Frankreich)",
        stack: "Java 11/17 | Spring Boot | Spring Security | Kafka | Oracle | MySQL | Elasticsearch | Kibana | Docker | Kubernetes | Jenkins | GitLab CI | Angular",
        bullets: [
            "MediaHub: zentrale Plattform der Gruppe für Verwaltung, Programmplanung und Ausstrahlung audiovisueller Inhalte.",
            "Java- / Spring-Boot-Microservices mit Spring Security und Kafka-Event-Streams; REST-APIs und interne Schnittstellen.",
            "Docker- und Kubernetes-Deployments über Jenkins und GitLab CI/CD; Code-Reviews, Refactoring, Oracle- und MySQL-Tuning.",
            "Incident-Analyse mit Kibana und Produktionssupport.",
        ],
    },
    {
        from: "Aug. 2019",
        to: "März 2020",
        title: "Application Engineer — Java / React",
        company: "Bayron Group — Kunde: Disneyland Paris (Frankreich)",
        stack: "Java | Spring Boot | React | Oracle | MySQL | Docker | Ansible",
        bullets: [
            "Backend mit Java / Spring Boot und Frontend mit React; Integration und Performance-Tuning von Oracle und MySQL.",
            "Automatisierung mit CI, Docker und Ansible.",
        ],
    },
    {
        from: "2017",
        to: "2019",
        title: "IT-Projektleiter & Entwickler — Freelance",
        company: "Frankreich",
        stack: "Java | Spring Boot | Angular",
        bullets: [
            "Projektumsetzung von A bis Z: Anforderungsanalyse, Konzeption, Entwicklung, Tests, Go-live und Support, im direkten Kundenkontakt.",
        ],
    },
];

const education = [
    { year: "2026", title: "MSc Informationssystem-Sicherheit", school: "Université de Technologie de Troyes (UTT), Frankreich" },
    { year: "2026", title: "Oracle Certified Professional: Java SE 21 Developer", school: "Oracle" },
    { year: "2026", title: "Microsoft Certified: DevOps Engineer Expert (AZ-400) & Azure Developer Associate (AZ-204)", school: "Microsoft" },
    { year: "2017", title: "Master in Management", school: "Université Paris-Sud (Paris XI), Frankreich" },
    { year: "2014", title: "Bachelor in Betriebswirtschaft", school: "Université Paris Ouest Nanterre, Frankreich" },
    { year: "2012", title: "Bachelor in Informatik", school: "Université de la Manouba, Tunesien" },
];

/* ---------- Komponenten ---------- */

function Stars({ count, max = 5 }) {
    return (
        <span aria-label={`${count} von ${max}`}>
            {Array.from({ length: max }, (_, i) => (i < count ? <FaStar key={i} /> : <FaRegStar key={i} />))}
        </span>
    );
}

function Entry({ from, to, title, company, stack, bullets }) {
    return (
        <Mainexperience>
            <Mainexperiencetimeline>
                <Mainexperiencetimelinep>
                    {from}
                    {to && (
                        <>
                            <br />-<br />
                            {to}
                        </>
                    )}
                </Mainexperiencetimelinep>
            </Mainexperiencetimeline>
            <Mainexperiencecontent>
                <Mainexperiencecontenth3>{title}</Mainexperiencecontenth3>
                <Mainexperiencecontentp>
                    <strong>{company}</strong>
                </Mainexperiencecontentp>
                {stack && <Mainexperiencecontentp>{stack}</Mainexperiencecontentp>}
                {bullets && (
                    <Mainexperiencecontentul>
                        {bullets.map((b) => (
                            <li key={b}>{b}</li>
                        ))}
                    </Mainexperiencecontentul>
                )}
            </Mainexperiencecontent>
        </Mainexperience>
    );
}

/* ---------- Seite ---------- */

export default function CV() {
    return (
        <GridLayout>
            <Header>
                <Headerh1>Mohamed Aymen TLILI</Headerh1>
                <Headerp>Application Security & DevSecOps Engineer | Senior Java</Headerp>
                <Headerp style={{ fontSize: "1.4rem" }}>
                    8+ Jahre Entwicklung sicherer Java-Systeme · MSc Informationssystem-Sicherheit · OCP Java SE 21 · AZ-400
                </Headerp>
            </Header>

            <Picture>
                <Pictureimg src={profile} alt="Mohamed Aymen Tlili" />
            </Picture>

            <AsideLeft>
                <AsideBlock>
                    <AsideBlockh3>KONTAKT</AsideBlockh3>
                    {contacts.map(({ icon, label, href }) => (
                        <AsideBlocksocial
                            key={label}
                            as={href ? "a" : "div"}
                            href={href}
                            target={href && href.startsWith("http") ? "_blank" : undefined}
                            rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            <AsideBlocksociali>{icon}</AsideBlocksociali>
                            <AsideBlocksocialp>{label}</AsideBlocksocialp>
                        </AsideBlocksocial>
                    ))}
                </AsideBlock>

                <AsideBlock>
                    <AsideBlockh3>STATUS</AsideBlockh3>
                    <AsideBlockh3p>
                        Französischer Staatsbürger (EU) · Aufenthaltsbewilligung B
                        <br />
                        Sofort verfügbar, 100 %
                    </AsideBlockh3p>
                </AsideBlock>

                <AsideBlock>
                    <AsideBlockh3>KERNKOMPETENZEN</AsideBlockh3>
                    {skills.map(({ title, items }) => (
                        <AsideBlockh3p key={title}>
                            <strong>{title}:</strong> {items}
                        </AsideBlockh3p>
                    ))}
                </AsideBlock>

                <AsideBlock>
                    <AsideBlockh3>SPRACHEN</AsideBlockh3>
                    {languages.map(({ name, level, stars }) => (
                        <AsideBlockstarh3 key={name}>
                            {name} — {level}
                            <br />
                            <Stars count={stars} />
                        </AsideBlockstarh3>
                    ))}
                </AsideBlock>
            </AsideLeft>

            <Main>
                <Mainh2>PROFIL</Mainh2>
                <Mainp>
                    <p>
                        Application Security & DevSecOps Engineer mit über 8 Jahren Erfahrung in der Java-Backend-Entwicklung
                        geschäftskritischer Systeme für eine Schweizer Kantonsverwaltung, einen internationalen
                        Prüfkonzern (SGS), die Krankenversicherung, den Detailhandel und die Medienbranche.
                    </p>
                    <p>
                        In diesen Jahren habe ich sichere Java-Systeme aufgebaut: Authentifizierung mit Spring
                        Security und OAuth2, APIs, CI/CD-Pipelines, Secrets-Verwaltung mit HashiCorp Vault sowie die
                        Verarbeitung von Personen- und Gesundheitsdaten. Danach habe ich mich mit einem MSc in
                        Informationssystem-Sicherheit (2026) und zwei Security-Mandaten auf Sicherheit spezialisiert:
                        eines in Offensive Security, eines in Infrastruktursicherheit / DevSecOps. Zertifiziert als
                        Oracle Java SE 21 Professional (OCP) und Microsoft AZ-400 / AZ-204.
                    </p>
                    <p>
                        Ich gehe Sicherheit aus der Engineering-Perspektive an: Ich habe die Authentifizierungs- und
                        Autorisierungsflüsse, APIs, CI/CD-Pipelines, Secrets-Verwaltung und Datenverarbeitung selbst
                        gebaut, die Security-Teams prüfen. Deshalb weiss ich, wo die Schwachstellen tatsächlich
                        liegen, und formuliere Massnahmen, die ein Entwickler am Montagmorgen direkt umsetzen kann.
                    </p>
                    <p>
                        Aktueller Schwerpunkt: Sicherheit KI-gestützter Anwendungen (OWASP Top 10 für LLM, Prompt
                        Injection, Datenabfluss, serverseitige Autorisierung) und der Einsatz von KI im Security
                        Engineering, im Rahmen von nDSG, DSGVO und EU AI Act.
                    </p>
                </Mainp>

                <Mainh2>BERUFSERFAHRUNG</Mainh2>
                {experiences.map((exp) => (
                    <Entry key={exp.title + exp.from} {...exp} />
                ))}

                <Mainh2>AUSBILDUNG & ZERTIFIZIERUNGEN</Mainh2>
                {education.map(({ year, title, school }) => (
                    <Entry key={title} from={year} title={title} company={school} />
                ))}
            </Main>

            <Footer>
                <Footerh2>Sprechen wir über Sicherheit</Footerh2>
                <p>
                    <a href="mailto:aymentli@gmail.com" style={{ color: "white" }}>
                        aymentli@gmail.com
                    </a>
                    {" · "}
                    <a
                        href="https://www.linkedin.com/in/mohamed-aymen-tlili"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white" }}
                    >
                        LinkedIn
                    </a>
                </p>
            </Footer>
        </GridLayout>
    );
}