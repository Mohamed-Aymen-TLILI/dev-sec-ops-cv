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
          <Headerp>
            Ingénieur DevSecOps | Spécialiste Cloud & CI/CD
          </Headerp>
        </Header>
        <Picture>
          <Pictureimg src={profile} alt="test" />
        </Picture>
        <AsideLeft>
          <AsideBlock>
            <AsideBlockh3>CONTACT</AsideBlockh3>
            <AsideBlockh3>Téléphone</AsideBlockh3>
            <AsideBlockh3p>+41 76 625 55 08</AsideBlockh3p>
            <AsideBlockh3>e-mail</AsideBlockh3>
            <AsideBlockh3p>aymentli@gmail.com</AsideBlockh3p>
            <AsideBlockh3>Adresse</AsideBlockh3>
            <AsideBlockh3p>
              Chemin de veilloud 11
              <br/>
              1024 Ecublens VD
            </AsideBlockh3p>
          </AsideBlock>
          <AsideBlockh3>COMPÉTENCES CLÉS</AsideBlockh3>
          <AsideBlockh3p>
            <strong>CI/CD & Automatisation :</strong>
            GitHub Actions, Jenkins, Azure DevOps
          </AsideBlockh3p>

          <AsideBlockh3p>
            <strong>Cloud & Infrastructure :</strong>
            Azure, GCP, Docker, Kubernetes, Terraform
          </AsideBlockh3p>

          <AsideBlockh3p>
            <strong>Ingénierie Backend :</strong>
            Java, Spring Boot, REST APIs, Kafka, RabbitMQ
          </AsideBlockh3p>

          <AsideBlockh3p>
            <strong>Sécurité & DevSecOps :</strong>
            OAuth2, RBAC, OWASP, Vault, SDLC Sécurisé
          </AsideBlockh3p>

          <AsideBlockh3p>
            <strong>Monitoring :</strong>
            ELK Stack, Kibana, Journalisation, Analyse de performances
          </AsideBlockh3p>

          <AsideBlockh3p>
            <strong>Frontend :</strong>
            Angular, React, Vue.js, TypeScript
          </AsideBlockh3p>
          <AsideBlock>
            <AsideBlockh3>Langues</AsideBlockh3>
            <AsideBlockstarh3>
              Anglais  <br />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </AsideBlockstarh3>
            <AsideBlockstarh3>
              Allemand  <br />
              <FaStar />
            </AsideBlockstarh3>
          </AsideBlock>
        </AsideLeft>
        <Main>
          <Mainh2>RÉSUMÉ PROFESSIONNEL</Mainh2>
          <Mainp>
            Ingénieur DevSecOps & Logiciel avec plus de 7 ans d'expérience dans la conception, la construction et l'exploitation d'applications cloud natives et de systèmes distribués à grande échelle.

            Forte expertise en automatisation CI/CD, livraison sécurisée de logiciels, plateformes cloud et pratiques d'infrastructure, avec une expérience pratique de l'intégration de la sécurité tout au long du cycle de vie du développement logiciel.

            Expérimenté en ingénierie backend avec Java/Spring Boot, déploiements cloud sur Azure, environnements conteneurisés, sécurité des API, observabilité et résolution de problèmes en production.

            Expert certifié Microsoft DevOps Engineer (AZ-400) et titulaire d'un Master en Cybersécurité, avec une forte orientation vers DevSecOps, fiabilité des plateformes et sécurité cloud.
          </Mainp>
          <Mainh2>EXPÉRIENCE PROFESSIONNELLE</Mainh2>
          <Mainexperience>
            <Mainexperiencetimeline>
              <Mainexperiencetimelinep>
                Fév 2025 <br />
                - <br />
                Sep 2025
              </Mainexperiencetimelinep>
            </Mainexperiencetimeline>
            <Mainexperiencecontent>
              <Mainexperiencecontenth3>
                État de Fribourg — Ingénieur Logiciel | DevOps & Cloud
              </Mainexperiencecontenth3>
              <Mainexperiencecontentp>
                Java 21 | Spring Boot | Azure SQL | Angular 16 | Vault | CI/CD | Azure
              </Mainexperiencecontentp>
              <Mainexperiencecontentul>
                Conception et développement d'API REST sécurisées (Spring Security, RBAC)<br/>
                Tests de sécurité et durcissement des API (OWASP Top 10, validation, contrôle d'accès)<br/>
                Intégration CI/CD avec contrôles de sécurité et de qualité (tests automatisés, analyse des dépendances)<br/>
                Intégration cloud Azure et gestion des secrets (Vault)<br/>
                Optimisation des performances SQL et améliorations de la stabilité<br/>
                Revues de code et pratiques d'amélioration continue<br/>
              </Mainexperiencecontentul>
            </Mainexperiencecontent>
          </Mainexperience>
          <Mainexperience>
            <Mainexperiencetimeline>
              <Mainexperiencetimelinep>
                Oct 2024
                <br />
                - <br />
                Jan 2025
              </Mainexperiencetimelinep>
            </Mainexperiencetimeline>
            <Mainexperiencecontent>
              <Mainexperiencecontenth3>
                SGS — Ingénieur Logiciel | DevOps & Cloud
              </Mainexperiencecontenth3>
              <Mainexperiencecontentp>
                Java 21 | Spring Boot | Azure SQL | Angular 16 | Vault | CI/CD | Azure
              </Mainexperiencecontentp>
              <Mainexperiencecontentul>
                Développement de services REST sécurisés (Spring Security)<br/>
                Tests de sécurité applicative (contrôle d'accès, validation, OWASP)<br/>
                Intégration CI/CD et tests automatisés<br/>
                Intégration cloud Azure et gestion des secrets<br/>
                Optimisation JPA/SQL et maintenance applicative<br/>
              </Mainexperiencecontentul>
            </Mainexperiencecontent>
          </Mainexperience>
          <Mainexperience>
            <Mainexperiencetimeline>
              <Mainexperiencetimelinep>
                Mar 2024 <br />
                - <br />
                Oct 2024
              </Mainexperiencetimelinep>
            </Mainexperiencetimeline>
            <Mainexperiencecontent>
              <Mainexperiencecontenth3>
                Alptis Assurance — Ingénieur Logiciel | DevOps & Cloud
              </Mainexperiencecontenth3>
              <Mainexperiencecontentp>
                Java 21 | Spring Boot | VueJS | RabbitMQ | CI/CD | GitHub Actions
              </Mainexperiencecontentp>
              <Mainexperiencecontentul>
                Développement backend avec Spring Boot<br/>
                Implémentation de sécurité des API et mécanismes de validation<br/>
                Intégration RabbitMQ pour la communication asynchrone<br/>
                Automatisation CI/CD avec GitHub Actions<br/>
                Support de production et résolution d'incidents<br/>
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
              <Mainexperiencecontenth3>
                Carrefour — Ingénieur Logiciel | DevOps & Cloud
              </Mainexperiencecontenth3>
              <Mainexperiencecontentp>
                Java 17 | Spring WebFlux | Kafka | PostgreSQL | Angular
              </Mainexperiencecontentp>
              <Mainexperiencecontentul>
                Développement de microservices (Spring Boot / WebFlux)<br/>
                Développement d'API sécurisées (Spring Security, bonnes pratiques OWASP)<br/>
                Intégration Kafka pour les workflows asynchrones<br/>
                Optimisation SQL et améliorations de la qualité du code<br/>
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
              <Mainexperiencecontenth3>
                Canal+ Groupe — Ingénieur Logiciel | DevOps & Cloud
              </Mainexperiencecontenth3>
              <Mainexperiencecontentp>
                Java 11–17 | Spring Boot | MySQL | Angular | Jenkins | Docker
              </Mainexperiencecontentp>
              <Mainexperiencecontentul>
                Développement de microservices sécurisés<br/>
                Implémentation Spring Security<br/>
                Optimisation des performances SQL<br/>
                Automatisation CI/CD et déploiements conteneurisés<br/>
                Collaboration Agile et revues de code<br/>
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
              <Mainexperiencecontenth3>
                Disneyland Paris — Ingénieur Logiciel | DevOps & Cloud
              </Mainexperiencecontenth3>
              <Mainexperiencecontentp>
                Java 8–11 | Spring Boot | MySQL/Oracle | React
              </Mainexperiencecontentp>
              <Mainexperiencecontentul>
                Implémentation de fonctionnalités backend<br/>
                Développement d'API sécurisées<br/>
                Optimisation de base de données<br/>
                Maintenance et améliorations continues<br/>
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
  );
}