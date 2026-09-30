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

/* ---------- Data ---------- */

const contacts = [
    { icon: <FaPhone />, label: "+41 76 625 55 08", href: "tel:+41766255508" },
    { icon: <FaEnvelope />, label: "aymentli@gmail.com", href: "mailto:aymentli@gmail.com" },
    { icon: <FaLinkedin />, label: "mohamed-aymen-tlili", href: "https://www.linkedin.com/in/mohamed-aymen-tlili" },
    { icon: <FaGithub />, label: "Mohamed-Aymen-TLILI", href: "https://github.com/Mohamed-Aymen-TLILI" },
    { icon: <FaMapMarkerAlt />, label: "Ecublens VD, Switzerland" },
];

const skills = [
    {
        title: "Application & API security",
        items: "OWASP Top 10, secure code review, OAuth2, OpenID Connect, JWT, Spring Security, RBAC & fine-grained authorisation, TLS, input validation, secure SDLC",
    },
    {
        title: "Offensive security & audit",
        items: "Web application and infrastructure security testing, authentication / access-control testing, vulnerability assessment, risk analysis, prioritised remediation plans, technical reporting",
    },
    {
        title: "AI security",
        items: "OWASP Top 10 for LLM / GenAI Applications, prompt injection, data leakage through model context, server-side authorisation behind LLM endpoints, AI supply-chain risk, EU AI Act",
    },
    {
        title: "DevSecOps & cloud security",
        items: "CI/CD pipeline hardening (Azure DevOps, GitLab CI, GitHub Actions, Jenkins), HashiCorp Vault, SonarQube, least privilege, Docker, Kubernetes, Terraform, Azure, GCP",
    },
    {
        title: "Governance & data protection",
        items: "Security governance, compliance, data minimisation, anonymisation, access segregation, auditability (nLPD / GDPR)",
    },
    {
        title: "Java & architecture",
        items: "Java 8 → 21, Spring Boot, Spring WebFlux, Hibernate / JPA, REST & OpenAPI, microservices, event-driven architecture (Kafka, RabbitMQ, NiFi)",
    },
    {
        title: "Data & monitoring",
        items: "Oracle, SQL Server, PostgreSQL, MongoDB, Redis, Elasticsearch · Prometheus, Grafana, Kibana, JMeter",
    },
    {
        title: "Scripting & frontend",
        items: "PowerShell, Bash, Python · Angular, React, Vue.js, TypeScript",
    },
];

const languages = [
    { name: "French", level: "Native", stars: 5 },
    { name: "English", level: "Fluent", stars: 4 },
    { name: "German", level: "Upper-intermediate (B2)", stars: 3 },
];

const experiences = [
    {
        from: "Jan 2026",
        to: "Apr 2026",
        title: "Information Security Engineer — Infrastructure & DevSecOps",
        company: "Lab4Tech, Lausanne (Switzerland) — MSc security mission",
        stack: "Azure | Azure DevOps | CI/CD | Secrets management | PowerShell | Bash | Python | Windows | GNU/Linux",
        bullets: [
            "Secured the software supply chain and CI/CD pipelines; risk analysis on build and deployment flows.",
            "Technical infrastructure audits and vulnerability assessments, delivered as prioritised remediation plans rather than raw findings lists.",
            "Secure secrets and configuration management; automation of recurring security tasks in PowerShell, Bash and Python.",
            "Governance, compliance and data-protection work, with structured reporting for technical and non-technical stakeholders.",
        ],
    },
    {
        from: "Aug 2025",
        to: "Jan 2026",
        title: "Application Security Engineer — Offensive Security",
        company: "Pawn and Patch (France) — MSc security mission",
        stack: "Web & infrastructure security testing | OWASP Top 10 | OWASP Top 10 for LLM | Access-control testing | Risk analysis",
        bullets: [
            "Security testing of web applications and infrastructure; vulnerability analysis against the OWASP Top 10.",
            "Assessed authentication, authorisation and data access-control mechanisms to identify exploitable weaknesses.",
            "Reviewed the attack surface of AI-enabled features: prompt injection, data leakage through model context and authorisation bypass on LLM-backed endpoints.",
            "Technical risk assessments with reproducible findings, the affected code path identified and a concrete, developer-actionable fix.",
        ],
    },
    {
        from: "Feb 2025",
        to: "Sep 2025",
        title: "Senior Backend Engineer — Java / Secure Architecture",
        company: "SQLI — Client: State of Fribourg (Switzerland)",
        stack: "Java 21 | Spring Boot | Spring Security | OAuth2 | Hibernate | Oracle | SQL Server | Vault | Azure | Terraform | Docker | Angular",
        bullets: [
            "Modernisation of a critical cantonal business application with strict security, data-protection, auditability and continuity requirements.",
            "Implemented authentication and authorisation with Spring Security and OAuth2; secrets managed with HashiCorp Vault.",
            "Designed secure REST APIs and third-party interfaces; took part in architecture decisions and design reviews.",
            "Containerised services with Docker and provisioned Azure infrastructure with Terraform; environments through to pre-production validation.",
            "Citizens' personal data: access segregation, minimisation and traceability treated as design constraints.",
        ],
    },
    {
        from: "Oct 2024",
        to: "Jan 2025",
        title: "Senior Backend Engineer — Java",
        company: "SQLI — Client: SGS, Geneva (Switzerland)",
        stack: "Java 21 | Spring Boot | Spring Security | Feign | Drools | SQL Server | RabbitMQ | Elasticsearch | Jenkins | Docker | Azure | Vault",
        bullets: [
            "Two international enterprise portals used by several group entities, integrating many internal and external systems.",
            "Designed and evolved secured REST services; modernised existing components and built new system interfaces.",
            "Asynchronous integration with RabbitMQ, Feign inter-service clients, business rules with Drools; Elasticsearch and SQL Server optimisation.",
            "Jenkins pipelines and Docker deployments; level 2/3 production support with Vault-managed secrets on Azure.",
        ],
    },
    {
        from: "Mar 2024",
        to: "Oct 2024",
        title: "Backend Engineer — Java / Spring Boot",
        company: "Alptis Assurances, Lyon (France) — health insurance",
        stack: "Java 17/21 | Spring Boot | Spring Security | Hibernate | OpenAPI | Drools | PostgreSQL | MongoDB | RabbitMQ | Docker | GitHub Actions",
        bullets: [
            "Processed sensitive personal health data within a strict regulatory framework; APIs secured with Spring Security.",
            "Built REST APIs documented with OpenAPI; implemented complex regulatory rules with Drools on PostgreSQL and MongoDB.",
            "Migration to Java 17 then 21: dependency upgrades, regression control, no service interruption.",
            "Automated deployments with GitHub Actions.",
        ],
    },
    {
        from: "Nov 2022",
        to: "Jan 2024",
        title: "Backend Engineer — Distributed & Event-Driven Architecture",
        company: "Devoteam — Client: Carrefour, Massy (France)",
        stack: "Java 17 | Spring WebFlux | Kafka | Apache NiFi | PostgreSQL | Redis | Elasticsearch | Docker | Kubernetes | Terraform | Jenkins | GCP",
        bullets: [
            "OneInvoice: distributed, event-driven invoicing platform for several group entities, hosted on Google Cloud.",
            "Contributed to the platform architecture; built reactive microservices with Spring WebFlux and Project Reactor.",
            "Kafka and Apache NiFi flows with error handling, retries, idempotency and end-to-end traceability.",
            "Docker, Kubernetes, Terraform and Jenkins CI/CD; log analysis, production fixes and load/performance campaigns.",
        ],
    },
    {
        from: "Sep 2020",
        to: "Nov 2022",
        title: "Full-Stack Engineer — Java / Angular",
        company: "Groupe Canal+, Issy-les-Moulineaux (France)",
        stack: "Java 11/17 | Spring Boot | Spring Security | Kafka | Oracle | MySQL | Elasticsearch | Kibana | Docker | Kubernetes | Jenkins | GitLab CI | Angular",
        bullets: [
            "MediaHub: the group's central platform for managing, scheduling and broadcasting audiovisual content.",
            "Java / Spring Boot microservices with Spring Security and Kafka event streams; REST APIs and internal interfaces.",
            "Docker and Kubernetes deployments via Jenkins and GitLab CI/CD; code reviews, refactoring, Oracle/MySQL tuning.",
            "Incident analysis with Kibana and production support.",
        ],
    },
    {
        from: "Aug 2019",
        to: "Mar 2020",
        title: "Application Engineer — Java / React",
        company: "Bayron Group — Client: Disneyland Paris (France)",
        stack: "Java | Spring Boot | React | Oracle | MySQL | Docker | Ansible",
        bullets: [
            "Java / Spring Boot backend and React frontend; Oracle and MySQL integration and performance tuning.",
            "CI, Docker and Ansible automation.",
        ],
    },
    {
        from: "2017",
        to: "2019",
        title: "IT Project Manager & Developer — Freelance",
        company: "France",
        stack: "Java | Spring Boot | Angular",
        bullets: [
            "End-to-end project delivery: requirements, design, development, testing, go-live and support, in direct client relationship.",
        ],
    },
];

const education = [
    { year: "2026", title: "MSc in Information Systems Security", school: "Université de Technologie de Troyes (UTT), France" },
    { year: "2026", title: "Oracle Certified Professional: Java SE 21 Developer", school: "Oracle" },
    { year: "2026", title: "Microsoft Certified: DevOps Engineer Expert (AZ-400) & Azure Developer Associate (AZ-204)", school: "Microsoft" },
    { year: "2017", title: "MSc in Management", school: "Université Paris-Sud (Paris XI), France" },
    { year: "2014", title: "BSc in Business Administration", school: "Université Paris Ouest Nanterre, France" },
    { year: "2012", title: "BSc in Computer Science", school: "Université de la Manouba, Tunisia" },
];

/* ---------- Helpers ---------- */

function Stars({ count, max = 5 }) {
    return (
        <span aria-label={`${count} out of ${max}`}>
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

/* ---------- Page ---------- */

export default function CV() {
    return (
        <GridLayout>
            <Header>
                <Headerh1>Mohamed Aymen TLILI</Headerh1>
                <Headerp>Application Security & DevSecOps Engineer | Senior Java</Headerp>
                <Headerp style={{ fontSize: "1.4rem" }}>
                    8+ years building secure Java systems · MSc Information Systems Security · OCP Java SE 21 · AZ-400
                </Headerp>
            </Header>

            <Picture>
                <Pictureimg src={profile} alt="Mohamed Aymen Tlili" />
            </Picture>

            <AsideLeft>
                <AsideBlock>
                    <AsideBlockh3>CONTACT</AsideBlockh3>
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
                    <AsideBlockh3>WORK STATUS</AsideBlockh3>
                    <AsideBlockh3p>
                        French citizen (EU) · Swiss B permit
                        <br />
                        Available immediately, 100%
                    </AsideBlockh3p>
                </AsideBlock>

                <AsideBlock>
                    <AsideBlockh3>CORE SKILLS</AsideBlockh3>
                    {skills.map(({ title, items }) => (
                        <AsideBlockh3p key={title}>
                            <strong>{title}:</strong> {items}
                        </AsideBlockh3p>
                    ))}
                </AsideBlock>

                <AsideBlock>
                    <AsideBlockh3>LANGUAGES</AsideBlockh3>
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
                <Mainh2>PROFILE</Mainh2>
                <Mainp>
                    <p>
                        Application Security & DevSecOps engineer with 8+ years of Java backend engineering on
                        business-critical systems for a Swiss cantonal administration, an international inspection
                        group (SGS), health insurance, retail and media.
                    </p>
                    <p>
                        I spent those years building secure Java systems: Spring Security and OAuth2
                        authentication, APIs, CI/CD pipelines, secrets management with HashiCorp Vault, and handling
                        of sensitive personal and health data. I then specialised in security with an MSc in
                        Information Systems Security (2026) and two dedicated missions, one in offensive security
                        and one in infrastructure security / DevSecOps. Certified Oracle Java SE 21 (OCP) and
                        Microsoft AZ-400 / AZ-204.
                    </p>
                    <p>
                        I approach security from the engineering side: I have built the authentication and
                        authorisation flows, APIs, CI/CD pipelines, secrets management and data handling that
                        security teams review, so I know where the weaknesses actually sit and I write remediation a
                        developer can apply on Monday morning.
                    </p>
                    <p>
                        Current focus: securing AI-enabled applications (OWASP Top 10 for LLM, prompt injection,
                        data leakage, server-side authorisation) and using AI inside security engineering, within
                        the nLPD, GDPR and EU AI Act framework.
                    </p>
                </Mainp>

                <Mainh2>PROFESSIONAL EXPERIENCE</Mainh2>
                {experiences.map((exp) => (
                    <Entry key={exp.title + exp.from} {...exp} />
                ))}

                <Mainh2>EDUCATION & CERTIFICATIONS</Mainh2>
                {education.map(({ year, title, school }) => (
                    <Entry key={title} from={year} title={title} company={school} />
                ))}
            </Main>

            <Footer>
                <Footerh2>Let's talk security</Footerh2>
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