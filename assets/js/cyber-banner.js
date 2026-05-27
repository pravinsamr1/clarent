(function() {
    // 1. Inject Premium Cyber Security Hero Styles
    const cssStyles = `
        /* Injected dynamically by cyber-banner.js */
        .modern-cyber-hero {
            position: absolute;
            inset: 0;
            background: #030611;
            z-index: 1;
            overflow: hidden;
        }

        /* Perspective Engine Matrix Grid */
        .modern-grid-overlay {
            position: absolute;
            inset: -50% 0 -50% 0;
            background-image: 
                linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
            background-size: 50px 50px;
            transform: perspective(800px) rotateX(60deg);
            transform-origin: center center;
            mask-image: radial-gradient(circle at 50% 50%, black 30%, transparent 80%);
            animation: gridScroll 40s linear infinite;
        }

        @keyframes gridScroll {
            0% { background-position: 0 0; }
            100% { background-position: 0 1000px; }
        }

        /* Fluid Cyber Glow Architecture */
        .cyber-glow-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(140px);
            opacity: 0.35;
            mix-blend-mode: screen;
            pointer-events: none;
            animation: orbFloat 18s ease-in-out infinite alternate;
        }
        .orb-primary {
            width: 500px;
            height: 500px;
            background: #5135ff;
            top: -10%;
            left: 10%;
        }
        .orb-secondary {
            width: 450px;
            height: 450px;
            background: #ff5455;
            bottom: -5%;
            right: 15%;
            animation-delay: -4s;
        }
        .orb-tertiary {
            width: 350px;
            height: 350px;
            background: #00f3ff;
            top: 40%;
            left: 45%;
            animation-delay: -8s;
        }

        @keyframes orbFloat {
            0% { transform: translateY(0) scale(1) rotate(0deg); }
            100% { transform: translateY(-40px) scale(1.15) rotate(45deg); }
        }

        /* Abstract Premium Geometric Accents */
        .floating-geometry-container {
            position: absolute;
            inset: 0;
            z-index: 2;
        }
        .cyber-abstract-shape {
            position: absolute;
            pointer-events: none;
            opacity: 0.12;
        }
        .shape-shield-1 {
            width: 220px;
            top: 15%;
            left: 8%;
            animation: floatingSlow 12s ease-in-out infinite alternate;
        }
        .shape-shield-2 {
            width: 160px;
            bottom: 20%;
            right: 10%;
            animation: floatingSlow 10s ease-in-out infinite alternate-reverse;
        }
        .shape-data-ring {
            width: 300px;
            height: 300px;
            border: 1px solid rgba(81, 53, 255, 0.15);
            border-radius: 50%;
            top: 25%;
            right: 20%;
            overflow: hidden;
            transform: rotate(15deg);
        }
        .scanning-beam {
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, transparent, #00f3ff, transparent);
            position: absolute;
            top: -10px;
            animation: scannerMove 4s ease-in-out infinite;
        }

        @keyframes floatingSlow {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(-25px) rotate(8deg); }
        }
        @keyframes scannerMove {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }

        /* Typography & Layout Finishes */
        .modern-content-layout {
            padding: 160px 0 140px;
        }
        .modern-hero-title {
            font-size: clamp(38px, 5.5vw, 72px);
            font-weight: 800;
            line-height: 1.1;
            letter-spacing: -2px;
        }
        .gradient-text-glow {
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            letter-spacing: inherit !important;
            background: linear-gradient(135deg, #ffffff 10%, #abb4ff 50%, #ffabab 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            position: relative;
            text-shadow: 0 0 35px rgba(81, 53, 255, 0.25);
        }
        .modern-hero-desc {
            max-width: 720px;
            font-size: 17px;
            line-height: 1.65;
            color: rgba(255, 255, 255, 0.75);
            letter-spacing: -0.1px;
        }

        /* Clean High-End Cyber Buttons */
        .modern-action-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 14px 32px;
            border-radius: 100px;
            font-size: 15px;
            font-weight: 700;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            text-transform: uppercase;
            letter-spacing: 1px;
            text-decoration: none !important;
        }
        .btn-primary-glow {
            background: #ffffff;
            color: #030611 !important;
            box-shadow: 0 8px 20px rgba(255, 255, 255, 0.06);
        }
        .btn-primary-glow:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(81, 53, 255, 0.4);
            background: linear-gradient(93deg, #5135ff 10.65%, #ff5455 89.35%);
            color: #ffffff !important;
        }
        .btn-primary-glow:hover .arrow-icon {
            transform: translateX(4px);
        }
        .arrow-icon {
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-secondary-outline {
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: #ffffff !important;
            backdrop-filter: blur(4px);
        }
        .btn-secondary-outline:hover {
            background: rgba(0, 243, 255, 0.04);
            border-color: #00f3ff;
            color: #00f3ff !important;
            box-shadow: 0 0 20px rgba(0, 243, 255, 0.15);
            transform: translateY(-3px);
        }

        /* Holographic Security Console Graphic */
        .hologram-console-wrap {
            position: relative;
            width: 100%;
            max-width: 760px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            perspective: 1000px;
        }

        .hologram-svg {
            width: 100%;
            height: auto;
            filter: drop-shadow(0 0 20px rgba(81, 53, 255, 0.15));
            transform: rotateX(12deg);
            animation: floatingHolo 6s ease-in-out infinite alternate;
        }

        .holo-ring-outer {
            transform-origin: center;
            animation: rotateCCW 25s linear infinite;
        }

        .holo-ring-middle {
            transform-origin: center;
            animation: rotateCW 18s linear infinite;
        }

        .holo-ring-inner {
            transform-origin: center;
            animation: rotateCCW 12s linear infinite;
        }

        .holo-shield-group {
            transform-origin: center;
            animation: holoPulse 4s ease-in-out infinite;
        }

        .holo-scan-beam {
            transform-origin: center;
            animation: scanSweep 5s ease-in-out infinite;
        }

        /* Clean animation keyframes */
        @keyframes rotateCW {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        @keyframes rotateCCW {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
        }

        @keyframes scanSweep {
            0%, 100% { transform: translateY(-70px); opacity: 0.15; }
            50% { transform: translateY(70px); opacity: 0.7; }
        }

        @keyframes holoPulse {
            0%, 100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(0, 243, 255, 0.3)); }
            50% { transform: scale(1.04); filter: drop-shadow(0 0 22px rgba(81, 53, 255, 0.65)); }
        }

        @keyframes floatingHolo {
            0% { transform: rotateX(12deg) translateY(0px) rotate(0deg); }
            100% { transform: rotateX(12deg) translateY(-15px) rotate(1.5deg); }
        }

        /* Binary Matrix Backdrop Styling */
        .binary-matrix-container {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            overflow: hidden;
            display: flex;
            justify-content: space-around;
            pointer-events: none;
            opacity: 0.16;
        }

        .binary-stream {
            writing-mode: vertical-rl;
            text-orientation: upright;
            font-family: 'Courier New', Courier, monospace;
            font-size: 14px;
            font-weight: 800;
            color: #00f3ff;
            text-shadow: 0 0 6px rgba(0, 243, 255, 0.8);
            white-space: nowrap;
            animation: binaryScroll 18s linear infinite;
        }

        .binary-stream:nth-child(2n) {
            animation-duration: 24s;
            animation-delay: -3s;
            opacity: 0.7;
            font-size: 11px;
        }
        .binary-stream:nth-child(3n) {
            animation-duration: 20s;
            animation-delay: -6s;
            opacity: 0.5;
            font-size: 13px;
        }
        .binary-stream:nth-child(4n) {
            animation-duration: 28s;
            animation-delay: -11s;
            opacity: 0.8;
        }

        @keyframes binaryScroll {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
    `;

    // 2. Inject CSS Stylesheet dynamically
    const styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    styleEl.innerHTML = cssStyles;
    document.head.appendChild(styleEl);

    // 3. Define the complete Hero Banner Inner HTML
    const bannerHTML = `
        <div class="modern-cyber-hero">
            <div class="cyber-glow-orb orb-primary"></div>
            <div class="cyber-glow-orb orb-secondary"></div>
            <div class="cyber-glow-orb orb-tertiary"></div>

            <div class="modern-grid-overlay"></div>

            <!-- Binary Matrix Scrolling Backdrop -->
            <div class="binary-matrix-container">
                <div class="binary-stream">101101001011101010100010101010101111010100010101</div>
                <div class="binary-stream">010010101110101000010101010010111111010101010100</div>
                <div class="binary-stream">110101110101001010101110101001010101000101011000</div>
                <div class="binary-stream">001010101001011110101010101011010101000110101001</div>
                <div class="binary-stream">101100101101010101010011110101010001010101101000</div>
                <div class="binary-stream">010010111101010110001010101010101000110101010101</div>
                <div class="binary-stream">110101010001010100110110001010101010111010100010</div>
                <div class="binary-stream">001101010101101010101111010101010001101000101010</div>
                <div class="binary-stream">101010100010101011101010010101011110001010110100</div>
                <div class="binary-stream">010010001010101101010101000110101011110101000101</div>
                <div class="binary-stream">110101011110001010110101010100011010101010001010</div>
                <div class="binary-stream">001010110101010100011010101011101010100101001110</div>
            </div>

            <!-- Futuristic Dotted World Map Network Animation -->
            <div class="banner-map-container">
                <svg class="banner-map-svg" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="activeLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#5135ff" stop-opacity="0.8"/>
                            <stop offset="50%" stop-color="#00f3ff" stop-opacity="0.8"/>
                            <stop offset="100%" stop-color="#ff5455" stop-opacity="0.8"/>
                        </linearGradient>
                    </defs>
                    
                    <!-- Stylized Radar Sonar Blueprint Circles (Clean HUD Constellation) -->
                    <g class="continents">
                        <circle class="map-continent" cx="500" cy="250" r="100" />
                        <circle class="map-continent" cx="500" cy="250" r="180" />
                        <circle class="map-continent" cx="500" cy="250" r="270" />
                        <circle class="map-continent" cx="500" cy="250" r="360" />
                        <line class="map-continent" x1="500" y1="50" x2="500" y2="450" />
                        <line class="map-continent" x1="100" y1="250" x2="900" y2="250" />
                    </g>
                    
                    <!-- Core Global Connection Lines -->
                    <g class="connections">
                        <path id="path-sv-core" class="map-connection-line-active" d="M150,150 Q325,120 500,250" />
                        <path class="map-connection-line" d="M150,150 Q325,120 500,250" />
                        <path id="path-core-tokyo" class="map-connection-line-active" d="M500,250 Q675,120 850,150" />
                        <path class="map-connection-line" d="M500,250 Q675,120 850,150" />
                        <path id="path-sp-core" class="map-connection-line-active" d="M220,320 Q360,335 500,250" />
                        <path class="map-connection-line" d="M220,320 Q360,335 500,250" />
                        <path id="path-core-bangalore" class="map-connection-line-active" d="M500,250 Q590,240 680,280" />
                        <path class="map-connection-line" d="M500,250 Q590,240 680,280" />
                        <path id="path-bangalore-sydney" class="map-connection-line-active" d="M680,280 Q745,320 810,360" />
                        <path class="map-connection-line" d="M680,280 Q745,320 810,360" />
                        <path id="path-core-sydney" class="map-connection-line-active" d="M500,250 Q655,355 810,360" />
                        <path class="map-connection-line" d="M500,250 Q655,355 810,360" />
                    </g>
                    
                    <!-- Dynamic Glowing Data Packets -->
                    <g class="packets">
                        <circle class="map-packet-cyan">
                            <animateMotion dur="6s" repeatCount="indefinite">
                                <mpath href="#path-sv-core" />
                            </animateMotion>
                        </circle>
                        <circle class="map-packet">
                            <animateMotion dur="8s" repeatCount="indefinite">
                                <mpath href="#path-core-tokyo" />
                            </animateMotion>
                        </circle>
                        <circle class="map-packet-cyan">
                            <animateMotion dur="7s" repeatCount="indefinite">
                                <mpath href="#path-sp-core" />
                            </animateMotion>
                        </circle>
                        <circle class="map-packet-blue">
                            <animateMotion dur="5s" repeatCount="indefinite">
                                <mpath href="#path-core-bangalore" />
                            </animateMotion>
                        </circle>
                        <circle class="map-packet-cyan">
                            <animateMotion dur="4s" repeatCount="indefinite">
                                <mpath href="#path-bangalore-sydney" />
                            </animateMotion>
                        </circle>
                        <circle class="map-packet">
                            <animateMotion dur="9s" repeatCount="indefinite">
                                <mpath href="#path-core-sydney" />
                            </animateMotion>
                        </circle>
                    </g>
                    
                    <!-- Active Radar Hub Beacons -->
                    <g class="nodes">
                        <g transform="translate(150, 150)">
                            <circle class="map-node-pulse pulse-cyan" cx="0" cy="0" r="2" />
                            <circle class="map-node cyan-node" cx="0" cy="0" />
                        </g>
                        <g transform="translate(220, 320)">
                            <circle class="map-node-pulse pulse-red" cx="0" cy="0" r="2" />
                            <circle class="map-node red-node" cx="0" cy="0" />
                        </g>
                        <g transform="translate(500, 250)">
                            <circle class="map-node-pulse pulse-cyan" cx="0" cy="0" r="2" />
                            <circle class="map-node" cx="0" cy="0" />
                        </g>
                        <g transform="translate(680, 280)">
                            <circle class="map-node-pulse pulse-red" cx="0" cy="0" r="2" />
                            <circle class="map-node red-node" cx="0" cy="0" />
                        </g>
                        <g transform="translate(850, 150)">
                            <circle class="map-node-pulse pulse-red" cx="0" cy="0" r="2" />
                            <circle class="map-node red-node" cx="0" cy="0" />
                        </g>
                        <g transform="translate(810, 360)">
                            <circle class="map-node-pulse pulse-cyan" cx="0" cy="0" r="2" />
                            <circle class="map-node cyan-node" cx="0" cy="0" />
                        </g>
                    </g>
                </svg>
            </div>

            <!-- Floating Abstract Shield Geometry -->
            <div class="floating-geometry-container">
                <div class="cyber-abstract-shape shape-shield-1">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 20L170 50V110C170 154 139 181 100 190C61 181 30 154 30 110V50L100 20Z" stroke="url(#modernShieldGrad1)" stroke-width="1.5" stroke-dasharray="4 8"/>
                        <defs>
                            <linearGradient id="modernShieldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#5135ff" stop-opacity="0.6"/>
                                <stop offset="100%" stop-color="#ff5455" stop-opacity="0.1"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div class="cyber-abstract-shape shape-shield-2">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 30L160 57V110C160 148 134 172 100 180C66 172 40 148 40 110V57L100 30Z" stroke="url(#modernShieldGrad2)" stroke-width="2"/>
                        <circle cx="100" cy="105" r="25" stroke="#00f3ff" stroke-width="1" stroke-opacity="0.7" stroke-dasharray="2 4"/>
                        <defs>
                            <linearGradient id="modernShieldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#00f3ff" stop-opacity="0.8"/>
                                <stop offset="100%" stop-color="#5135ff" stop-opacity="0.2"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div class="cyber-abstract-shape shape-data-ring">
                    <div class="scanning-beam"></div>
                </div>
            </div>
        </div>

        <div class="container position-relative" style="z-index: 20;">
            <div class="row align-items-center justify-content-between g-5">
                <!-- Left Column: Typography & CTAs -->
                <div class="col-lg-6 text-start">
                    <div class="banner-content modern-content-layout">
                        <!-- Hero Header with Animative Gradient Text Glow -->
                        <h1 class="modern-hero-title white mb-4" style="text-align: left;">
                            Secure, Govern <br>
                            <span class="gradient-text-glow" style="font-size: inherit;">&amp; Transform</span>
                        </h1>
                        
                        <!-- Hero Description -->
                        <p class="pra fs-six mb-5 white-color opacity-75 modern-hero-desc" style="text-align: left; max-width: 100%;">
                            Practical cybersecurity services for cloud, data protection, Zero Trust,
                            ServiceNow, GRC, penetration testing, virtualization and hands-on security training.
                        </p>

                        <!-- Cyber Action Buttons with Micro-Interactions -->
                        <div class="d-flex flex-sm-row flex-column justify-content-start align-items-sm-center gap-3">
                            <a href="#discover" class="modern-action-btn btn-primary-glow">
                                <span>Discover More</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="arrow-icon"><path d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                            <a href="contact.html" class="modern-action-btn btn-secondary-outline">
                                <span>Contact Us</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Interactive Holographic Security Core Graphic -->
                <div class="col-lg-6 text-center">
                    <div class="hologram-console-wrap">
                        <svg class="hologram-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="themeLockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#00f3ff" />
                                    <stop offset="50%" stop-color="#5135ff" />
                                    <stop offset="100%" stop-color="#ff5455" />
                                </linearGradient>
                                <linearGradient id="themeShackleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#00f3ff" />
                                    <stop offset="100%" stop-color="#5135ff" />
                                </linearGradient>
                                <radialGradient id="themeBodyGlow" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#5135ff" stop-opacity="1" />
                                    <stop offset="70%" stop-color="#00f3ff" stop-opacity="0.8" />
                                    <stop offset="100%" stop-color="#ff5455" stop-opacity="0" />
                                </radialGradient>
                                <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="#00f3ff" stop-opacity="0.2" />
                                    <stop offset="100%" stop-color="#5135ff" stop-opacity="0.8" />
                                </linearGradient>
                                <linearGradient id="themeLockBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#1b205a" stop-opacity="0.85" />
                                    <stop offset="100%" stop-color="#0a0d2d" stop-opacity="0.95" />
                                </linearGradient>
                            </defs>

                            <!-- Theme Rotating Holographic Platform Base -->
                            <g transform="translate(200, 310)">
                                <!-- Base Glow -->
                                <ellipse cx="0" cy="0" rx="110" ry="24" fill="url(#themeBodyGlow)" opacity="0.3" />
                                
                                <!-- Concentric Floor Rings -->
                                <ellipse class="holo-ring-outer" cx="0" cy="0" rx="130" ry="28" stroke="#00f3ff" stroke-width="2" stroke-dasharray="10 30 60 30" fill="none" opacity="0.8" />
                                <ellipse class="holo-ring-middle" cx="0" cy="0" rx="110" ry="24" stroke="#5135ff" stroke-width="1.2" stroke-dasharray="6 12 30 12" fill="none" opacity="0.6" />
                                <ellipse class="holo-ring-inner" cx="0" cy="0" rx="90" ry="20" stroke="#ff5455" stroke-width="1.5" stroke-dasharray="4 8" fill="none" opacity="0.7" />
                            </g>

                            <!-- Symmetrical Cyber Circuit Traces (Connecting to Shield System) -->
                            <g class="theme-circuits" stroke="#00f3ff" stroke-width="2.2" fill="none" opacity="0.85" filter="drop-shadow(0 0 8px rgba(0,243,255,0.5))">
                                <path d="M 20,200 H 120" />
                                <path d="M 20,150 H 60 L 80,175 H 120" />
                                <path d="M 20,250 H 70 L 90,225 H 120" />
                                
                                <circle cx="20" cy="200" r="3.5" fill="#00f3ff" />
                                <circle cx="20" cy="150" r="3.5" fill="#00f3ff" />
                                <circle cx="20" cy="250" r="3.5" fill="#00f3ff" />
                                
                                <path d="M 380,200 H 280" />
                                <path d="M 380,150 H 340 L 320,175 H 280" />
                                <path d="M 380,250 H 330 L 310,225 H 280" />
                                
                                <circle cx="380" cy="200" r="3.5" fill="#00f3ff" />
                                <circle cx="380" cy="150" r="3.5" fill="#00f3ff" />
                                <circle cx="380" cy="250" r="3.5" fill="#00f3ff" />
                            </g>

                            <!-- Interactive Biometric Retina Scanner Interface -->
                            <g class="holo-shield-group">
                                <!-- Outer Targeting Compass Ring -->
                                <circle cx="200" cy="200" r="95" stroke="url(#themeLockGrad)" stroke-width="2.5" stroke-dasharray="25 40 80 40" fill="none" opacity="0.8" />
                                <circle cx="200" cy="200" r="95" stroke="#00f3ff" stroke-width="1.5" stroke-dasharray="4 8" fill="none" opacity="0.6" />

                                <!-- Biometric Corner HUD Brackets -->
                                <path d="M 105,120 V 105 H 120" stroke="#ff5455" stroke-width="2.5" fill="none" opacity="0.8" />
                                <path d="M 295,120 V 105 H 280" stroke="#ff5455" stroke-width="2.5" fill="none" opacity="0.8" />
                                <path d="M 105,280 V 295 H 120" stroke="#ff5455" stroke-width="2.5" fill="none" opacity="0.8" />
                                <path d="M 295,280 V 295 H 280" stroke="#ff5455" stroke-width="2.5" fill="none" opacity="0.8" />

                                <!-- Crosshairs & Telemetry Radar Ticks -->
                                <g stroke="#00f3ff" stroke-width="2" opacity="0.7">
                                    <line x1="200" y1="115" x2="200" y2="100" />
                                    <line x1="200" y1="285" x2="200" y2="300" />
                                    <line x1="115" y1="200" x2="100" y2="200" />
                                    <line x1="285" y1="200" x2="300" y2="200" />
                                </g>

                                <!-- Concentric Cybernetic Iris Elements -->
                                <circle cx="200" cy="200" r="76" stroke="#5135ff" stroke-width="2.5" stroke-dasharray="40 10 10 10" fill="none" opacity="0.85" />
                                <circle cx="200" cy="200" r="70" stroke="#00f3ff" stroke-width="1" stroke-dasharray="2 4" fill="none" opacity="0.5" />
                                
                                <circle cx="200" cy="200" r="54" stroke="#ff5455" stroke-width="1.8" stroke-dasharray="10 15 30 15" fill="none" opacity="0.8" />
                                
                                <circle cx="200" cy="200" r="36" stroke="#00f3ff" stroke-width="2" stroke-dasharray="6 6" fill="none" opacity="0.7" />
                                <circle cx="200" cy="200" r="28" fill="url(#themeBodyGlow)" opacity="0.3" />

                                <!-- Glowing Pupil Core Reactor -->
                                <circle cx="200" cy="200" r="18" fill="url(#themeLockGrad)" stroke="#fff" stroke-width="1" filter="drop-shadow(0 0 8px #00f3ff)" />
                                <circle cx="200" cy="200" r="8" fill="#030611" />
                                <circle cx="200" cy="200" r="4" fill="#00f3ff" filter="drop-shadow(0 0 4px #00f3ff)" />

                                <!-- Lateral Telemetry Nodes -->
                                <circle cx="200" cy="105" r="4.5" fill="#ff5455" filter="drop-shadow(0 0 6px #ff5455)" />
                                <circle cx="200" cy="295" r="4.5" fill="#ff5455" filter="drop-shadow(0 0 6px #ff5455)" />
                                <circle cx="105" cy="200" r="4.5" fill="#00f3ff" filter="drop-shadow(0 0 6px #00f3ff)" />
                                <circle cx="295" cy="200" r="4.5" fill="#00f3ff" filter="drop-shadow(0 0 6px #00f3ff)" />
                            </g>

                            <!-- Horizontal active threat scanner beam -->
                            <line class="holo-scan-beam" x1="80" y1="200" x2="320" y2="200" stroke="#00f3ff" stroke-width="1.8" opacity="0.85" filter="drop-shadow(0 0 6px #00f3ff)" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 4. Mount / Inject the Banner Elements dynamically
    function mountBanner() {
        let container = document.getElementById('cyber-banner-mount');
        if (!container) {
            container = document.querySelector('.banner-section-wrap.style3');
        }
        if (container) {
            container.innerHTML = bannerHTML;
            console.log("Clarent 360 Cyber Banner Loaded!");
        } else {
            console.warn("cyber-banner: targeting container #cyber-banner-mount or class .banner-section-wrap.style3 not found.");
        }
    }

    // Run on DOM load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountBanner);
    } else {
        mountBanner();
    }
})();
