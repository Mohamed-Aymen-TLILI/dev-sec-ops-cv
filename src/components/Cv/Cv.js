import React from "react";
import {FaRegSmileWink, FaStar,} from "react-icons/fa";
import {
  AsideBlock,
  AsideBlockh3,
  AsideBlockh3p,
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
  Pictureimg
} from "./Cv.elements";
import profile from '../../images/profile.jpg';

export default function CV() {
  return (
    <GridLayout>
      <Header>
        <Headerh1>Mohamed Aymen TLILI</Headerh1>
        <Headerp>DevSecOps Engineer | Java Backend Specialist</Headerp>
      </Header>
      <Picture>
        <Pictureimg src={profile} alt="test" />
      </Picture>
      <AsideLeft>
        <AsideBlock>
          <AsideBlockh3>CONTACT</AsideBlockh3>
          <AsideBlockh3>Téléphone</AsideBlockh3>
          <AsideBlockh3p>+41 76 625 55 08</AsideBlockh3p>
          <AsideBlockh3>Email</AsideBlockh3>
          <AsideBlockh3p>aymentli@gmail.com</AsideBlockh3p>
          <AsideBlockh3>Adresse</AsideBlockh3>
          <AsideBlockh3p>
            Chemin de veilloud 11
            <br/>
            1024 Ecublens VD
          </AsideBlockh3p>
        </AsideBlock>
        <AsideBlock>
          <AsideBlockh3>COMPÉTENCES CLÉS</AsideBlockh3>
          <AsideBlockh3p><strong>DevSecOps :</strong> CI/CD (GitHub Actions, Jenkins), Docker, Vault</AsideBlockh3p>
          <AsideBlockh3p><strong>Cloud :</strong> Azure, Azure SQL</AsideBlockh3p>
          <AsideBlockh3p><strong>Sécurité :</strong> OWASP, Sécurité API, RBAC</AsideBlockh3p>
          <AsideBlockh3p><strong>Backend :</strong> Java 8–21, Spring Boot, Spring Security</AsideBlockh3p>
          <AsideBlockh3p><strong>Frontend :</strong> Angular 16, React, VueJS</AsideBlockh3p>
          <AsideBlockh3p><strong>Messaging :</strong> Kafka, RabbitMQ</AsideBlockh3p>
        </AsideBlock>
        <AsideBlock>
          <AsideBlockh3>FORMATIONS / CERTIFICATIONS</AsideBlockh3>
          <AsideBlockh3p>Microsoft Certified: DevOps Engineer Expert (AZ-400) – 2026</AsideBlockh3p>
          <AsideBlockh3p>Master 2 Cybersécurité – Université de Technologie de Troyes – 2026</AsideBlockh3p>
          <AsideBlockh3p>Master 2 Management – Université Paris-Sud (Paris XI) – 2017</AsideBlockh3p>
          <AsideBlockh3p>Licence Management des Affaires – Université Paris Ouest Nanterre – 2014</AsideBlockh3p>
          <AsideBlockh3p>Licence Informatique – Université de Manouba (Tunisie) – 2012</AsideBlockh3p>
        </AsideBlock>
        <AsideBlock>
          <AsideBlockh3>Langues</AsideBlockh3>
          <AsideBlockstarh3>
            Anglais <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </AsideBlockstarh3>
          <AsideBlockstarh3>
            Allemand <br />
            <FaStar />
          </AsideBlockstarh3>
        </AsideBlock>
      </AsideLeft>
      <Main>
        <Mainh2>PROFIL PROFESSIONNEL</Mainh2>
        <Mainp>
          DevSecOps Engineer certifié Microsoft avec plus de 6 ans d’expérience en développement Java/Spring Boot dans des environnements critiques.
          Spécialisé dans la sécurisation des APIs, l’intégration de la sécurité dans les pipelines CI/CD et le déploiement cloud (Azure, Docker).
          Récemment certifié Microsoft et en fin de Master 2 Cybersécurité (fin prévue : mars 2026).
        </Mainp>
        <Mainh2>EXPERIENCES PROFESSIONNELLES</Mainh2>
        <Mainexperience>
          <Mainexperiencetimeline>
            <Mainexperiencetimelinep>
              Fév 2025 <br />
              - <br />
              Août 2025
            </Mainexperiencetimelinep>
          </Mainexperiencetimeline>
          <Mainexperiencecontent>
            <Mainexperiencecontenth3>
              Etat de Fribourg – Développeur Java Angular Senior
            </Mainexperiencecontenth3>
            <Mainexperiencecontentp>
              Java 21 | Spring Boot | Azure SQL | Angular 16 | Vault | CI/CD | Azure
            </Mainexperiencecontentp>
            <Mainexperiencecontentul>
              Conception de services REST sécurisés (Spring Security, RBAC)<br/>
              Tests de sécurité et durcissement API (OWASP Top 10, validation, contrôle d’accès)<br/>
              Intégration CI/CD avec contrôles qualité et sécurité (tests, scans dépendances)<br/>
              Intégration cloud Azure et gestion des secrets (Vault)<br/>
              Optimisation des requêtes SQL et stabilité des performances<br/>
              Revue de code, maintenance évolutive et corrective<br/>
            </Mainexperiencecontentul>
          </Mainexperiencecontent>
        </Mainexperience>
        <Mainexperience>
          <Mainexperiencetimeline>
            <Mainexperiencetimelinep>
               Oct 2024
              <br />
              - <br />
              Janv 2025
            </Mainexperiencetimelinep>
          </Mainexperiencetimeline>
          <Mainexperiencecontent>
            <Mainexperiencecontenth3>SGS — Développeur Java Angular Senior</Mainexperiencecontenth3>
            <Mainexperiencecontentp> Java 21 | Spring Boot | Azure SQL | Angular 16 | Vault | CI/CD | Azure</Mainexperiencecontentp>
            <Mainexperiencecontentul>
              Développement de services REST sécurisés (Spring Security)<br/>
              Tests de sécurité applicative (contrôles d’accès, validation, OWASP)<br/>
              Intégration CI/CD et automatisation des tests<br/>
              Intégration cloud Azure (Azure SQL) et gestion des secrets (Vault)<br/>
              Optimisation JPA / SQL et maintenance évolutive<br/>
            </Mainexperiencecontentul>
          </Mainexperiencecontent>
        </Mainexperience>
        <Mainexperience>
          <Mainexperiencetimeline>
            <Mainexperiencetimelinep>
              Mars 2024 <br />
              - <br />
              Oct 2024
            </Mainexperiencetimelinep>
          </Mainexperiencetimeline>
          <Mainexperiencecontent>
            <Mainexperiencecontenth3>Alptis Assurance — Développeur Java VueJS Senior</Mainexperiencecontenth3>
            <Mainexperiencecontentp> Java 21 | Spring Boot | Azure SQL | VueJs | CI/CD | GitHub Action</Mainexperiencecontentp>
            <Mainexperiencecontentul>
              Développement backend Spring Boot et conception d’API robustes<br/>
              Tests et sécurisation des endpoints (validation, gestion des erreurs, OWASP)<br/>
              Intégration RabbitMQ et fiabilisation des échanges asynchrones<br/>
              CI/CD via GitHub Actions (tests automatisés, déploiements)<br/>
              Support production et résolution d’incidents<br/>
            </Mainexperiencecontentul>
          </Mainexperiencecontent>
        </Mainexperience>
        <Mainexperience>
          <Mainexperiencetimeline>
            <Mainexperiencetimelinep>
              Nov 2022 <br />
              - <br />
              Jan 2024
            </Mainexperiencetimelinep>
          </Mainexperiencetimeline>
          <Mainexperiencecontent>
            <Mainexperiencecontenth3>Carrefour — Développeur Java Angular</Mainexperiencecontenth3>
            <Mainexperiencecontentp> Java 17 | Spring WebFlux | Azure SQL | Angular 16 | Vault | CI/CD | Azure</Mainexperiencecontentp>
            <Mainexperiencecontentul>
              Développement de microservices (Spring Boot / WebFlux)<br/>
              Tests et sécurisation des APIs (Spring Security, contrôle d’accès, OWASP)<br/>
              Intégration Kafka et gestion des flux asynchrones<br/>
              Intégration cloud / déploiements containerisés (Docker) <br/>
              Revue de code, optimisation PostgreSQL, amélioration qualité<br/>
            </Mainexperiencecontentul>
          </Mainexperiencecontent>
        </Mainexperience>
        <Mainexperience>
          <Mainexperiencetimeline>
            <Mainexperiencetimelinep>
              Sept 2020 <br />
              - <br />
              Nov 2022
            </Mainexperiencetimelinep>
          </Mainexperiencetimeline>
          <Mainexperiencecontent>
            <Mainexperiencecontenth3>Canal Plus — Développeur Java Angular</Mainexperiencecontenth3>
            <Mainexperiencecontentp> Java 11 | Spring Boot | Azure SQL | Angular | NGXS | CI/CD | Jenkins | Docker | Kubernetes</Mainexperiencecontentp>
            <Mainexperiencecontentul>
              Développement microservices sécurisés<br/>
              Implémentation Spring Security<br/>
              Optimisation requêtes SQL<br/>
              Gestion state management Angular<br/>
              Tests et sécurisation des APIs (Spring Security, contrôle d’accès, OWASP)<br/>
              Intégration cloud / déploiements containerisés (Docker) <br/>
              Participation Agile<br/>
            </Mainexperiencecontentul>
          </Mainexperiencecontent>
        </Mainexperience>
        <Mainexperience>
          <Mainexperiencetimeline>
            <Mainexperiencetimelinep>
              Août 2019 <br />
              - <br />
              Mars 2020
            </Mainexperiencetimelinep>
          </Mainexperiencetimeline>
          <Mainexperiencecontent>
            <Mainexperiencecontenth3>Disneyland Paris — Développeur Java React</Mainexperiencecontenth3>
            <Mainexperiencecontentp> Java 11 | Spring Boot | MySQL/Oracle | React</Mainexperiencecontentp>
            <Mainexperiencecontentul>
              Développement microservices sécurisés<br/>
              Implémentation Spring Security<br/>
              Optimisation requêtes SQL<br/>
              Tests et sécurisation des APIs (Spring Security, contrôle d’accès, OWASP)<br/>
              Gestion state management React Redux<br/>
              Participation Agile<br/>
            </Mainexperiencecontentul>
          </Mainexperiencecontent>
        </Mainexperience>
      </Main>
      <Footer>
        <Footerh2>
          <span>aymentli@gmail.com </span>
          <FaRegSmileWink />
        </Footerh2>
      </Footer>
    </GridLayout>
  );}
