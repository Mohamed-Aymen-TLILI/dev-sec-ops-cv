import React from "react";
import { FaRegSmileWink, FaStar } from "react-icons/fa";
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
    Pictureimg,
} from "./Cv.elements";
import profile from "../../images/profile.jpg";

export default function CV() {
    return (
        <GridLayout>
            <Header>
                <Headerh1>Mohamed Aymen TLILI</Headerh1>
                <Headerp>DevSecOps Engineer | Senior Java Backend Specialist</Headerp>
            </Header>

            <Picture>
                <Pictureimg src={profile} alt="profile" />
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
                        <br />
                        1024 Ecublens VD
                    </AsideBlockh3p>
                </AsideBlock>

                <AsideBlock>
                    <AsideBlockh3>KERNKOMPETENZEN</AsideBlockh3>
                    <AsideBlockh3p>
                        <strong>DevSecOps:</strong> CI/CD (GitHub Actions, Jenkins), Docker, Vault
                    </AsideBlockh3p>
                    <AsideBlockh3p>
                        <strong>Cloud:</strong> Azure, Azure SQL
                    </AsideBlockh3p>
                    <AsideBlockh3p>
                        <strong>Sicherheit:</strong> OWASP Top 10, API-Security, RBAC
                    </AsideBlockh3p>
                    <AsideBlockh3p>
                        <strong>Backend:</strong> Java 8–21, Spring Boot, Spring Security
                    </AsideBlockh3p>
                    <AsideBlockh3p>
                        <strong>Frontend:</strong> Angular 16, React, VueJS
                    </AsideBlockh3p>
                    <AsideBlockh3p>
                        <strong>Messaging:</strong> Kafka, RabbitMQ
                    </AsideBlockh3p>
                </AsideBlock>

                <AsideBlock>
                    <AsideBlockh3>AUSBILDUNG / ZERTIFIZIERUNGEN</AsideBlockh3>
                    <AsideBlockh3p>Microsoft Certified: DevOps Engineer Expert (AZ-400) – 2026</AsideBlockh3p>
                    <AsideBlockh3p>
                        Master (M2) Cybersicherheit – Université de Technologie de Troyes – Abschluss erwartet: März 2026
                    </AsideBlockh3p>
                    <AsideBlockh3p>Master (M2) Management – Université Paris-Sud (Paris XI) – 2017</AsideBlockh3p>
                    <AsideBlockh3p>Bachelor (Lizenz) Business Management – Université Paris Ouest Nanterre – 2014</AsideBlockh3p>
                    <AsideBlockh3p>Bachelor (Lizenz) Informatik – Universität Manouba (Tunesien) – 2012</AsideBlockh3p>
                </AsideBlock>

                <AsideBlock>
                    <AsideBlockh3>SPRACHEN</AsideBlockh3>
                    <AsideBlockstarh3>
                        Französisch <br />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </AsideBlockstarh3>
                    <AsideBlockstarh3>
                        Deutsch <br />
                        <FaStar />
                    </AsideBlockstarh3>
                </AsideBlock>
            </AsideLeft>

            <Main>
                <Mainh2>PROFIL</Mainh2>
                <Mainp>
                    Microsoft-zertifizierter DevSecOps Engineer mit über 6 Jahren Erfahrung in der Entwicklung von Java/Spring-Boot-Lösungen
                    in kritischen und hochverfügbaren Umgebungen. Spezialisiert auf API-Sicherheit, die Integration von Security in CI/CD-Pipelines
                    sowie sichere Cloud-Deployments (Azure, Docker). Kürzlich als Microsoft DevOps Engineer Expert zertifiziert und in Abschlussphase
                    eines Masterstudiums in Cybersicherheit (Abschluss erwartet: März 2026).
                </Mainp>

                <Mainh2>BERUFSERFAHRUNG</Mainh2>

                <Mainexperience>
                    <Mainexperiencetimeline>
                        <Mainexperiencetimelinep>
                            Feb 2025 <br />- <br />
                            Aug 2025
                        </Mainexperiencetimelinep>
                    </Mainexperiencetimeline>
                    <Mainexperiencecontent>
                        <Mainexperiencecontenth3>
                            Staat Freiburg — Senior Java/Angular Entwickler
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 21 | Spring Boot | Azure SQL | Angular 16 | Vault | CI/CD | Azure
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Konzeption und Entwicklung sicherer REST-APIs (Spring Security, RBAC)
                            <br />
                            Security-Tests und API-Härtung (OWASP Top 10, Validierung, Zugriffskontrolle)
                            <br />
                            CI/CD-Integration mit Security- und Qualitätsprüfungen (automatisierte Tests, Dependency-Scanning)
                            <br />
                            Azure-Cloud-Integration und Secret-Management (Vault)
                            <br />
                            SQL-Performance-Optimierung und Stabilitätsverbesserungen
                            <br />
                            Code Reviews und kontinuierliche Verbesserung
                            <br />
                        </Mainexperiencecontentul>
                    </Mainexperiencecontent>
                </Mainexperience>

                <Mainexperience>
                    <Mainexperiencetimeline>
                        <Mainexperiencetimelinep>
                            Okt 2024 <br />- <br />
                            Jan 2025
                        </Mainexperiencetimelinep>
                    </Mainexperiencetimeline>
                    <Mainexperiencecontent>
                        <Mainexperiencecontenth3>
                            SGS — Senior Java/Angular Entwickler
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 21 | Spring Boot | Azure SQL | Angular 16 | Vault | CI/CD | Azure
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Entwicklung sicherer REST-Services (Spring Security)
                            <br />
                            Anwendungssicherheits-Tests (Zugriffskontrolle, Validierung, OWASP)
                            <br />
                            CI/CD-Integration und Testautomatisierung
                            <br />
                            Azure-Cloud-Integration und Secret-Management
                            <br />
                            JPA/SQL-Optimierung sowie Wartung und Weiterentwicklung
                            <br />
                        </Mainexperiencecontentul>
                    </Mainexperiencecontent>
                </Mainexperience>

                <Mainexperience>
                    <Mainexperiencetimeline>
                        <Mainexperiencetimelinep>
                            Mär 2024 <br />- <br />
                            Okt 2024
                        </Mainexperiencetimelinep>
                    </Mainexperiencetimeline>
                    <Mainexperiencecontent>
                        <Mainexperiencecontenth3>
                            Alptis Versicherung — Senior Java/VueJS Entwickler
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 21 | Spring Boot | VueJS | RabbitMQ | CI/CD | GitHub Actions
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Backend-Entwicklung mit Spring Boot
                            <br />
                            Umsetzung von API-Security und Validierungsmechanismen
                            <br />
                            RabbitMQ-Integration für asynchrone Kommunikation
                            <br />
                            CI/CD-Automatisierung mit GitHub Actions
                            <br />
                            Production Support und Incident-Handling
                            <br />
                        </Mainexperiencecontentul>
                    </Mainexperiencecontent>
                </Mainexperience>

                <Mainexperience>
                    <Mainexperiencetimeline>
                        <Mainexperiencetimelinep>
                            Nov 2022 <br />- <br />
                            Jan 2024
                        </Mainexperiencetimelinep>
                    </Mainexperiencetimeline>
                    <Mainexperiencecontent>
                        <Mainexperiencecontenth3>
                            Carrefour — Java/Angular Entwickler
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 17 | Spring WebFlux | Kafka | PostgreSQL | Angular
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Entwicklung von Microservices (Spring Boot / WebFlux)
                            <br />
                            Sichere API-Entwicklung (Spring Security, OWASP Best Practices)
                            <br />
                            Kafka-Integration für asynchrone Workflows
                            <br />
                            SQL-Optimierung und Verbesserungen der Codequalität
                            <br />
                        </Mainexperiencecontentul>
                    </Mainexperiencecontent>
                </Mainexperience>

                <Mainexperience>
                    <Mainexperiencetimeline>
                        <Mainexperiencetimelinep>
                            Sep 2020 <br />- <br />
                            Nov 2022
                        </Mainexperiencetimelinep>
                    </Mainexperiencetimeline>
                    <Mainexperiencecontent>
                        <Mainexperiencecontenth3>
                            Canal+ Group — Java/Angular Entwickler
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 11–17 | Spring Boot | MySQL | Angular | Jenkins | Docker
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Entwicklung sicherer Microservices
                            <br />
                            Implementierung von Spring Security
                            <br />
                            SQL-Performance-Optimierung
                            <br />
                            CI/CD-Automatisierung und containerisierte Deployments
                            <br />
                            Agile Zusammenarbeit und Code Reviews
                            <br />
                        </Mainexperiencecontentul>
                    </Mainexperiencecontent>
                </Mainexperience>

                <Mainexperience>
                    <Mainexperiencetimeline>
                        <Mainexperiencetimelinep>
                            Aug 2019 <br />- <br />
                            Mär 2020
                        </Mainexperiencetimelinep>
                    </Mainexperiencetimeline>
                    <Mainexperiencecontent>
                        <Mainexperiencecontenth3>
                            Disneyland Paris — Java/React Entwickler
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 8–11 | Spring Boot | MySQL/Oracle | React
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Implementierung von Backend-Features
                            <br />
                            Sichere API-Entwicklung
                            <br />
                            Datenbank-Optimierung
                            <br />
                            Wartung und kontinuierliche Verbesserungen
                            <br />
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
