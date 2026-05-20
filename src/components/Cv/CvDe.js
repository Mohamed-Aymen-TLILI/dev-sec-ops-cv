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
                    DevSecOps Ingenieur | Cloud & CI/CD Spezialist
                </Headerp>
            </Header>
            <Picture>
                <Pictureimg src={profile} alt="test" />
            </Picture>
            <AsideLeft>
                <AsideBlock>
                    <AsideBlockh3>KONTAKT</AsideBlockh3>
                    <AsideBlockh3>Telefon</AsideBlockh3>
                    <AsideBlockh3p>+41 76 625 55 08</AsideBlockh3p>
                    <AsideBlockh3>E-Mail</AsideBlockh3>
                    <AsideBlockh3p>aymentli@gmail.com</AsideBlockh3p>
                    <AsideBlockh3>Adresse</AsideBlockh3>
                    <AsideBlockh3p>
                        Chemin de veilloud 11
                        <br/>
                        1024 Ecublens VD
                    </AsideBlockh3p>
                </AsideBlock>
                <AsideBlockh3>KERNKOMPETENZEN</AsideBlockh3>
                <AsideBlockh3p>
                    <strong>CI/CD & Automatisierung:</strong>
                    GitHub Actions, Jenkins, Azure DevOps
                </AsideBlockh3p>

                <AsideBlockh3p>
                    <strong>Cloud & Infrastruktur:</strong>
                    Azure, GCP, Docker, Kubernetes, Terraform
                </AsideBlockh3p>

                <AsideBlockh3p>
                    <strong>Backend Entwicklung:</strong>
                    Java, Spring Boot, REST APIs, Kafka, RabbitMQ
                </AsideBlockh3p>

                <AsideBlockh3p>
                    <strong>Sicherheit & DevSecOps:</strong>
                    OAuth2, RBAC, OWASP, Vault, Sicherer SDLC
                </AsideBlockh3p>

                <AsideBlockh3p>
                    <strong>Monitoring:</strong>
                    ELK Stack, Kibana, Logging, Leistungsanalyse
                </AsideBlockh3p>

                <AsideBlockh3p>
                    <strong>Frontend:</strong>
                    Angular, React, Vue.js, TypeScript
                </AsideBlockh3p>
                <AsideBlock>
                    <AsideBlockh3>Sprachen</AsideBlockh3>
                    <AsideBlockstarh3>
                        Englisch  <br />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </AsideBlockstarh3>
                    <AsideBlockstarh3>
                        Deutsch  <br />
                        <FaStar />
                    </AsideBlockstarh3>
                </AsideBlock>
            </AsideLeft>
            <Main>
                <Mainh2>BERUFLICHER WERDEGANG</Mainh2>
                <Mainp>
                    DevSecOps Ingenieur & Softwareentwickler mit über 7 Jahren Erfahrung in der Konzeption, dem Aufbau und dem Betrieb skalierbarer Cloud-nativer Anwendungen und verteilter Systeme.

                    Umfassende Expertise in CI/CD-Automatisierung, sicherer Softwareauslieferung, Cloud-Plattformen und Infrastrukturpraktiken mit praktischer Erfahrung in der Integration von Sicherheit während des gesamten Softwareentwicklungslebenszyklus.

                    Erfahrung in der Backend-Entwicklung mit Java/Spring Boot, Cloud-Deployments auf Azure, containerisierten Umgebungen, API-Sicherheit, Observabilität und Fehlerbehebung in der Produktion.

                    Microsoft-zertifizierter DevOps Engineer Expert (AZ-400) und Inhaber eines Master-Abschlusses in Cybersicherheit mit starkem Fokus auf DevSecOps, Plattformzuverlässigkeit und Cloud-Sicherheit.
                </Mainp>
                <Mainh2>BERUFSERFAHRUNG</Mainh2>
                <Mainexperience>
                    <Mainexperiencetimeline>
                        <Mainexperiencetimelinep>
                            Feb 2025 <br />
                            - <br />
                            Sep 2025
                        </Mainexperiencetimelinep>
                    </Mainexperiencetimeline>
                    <Mainexperiencecontent>
                        <Mainexperiencecontenth3>
                            Staat Freiburg — Softwareingenieur | DevOps & Cloud
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 21 | Spring Boot | Azure SQL | Angular 16 | Vault | CI/CD | Azure
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Konzeption und Entwicklung sicherer REST-APIs (Spring Security, RBAC)<br/>
                            Sicherheitstests und API-Härtung (OWASP Top 10, Validierung, Zugriffskontrolle)<br/>
                            CI/CD-Integration mit Sicherheits- und Qualitätsprüfungen (automatisierte Tests, Abhängigkeitsscans)<br/>
                            Azure Cloud-Integration und Geheimnisverwaltung (Vault)<br/>
                            SQL-Leistungsoptimierung und Stabilitätsverbesserungen<br/>
                            Code-Reviews und kontinuierliche Verbesserungspraktiken<br/>
                        </Mainexperiencecontentul>
                    </Mainexperiencecontent>
                </Mainexperience>
                <Mainexperience>
                    <Mainexperiencetimeline>
                        <Mainexperiencetimelinep>
                            Okt 2024
                            <br />
                            - <br />
                            Jan 2025
                        </Mainexperiencetimelinep>
                    </Mainexperiencetimeline>
                    <Mainexperiencecontent>
                        <Mainexperiencecontenth3>
                            SGS — Softwareingenieur | DevOps & Cloud
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 21 | Spring Boot | Azure SQL | Angular 16 | Vault | CI/CD | Azure
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Entwicklung sicherer REST-Dienste (Spring Security)<br/>
                            Anwendungssicherheitstests (Zugriffskontrolle, Validierung, OWASP)<br/>
                            CI/CD-Integration und automatisierte Tests<br/>
                            Azure Cloud-Integration und Geheimnisverwaltung<br/>
                            JPA/SQL-Optimierung und Anwendungswartung<br/>
                        </Mainexperiencecontentul>
                    </Mainexperiencecontent>
                </Mainexperience>
                <Mainexperience>
                    <Mainexperiencetimeline>
                        <Mainexperiencetimelinep>
                            Mär 2024 <br />
                            - <br />
                            Okt 2024
                        </Mainexperiencetimelinep>
                    </Mainexperiencetimeline>
                    <Mainexperiencecontent>
                        <Mainexperiencecontenth3>
                            Alptis Versicherung — Softwareingenieur | DevOps & Cloud
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 21 | Spring Boot | VueJS | RabbitMQ | CI/CD | GitHub Actions
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Backend-Entwicklung mit Spring Boot<br/>
                            Implementierung von API-Sicherheit und Validierungsmechanismen<br/>
                            RabbitMQ-Integration für asynchrone Kommunikation<br/>
                            CI/CD-Automatisierung mit GitHub Actions<br/>
                            Produktionssupport und Incident-Lösung<br/>
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
                            Carrefour — Softwareingenieur | DevOps & Cloud
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 17 | Spring WebFlux | Kafka | PostgreSQL | Angular
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Microservices-Entwicklung (Spring Boot / WebFlux)<br/>
                            Entwicklung sicherer APIs (Spring Security, OWASP Best Practices)<br/>
                            Kafka-Integration für asynchrone Workflows<br/>
                            SQL-Optimierung und Codequalitätsverbesserungen<br/>
                        </Mainexperiencecontentul>
                    </Mainexperiencecontent>
                </Mainexperience>
                <Mainexperience>
                    <Mainexperiencetimeline>
                        <Mainexperiencetimelinep>
                            Sep 2020 <br />
                            - <br />
                            Nov 2022
                        </Mainexperiencetimelinep>
                    </Mainexperiencetimeline>
                    <Mainexperiencecontent>
                        <Mainexperiencecontenth3>
                            Canal+ Gruppe — Softwareingenieur | DevOps & Cloud
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 11–17 | Spring Boot | MySQL | Angular | Jenkins | Docker
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Entwicklung sicherer Microservices<br/>
                            Spring Security Implementierung<br/>
                            SQL-Leistungsoptimierung<br/>
                            CI/CD-Automatisierung und containerisierte Bereitstellungen<br/>
                            Agile Zusammenarbeit und Code-Reviews<br/>
                        </Mainexperiencecontentul>
                    </Mainexperiencecontent>
                </Mainexperience>
                <Mainexperience>
                    <Mainexperiencetimeline>
                        <Mainexperiencetimelinep>
                            Aug 2019 <br />
                            - <br />
                            Mär 2020
                        </Mainexperiencetimelinep>
                    </Mainexperiencetimeline>
                    <Mainexperiencecontent>
                        <Mainexperiencecontenth3>
                            Disneyland Paris — Softwareingenieur | DevOps & Cloud
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 8–11 | Spring Boot | MySQL/Oracle | React
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Implementierung von Backend-Funktionen<br/>
                            Entwicklung sicherer APIs<br/>
                            Datenbankoptimierung<br/>
                            Wartung und kontinuierliche Verbesserungen<br/>
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