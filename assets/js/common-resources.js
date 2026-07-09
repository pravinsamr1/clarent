document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject custom styles for the resource header and footer
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
        .max-width-container {
            max-width: 1280px;
            margin: 0 auto;
        }
        .resource-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(8px);
            border-bottom: 1px solid rgba(81, 53, 255, 0.08);
            z-index: 1000;
            padding: 14px 24px;
            transition: all 0.3s ease;
        }
        .nav-wrap-custom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }
        .logo-custom img {
            display: block;
            height: auto;
        }
        .desktop-nav ul {
            display: flex;
            align-items: center;
            gap: 32px;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .desktop-nav a {
            font-family: "Plus Jakarta Sans", sans-serif;
            font-size: 14px;
            font-weight: 600;
            color: #49577A;
            text-decoration: none;
            transition: color 0.2s ease;
        }
        .desktop-nav a:hover,
        .desktop-nav a.active {
            color: #5135FF;
        }
        .nav-actions-custom {
            display: flex;
            align-items: center;
            gap: 16px;
        }
        .talk-btn {
            background: #5135FF;
            color: #ffffff !important;
            font-family: "Plus Jakarta Sans", sans-serif;
            font-size: 13px;
            font-weight: 700;
            padding: 10px 24px;
            border-radius: 50px;
            text-decoration: none;
            transition: all 0.3s ease;
            letter-spacing: 0.02em;
        }
        .talk-btn:hover {
            background: #ff5455;
            box-shadow: 0px 6px 15px rgba(81, 53, 255, 0.25);
            transform: translateY(-1px);
        }
        .mobile-toggle-btn {
            display: none;
            background: none;
            border: none;
            color: #031740;
            font-size: 22px;
            cursor: pointer;
            padding: 4px;
        }
        .mobile-dropdown-menu {
            display: none;
            background: #ffffff;
            border-bottom: 1px solid rgba(81, 53, 255, 0.08);
            padding: 16px 24px;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            box-shadow: 0px 10px 25px rgba(3, 23, 64, 0.05);
        }
        .mobile-dropdown-menu ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }
        .mobile-dropdown-menu a {
            font-family: "Plus Jakarta Sans", sans-serif;
            font-size: 14px;
            font-weight: 600;
            color: #49577A;
            text-decoration: none;
            display: block;
        }
        .mobile-dropdown-menu a:hover,
        .mobile-dropdown-menu a.active {
            color: #5135FF;
        }
        @media (max-width: 991px) {
            .desktop-nav {
                display: none;
            }
            .mobile-toggle-btn {
                display: block;
            }
            .mobile-dropdown-menu.open {
                display: block;
            }
        }

        .resource-footer {
            background: #f8f9fd;
            border-top: 1px solid rgba(81, 53, 255, 0.08);
            padding: 30px 24px;
            text-align: center;
            width: 100%;
            margin-top: 0;
        }
        .footer-wrap-custom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
            flex-wrap: wrap;
            gap: 16px;
        }
        .footer-left-custom {
            font-family: "Inter", sans-serif;
            font-size: 14px;
            color: #49577A;
        }
        .footer-right-custom ul {
            display: flex;
            align-items: center;
            gap: 24px;
            list-style: none;
            margin: 0;
            padding: 0;
            flex-wrap: wrap;
        }
        .footer-right-custom a {
            font-family: "Plus Jakarta Sans", sans-serif;
            font-size: 14px;
            font-weight: 600;
            color: #49577A;
            text-decoration: none;
            transition: color 0.2s ease;
        }
        .footer-right-custom a:hover {
            color: #5135FF;
        }
        @media (max-width: 767px) {
            .footer-wrap-custom {
                flex-direction: column;
                text-align: center;
            }
            .footer-right-custom ul {
                justify-content: center;
                gap: 16px;
            }
        }
    `;
    document.head.appendChild(styleEl);

    // 2. Define Header HTML structure
    const HEADER_HTML = `
    <header class="resource-header">
        <div class="container-fluid max-width-container">
            <div class="nav-wrap-custom">
                <div class="logo-custom">
                    <a href="index.html">
                        <img src="assets/webimages/log.png" width="160px" alt="logo">
                    </a>
                </div>
                
                <!-- Desktop Navigation Menu -->
                <nav class="desktop-nav">
                    <ul>
                        <li><a href="index.html" class="nav-item">Home</a></li>
                        <li><a href="program.html" class="nav-item" id="nav-programs">Programs</a></li>
                        <li><a href="framework.html" class="nav-item" id="nav-frameworks">Frameworks</a></li>
                        <li><a href="checklist.html" class="nav-item" id="nav-checklists">Checklists</a></li>
                        <li><a href="about.html" class="nav-item">About Us</a></li>
                        <li><a href="contact.html" class="nav-item">Contact Us</a></li>
                    </ul>
                </nav>
                
                <!-- Right Action Button -->
                <div class="nav-actions-custom">
                    <a href="contact.html" class="talk-btn">TALK TO US →</a>
                    <button class="mobile-toggle-btn" aria-label="Toggle Menu">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Mobile Dropdown Menu -->
        <div class="mobile-dropdown-menu">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="program.html" id="mob-nav-programs">Programs</a></li>
                <li><a href="framework.html" id="mob-nav-frameworks">Frameworks</a></li>
                <li><a href="checklist.html" id="mob-nav-checklists">Checklists</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </div>
    </header>
    `;

    // 3. Define Footer HTML structure
    const FOOTER_HTML = `
    <footer class="resource-footer">
        <div class="footer-wrap-custom">
            <div class="footer-left-custom">
                © 2026 Clarent360. Trust Engineered through Security.
            </div>
            <div class="footer-right-custom">
                <ul>
                    <li><a href="program.html">Programs</a></li>
                    <li><a href="framework.html">Frameworks</a></li>
                    <li><a href="checklist.html">Checklists</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </footer>
    `;

    // 4. Inject Header
    const headerContainer = document.getElementById("header");
    if (headerContainer) {
        headerContainer.innerHTML = HEADER_HTML;

        // Toggle mobile menu logic
        const toggleBtn = headerContainer.querySelector('.mobile-toggle-btn');
        const dropdownMenu = headerContainer.querySelector('.mobile-dropdown-menu');
        if (toggleBtn && dropdownMenu) {
            toggleBtn.addEventListener('click', () => {
                dropdownMenu.classList.toggle('open');
                const isOpen = dropdownMenu.classList.contains('open');
                toggleBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
            });
        }

        // Active state highlighting
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        if (currentPage === "program.html") {
            const p = headerContainer.querySelector('#nav-programs');
            const mp = headerContainer.querySelector('#mob-nav-programs');
            if (p) p.classList.add('active');
            if (mp) mp.classList.add('active');
        } else if (currentPage === "framework.html") {
            const f = headerContainer.querySelector('#nav-frameworks');
            const mf = headerContainer.querySelector('#mob-nav-frameworks');
            if (f) f.classList.add('active');
            if (mf) mf.classList.add('active');
        } else if (currentPage === "checklist.html") {
            const c = headerContainer.querySelector('#nav-checklists');
            const mc = headerContainer.querySelector('#mob-nav-checklists');
            if (c) c.classList.add('active');
            if (mc) mc.classList.add('active');
        }
    }

    // 5. Inject Footer
    const footerContainer = document.getElementById("footer");
    if (footerContainer) {
        footerContainer.innerHTML = FOOTER_HTML;
    }
});
