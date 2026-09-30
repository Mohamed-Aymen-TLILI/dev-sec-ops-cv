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

/* ---------- Données ---------- */

const contacts = [
  { icon: <FaPhone />, label: "+41 76 625 55 08", href: "tel:+41766255508" },
  { icon: <FaEnvelope />, label: "aymentli@gmail.com", href: "mailto:aymentli@gmail.com" },
  { icon: <FaLinkedin />, label: "mohamed-aymen-tlili", href: "https://www.linkedin.com/in/mohamed-aymen-tlili" },
  { icon: <FaGithub />, label: "Mohamed-Aymen-TLILI", href: "https://github.com/Mohamed-Aymen-TLILI" },
  { icon: <FaMapMarkerAlt />, label: "Ecublens VD, Suisse" },
];

const skills = [
  {
    title: "Sécurité applicative & API",
    items: "OWASP Top 10, revue de code sécurisée, OAuth2, OpenID Connect, JWT, Spring Security, RBAC & autorisations fines, TLS, validation des entrées, SDLC sécurisé",
  },
  {
    title: "Sécurité offensive & audit",
    items: "Tests de sécurité d'applications web et d'infrastructures, tests d'authentification et de contrôle d'accès, évaluation de vulnérabilités, analyse de risques, plans de remédiation priorisés, rapports techniques",
  },
  {
    title: "Sécurité de l'IA",
    items: "OWASP Top 10 pour les applications LLM / GenAI, injection de prompt, fuite de données via le contexte du modèle, autorisation côté serveur derrière les endpoints LLM, risques de la chaîne d'approvisionnement IA, AI Act européen",
  },
  {
    title: "DevSecOps & sécurité cloud",
    items: "Durcissement des pipelines CI/CD (Azure DevOps, GitLab CI, GitHub Actions, Jenkins), HashiCorp Vault, SonarQube, moindre privilège, Docker, Kubernetes, Terraform, Azure, GCP",
  },
  {
    title: "Gouvernance & protection des données",
    items: "Gouvernance de la sécurité, conformité, minimisation, anonymisation, cloisonnement des accès, auditabilité (nLPD / RGPD)",
  },
  {
    title: "Java & architecture",
    items: "Java 8 → 21, Spring Boot, Spring WebFlux, Hibernate / JPA, REST & OpenAPI, microservices, architecture événementielle (Kafka, RabbitMQ, NiFi)",
  },
  {
    title: "Données & supervision",
    items: "Oracle, SQL Server, PostgreSQL, MongoDB, Redis, Elasticsearch · Prometheus, Grafana, Kibana, JMeter",
  },
  {
    title: "Scripting & frontend",
    items: "PowerShell, Bash, Python · Angular, React, Vue.js, TypeScript",
  },
];

const languages = [
  { name: "Français", level: "Langue maternelle", stars: 5 },
  { name: "Anglais", level: "Courant", stars: 4 },
  { name: "Allemand", level: "Intermédiaire avancé (B2)", stars: 3 },
];

const experiences = [
  {
    from: "Janv. 2026",
    to: "Avr. 2026",
    title: "Ingénieur Sécurité de l'information — Infrastructure & DevSecOps",
    company: "Lab4Tech, Lausanne (Suisse) — mission sécurité du MSc",
    stack: "Azure | Azure DevOps | CI/CD | Gestion des secrets | PowerShell | Bash | Python | Windows | GNU/Linux",
    bullets: [
      "Sécurisation de la chaîne d'approvisionnement logicielle et des pipelines CI/CD ; analyse de risques sur les flux de build et de déploiement.",
      "Audits techniques d'infrastructure et évaluations de vulnérabilités, livrés sous forme de plans de remédiation priorisés plutôt que de simples listes de constats.",
      "Gestion sécurisée des secrets et de la configuration ; automatisation des tâches de sécurité récurrentes en PowerShell, Bash et Python.",
      "Travaux de gouvernance, de conformité et de protection des données, avec des rapports structurés pour publics techniques et non techniques.",
    ],
  },
  {
    from: "Août 2025",
    to: "Janv. 2026",
    title: "Ingénieur Sécurité applicative — Sécurité offensive",
    company: "Pawn and Patch (France) — mission sécurité du MSc",
    stack: "Tests de sécurité web & infrastructure | OWASP Top 10 | OWASP Top 10 pour LLM | Tests de contrôle d'accès | Analyse de risques",
    bullets: [
      "Tests de sécurité d'applications web et d'infrastructures ; analyse des vulnérabilités selon l'OWASP Top 10.",
      "Évaluation des mécanismes d'authentification, d'autorisation et de contrôle d'accès aux données pour identifier les faiblesses exploitables.",
      "Revue de la surface d'attaque des fonctionnalités basées sur l'IA : injection de prompt, fuite de données via le contexte du modèle et contournement d'autorisation sur les endpoints LLM.",
      "Évaluations des risques techniques avec des constats reproductibles, le chemin de code concerné identifié et un correctif concret, directement applicable par les développeurs.",
    ],
  },
  {
    from: "Févr. 2025",
    to: "Sept. 2025",
    title: "Ingénieur Backend Senior — Java / Architecture sécurisée",
    company: "SQLI — Client : État de Fribourg (Suisse)",
    stack: "Java 21 | Spring Boot | Spring Security | OAuth2 | Hibernate | Oracle | SQL Server | Vault | Azure | Terraform | Docker | Angular",
    bullets: [
      "Modernisation d'une application métier cantonale critique, soumise à de fortes exigences de sécurité, de protection des données, d'auditabilité et de continuité.",
      "Mise en œuvre de l'authentification et des autorisations avec Spring Security et OAuth2 ; secrets gérés avec HashiCorp Vault.",
      "Conception d'API REST sécurisées et d'interfaces avec des systèmes tiers ; participation aux décisions d'architecture et aux revues de conception.",
      "Conteneurisation avec Docker et provisionnement de l'infrastructure Azure avec Terraform ; gestion des environnements jusqu'à la validation en préproduction.",
      "Données personnelles de citoyens : cloisonnement des accès, minimisation et traçabilité intégrés dès la conception.",
    ],
  },
  {
    from: "Oct. 2024",
    to: "Janv. 2025",
    title: "Ingénieur Backend Senior — Java",
    company: "SQLI — Client : SGS, Genève (Suisse)",
    stack: "Java 21 | Spring Boot | Spring Security | Feign | Drools | SQL Server | RabbitMQ | Elasticsearch | Jenkins | Docker | Azure | Vault",
    bullets: [
      "Deux portails d'entreprise internationaux utilisés par plusieurs entités du groupe, intégrant de nombreux systèmes internes et externes.",
      "Conception et évolution de services REST sécurisés ; modernisation de composants existants et création de nouvelles interfaces.",
      "Intégration asynchrone avec RabbitMQ, clients inter-services Feign, règles métier avec Drools ; optimisation d'Elasticsearch et de SQL Server.",
      "Pipelines Jenkins et déploiements Docker ; support de production niveau 2/3 avec secrets gérés par Vault sur Azure.",
    ],
  },
  {
    from: "Mars 2024",
    to: "Oct. 2024",
    title: "Ingénieur Backend — Java / Spring Boot",
    company: "Alptis Assurances, Lyon (France) — assurance santé",
    stack: "Java 17/21 | Spring Boot | Spring Security | Hibernate | OpenAPI | Drools | PostgreSQL | MongoDB | RabbitMQ | Docker | GitHub Actions",
    bullets: [
      "Traitement de données de santé sensibles dans un cadre réglementaire strict ; API sécurisées avec Spring Security.",
      "Développement d'API REST documentées avec OpenAPI ; implémentation de règles réglementaires complexes avec Drools sur PostgreSQL et MongoDB.",
      "Migration vers Java 17 puis 21 : montée de version des dépendances, contrôle des régressions, sans interruption de service.",
      "Automatisation des déploiements avec GitHub Actions.",
    ],
  },
  {
    from: "Nov. 2022",
    to: "Janv. 2024",
    title: "Ingénieur Backend — Architecture distribuée & événementielle",
    company: "Devoteam — Client : Carrefour, Massy (France)",
    stack: "Java 17 | Spring WebFlux | Kafka | Apache NiFi | PostgreSQL | Redis | Elasticsearch | Docker | Kubernetes | Terraform | Jenkins | GCP",
    bullets: [
      "OneInvoice : plateforme de facturation distribuée et événementielle pour plusieurs entités du groupe, hébergée sur Google Cloud.",
      "Contribution à l'architecture de la plateforme ; développement de microservices réactifs avec Spring WebFlux et Project Reactor.",
      "Flux Kafka et Apache NiFi avec gestion des erreurs, mécanismes de reprise, idempotence et traçabilité de bout en bout.",
      "CI/CD Docker, Kubernetes, Terraform et Jenkins ; analyse de logs, correctifs en production et campagnes de tests de charge et de performance.",
    ],
  },
  {
    from: "Sept. 2020",
    to: "Nov. 2022",
    title: "Ingénieur Full-Stack — Java / Angular",
    company: "Groupe Canal+, Issy-les-Moulineaux (France)",
    stack: "Java 11/17 | Spring Boot | Spring Security | Kafka | Oracle | MySQL | Elasticsearch | Kibana | Docker | Kubernetes | Jenkins | GitLab CI | Angular",
    bullets: [
      "MediaHub : plateforme centrale du groupe pour la gestion, la programmation et la diffusion des contenus audiovisuels.",
      "Microservices Java / Spring Boot avec Spring Security et flux d'événements Kafka ; API REST et interfaces internes.",
      "Déploiements Docker et Kubernetes via Jenkins et GitLab CI/CD ; revues de code, refactoring, optimisation Oracle et MySQL.",
      "Analyse d'incidents avec Kibana et support de production.",
    ],
  },
  {
    from: "Août 2019",
    to: "Mars 2020",
    title: "Ingénieur d'application — Java / React",
    company: "Bayron Group — Client : Disneyland Paris (France)",
    stack: "Java | Spring Boot | React | Oracle | MySQL | Docker | Ansible",
    bullets: [
      "Backend Java / Spring Boot et frontend React ; intégration et optimisation des performances Oracle et MySQL.",
      "Automatisation CI, Docker et Ansible.",
    ],
  },
  {
    from: "2017",
    to: "2019",
    title: "Chef de projet IT & Développeur — Freelance",
    company: "France",
    stack: "Java | Spring Boot | Angular",
    bullets: [
      "Pilotage de projets de bout en bout : recueil des besoins, conception, développement, tests, mise en production et support, en relation directe avec les clients.",
    ],
  },
];

const education = [
  { year: "2026", title: "MSc Sécurité des systèmes d'information", school: "Université de Technologie de Troyes (UTT), France" },
  { year: "2026", title: "Oracle Certified Professional : Java SE 21 Developer", school: "Oracle" },
  { year: "2026", title: "Microsoft Certified : DevOps Engineer Expert (AZ-400) & Azure Developer Associate (AZ-204)", school: "Microsoft" },
  { year: "2017", title: "Master en Management", school: "Université Paris-Sud (Paris XI), France" },
  { year: "2014", title: "Licence en Administration des entreprises", school: "Université Paris Ouest Nanterre, France" },
  { year: "2012", title: "Licence en Informatique", school: "Université de la Manouba, Tunisie" },
];

/* ---------- Composants ---------- */

function Stars({ count, max = 5 }) {
  return (
      <span aria-label={`${count} sur ${max}`}>
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
          <Headerp>Ingénieur Sécurité applicative & DevSecOps | Java Senior</Headerp>
          <Headerp style={{ fontSize: "1.4rem" }}>
            8+ ans à concevoir des systèmes Java sécurisés · MSc Sécurité des SI · OCP Java SE 21 · AZ-400
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
            <AsideBlockh3>STATUT</AsideBlockh3>
            <AsideBlockh3p>
              Nationalité française (UE) · Permis B suisse
              <br />
              Disponible immédiatement, 100 %
            </AsideBlockh3p>
          </AsideBlock>

          <AsideBlock>
            <AsideBlockh3>COMPÉTENCES CLÉS</AsideBlockh3>
            {skills.map(({ title, items }) => (
                <AsideBlockh3p key={title}>
                  <strong>{title} :</strong> {items}
                </AsideBlockh3p>
            ))}
          </AsideBlock>

          <AsideBlock>
            <AsideBlockh3>LANGUES</AsideBlockh3>
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
              Ingénieur Sécurité applicative & DevSecOps, avec plus de 8 ans d'ingénierie backend Java sur
              des systèmes critiques pour une administration cantonale suisse, un groupe international
              d'inspection (SGS), l'assurance santé, la grande distribution et les médias.
            </p>
            <p>
              Pendant ces années, j'ai construit des systèmes Java sécurisés : authentification Spring
              Security et OAuth2, API, pipelines CI/CD, gestion des secrets avec HashiCorp Vault et
              traitement de données personnelles et de santé. Je me suis ensuite spécialisé en sécurité
              avec un MSc en Sécurité des systèmes d'information (2026) et deux missions dédiées, l'une en
              sécurité offensive, l'autre en sécurité d'infrastructure / DevSecOps. Certifié Oracle Java
              SE 21 (OCP) et Microsoft AZ-400 / AZ-204.
            </p>
            <p>
              J'aborde la sécurité du point de vue de l'ingénierie : j'ai moi-même construit les flux
              d'authentification et d'autorisation, les API, les pipelines CI/CD, la gestion des secrets
              et le traitement des données que les équipes sécurité auditent. Je sais donc où se trouvent
              réellement les faiblesses, et je rédige des remédiations qu'un développeur peut appliquer
              dès le lundi matin.
            </p>
            <p>
              Axe actuel : la sécurité des applications intégrant de l'IA (OWASP Top 10 pour LLM,
              injection de prompt, fuite de données, autorisation côté serveur) et l'usage de l'IA dans
              l'ingénierie sécurité, dans le cadre de la nLPD, du RGPD et de l'AI Act européen.
            </p>
          </Mainp>

          <Mainh2>EXPÉRIENCE PROFESSIONNELLE</Mainh2>
          {experiences.map((exp) => (
              <Entry key={exp.title + exp.from} {...exp} />
          ))}

          <Mainh2>FORMATION & CERTIFICATIONS</Mainh2>
          {education.map(({ year, title, school }) => (
              <Entry key={title} from={year} title={title} company={school} />
          ))}
        </Main>

        <Footer>
          <Footerh2>Parlons sécurité</Footerh2>
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