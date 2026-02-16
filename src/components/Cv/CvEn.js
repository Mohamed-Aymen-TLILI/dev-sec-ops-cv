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
                <Headerp>DevSecOps Engineer | Senior Java Backend Specialist</Headerp>
            </Header>
            <Picture>
                <Pictureimg src={profile} alt="test" />
            </Picture>
            <AsideLeft>
                <AsideBlock>
                    <AsideBlockh3>CONTACT</AsideBlockh3>
                    <AsideBlockh3>Phone</AsideBlockh3>
                    <AsideBlockh3p>+41 76 625 55 08</AsideBlockh3p>
                    <AsideBlockh3>e-mail</AsideBlockh3>
                    <AsideBlockh3p>aymentli@gmail.com</AsideBlockh3p>
                    <AsideBlockh3>Adress</AsideBlockh3>
                    <AsideBlockh3p>
                        Chemin de veilloud 11
                        <br/>
                        1024 Ecublens VD
                    </AsideBlockh3p>
                </AsideBlock>
                <AsideBlockh3>CORE COMPETENCIES</AsideBlockh3>
                <AsideBlockh3p><strong>DevSecOps:</strong> CI/CD (GitHub Actions, Jenkins), Docker, Vault</AsideBlockh3p>
                <AsideBlockh3p><strong>Cloud:</strong> Azure, Azure SQL</AsideBlockh3p>
                <AsideBlockh3p><strong>Security:</strong> OWASP Top 10, API Security, RBAC</AsideBlockh3p>
                <AsideBlockh3p><strong>Backend:</strong> Java 8–21, Spring Boot, Spring Security</AsideBlockh3p>
                <AsideBlockh3p><strong>Frontend:</strong> Angular 16, React, VueJS</AsideBlockh3p>
                <AsideBlockh3p><strong>Messaging:</strong> Kafka, RabbitMQ</AsideBlockh3p>
                <AsideBlockh3>EDUCATION / CERTIFICATIONS</AsideBlockh3>
                <AsideBlockh3p>Microsoft Certified: DevOps Engineer Expert (AZ-400) – 2026</AsideBlockh3p>
                <AsideBlockh3p>Master’s Degree in Cybersecurity – University of Technology of Troyes – Expected March 2026</AsideBlockh3p>
                <AsideBlockh3p>Master’s Degree in Management – Paris-Sud University – 2017</AsideBlockh3p>
                <AsideBlockh3p>Bachelor’s Degree in Business Management – Paris Ouest Nanterre University – 2014</AsideBlockh3p>
                <AsideBlockh3p>Bachelor’s Degree in Computer Science – University of Manouba (Tunisia) – 2012</AsideBlockh3p>
                <AsideBlock>
                    <AsideBlockh3>Languages</AsideBlockh3>
                    <AsideBlockstarh3>
                        French  <br />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </AsideBlockstarh3>
                    <AsideBlockstarh3>
                        German  <br />
                        <FaStar />
                    </AsideBlockstarh3>
                </AsideBlock>
            </AsideLeft>
            <Main>
                <Mainh2>PROFESSIONAL SUMMARY</Mainh2>
                <Mainp>
                    Microsoft-certified DevSecOps Engineer with over 6 years of experience in Java/Spring Boot development within critical and high-availability environments.
                    Specialized in API security, CI/CD security integration, and secure cloud deployments (Azure, Docker).
                    Recently certified Microsoft DevOps Engineer Expert and completing a Master’s degree in Cybersecurity (expected March 2026).
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
                            State of Fribourg — Senior Java Angular Developer
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 21 | Spring Boot | Azure SQL | Angular 16 | Vault | CI/CD | Azure
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Design and development of secure REST APIs (Spring Security, RBAC)<br/>
                            Security testing and API hardening (OWASP Top 10, validation, access control)<br/>
                            CI/CD integration with security and quality checks (automated tests, dependency scanning)<br/>
                            Azure cloud integration and secret management (Vault)<br/>
                            SQL performance optimization and stability improvements<br/>
                            Code reviews and continuous improvement practices<br/>
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
                        <Mainexperiencecontenth3>
                            SGS — Senior Java Angular Developer
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 21 | Spring Boot | Azure SQL | Angular 16 | Vault | CI/CD | Azure
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Development of secure REST services (Spring Security)<br/>
                            Application security testing (access control, validation, OWASP)<br/>
                            CI/CD integration and automated testing<br/>
                            Azure cloud integration and secret management<br/>
                            JPA/SQL optimization and application maintenance<br/>
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
                        <Mainexperiencecontenth3>
                            Alptis Insurance — Senior Java VueJS Developer
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 21 | Spring Boot | VueJS | RabbitMQ | CI/CD | GitHub Actions
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Backend development with Spring Boot<br/>
                            API security implementation and validation mechanisms<br/>
                            RabbitMQ integration for asynchronous communication<br/>
                            CI/CD automation with GitHub Actions<br/>
                            Production support and incident resolution<br/>
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
                            Carrefour — Java Angular Developer
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 17 | Spring WebFlux | Kafka | PostgreSQL | Angular
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Microservices development (Spring Boot / WebFlux)<br/>
                            Secure API development (Spring Security, OWASP best practices)<br/>
                            Kafka integration for asynchronous workflows<br/>
                            SQL optimization and code quality improvements<br/>
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
                            Canal+ Group — Java Angular Developer
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 11–17 | Spring Boot | MySQL | Angular | Jenkins | Docker
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Secure microservices development<br/>
                            Spring Security implementation<br/>
                            SQL performance optimization<br/>
                            CI/CD automation and containerized deployments<br/>
                            Agile collaboration and code reviews<br/>
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
                            Disneyland Paris — Java React Developer
                        </Mainexperiencecontenth3>
                        <Mainexperiencecontentp>
                            Java 8–11 | Spring Boot | MySQL/Oracle | React
                        </Mainexperiencecontentp>
                        <Mainexperiencecontentul>
                            Backend feature implementation<br/>
                            Secure API development<br/>
                            Database optimization<br/>
                            Maintenance and continuous improvements<br/>
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
