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
                                    <a target="_blank" href="#">3517 W. Gray St. Utica, Pennsylvania</a>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon mr-15">
                                    <i class="fal fa-envelope"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a href="mailto:info@example.com"><span
                                            class="mailto:info@example.com">alma.lawson@example.com</span></a>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon mr-15">
                                    <i class="fal fa-clock"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a target="_blank" href="#">Sun-friday, 02am -09pm</a>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon mr-15">
                                    <i class="far fa-phone"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a href="tel:+11002345909">(219) 555-0114</a>
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
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
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
                                            <a>
                                                Services
                                                <i class="fas fa-angle-down"></i>
                                            </a>
                                            <ul class="submenu services-mega">
                                                <li class="services-mega__rail">
                                                    <button type="button" class="services-mega__tab active"
                                                        data-services-tab="security">
                                                        Security<i class="fa-solid fa-arrow-right"></i>
                                                    </button>
                                                    <button type="button" class="services-mega__tab"
                                                        data-services-tab="testing">
                                                        Pentest <i class="fa-solid fa-arrow-right"></i>
                                                    </button>
                                                    <button type="button" class="services-mega__tab"
                                                        data-services-tab="governance">
                                                        GRC Services <i class="fa-solid fa-arrow-right"></i>
                                                    </button>
                                                    <button type="button" class="services-mega__tab"
                                                        data-services-tab="training">
                                                        Training <i class="fa-solid fa-arrow-right"></i>
                                                    </button>
                                                    <button type="button" class="services-mega__tab"
                                                        data-services-tab="platforms">
                                                        Consultation <i class="fa-solid fa-arrow-right"></i>
                                                    </button>
                                                </li>

                                                <li class="services-mega__panels">
                                                    <div class="services-mega__panel active"
                                                        data-services-panel="security">
                                                        <div class="security-headding">
                                                            <h3>Security Engineering Services</h3>
                                                        </div>
                                                        <ul class="services-mega__list">

                                                            <li class="services-mega__item">
                                                                <a href="dlp-solutions.html"
                                                                    class="services-mega__link services-mega__link--main">DLP
                                                                    solutions</a>
                                                            </li>

                                                            <li class="services-mega__item">
                                                                <a href="threat-hunting.html"
                                                                    class="services-mega__link services-mega__link--main">Threat
                                                                    hunting</a>
                                                            </li>

                                                            <li class="services-mega__item">
                                                                <a href="cloud-solutions.html"
                                                                    class="services-mega__link services-mega__link--main">Cloud
                                                                    solutions</a>
                                                                <ul class="services-mega__sublist">
                                                                    <li
                                                                        class="services-mega__item services-mega__item--full">
                                                                        <a
                                                                            class="services-mega__link services-mega__link--child">Microsoft</a>
                                                                        <ul class="services-mega__sublist">
                                                                            <li class="services-mega__item">
                                                                                <a href="microsoft-365-security-review.html"
                                                                                    class="services-mega__link services-mega__link--child">Microsoft
                                                                                    365 security reviews</a>
                                                                            </li>
                                                                            <li class="services-mega__item">
                                                                                <a href="microsoft-purview-review.html"
                                                                                    class="services-mega__link services-mega__link--child">Microsoft
                                                                                    Purview review</a>
                                                                            </li>
                                                                            <li class="services-mega__item">
                                                                                <a href="microsoft-defender-security-review.html"
                                                                                    class="services-mega__link services-mega__link--child">Microsoft
                                                                                    Defender security reviews</a>
                                                                            </li>
                                                                            <li class="services-mega__item">
                                                                                <a href="microsoft-intune-compliance-review.html"
                                                                                    class="services-mega__link services-mega__link--child">Microsoft
                                                                                    Intune compliance reviews</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>

                                                                    <li class="services-mega__item">
                                                                        <a href="amazon-aws-security.html"
                                                                            class="services-mega__link services-mega__link--child">Amazon
                                                                            AWS</a>
                                                                    </li>
                                                                </ul>
                                                            </li>

                                                            <li class="services-mega__item">
                                                                <a href="services-details.html"
                                                                    class="services-mega__link services-mega__link--main">Service
                                                                    now solutions</a>
                                                                <ul class="services-mega__sublist">
                                                                    <li class="services-mega__item">
                                                                        <a href="services-details.html"
                                                                            class="services-mega__link services-mega__link--child">ServiceNow
                                                                            implementations</a>
                                                                    </li>
                                                                    <li class="services-mega__item">
                                                                        <a href="services-details.html"
                                                                            class="services-mega__link services-mega__link--child">ServiceNow
                                                                            Managed services</a>
                                                                    </li>
                                                                    <li class="services-mega__item">
                                                                        <a href="services-details.html"
                                                                            class="services-mega__link services-mega__link--child">ServiceNow
                                                                            Training services</a>
                                                                    </li>
                                                                </ul>
                                                            </li>

                                                            <li class="services-mega__item">
                                                                <a href="services-details.html"
                                                                    class="services-mega__link services-mega__link--main">Security
                                                                    design and architecture</a>
                                                                <ul class="services-mega__sublist">
                                                                    <li class="services-mega__item">
                                                                        <a href="services-details.html"
                                                                            class="services-mega__link services-mega__link--child">Zero
                                                                            Trust</a>
                                                                    </li>
                                                                </ul>
                                                            </li>

                                                            <li class="services-mega__item">
                                                                <a href="rsa-archer-solutions.html"
                                                                    class="services-mega__link services-mega__link--main">RSA
                                                                    Archer solutions</a>
                                                            </li>
                                                            <li class="services-mega__item">
                                                                <a href="zero-trust-implementations.html"
                                                                    class="services-mega__link services-mega__link--main">Zero
                                                                    Trust implementations</a>
                                                            </li>
                                                            <li class="services-mega__item">
                                                                <a href="passwordless-mfa-solutions-sdo.html"
                                                                    class="services-mega__link services-mega__link--main">Passwordless
                                                                    MFA solutions - SDO</a>
                                                            </li>
                                                            <li class="services-mega__item">
                                                                <a href="data-centric-security-solutions.html"
                                                                    class="services-mega__link services-mega__link--main">Data
                                                                    centric security solutions - Seclore</a>
                                                            </li>

                                                            <li class="services-mega__item">
                                                                <a href="services-details.html"
                                                                    class="services-mega__link services-mega__link--main">Virtualization
                                                                    services</a>
                                                                <ul class="services-mega__sublist">
                                                                    <li class="services-mega__item">
                                                                        <a href="services-details.html"
                                                                            class="services-mega__link services-mega__link--child">Small
                                                                            Office (SMB)</a>
                                                                    </li>
                                                                    <li class="services-mega__item">
                                                                        <a href="services-details.html"
                                                                            class="services-mega__link services-mega__link--child">Enterprise</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div class="services-mega__panel" data-services-panel="testing">
                                                        <h3 class="services-mega__panel-heading">Pentest Services</h3>
                                                        <ul class="services-mega__list">
                                                            <li class="services-mega__item"><a href="services-details.html"
                                                                    class="services-mega__link services-mega__link--main">Red teaming</a></li>
                                                            <li class="services-mega__item"><a href="services-details.html"
                                                                    class="services-mega__link services-mega__link--main">Web application pentesting</a></li>
                                                            
                                                        </ul>
                                                    </div>

                                                    <div class="services-mega__panel" data-services-panel="governance">
                                                        <h3 class="services-mega__panel-heading">GRC services
                                                        </h3>
                                                        <ul class="services-mega__list">
                                                            <li class="services-mega__item"><a href="services-details.html"
                                                                    class="services-mega__link services-mega__link--main">Security baseline assessment (Essentials 8 or ISO 27001 dependent)</a></li>
                                                            <li class="services-mega__item"><a href="services-details.html"
                                                                    class="services-mega__link services-mega__link--main">Compliance
                                                                    Audits</a></li>
                                                            <li class="services-mega__item"><a href="services-details.html"
                                                                    class="services-mega__link services-mega__link--main">Risk
                                                                    Management Audits</a></li>
                                                            <li class="services-mega__item"><a href="services-details.html"
                                                                    class="services-mega__link services-mega__link--main">OT Audit
                                                                    </a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="services-mega__panel" data-services-panel="training">
                                                        <h3 class="services-mega__panel-heading">Training solutions</h3>
                                                        <ul class="services-mega__list">
                                                            <li class="services-mega__item"><a href="services-details.html"
                                                                    class="services-mega__link services-mega__link--main">Cyber Security Essentialss</a></li>
                                                            
                                                            <li class="services-mega__item"><a href="services-details.html"
                                                                    class="services-mega__link services-mega__link--main">Ethical
                                                                    Hacker</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="services-mega__panel" data-services-panel="platforms">
                                                        <h3 class="services-mega__panel-heading">Consultation services</h3>
                                                        <ul class="services-mega__list">
                                                            <li class="services-mega__item"><a href="services-details.html"
                                                                    class="services-mega__link services-mega__link--main">Bespoke policies and procedures</a></li>
                                                            <li class="services-mega__item"><a href="services-details.html"
                                                                    class="services-mega__link services-mega__link--main">GRC outsourcing 
                                                                    </a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="services.html">
                                                Our Expertise
                                                <!-- <i class="fas fa-angle-down"></i> -->
                                            </a>
                                            <!-- <ul class="submenu">
                                                <li><a href="services.html">Service</a></li>
                                                <li><a href="services-details.html">Service Details</a></li>
                                            </ul> -->
                                        </li>

                                        <li>
                                            <a href="blog.html">
                                                Insights
                                                <i class="fas fa-angle-down"></i>
                                            </a>
                                            <ul class="submenu">
                                                <li><a href="blog.html">Security Insights</a></li>
                                                <li><a href="blog-sidebar.html">GRC Updates</a></li>
                                                <li><a href="blog-details.html">PenTest Notes</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-dropdown">
                                            <a href="#0">
                                                Training Solutions
                                                <i class="fas fa-angle-down"></i>
                                            </a>
                                            <ul class="submenu">
                                                <li><a href="services-details.html">Cyber Security Essentials</a></li>
                                                <li><a href="team-details.html">Ethical hackers</a></li>
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
                            <img src="assets/webimages/log.png" width="270px" alt="logo" class="white-logoo">
                        </a>

                        <p class="white65 mb-4">
                            Delivering enterprise-grade cybersecurity, compliance,
                            cloud security and governance solutions for modern businesses.
                        </p>


                        <!-- Social -->
                        <div class="social-custom d-flex align-items-center gap-3 mt-4">
                            <a href="#" class="black">
                                <i class="fab fa-facebook-f white65"></i>
                            </a>

                            <a href="#" class="black">
                                <i class="fa-brands fa-x-twitter white65"></i>
                            </a>

                            <a href="#" class="black">
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
                                    Call Us
                                </span>

                                <a href="tel:+112246767430" class="white fw-semibold">
                                    +(1) 224 676 7430
                                </a>
                            </div>

                            <div>
                                <span class="fs-eight white65 d-block mb-1">
                                    Email Address
                                </span>

                                <a href="mailto:security@example.com" class="white fw-semibold">
                                    security@example.com
                                </a>
                            </div>
                            <div>
                                <span class="fs-eight white65 d-block mb-1">
                                    Location
                                </span>

                                <p class="white mb-0">
                                    Chennai, India
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            <!-- Bottom Footer -->
            <div class="footer-bottom py-4">

                <div class="row align-items-center gy-3">

                    <div class="col-lg-6 text-center text-lg-start">
                        <p class="white65 mb-0">
                            © 2026
                            <a href="index.html" class="white fw-semibold">
                                Clarent360
                            </a>.
                            All Rights Reserved.
                        </p>
                    </div>

                    <div class="col-lg-6 text-end">
                        <p class="white65">Designed by <a href="https://impinfo.in" class="white fw-semibold">Imperial Info Systems</a></p>
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

        // Dynamic Submenu Click Handler for Services Tab Switching
        const megaMenu = document.querySelector('.services-mega');
        if (megaMenu) {
            const tabs = megaMenu.querySelectorAll('[data-services-tab]');
            const panels = megaMenu.querySelectorAll('[data-services-panel]');
            tabs.forEach(tab => {
                tab.addEventListener('click', event => {
                    event.preventDefault();
                    const target = tab.getAttribute('data-services-tab');
                    tabs.forEach(item => item.classList.toggle('active', item === tab));
                    panels.forEach(panel => {
                        panel.classList.toggle('active', panel.getAttribute('data-services-panel') === target);
                    });
                });
            });
        }

        // Sidebar Offcanvas Navigation Toggle Trigger Bound Safely
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