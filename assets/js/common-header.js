document.addEventListener("DOMContentLoaded", () => {
    const HEADER_HTML = `
    <!-- Offcanvas Area Start -->
    <div class="fix-area">
        <div class="offcanvas__info">
            <div class="offcanvas__wrapper">
                <div class="offcanvas__content">
                    <div class="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                        <div class="offcanvas__logo">
                            <a href="index.html">
                                <img src="assets/webimages/log.png" width="200px" alt="logo-img">
                            </a>
                        </div>
                        <div class="offcanvas__close">
                            <button>
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>

                    <div class="mobile-menu fix mb-3"></div>
                    <div class="offcanvas__contact">
                        <h4 class="n900-clr">Contact Info</h4>
                        <ul class="d-grid gap-2 mb-5">
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon">
                                    <i class="fal fa-map-marker-alt"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a target="_blank" href="https://maps.google.com/?q=Sydney,+NSW,+Australia">Sydney, NSW, Australia</a>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon mr-15">
                                    <i class="fal fa-envelope"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a href="mailto:info@clarent360.com.au"><span
                                            class="mailto:info@clarent360.com.au">info@clarent360.com.au</span></a>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon mr-15">
                                    <i class="fal fa-clock"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a target="_blank" href="#">Mon-Friday, 09am - 06pm</a>
                                </div>
                            </li>

                        </ul>
                        <div class="header-button mt-4">
                            <a href="contact.html" class="theme-btn p2-bg text-center">
                                <span>
                                    Get A Quote
                                    <span class="ani-arrow">
                                        <i class="fa-solid fa-arrow-right-long"></i>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="social-icon d-flex align-items-center">
                            <a href="https://www.linkedin.com/in/clarent-solutions-472a16407/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="offcanvas__overlay"></div>

    <header id="header-sticky" class="header-1 w-100">
        <div class="container">
            <div class="mega-menu-wrapper">
                <div class="header-main">
                    <div class="header-left" style="padding-top: 10px;">
                        <div class="logo">
                            <a href="index.html" class="header-logo">
                                <img src="assets/webimages/log.png" width="200px" alt="logo-img">
                            </a>
                        </div>
                    </div>
                    <div class="header-right d-flex justify-content-end align-items-center">
                        <div class="mean__menu-wrapper">
                            <div class="main-menu">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li class=" menu-thumb">
                                            <a href="index.html">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="program.html">Programs</a>
                                        </li>
                                        <li>
                                            <a href="services.html">
                                                Services
                                                <i class="fas fa-angle-down"></i>
                                            </a>
                                            <ul class="submenu services-mega">
                                                                                                <li class="services-mega__rail">
                                                    <button type="button" class="services-mega__tab active"
                                                        data-services-tab="security">
                                                        Security<i class="fa-solid fa-chevron-right"></i>
                                                    </button>
                                                    <button type="button" class="services-mega__tab"
                                                        data-services-tab="testing"
                                                        data-href="pentest-services.html">
                                                        Pentest <i class="fa-solid fa-chevron-right"></i>
                                                    </button>
                                                    <button type="button" class="services-mega__tab"
                                                        data-services-tab="governance"
                                                        data-href="grc.html">
                                                        GRC Services <i class="fa-solid fa-chevron-right"></i>
                                                    </button>
                                                    <button type="button" class="services-mega__tab"
                                                        data-services-tab="training"
                                                        data-href="training-solutions.html">
                                                        Training <i class="fa-solid fa-chevron-right"></i>
                                                    </button>
                                                    <button type="button" class="services-mega__tab"
                                                        data-services-tab="platforms"
                                                        data-href="hire-consultant.html">
                                                        Consultation <i class="fa-solid fa-chevron-right"></i>
                                                    </button>
                                                    <button type="button" class="services-mega__tab" id="psychometricBtn" data-href="clarent-psychometrics.html">
                                                        Pyschometric Analysis <i class="fa-solid fa-chevron-right"></i>
                                                    </button>
                                                    <button type="button" class="services-mega__tab"
                                                        data-services-tab="programs"
                                                        data-href="program.html">
                                                        Programs <i class="fa-solid fa-chevron-right"></i>
                                                    </button>
                                                    <button type="button" class="services-mega__tab"
                                                        data-services-tab="checklist"
                                                        data-href="checklist.html">
                                                        Checklist <i class="fa-solid fa-chevron-right"></i>
                                                    </button>
                                                    <button type="button" class="services-mega__tab"
                                                        data-services-tab="framework"
                                                        data-href="framework.html">
                                                        Framework <i class="fa-solid fa-chevron-right"></i>
                                                    </button>
                                                </li>

                                                <li class="services-mega__panels">
                                                                                                         <div class="services-mega__panel active" data-services-panel="security">
                                                         <ul class="services-mega__list">
                                                             <li class="services-mega__item">
                                                                 <a href="dlp-solutions.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-user-lock"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">DLP Solutions</span>
                                                                         <span class="mdesc">Data Loss Prevention strategy, tool configuration and enforcement.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="threat-hunting.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-crosshairs"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Threat Hunting</span>
                                                                         <span class="mdesc">Proactive threat hunting, compromise assessments and SOC support.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="cloud-solutions.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-cloud"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Cloud Security</span>
                                                                         <span class="mdesc">Secure cloud infrastructure with monitoring, identity, and compliance.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="microsoft-security-reviews.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-brands fa-microsoft"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Microsoft</span>
                                                                         <span class="mdesc">Secure Microsoft 365, Azure, and enterprise environments.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                  <a href="microsoft-365-security-review.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-brands fa-microsoft"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Microsoft 365 Security Reviews</span>
                                                                         <span class="mdesc">Security reviews for M365 tenants, apps and email.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                  <a href="microsoft-purview-review.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-shield-halved"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Microsoft Purview Review</span>
                                                                         <span class="mdesc">Data governance, compliance, and information protection.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                  <a href="microsoft-defender-security-review.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-bug-slash"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Microsoft Defender Security Reviews</span>
                                                                         <span class="mdesc">Endpoint, identity and cloud workload protection.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                  <a href="microsoft-intune-compliance-review.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-mobile-screen-button"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Microsoft Intune Compliance Reviews</span>
                                                                         <span class="mdesc">Device compliance, MDM policy and endpoint management.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="amazon-aws-security.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-brands fa-aws"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Amazon AWS Security</span>
                                                                         <span class="mdesc">AWS cloud security assessments, guardrails and configurations.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                  <a href="service-now-solutions.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-briefcase"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">ServiceNow Solutions</span>
                                                                         <span class="mdesc">End-to-end ServiceNow GRC and SecOps deployment.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                  <a href="servicenow-managed-solutions.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-headset"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">ServiceNow Managed Services</span>
                                                                         <span class="mdesc">Ongoing platform administration, upgrades and support.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                  <a href="servicenow-training-solutions.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-chalkboard-user"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">ServiceNow Training Services</span>
                                                                         <span class="mdesc">Hands-on training programs for teams using ServiceNow.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="security-design-architecture.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-compass-drafting"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Security Design & Zero Trust</span>
                                                                         <span class="mdesc">Zero Trust architecture, design validation and secure configurations.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="rsa-archer-solutions.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-cube"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">RSA Archer Solutions</span>
                                                                         <span class="mdesc">RSA Archer platform configuration, reporting, and support.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="zero-trust-implementations.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-shield-halved"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Zero Trust Implementations</span>
                                                                         <span class="mdesc">Verify users, devices, and access continuously.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="passwordless-mfa-solutions-sdo.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-key"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Passwordless MFA Solutions</span>
                                                                         <span class="mdesc">SDO integrations, passwordless authentication and access.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="data-centric-security-solutions.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-database"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Data Centric Security (Seclore)</span>
                                                                         <span class="mdesc">Enterprise digital rights management (EDRM) and Seclore.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="virtualization-services.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-network-wired"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Virtualization Security</span>
                                                                         <span class="mdesc">Hypervisor hardening and virtual isolation for SMB & Enterprise.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                         </ul>
                                                     </div>

                                                                                                        <div class="services-mega__panel" data-services-panel="testing">
                                                         <ul class="services-mega__list">
                                                             <li class="services-mega__item">
                                                                 <a href="network-penetration-testing.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-network-wired"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Network Penetration Testing</span>
                                                                         <span class="mdesc">External, internal, and segments validation.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="cloud-security-penetration-testing.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-cloud"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Cloud Security Penetration Testing</span>
                                                                         <span class="mdesc">Azure, M365, and Entra ID cloud validation.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="infrastructure-security-testing.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-server"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Infrastructure Security Testing</span>
                                                                         <span class="mdesc">Server, database, and virtualization layer validation.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="wireless-remote-access-testing.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-wifi"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Wireless & Remote Access Testing</span>
                                                                         <span class="mdesc">Wi-Fi, Bluetooth, and remote access testing.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="active-directory-identity-testing.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-id-card"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Active Directory & Identity Testing</span>
                                                                         <span class="mdesc">Domain privilege and Entra ID path analysis.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="social-engineering-services.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-user-group"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Social Engineering Services</span>
                                                                         <span class="mdesc">Consent-based phishing and voice simulation.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="specialized-readiness-assessment.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-circle-exclamation"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Specialized Readiness Assessment</span>
                                                                         <span class="mdesc">Ransomware replication and insider threat readiness.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="continuous-security-testing.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-arrows-spin"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Continuous Security Testing</span>
                                                                         <span class="mdesc">Attack surface mapping and EASM monitoring.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="post-assessment-services.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-file-shield"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Post-Assessment Services</span>
                                                                         <span class="mdesc">Remediation guidance, retesting, and validation.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                         </ul>
                                                     </div>

                                                                                                        <div class="services-mega__panel" data-services-panel="governance">
                                                          <ul class="services-mega__list">
                                                              <li class="services-mega__item">
                                                                  <a href="governance-services.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-scale-balanced"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">Governance Services</span>
                                                                          <span class="mdesc">Build the foundation of your cybersecurity posture.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="risk-management-services.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-triangle-exclamation"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">Risk Management Services</span>
                                                                          <span class="mdesc">Identify, assess, and mitigate operational risks.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="compliance-services.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-clipboard-check"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">Compliance Services</span>
                                                                          <span class="mdesc">Meet regulatory and industry compliance requirements.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="isms-standards-implementation.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-shield-halved"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">ISMS & Standards Implementation</span>
                                                                          <span class="mdesc">Implement ISO 27001, NIST, and security frameworks.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="audit-assurance-services.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-chart-line"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">Audit & Assurance Services</span>
                                                                          <span class="mdesc">Independent audits and digital assurance reviews.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="third-party-vendor-services.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-handshake"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">Third-Party & Vendor Services</span>
                                                                          <span class="mdesc">Monitor vendor security risks and supply chain.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="privacy-data-protection-services.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-user-lock"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">Privacy & Data Protection Services</span>
                                                                          <span class="mdesc">Govern sensitive data and ensure privacy compliance.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="business-resilience-services.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-building-shield"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">Business Resilience Services</span>
                                                                          <span class="mdesc">Maintain business continuity and disaster recovery plans.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="security-governance-operations.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-gears"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">Security Governance Operations</span>
                                                                          <span class="mdesc">Operational security governance and KPI reporting.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="identity-access-governance.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-user-gear"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">Identity & Access Governance</span>
                                                                          <span class="mdesc">Manage user permissions, roles, and identity audits.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="ai-emerging-technology-governance.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-brain"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">AI & Emerging Technology Governance</span>
                                                                          <span class="mdesc">Ensure compliance for AI and emerging tech.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="security-advisory-services.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-comments"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">Security Advisory Services</span>
                                                                          <span class="mdesc">Direct consulting and strategic investment advice.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                          </ul>
                                                      </div>

                                                                                                        <div class="services-mega__panel" data-services-panel="training">
                                                          <ul class="services-mega__list">
                                                              <li class="services-mega__item">
                                                                  <a href="ethical-hacking.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-user-ninja"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">Ethical Hacker</span>
                                                                          <span class="mdesc">Master advanced hacking tools and methodology.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="hacking-forensics-investigator.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-magnifying-glass-location"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">Certified Hacking Forensics Investigator</span>
                                                                          <span class="mdesc">Digital evidence analysis and forensics tools.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="incident-handler.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-life-ring"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">Incident Handler</span>
                                                                          <span class="mdesc">Structured incident response and containment strategies.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="malware-analysis-reverse-engineering.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-bug"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">Malware Analysis & Reverse Engineering</span>
                                                                          <span class="mdesc">Deconstruct malicious binaries and trace threat code.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="iso-27001-2022-lead-auditor-practical-approach.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-file-contract"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">ISO 27001:2022 Lead Auditor</span>
                                                                          <span class="mdesc">Practical audit approaches for ISO implementation.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="iso-31000-risk-management.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-shield-heart"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">ISO 31000 Risk Management</span>
                                                                          <span class="mdesc">Standard risk identification and lifecycle management.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                              <li class="services-mega__item">
                                                                  <a href="cybersecurity-risk-assessment-workshop.html" class="mega-card-item">
                                                                      <div class="micon-box"><i class="fa-solid fa-chalkboard-user"></i></div>
                                                                      <div class="mcontent-box">
                                                                          <span class="mtitle">Cybersecurity Risk Assessment Workshop</span>
                                                                          <span class="mdesc">Interactive scoping, threat mapping, and risk reports.</span>
                                                                      </div>
                                                                  </a>
                                                              </li>
                                                          </ul>
                                                      </div>

                                                                                                         <div class="services-mega__panel" data-services-panel="platforms">
                                                         <ul class="services-mega__list">
                                                             <li class="services-mega__item">
                                                                 <a href="consulting-roles.html?tab=panel-security-advisor" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-user-shield"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Security Advisor</span>
                                                                         <span class="mdesc">Strategic cybersecurity oversight and uplift plans.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="consulting-roles.html?tab=panel-grc-consultant" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-file-invoice"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">GRC Consultant</span>
                                                                         <span class="mdesc">Practical frameworks compliance and control alignment.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="consulting-roles.html?tab=panel-security-architect" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-compass-drafting"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Cyber Security Architect</span>
                                                                         <span class="mdesc">Secure system blueprint design and architecture controls.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="consulting-roles.html?tab=panel-servicenow-consultant" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-briefcase"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">ServiceNow Consultant</span>
                                                                         <span class="mdesc">ServiceNow GRC, SecOps, and ITSM implementation.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="consulting-roles.html?tab=panel-microsoft-solutions" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-windows"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Microsoft Solutions Consultant</span>
                                                                         <span class="mdesc">Microsoft E5 integration and compliance reviews.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="consulting-roles.html?tab=panel-rsa-archer" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-cube"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">RSA Archer Consultant</span>
                                                                         <span class="mdesc">RSA Archer platform configuration and managed services.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                         </ul>
                                                     </div>

                                                     <div class="services-mega__panel" data-services-panel="programs">
                                                         <ul class="services-mega__list">
                                                             <li class="services-mega__item">
                                                                 <a href="data-security-program.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-shield-halved"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Digital Security Program</span>
                                                                         <span class="mdesc">Comprehensive data protection, encryption, and threat prevention.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="data-privacy-program.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-user-lock"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Data Privacy Program</span>
                                                                         <span class="mdesc">Compliance, customer data rights, PII security, and governance.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="cybersecurity-sop-program.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-file-shield"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Cybersecurity SOP Program</span>
                                                                         <span class="mdesc">Standard operating procedures for response, operations, and policies.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="risk-management-program.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-triangle-exclamation"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Risk Management Program</span>
                                                                         <span class="mdesc">Risk assessments, risk registers, threat modeling, and mitigation.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="information-assurance-program.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-circle-check"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Information Assurance Program</span>
                                                                         <span class="mdesc">Data integrity, availability, and business-focused security controls.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="integrated-incident-response-program.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-kit-medical"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Integrated Incident Response Program</span>
                                                                         <span class="mdesc">Playbooks, response drills, containment, and recovery strategy.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="continuity-of-operations-program.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-arrows-spin"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Continuity of Operations Program</span>
                                                                         <span class="mdesc">Business continuity, disaster recovery, and high availability systems.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="secure-engineering-data-privacy-program.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-code-compare"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Secure Engineering & Data Privacy Program</span>
                                                                         <span class="mdesc">Secure development lifecycle, shift-left security, and data privacy.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="vulnerability-patch-management-program.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-clock-rotate-left"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Vulnerability & Patch Management Program</span>
                                                                         <span class="mdesc">Scanning, patching schedule, risk prioritizing, and asset discovery.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="cybersecurity-scrm-strategy-implementation-plan.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-link"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Cybersecurity SCRM Plan</span>
                                                                         <span class="mdesc">Supply chain risk management, vendor audits, and third-party risk.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                         </ul>
                                                     </div>

                                                     <div class="services-mega__panel" data-services-panel="checklist">
                                                         <ul class="services-mega__list">
                                                             <li class="services-mega__item">
                                                                 <a href="iso-9001-2015-quality-checklist.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-award"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">ISO 9001:2015 Quality Checklist</span>
                                                                         <span class="mdesc">Quality management systems (QMS), customer satisfaction and audits.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="iso-42001-2023-artificial-intelligence-management-system.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-brain"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">ISO 42001:2023 AI Management</span>
                                                                         <span class="mdesc">Responsible AI, ethics, algorithmic bias risk, and controls.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="iso-27001-2022-Information-security-checklist.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-list-check"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">ISO 27001:2022 Security Checklist</span>
                                                                         <span class="mdesc">Information security management systems (ISMS) compliance steps.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="iso-27701-2019-privacy-checklist.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-user-check"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">ISO 27701:2025 Privacy Checklist</span>
                                                                         <span class="mdesc">Privacy Information Management System (PIMS) controls checklist.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="iso-3100-risk-checklist.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-shield-heart"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">ISO 31000 Risk Checklist</span>
                                                                         <span class="mdesc">Structured risk assessment, threat identification, and response checklist.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                         </ul>
                                                     </div>

                                                     <div class="services-mega__panel" data-services-panel="framework">
                                                         <ul class="services-mega__list">
                                                             <li class="services-mega__item">
                                                                 <a href="essential-8.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-cubes"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Essentials 8</span>
                                                                         <span class="mdesc">ASD Essential Eight strategies to mitigate cyber security incidents.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="soc-2.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-clipboard-check"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">SOC 2</span>
                                                                         <span class="mdesc">Trust Services Criteria compliance for security, privacy, and integrity.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="iso-27001.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-lock"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">ISO 27001</span>
                                                                         <span class="mdesc">Information security management systems (ISMS) implementation.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="iso-31000.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-triangle-exclamation"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">ISO 31000</span>
                                                                         <span class="mdesc">Risk management guidelines, principles, and implementation.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="iso-20000.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-gears"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">ISO 20000</span>
                                                                         <span class="mdesc">IT service management system (SMS) delivery and configuration.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="iso-22301.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-clock"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">ISO 22301</span>
                                                                         <span class="mdesc">Business continuity management system (BCMS) requirements.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="iso-27701.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-user-shield"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">ISO 27701</span>
                                                                         <span class="mdesc">PIMS extension to ISO 27001 for privacy governance.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="iso-9001.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-medal"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">ISO 9001</span>
                                                                         <span class="mdesc">Quality management system requirements and operational excellence.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="nist-csf.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-network-wired"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">NIST CSF</span>
                                                                         <span class="mdesc">NIST Cybersecurity Framework core functions and implementation.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="nist-sp-800-53.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-building-shield"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">NIST SP 800 53</span>
                                                                         <span class="mdesc">Security and privacy controls for federal systems and organizations.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="cyber-essentials.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-circle-check"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">Cyber Essentials</span>
                                                                         <span class="mdesc">UK government-backed scheme for basic cyber hygiene controls.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="cps-234.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-scale-balanced"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">CPS 234</span>
                                                                         <span class="mdesc">APRA information security standard for financial entities in AU.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="gdpr.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-globe"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">GDPR</span>
                                                                         <span class="mdesc">EU General Data Protection Regulation compliance and privacy.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                             <li class="services-mega__item">
                                                                 <a href="hipaa.html" class="mega-card-item">
                                                                     <div class="micon-box"><i class="fa-solid fa-file-medical"></i></div>
                                                                     <div class="mcontent-box">
                                                                         <span class="mtitle">HIPAA</span>
                                                                         <span class="mdesc">US Health Insurance Portability and Accountability Act standards.</span>
                                                                     </div>
                                                                 </a>
                                                             </li>
                                                         </ul>
                                                     </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="partner-with-us.html">
                                                Partner with us?
                                                <i class="fas fa-angle-down"></i>
                                            </a>
                                            <ul class="submenu subbumenu">
                                                <li><a href="become-clarent360-affiliate.html">Become a Clarent 360 Affiliate Partner</a></li>
                                                <li><a href="clarent360-franchise.html">Own and Operate with Clarent360 Franchise</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="hire-consultant.html">
                                                Consultations
                                                <i class="fas fa-angle-down"></i>
                                            </a>
                                            <ul class="submenu">
                                                <li><a href="consulting-roles.html?tab=panel-security-advisor">Security Advisor</a></li>
                                                <li><a href="consulting-roles.html?tab=panel-grc-consultant">GRC Consultant</a></li>
                                                <li><a href="consulting-roles.html?tab=panel-security-architect">Cyber Security Architect</a></li>
                                                <li><a href="consulting-roles.html?tab=panel-servicenow-consultant">ServiceNow Consultant</a></li>
                                                <li><a href="consulting-roles.html?tab=panel-microsoft-solutions">Microsoft Solutions Consultant</a></li>
                                                <li><a href="consulting-roles.html?tab=panel-rsa-archer">RSA Archer Consultant</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-dropdown">
                                            <a href="training-solutions.html">
                                                Training Solutions
                                                <i class="fas fa-angle-down"></i>
                                            </a>
                                            <ul class="submenu">
                                                <li><a href="ethical-hacking.html">Ethical Hacker</a></li>
                                                <li><a href="hacking-forensics-investigator.html">Certified Hacking Forensics Investigator</a></li>
                                                <li><a href="incident-handler.html">Incident Handler</a></li>
                                                <li><a href="malware-analysis-reverse-engineering.html">Malware Analysis & Reverse Engineering</a></li>
                                                <li><a href="iso-27001-2022-lead-auditor-practical-approach.html">ISO 27001:2022 Lead Auditor</a></li>
                                                <li><a href="iso-31000-risk-management.html">ISO 31000 Risk Management</a></li>
                                                <li><a href="cybersecurity-risk-assessment-workshop.html">Cybersecurity Risk Assessment Workshop</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="header__hamburger d-xl-none d-block my-auto">
                            <div class="sidebar__toggle">
                                <img src="assets/img/icon/menu.png" alt="icon">
                            </div>
                        </div>

                    </div>
                    <div class="header-hamburger-inner d-xl-flex gap-xxl-4 gap-xl-3 align-items-center d-none">
                        <a href="contact.html"
                            class="common-btn box-style cmn-style1 d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden rounded-5 p3-bg">
                            Contact Us
                        </a>
                        <div class="header__hamburger my-auto d-xl-none d-block">
                            <div class="sidebar__toggle">
                                <img src="assets/img/icon/menu.png" alt="icon">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="services-mega-backdrop"></div>

    `;

    const FOOTER_HTML = `
    <footer class="footer-section style blackbg fix pt-5 gradient-footer">
        <div class="container">

            <!-- Top Footer -->
            <div class="row gy-5 pb-5 border-bottom border-secondary">

                <!-- Company Info -->
                <div class="col-xl-3 col-lg-3 col-md-12">
                    <div class="footer-widget pe-lg-5">

                        <a href="index.html" class="footer-logo d-inline-block mb-4">
                            <img src="assets/webimages/log-footer.png" width="200px" alt="logo" class="white-logoo">
                        </a>

                        <p class="white65 mb-4">
                            Delivering enterprise-grade cybersecurity, compliance,
                            cloud security and governance solutions for modern businesses.
                        </p>


                        <!-- Social -->
                        <div class="social-custom d-flex align-items-center gap-3 mt-4">

                            <a href="https://www.linkedin.com/in/clarent-solutions-472a16407/" target="_blank" class="black">
                                <i class="fab fa-linkedin-in white65"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <!-- Programs -->
                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div class="footer-widget">

                        <div class="widget-head mb-4">
                            <h5 class="white">Programs</h5>
                        </div>

                        <ul class="list-area d-grid gap-1">

                            <li><a href="data-security-program.html">Digital Security Program</a></li>
                            <li><a href="data-privacy-program.html">Data Privacy Program</a></li>
                            <li><a href="cybersecurity-sop-program.html">Cybersecurity SOP Program</a></li>
                            <li><a href="risk-management-program.html">Risk Management Program</a></li>
                            <li><a href="information-assurance-program.html">Information Assurance Program</a></li>
                            <li><a href="integrated-incident-response-program.html">Integrated Incident Response Program</a></li>
                            <li><a href="continuity-of-operations-program.html">Continuity of Operations Program</a></li>
                            <li><a href="secure-engineering-data-privacy-program.html">Secure Engineering & Data Privacy Program</a></li>
                            <li><a href="vulnerability-patch-management-program.html">Vulnerability & Patch Management Program</a></li>
                            <li><a href="cybersecurity-scrm-strategy-implementation-plan.html">Cybersecurity SCRM Strategy & Implementation Plan</a></li>

                        </ul>

                    </div>
                </div>

                <!-- Frameworks -->
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                    <div class="footer-widget">

                        <div class="widget-head mb-4">
                            <h5 class="white">Frameworks</h5>
                        </div>

                        <ul class="list-area d-grid gap-1">
 
                            <li><a href="essential-8.html">Essentials 8</a></li>
                            <li><a href="soc-2.html">SOC 2</a></li>
                            <li><a href="iso-27001.html">ISO 27001</a></li>
                            <li><a href="iso-31000.html">ISO 31000</a></li>
                            <li><a href="iso-20000.html">ISO 20000</a></li>
                            <li><a href="iso-22301.html">ISO 22301</a></li>
                            <li><a href="iso-27701.html">ISO 27701</a></li>
                            <li><a href="iso-9001.html">ISO 9001</a></li>
                            <li><a href="nist-csf.html">NIST CSF</a></li>
                            <li><a href="nist-sp-800-53.html">NIST SP 800 53</a></li>
                            <li><a href="#">NIS AI RMF</a></li>
                            <li><a href="cyber-essentials.html">Cyber Essentials</a></li>
                            <li><a href="cps-234.html">CPS 234</a></li>
                            <li><a href="gdpr.html">GDPR</a></li>
                            <li><a href="hipaa.html">HIPAA</a></li>

                        </ul>

                    </div>
                </div>

                <!-- Resources -->
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                    <div class="footer-widget">

                        <div class="widget-head mb-4">
                            <h5 class="white">Checklists</h5>
                        </div>

                        <ul class="list-area d-grid gap-1">

                            <li><a href="iso-9001-2015-quality-checklist.html">ISO 9001:2015 Quality Checklist</a></li>
                            <li><a href="iso-42001-2023-artificial-intelligence-management-system.html">ISO 42001:2023 Artificial Intelligence Management System</a></li>
                            <li><a href="iso-27001-2022-Information-security-checklist.html">ISO 27001:2022 Information Security Checklist</a></li>
                            <li><a href="iso-27701-2019-privacy-checklist.html">ISO 27701:2025 Privacy Checklist</a></li>
                            <li><a href="iso-3100-risk-checklist.html">ISO 31000 Risk Checklist</a></li>

                        </ul>

                    </div>
                </div>

                <!-- Contact Details -->
                <div class="col-xl-2 col-lg-3 col-md-6">
                    <div class="footer-widget">

                        <div class="widget-head mb-4">
                            <h5 class="white">Contact</h5>
                        </div>

                        <div class="d-flex flex-column gap-4">

                            <div>
                                <span class="fs-eight white65 d-block mb-1">
                                    Email Address
                                </span>

                                <a href="mailto:info@clarent360.com.au" class="white fw-semibold">
                                    info@clarent360.com.au
                                </a>
                            </div>
                            <div>
                                <span class="fs-eight white65 d-block mb-1">
                                    Location
                                </span>

                                <p class="white mb-0">
                                    Sydney, Australia
                                </p>
                                <p class="white mb-0">
                                    Dubai, UAE

                                </p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            <!-- Bottom Footer -->
            <div class="footer-bottom py-4">

                <div class="row align-items-center gy-3">

                    <div class="col-lg-12 text-center text-lg-center">
                        <p class="white65 mb-0">
                            © 2026
                            <a href="index.html" class="white fw-semibold">
                                Clarent360
                            </a>.
                            All Rights Reserved.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    </footer>
    `;

    // 1. Inject Header Content
    const headerContainer = document.getElementById("header");
    if (headerContainer) {
        headerContainer.innerHTML = HEADER_HTML;

        const psychometricBtn = document.getElementById('psychometricBtn');
        if (psychometricBtn) {
            psychometricBtn.addEventListener('click', () => {
                window.location.href = 'clarent-psychometrics.html';
            });
        }

        const programsBtn = document.getElementById('programsBtn');
        if (programsBtn) {
            programsBtn.addEventListener('click', () => {
                window.location.href = 'program.html';
            });
        }

        const checklistBtn = document.getElementById('checklistBtn');
        if (checklistBtn) {
            checklistBtn.addEventListener('click', () => {
                window.location.href = 'checklist.html';
            });
        }

        const frameworksBtn = document.getElementById('frameworksBtn');
        if (frameworksBtn) {
            frameworksBtn.addEventListener('click', () => {
                window.location.href = 'framework.html';
            });
        }

        // Active Menu Highlighting Logic
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const navLinks = document.querySelectorAll(".main-menu ul li a");
        navLinks.forEach(link => {
            const linkHref = link.getAttribute("href");
            if (linkHref === currentPage) {
                document.querySelectorAll(".main-menu li").forEach(item => item.classList.remove("active"));
                const closestLi = link.closest("li");
                if (closestLi) closestLi.classList.add("active");
            }
        });

        // Dynamic Submenu Hover/Click Handler for Services Tab Switching
        const megaMenu = document.querySelector('.services-mega');
        if (megaMenu) {
            const tabs = megaMenu.querySelectorAll('[data-services-tab]');
            const panels = megaMenu.querySelectorAll('[data-services-panel]');
            tabs.forEach(tab => {
                // Hover: switch panel
                tab.addEventListener('mouseenter', () => {
                    const target = tab.getAttribute('data-services-tab');
                    tabs.forEach(item => item.classList.toggle('active', item === tab));
                    panels.forEach(panel => {
                        panel.classList.toggle('active', panel.getAttribute('data-services-panel') === target);
                    });
                });
                // Click: navigate to landing page
                tab.addEventListener('click', event => {
                    const href = tab.getAttribute('data-href');
                    if (href && href !== '#') {
                        event.preventDefault();
                        window.location.href = href;
                    }
                });
            });
        }

        // Inject page content overlay div (appears below sticky header only)
        if (!document.querySelector('.mega-page-overlay')) {
            const overlayEl = document.createElement('div');
            overlayEl.className = 'mega-page-overlay';
            document.body.appendChild(overlayEl);
        }

        // Measure sticky header height and expose as CSS variable for overlay positioning
        function updateHeaderHeight() {
            const stickyHeader = document.querySelector('#header-sticky');
            if (stickyHeader) {
                const h = stickyHeader.getBoundingClientRect().height;
                document.documentElement.style.setProperty('--header-h', h + 'px');
            }
        }
        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);
        window.addEventListener('scroll', updateHeaderHeight, { passive: true });



        const toggleBtn = document.querySelector('.sidebar__toggle');
        const closeBtn = document.querySelector('.offcanvas__close button');
        const overlay = document.querySelector('.offcanvas__overlay');
        const infoArea = document.querySelector('.offcanvas__info');

        if (toggleBtn && infoArea && overlay) {
            toggleBtn.addEventListener('click', () => {
                infoArea.classList.add('info-open');
                overlay.classList.add('overlay-open');
            });
        }
        if (closeBtn && infoArea && overlay) {
            closeBtn.addEventListener('click', () => {
                infoArea.classList.remove('info-open');
                overlay.classList.remove('overlay-open');
            });
        }
        if (overlay && infoArea) {
            overlay.addEventListener('click', () => {
                infoArea.classList.remove('info-open');
                overlay.classList.remove('overlay-open');
            });
        }

        // Dispatch load notifications
        document.dispatchEvent(new CustomEvent("headerLoaded"));
    }

    // 2. Inject Footer Content
    const footerContainer = document.getElementById("footer");
    if (footerContainer) {
        footerContainer.innerHTML = FOOTER_HTML;
        document.dispatchEvent(new CustomEvent("footerLoaded"));
    }



});