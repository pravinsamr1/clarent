(function() {
    // 1. Inject Premium Cyber Security Console Styles
    const cssStyles = `
        /* Injected dynamically by cyber-banner.js */
        .modern-cyber-hero {
            position: relative;
            width: 100%;
            height: 90vh;
            min-height: 700px;
            background: radial-gradient(circle at 50% 50%, #010207 0%, #000000 100%);
            z-index: 1;
            overflow: hidden;
            display: flex;
            align-items: center;
        }

        @media (max-width: 991px) {
            .modern-cyber-hero {
                height: auto;
                min-height: 90vh;
                padding: 120px 0 60px;
            }
        }

        /* Fullscreen Canvas and SVG layers */
        .fullscreen-network-svg,
        .fullscreen-canvas {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            pointer-events: none;
        }

        .fullscreen-canvas {
            z-index: 3; /* Render particles on top of network lines */
        }

        /* Perspective Grid Matrix Backdrop with Infinite Loop */
        @keyframes cyberGridLoop {
            from { background-position-y: 0px; }
            to { background-position-y: 60px; }
        }
        .cyber-grid {
            position: absolute;
            inset: -50% 0 -50% 0;
            background-image: 
                linear-gradient(to right, rgba(81, 53, 255, 0.02) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(81, 53, 255, 0.02) 1px, transparent 1px);
            background-size: 60px 60px;
            transform: perspective(900px) rotateX(60deg);
            transform-origin: center center;
            mask-image: radial-gradient(circle at 50% 50%, black 30%, transparent 80%);
            opacity: 0.35;
            pointer-events: none;
            animation: cyberGridLoop 6s linear infinite;
        }

        /* Ambient glow orbs */
        .cyber-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(140px);
            opacity: 0.3;
            mix-blend-mode: screen;
            pointer-events: none;
        }
        .orb-1 {
            width: 700px;
            height: 700px;
            background: #5135ff;
            top: -200px;
            left: -150px;
        }
        .orb-2 {
            width: 650px;
            height: 650px;
            background: #ff5455;
            bottom: -200px;
            right: -150px;
            opacity: 0.22;
        }
        .orb-3 {
            width: 500px;
            height: 500px;
            background: #00f3ff;
            top: 35%;
            left: 55%;
            opacity: 0.15;
        }

        /* Text and content container styles */
        .hero-content-wrap {
            position: relative;
            z-index: 10;
            width: 100%;
        }

        .hero-subtitle {
            font-family: monospace;
            font-size: 15px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 5px;
            color: #00f3ff;
            text-shadow: 0 0 10px rgba(0, 243, 255, 0.4);
            min-height: 24px;
            filter: blur(8px);
            opacity: 0;
        }

        .hero-title {
            font-size: clamp(42px, 6vw, 76px);
            font-weight: 800;
            line-height: 1.1;
            color: #ffffff;
            letter-spacing: -2px;
            min-height: 150px;
            filter: blur(8px);
            opacity: 0;
        }

        /* Flashing Terminal Cyber Cursor */
        .cyber-cursor {
            display: inline-block;
            color: #00f3ff;
            font-weight: 800;
            animation: cyberCursorBlink 0.6s steps(2, start) infinite;
            text-shadow: 0 0 8px rgba(0, 243, 255, 0.8);
            margin-left: 3px;
        }
        .cyber-cursor.permanent {
            color: #10b981;
            text-shadow: 0 0 8px rgba(16, 185, 129, 0.8);
        }
        @keyframes cyberCursorBlink {
            to { opacity: 0; }
        }

        /* Title Neon Pulse Glow */
        @keyframes titleGlowPulse {
            0% { filter: drop-shadow(0 0 2px rgba(0, 243, 255, 0.15)); }
            50% { filter: drop-shadow(0 0 10px rgba(0, 243, 255, 0.45)); }
            100% { filter: drop-shadow(0 0 2px rgba(0, 243, 255, 0.15)); }
        }
        .hero-title span {
            background: linear-gradient(135deg, #ffffff 10%, #9baaff 55%, #00f3ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            animation: titleGlowPulse 4s ease-in-out infinite;
        }

        .hero-desc {
            font-size: 17.5px;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.75);
            max-width: 560px;
            opacity: 0;
            transform: translateY(20px);
            filter: blur(6px);
        }

        /* Actions */
        .hero-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            opacity: 0;
            transform: translateY(20px);
        }

        .btn-cyber-primary {
            background: linear-gradient(93deg, #5135ff 10.65%, #ff5455 89.35%);
            color: #ffffff !important;
            font-weight: 700;
            padding: 16px 38px;
            border-radius: 100px;
            border: none;
            box-shadow: 0 8px 24px rgba(81, 53, 255, 0.35);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            text-transform: uppercase;
            font-size: 13.5px;
            letter-spacing: 1px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-decoration: none !important;
        }
        .btn-cyber-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 16px 35px rgba(81, 53, 255, 0.6);
        }

        .btn-cyber-secondary {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: #ffffff !important;
            font-weight: 700;
            padding: 16px 38px;
            border-radius: 100px;
            backdrop-filter: blur(8px);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            text-transform: uppercase;
            font-size: 13.5px;
            letter-spacing: 1px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-decoration: none !important;
        }
        .btn-cyber-secondary:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: #00f3ff;
            color: #00f3ff !important;
            transform: translateY(-3px);
            box-shadow: 0 0 22px rgba(0, 243, 255, 0.25);
        }

        /* Floating HUD Badge - Top Right */
        .floating-hud-badge {
            position: absolute;
            top: 100px;
            right: 48px;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 6px 14px;
            background: rgba(4, 7, 20, 0.6);
            border: 1px solid rgba(81, 53, 255, 0.25);
            border-radius: 8px;
            font-family: monospace;
            font-size: 11px;
            letter-spacing: 1px;
            z-index: 10;
            color: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(8px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        @media (max-width: 991px) {
            .floating-hud-badge {
                display: none;
            }
        }

        .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 3px 8px;
            border-radius: 4px;
            font-weight: 700;
            font-size: 10px;
            text-transform: uppercase;
        }

        .status-red {
            background: rgba(255, 84, 85, 0.12);
            color: #ff5455;
            border: 1px solid rgba(255, 84, 85, 0.2);
            box-shadow: 0 0 10px rgba(255, 84, 85, 0.1);
        }

        .status-green {
            background: rgba(16, 185, 129, 0.12);
            color: #10b981;
            border: 1px solid rgba(16, 185, 129, 0.2);
            box-shadow: 0 0 10px rgba(16, 185, 129, 0.1);
        }

        .net-line {
            stroke: rgba(81, 53, 255, 0.14);
            stroke-width: 1.8px;
            fill: none;
        }

        .net-node-static {
            fill: rgba(81, 53, 255, 0.4);
            r: 4px;
            filter: drop-shadow(0 0 6px rgba(81, 53, 255, 0.4));
        }

        @keyframes threatNodeGlitch {
            0% { transform: translate(0, 0) scale(1); }
            20% { transform: translate(-2px, 1px) scale(1.05); }
            40% { transform: translate(1px, -2px) scale(0.95); }
            60% { transform: translate(-1px, 2px) scale(1.02); }
            80% { transform: translate(2px, -1px) scale(0.98); }
            100% { transform: translate(0, 0) scale(1); }
        }
        .threat-node {
            fill: #ff4a5a;
            r: 8px;
            filter: drop-shadow(0 0 12px #ff4a5a);
            transform-origin: center;
            animation: threatNodeGlitch 2.8s ease-in-out infinite;
        }

        /* Dash Rotating Biometric Ring */
        .bio-scan-ring {
            transform-box: fill-box;
            transform-origin: center;
            animation: rotateBioScan 12s linear infinite;
        }
        @keyframes rotateBioScan {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        /* Flowing Shield Energy Field (Adjusted for 15px broad outline) */
        .shield-energy-field {
            stroke-dasharray: 120 40; /* Beautiful long arcs instead of chunky squares! */
            animation: shieldEnergyFlow 1.8s linear infinite;
        }
        @keyframes shieldEnergyFlow {
            from { stroke-dashoffset: 160; }
            to { stroke-dashoffset: 0; }
        }

        /* Inner Cyber Shield Core Barrier Detailed Accent */
        .shield-inner-barrier {
            animation: shieldInnerPulse 3s ease-in-out infinite alternate, shieldInnerFlow 6s linear infinite;
        }
        @keyframes shieldInnerPulse {
            0% { opacity: 0.45; filter: drop-shadow(0 0 4px rgba(0, 243, 255, 0.6)); }
            100% { opacity: 0.85; filter: drop-shadow(0 0 14px rgba(0, 243, 255, 0.95)); }
        }
        @keyframes shieldInnerFlow {
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: -60; }
        }

        .threat-pulse {
            fill: none;
            stroke: #ff4a5a;
            stroke-width: 2px;
            opacity: 0.6;
        }

        /* Quantum Assembly Lock Dot (Smaller & Glow) */
        .lock-dot {
            fill: #00f3ff;
            r: 2.2px;
            opacity: 0;
            filter: drop-shadow(0 0 3px #00f3ff);
        }

        /* Concentric HUD Revolving Rings */
        .holo-ring {
            fill: none;
            transform-origin: center;
        }

        /* Expanding Radar Sonar Sweep Wave */
        .sonar-sweep-ring {
            position: absolute;
            width: 10px;
            height: 10px;
            border: 2.5px solid #00f3ff;
            border-radius: 50%;
            box-shadow: inset 0 0 20px rgba(0, 243, 255, 0.4), 0 0 30px rgba(0, 243, 255, 0.5);
            opacity: 0;
            pointer-events: none;
            z-index: 4;
            transform: translate(-50%, -50%);
            left: 1350px;
            top: 600px;
        }

        @media (max-width: 1199px) {
            .sonar-sweep-ring {
                left: 75%;
            }
        }
        @media (max-width: 991px) {
            .sonar-sweep-ring {
                left: 50%;
                top: 750px;
            }
        }
    `;

    // 2. Inject CSS Stylesheet dynamically
    const styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    styleEl.innerHTML = cssStyles;
    document.head.appendChild(styleEl);

    // 3. Define the complete Hero Banner Inner HTML
    const bannerHTML = `
        <div class="modern-cyber-hero w-100">
            <div class="cyber-orb orb-1"></div>
            <div class="cyber-orb orb-2"></div>
            <div class="cyber-orb orb-3"></div>
            <div class="cyber-grid"></div>



            <!-- Fullscreen HTML5 Particle Canvas (1000+ points drawn here at 60fps) -->
            <canvas class="fullscreen-canvas" id="lock-canvas"></canvas>

            <!-- Screen-Covering Background Network SVG (Connections & Outline Padlock) -->
            <svg class="fullscreen-network-svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" id="cyber-svg-root">
                <!-- Massive Global Constellation Lines -->
                <g class="constellation-network">
                    <path class="net-line" d="M 1350,600 L 1000,300 L 500,200 L 100,250 M 1350,600 L 1100,800 L 600,750 L 200,850 M 1350,600 L 1600,200 L 1800,400 M 1350,600 L 1700,850 L 1300,900" />
                    <path class="net-line" d="M 500,200 L 600,750 M 1000,300 L 1100,800 M 100,250 L 200,850" stroke-dasharray="3 6" opacity="0.4" />
                    <path class="net-line" d="M 1600,200 L 1700,850 M 1800,400 L 1300,900" stroke-dasharray="3 6" opacity="0.4" />
                    
                    <!-- Static Constellation Nodes -->
                    <circle class="net-node-static" cx="100" cy="250" />
                    <circle class="net-node-static" cx="500" cy="200" />
                    <circle class="net-node-static" cx="1000" cy="300" />
                    <circle class="net-node-static" cx="200" cy="850" />
                    <circle class="net-node-static" cx="600" cy="750" />
                    <circle class="net-node-static" cx="1100" cy="800" />
                    <circle class="net-node-static" cx="1600" cy="200" />
                    <circle class="net-node-static" cx="1800" cy="400" />
                    <circle class="net-node-static" cx="1700" cy="850" />
                    <circle class="net-node-static" cx="1300" cy="900" />
                </g>
 
                <!-- Right Side Concentric HUD Radar Circles (Scaled up to match the massive padlock & shield) -->
                <g class="hud-radar-system">
                    <circle class="holo-ring outer-ring" cx="1350" cy="600" r="380" stroke="#00f3ff" stroke-width="1.2" stroke-dasharray="10 30 60 30" opacity="0.45" />
                    <circle class="holo-ring mid-ring" cx="1350" cy="600" r="300" stroke="#5135ff" stroke-width="1.5" stroke-dasharray="6 12 30 12" opacity="0.4" />
                    <circle class="holo-ring inner-ring" cx="1350" cy="600" r="220" stroke="#ff5455" stroke-width="1.2" stroke-dasharray="4 8" opacity="0.5" />
                </g>
 
                <g class="padlock-assembled" id="lock-and-shield-assembled" style="opacity: 0;">
                    <!-- Futuristic Multilayered Shield (15px broad outer Purple core, long animated dashes, and fine inner Cyan pulse barrier) -->
                    <path d="M -280,-198 Q 0,-243 280,-198 C 280,-18 216,180 0,324 C -216,180 -280,-18 -280,-198 Z" fill="rgba(81, 53, 255, 0.04)" stroke="rgba(81, 53, 255, 0.15)" stroke-width="15" stroke-linecap="round" />
                    <path class="shield-energy-field" d="M -280,-198 Q 0,-243 280,-198 C 280,-18 216,180 0,324 C -216,180 -280,-18 -280,-198 Z" fill="none" stroke="#5135ff" stroke-width="15" stroke-linecap="round" filter="drop-shadow(0 0 25px rgba(81, 53, 255, 0.85))" />
                    <path class="shield-inner-barrier" d="M -244,-172 Q 0,-211 244,-172 C 244,-15 188,156 0,282 C -188,156 -244,-15 -244,-172 Z" fill="none" stroke="#00f3ff" stroke-width="2.2" stroke-dasharray="8 12 30 12" stroke-linecap="round" filter="drop-shadow(0 0 10px #00f3ff)" />
                    
                    <!-- Broad Shackle (radius 126, stroke-width 12.5) -->
                    <path d="M -126,-18 C -126,-171 126,-171 126,-18 V 18 H -126 Z" fill="none" stroke="#00f3ff" stroke-width="12.5" filter="drop-shadow(0 0 18px #00f3ff)" />
                    <!-- Shackle inner dark core/groove for 3D metallic feel -->
                    <path d="M -126,-18 C -126,-171 126,-171 126,-18" fill="none" stroke="#010207" stroke-width="3.5" />
                    
                    <!-- Broad Padlock body (width 324, height 234, stroke-width 12.5) -->
                    <rect x="-162" y="18" width="324" height="234" rx="28" fill="rgba(4, 7, 20, 0.95)" stroke="url(#lockGrad)" stroke-width="12.5" filter="drop-shadow(0 0 35px rgba(81, 53, 255, 0.9))" />
                    
                    <!-- Inner Tech Border -->
                    <rect x="-144" y="36" width="288" height="198" rx="18" fill="none" stroke="rgba(0, 243, 255, 0.25)" stroke-width="2.2" stroke-dasharray="10 5" />
                    
                    <!-- Tech Corner Brackets -->
                    <path d="M -149,58 L -149,40 L -131,40" fill="none" stroke="#00f3ff" stroke-width="2.5" />
                    <path d="M 149,58 L 149,40 L 131,40" fill="none" stroke="#00f3ff" stroke-width="2.5" />
                    <path d="M -149,212 L -149,230 L -131,230" fill="none" stroke="#00f3ff" stroke-width="2.5" />
                    <path d="M 149,212 L 149,230 L 131,230" fill="none" stroke="#00f3ff" stroke-width="2.5" />
                    
                    <!-- Central Biometric Scanner Circle -->
                    <circle cx="0" cy="135" r="58" fill="rgba(81, 53, 255, 0.25)" stroke="#5135ff" stroke-width="3.5" filter="drop-shadow(0 0 15px rgba(81, 53, 255, 0.5))" />
                    <circle class="bio-scan-ring" cx="0" cy="135" r="43" fill="none" stroke="#00f3ff" stroke-width="1.8" stroke-dasharray="8 5" />
                    
                    <!-- Secure checkmark icon inside biometric scanner -->
                    <path d="M -28.8,135 L -7.2,156.6 L 32.4,113.4" stroke="#10b981" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round" filter="drop-shadow(0 0 12px #10b981)" />
                </g>

                <!-- Scattered Threat Nodes -->
                <g class="threats-group">
                    <g class="threat-group" data-id="1" transform="translate(300, 220)">
                        <circle class="threat-pulse" cx="0" cy="0" r="8"></circle>
                        <circle class="threat-node" cx="0" cy="0" r="8"></circle>
                    </g>
                    <g class="threat-group" data-id="2" transform="translate(800, 250)">
                        <circle class="threat-pulse" cx="0" cy="0" r="8"></circle>
                        <circle class="threat-node" cx="0" cy="0" r="8"></circle>
                    </g>
                    <g class="threat-group" data-id="3" transform="translate(1600, 200)">
                        <circle class="threat-pulse" cx="0" cy="0" r="8"></circle>
                        <circle class="threat-node" cx="0" cy="0" r="8"></circle>
                    </g>
                    <g class="threat-group" data-id="4" transform="translate(400, 780)">
                        <circle class="threat-pulse" cx="0" cy="0" r="8"></circle>
                        <circle class="threat-node" cx="0" cy="0" r="8"></circle>
                    </g>
                    <g class="threat-group" data-id="5" transform="translate(900, 770)">
                        <circle class="threat-pulse" cx="0" cy="0" r="8"></circle>
                        <circle class="threat-node" cx="0" cy="0" r="8"></circle>
                    </g>
                    <g class="threat-group" data-id="6" transform="translate(1700, 850)">
                        <circle class="threat-pulse" cx="0" cy="0" r="8"></circle>
                        <circle class="threat-node" cx="0" cy="0" r="8"></circle>
                    </g>
                </g>

                <!-- Gradient definitions -->
                <defs>
                    <linearGradient id="lockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#5135ff" />
                        <stop offset="100%" stop-color="#ff5455" />
                    </linearGradient>
                </defs>
            </svg>

            <!-- Radial Sonar Sweep Wave Ring -->
            <div class="sonar-sweep-ring"></div>

            <div class="container hero-content-wrap">
                <div class="row align-items-center">
                    <!-- Left Column: Typography Decryption & CTAs -->
                    <div class="col-lg-7 col-xl-6 text-start">
                        <h4 class="hero-subtitle mb-3" id="dec-subtitle"></h4>
                        <h1 class="hero-title mb-4" id="dec-title"></h1>
                        <p class="hero-desc mb-5" id="dec-desc">
                            Clarent360 delivers enterprise-grade Zero Trust architecture, threat engineering,
                            and managed compliance to secure your business against modern digital risks.
                        </p>
                        <div class="hero-actions">
                            <a href="#discover" class="btn-cyber-primary">Get Protected</a>
                            <a href="contact.html" class="btn-cyber-secondary">Schedule Security Audit</a>
                        </div>
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
            console.log("Clarent 360 Quantum Canvas Lock Assembler Mounted!");
            
            // Setup Canvas particles
            initCanvasParticles();
            
            // Trigger GSAP Timeline Animation
            initGSAPAnimation();
        } else {
            console.warn("cyber-banner: targeting container #cyber-banner-mount or class .banner-section-wrap.style3 not found.");
        }
    }

    // 5. High-Performance Canvas Particles Engine (1,000+ points, 60fps)
    let canvas, ctx, particles = [];
    const animState = { progress: 0, opacity: 1 };
    let mouseX = -9999, mouseY = -9999;

    function initCanvasParticles() {
        canvas = document.getElementById("lock-canvas");
        if (!canvas) return;
        ctx = canvas.getContext("2d");

        // Set canvas resolution cleanly
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Track mouse coordinates for interactive particle ripples
        window.addEventListener("mousemove", (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });
        window.addEventListener("mouseleave", () => {
            mouseX = -9999;
            mouseY = -9999;
        });

        // Center coordinates of padlock assembly inside 1920x1080 system
        const targetX = 1350; // Shifted horizontally to perfectly center inside the right column area
        const targetY = 600; // Centered vertically to prevent cut-off at the top boundary
        particles = [];
 
        // Total Target Points: ~17,300 dense cyber dust dots for massive 1.8x scaled cyber lock blueprint
        // A. Broad Shackle Arc Points (8 concentric rings for extra thickness and high density - Multiplied by 1.8)
        const shackleRadii = [120, 122, 124, 126, 128, 130, 132, 134];
        shackleRadii.forEach(r => {
            for (let i = 0; i < 500; i++) {
                const angle = Math.PI + (i / 499) * Math.PI;
                particles.push(createParticle(
                    targetX + r * Math.cos(angle),
                    (targetY - 18) + r * Math.sin(angle), // Shifted vertically dynamically based on 1.8x scale
                    "rgba(0, 243, 255, 0.14)",
                    "rgb(0, 243, 255)"
                ));
            }
        });
 
        // Broad Shackle straight legs (16 concentric lines for extreme thickness - Multiplied by 1.8)
        const shackleOffsets = [-134, -132, -130, -128, -126, -124, -122, -120, 120, 122, 124, 126, 128, 130, 132, 134];
        shackleOffsets.forEach(xOffset => {
            for (let y = targetY - 18; y <= targetY + 18; y += 0.3) { // Highly dense vertical step
                particles.push(createParticle(
                    targetX + xOffset,
                    y,
                    "rgba(0, 243, 255, 0.14)",
                    "rgb(0, 243, 255)"
                ));
            }
        });

        // B. Padlock Body Outer and Grid Fill Points (Broad thickness, high-density matrix mesh - Multiplied by 1.8)
        for (let x = -162; x <= 162; x += 1.5) {
            for (let y = 18; y <= 252; y += 1.5) {
                const isBorder = (x <= -155 || x >= 155 || y <= 25 || y >= 245);
                const isInnerGrid = (Math.round(x) % 24 === 0 || Math.round(y) % 24 === 0); // High tech inner matrix grid
                
                if (isBorder || isInnerGrid) {
                    particles.push(createParticle(
                        targetX + x,
                        targetY + y,
                        "rgba(81, 53, 255, 0.14)",
                        "rgb(81, 53, 255)"
                    ));
                }
            }
        }

        // C. Central Checkmark (Access Granted Scan Arc - Multiplied by 1.8)
        for (let t = 0; t <= 1; t += 0.0015) {
            let cx, cy;
            if (t <= 0.35) {
                const subT = t / 0.35;
                cx = -36 + 27 * subT;
                cy = 135 + 27 * subT;
            } else {
                const subT = (t - 0.35) / 0.65;
                cx = -9 + 54 * subT;
                cy = 162 - 54 * subT;
            }
            particles.push(createParticle(
                targetX + cx,
                targetY + cy,
                "rgba(16, 185, 129, 0.16)",
                "rgb(16, 185, 129)"
            ));
        }

        // D. Outer Cyber Security Shield outline (Ultra-high-density dome shape - wider by 20% to frame lock and suit corporate colors)
        // Segment 1: Top Curve (Quadratic curve from (-280, -198) to (280, -198) via (0, -243))
        for (let t = 0; t <= 1; t += 0.001) {
            const x0 = -280, y0 = -198;
            const x1 = 0, y1 = -243;
            const x2 = 280, y2 = -198;
            const cx = Math.pow(1-t, 2)*x0 + 2*(1-t)*t*x1 + Math.pow(t, 2)*x2;
            const cy = Math.pow(1-t, 2)*y0 + 2*(1-t)*t*y1 + Math.pow(t, 2)*y2;
            particles.push(createParticle(
                targetX + cx,
                targetY + cy,
                "rgba(81, 53, 255, 0.16)",
                "rgb(81, 53, 255)"
            ));
        }

        // Segment 2: Right Curve (Cubic curve from (280, -198) to (0, 324) via (280, -18) and (216, 180))
        for (let t = 0; t <= 1; t += 0.0008) {
            const x0 = 280, y0 = -198;
            const x1 = 280, y1 = -18;
            const x2 = 216, y2 = 180;
            const x3 = 0, y3 = 324;
            
            const cx = Math.pow(1-t, 3)*x0 + 3*Math.pow(1-t, 2)*t*x1 + 3*(1-t)*Math.pow(t, 2)*x2 + Math.pow(t, 3)*x3;
            const cy = Math.pow(1-t, 3)*y0 + 3*Math.pow(1-t, 2)*t*y1 + 3*(1-t)*Math.pow(t, 2)*y2 + Math.pow(t, 3)*y3;
            particles.push(createParticle(
                targetX + cx,
                targetY + cy,
                "rgba(81, 53, 255, 0.16)",
                "rgb(81, 53, 255)"
            ));
        }

        // Segment 3: Left Curve (Cubic curve from (0, 324) to (-280, -198) via (-216, 180) and (-280, -18))
        for (let t = 0; t <= 1; t += 0.0008) {
            const x0 = 0, y0 = 324;
            const x1 = -216, y1 = 180;
            const x2 = -280, y2 = -18;
            const x3 = -280, y3 = -198;
            
            const cx = Math.pow(1-t, 3)*x0 + 3*Math.pow(1-t, 2)*t*x1 + 3*(1-t)*Math.pow(t, 2)*x2 + Math.pow(t, 3)*x3;
            const cy = Math.pow(1-t, 3)*y0 + 3*Math.pow(1-t, 2)*t*y1 + 3*(1-t)*Math.pow(t, 2)*y2 + Math.pow(t, 3)*y3;
            particles.push(createParticle(
                targetX + cx,
                targetY + cy,
                "rgba(81, 53, 255, 0.16)",
                "rgb(81, 53, 255)"
            ));
        }

        console.log(`Canvas initialized successfully with ${particles.length} lock particles!`);
        
        // Start the continuous high-performance render loop
        requestAnimationFrame(renderLoop);
    }

    function renderLoop() {
        drawParticles();
        requestAnimationFrame(renderLoop);
    }

    function createParticle(tx, ty, auraColor, coreColor) {
        let startX = 0;
        let startY = 0;
        const side = Math.floor(Math.random() * 4); // 0: Top, 1: Bottom, 2: Left, 3: Right
        
        if (side === 0) { // Top
            startX = Math.random() * 1920;
            startY = -Math.random() * 200 - 50;
        } else if (side === 1) { // Bottom
            startX = Math.random() * 1920;
            startY = 1080 + Math.random() * 200 + 50;
        } else if (side === 2) { // Left
            startX = -Math.random() * 200 - 50;
            startY = Math.random() * 1080;
        } else { // Right
            startX = 1920 + Math.random() * 200 + 50;
            startY = Math.random() * 1080;
        }

        return {
            x: startX,
            y: startY,
            startX: startX,
            startY: startY,
            targetX: tx,
            targetY: ty,
            // Randomized stagger delay factor for organic swirling arrival
            delay: Math.random() * 0.45, 
            size: Math.random() * 0.6 + 0.8, // fine crystal core size (0.8px to 1.4px) for unmatched clarity and sharpness
            auraColor: auraColor,
            coreColor: coreColor
        };
    }

    function resizeCanvas() {
        if (!canvas) return;
        
        const dpr = window.devicePixelRatio || 1;
        const root = document.getElementById("cyber-svg-root");
        
        let displayWidth, displayHeight;
        if (root) {
            displayWidth = root.clientWidth || window.innerWidth;
            displayHeight = root.clientHeight || 850;
        } else {
            displayWidth = window.innerWidth;
            displayHeight = 850;
        }
        
        // Backing store dimensions scaled for High-DPI displays
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
        
        drawParticles(); // Instantly redraw to keep the padlock pixel-perfect on window resize
    }

    // High performance drawing engine (using batch painting sorted by color for max speed)
    function drawParticles() {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate exact scale and offsets matching SVG's preserveAspectRatio="xMidYMid slice"
        // This ensures the dots align pixel-perfectly with the SVG padlock outline on all viewports!
        const viewBoxW = 1920;
        const viewBoxH = 1080;
        const r_viewBox = viewBoxW / viewBoxH;
        const r_container = canvas.width / canvas.height;

        let scale, offsetX, offsetY;
        if (r_container > r_viewBox) {
            scale = canvas.width / viewBoxW;
            offsetX = 0;
            offsetY = (canvas.height - viewBoxH * scale) / 2;
        } else {
            scale = canvas.height / viewBoxH;
            offsetX = (canvas.width - viewBoxW * scale) / 2;
            offsetY = 0;
        }

        const pGlobal = animState.progress;
        ctx.globalAlpha = animState.opacity;

        // Retrieve current dynamic floating coordinates from SVG padlock to sync perfectly!
        const svgLock = document.getElementById("lock-and-shield-assembled");
        const floatOffsetY = svgLock ? (gsap.getProperty(svgLock, "y") - 600) : 0;
        
        // Dynamic High-DPI mouse interaction coordinates
        const dpr = window.devicePixelRatio || 1;
        const physicalMouseX = mouseX * dpr;
        const physicalMouseY = mouseY * dpr;

        // Perform GPU-accelerated batch painting to render thousands of dots at 60 FPS
        const colors = ["rgb(0, 243, 255)", "rgb(81, 53, 255)", "rgb(16, 185, 129)"];
        for (let c = 0; c < colors.length; c++) {
            const color = colors[c];
            ctx.beginPath();
            ctx.fillStyle = color;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                if (p.coreColor !== color) continue;

                let currentX, currentY;
                const adjustedTargetY = p.targetY + floatOffsetY;

                // Single-phase premium quantum alignment: 
                // When page loads, dots start scattered off-screen / at sides (startX, startY)
                // and smoothly slide in and dock pixel-perfectly into the target lock shape (targetX, adjustedTargetY).
                // There is absolutely no padlock shape visible on the right side when the page loads!
                let localP = (pGlobal - p.delay) / (1 - p.delay);
                if (localP < 0) localP = 0;
                if (localP > 1) localP = 1;

                // Cubic ease-out curve for a majestic, smooth, and high-end deceleration as particles align
                const easeP = 1 - Math.pow(1 - localP, 3);

                currentX = (p.startX + (p.targetX - p.startX) * easeP) * scale + offsetX;
                currentY = (p.startY + (adjustedTargetY - p.startY) * easeP) * scale + offsetY;

                // 1. Organic Shimmer: Holographic quantum vibration (active shimmer once assembled)
                if (pGlobal > 0.9) {
                    const shimmerSpeed = 0.003;
                    currentX += Math.sin(Date.now() * shimmerSpeed + p.delay * 200) * 1.6 * scale;
                    currentY += Math.cos(Date.now() * (shimmerSpeed * 0.9) + p.delay * 200) * 1.6 * scale;
                }

                // 2. Interactive Magnet Repel: Repulsion ripple on mouse hover (active after intro)
                if (pGlobal > 0.9 && mouseX > -1000) {
                    const dx = currentX - physicalMouseX;
                    const dy = currentY - physicalMouseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 130 * scale; // Interactive radius scaled dynamically

                    if (dist > 0 && dist < maxDist) {
                        const force = (1 - dist / maxDist) * 22 * scale; // Max push coordinate force
                        currentX += (dx / dist) * force;
                        currentY += (dy / dist) * force;
                    }
                }

                let scaleSize = p.size * scale;
                if (scaleSize < 1.2) scaleSize = 1.2; // Ensure particles are never drawn as blurry subpixels!

                ctx.moveTo(currentX + scaleSize, currentY);
                ctx.arc(currentX, currentY, scaleSize, 0, Math.PI * 2);
            }

            ctx.fill();
        }
    }

    // 6. Cinematic HTML-Safe Scramble Decrypt Function with Terminal Flashing Cursors
    function scrambleDecrypt(element, finalText, duration = 1.2, delay = 0, yOffset = 25, showEndCursor = false) {
        if (!element) return;
        const chars = "010101#@$&%+?=";
        
        const tokens = [];
        let idx = 0;
        while (idx < finalText.length) {
            if (finalText[idx] === '<') {
                let tag = "";
                while (idx < finalText.length && finalText[idx] !== '>') {
                    tag += finalText[idx];
                    idx++;
                }
                if (idx < finalText.length) {
                    tag += '>';
                    idx++;
                }
                tokens.push({ type: 'tag', content: tag });
            } else {
                let text = "";
                while (idx < finalText.length && idx < finalText.length && finalText[idx] !== '<') {
                    text += finalText[idx];
                    idx++;
                }
                tokens.push({ type: 'text', content: text });
            }
        }

        let totalTextLength = 0;
        tokens.forEach(t => {
            if (t.type === 'text') totalTextLength += t.content.length;
        });

        // Set initial state
        gsap.set(element, { filter: "blur(6px)", opacity: 0, y: yOffset });

        const stateObj = { progress: 0 };
        const textTimeline = gsap.timeline({ delay: delay });

        // Smooth slide up & blur fade
        textTimeline.to(element, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: duration,
            ease: "power3.out"
        }, 0);

        // Scramble decryption update (butter-smooth interval lock-in)
        textTimeline.to(stateObj, {
            progress: 1,
            duration: duration * 0.95,
            ease: "power1.inOut",
            onUpdate: () => {
                const revealLimit = Math.floor(stateObj.progress * totalTextLength);
                let currentTextIndex = 0;
                let output = "";
                let cursorInserted = false;
                
                tokens.forEach(token => {
                    if (token.type === 'tag') {
                        output += token.content;
                    } else {
                        for (let charIndex = 0; charIndex < token.content.length; charIndex++) {
                            const globalIndex = currentTextIndex + charIndex;
                            const char = token.content[charIndex];
                            if (globalIndex < revealLimit) {
                                output += char;
                            } else if (char === ' ' || char === '\n') {
                                output += char;
                            } else if (!cursorInserted) {
                                output += '<span class="cyber-cursor">_</span>';
                                cursorInserted = true;
                                output += chars[Math.floor(Math.random() * chars.length)];
                            } else {
                                output += chars[Math.floor(Math.random() * chars.length)];
                            }
                        }
                        currentTextIndex += token.content.length;
                    }
                });
                
                // Keep cursor at the end if requested
                if (revealLimit >= totalTextLength && showEndCursor) {
                    output += '<span class="cyber-cursor permanent">_</span>';
                }
                
                element.innerHTML = output;
            },
            onComplete: () => {
                if (showEndCursor) {
                    element.innerHTML = finalText + '<span class="cyber-cursor permanent">_</span>';
                } else {
                    element.innerHTML = finalText;
                }
            }
        }, 0);
    }

    // 7. GSAP Animation Engine
    function initGSAPAnimation() {
        if (typeof gsap === 'undefined') {
            console.error("GSAP is not loaded. Please ensure gsap.min.js is imported.");
            return;
        }

        // Concentric diagnostic ring spinning loops centered on 1350, 600
        gsap.to(".outer-ring", { rotation: 360, transformOrigin: "1350px 600px", repeat: -1, duration: 28, ease: "none" });
        gsap.to(".mid-ring", { rotation: -360, transformOrigin: "1350px 600px", repeat: -1, duration: 20, ease: "none" });
        gsap.to(".inner-ring", { rotation: 360, transformOrigin: "1350px 600px", repeat: -1, duration: 14, ease: "none" });

        const mainTimeline = gsap.timeline();

        // Initial setup states
        mainTimeline.set(".net-line", { strokeDasharray: 1200, strokeDashoffset: 1200 });
        mainTimeline.set(".threat-group", { scale: 0, opacity: 0 });
        mainTimeline.set("#lock-and-shield-assembled", { x: 1350, y: 600, scale: 1.0, opacity: 0 });
        mainTimeline.set(".sonar-sweep-ring", { width: 10, height: 10, opacity: 0 });
        mainTimeline.set(".hero-desc", { opacity: 0, y: 25, filter: "blur(6px)" });
        mainTimeline.set(".hero-actions", { opacity: 0, y: 25 });

        // Phase 1: TEXT REVEALS FIRST IMMEDIATELY ON LOAD!
        // Smooth slide up & decrypt scramble subtitle (blinking cursor at end)
        mainTimeline.add(() => {
            scrambleDecrypt(
                document.getElementById("dec-subtitle"),
                "Protecting Your Digital Future",
                1.1,
                0,
                20,
                true // Blinking cursor
            );
        });

        // Smooth slide up & decrypt scramble title (glow active on highlight span)
        mainTimeline.add(() => {
            scrambleDecrypt(
                document.getElementById("dec-title"),
                "Advanced Cyber <br><span>Security Solutions</span>",
                1.4,
                0,
                20,
                false
            );
        }, "+=0.3");

        // Decrypt description in a beautiful super-computer sweep instead of standard fade
        mainTimeline.add(() => {
            scrambleDecrypt(
                document.getElementById("dec-desc"),
                "Clarent360 delivers enterprise-grade Zero Trust architecture, threat engineering, and managed compliance to secure your business against modern digital risks.",
                1.7,
                0,
                15,
                false
            );
        }, "+=0.4");

        // CTA buttons scale/fade in quickly
        mainTimeline.to(".hero-actions", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.4)"
        }, "+=0.3");

        // Phase 2: FULLSCREEN CYBER BACKGROUND NETWORKS DRAW!
        // Draw fullscreen network paths
        mainTimeline.to(".net-line", {
            strokeDashoffset: 0,
            duration: 1.8,
            ease: "power2.out",
            stagger: 0.12
        }, "-=1.8"); // Runs concurrently with text printout

        // Threat nodes spawn on paths
        mainTimeline.to(".threat-group", {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "elastic.out(1.1, 0.6)",
            stagger: 0.12
        }, "-=0.8");

        // Threat ripples
        mainTimeline.to(".threat-pulse", {
            r: 22,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            repeat: 1,
            ease: "power1.out"
        }, "-=0.2");

        // Phase 3: QUANTUM LOCK ASSEMBLY
        // Animate global canvas progress and call the paint loop
        mainTimeline.to(animState, {
            progress: 1,
            duration: 5.6,
            ease: "none"
        }, "-=1.0");

        // Phase 4: PADLOCK FORMING & SONAR EXPLOSION (Handshake & Securing threats)
        // Solid Lock fades in cleanly with decelerated ease (No bounce overshoot!)
        mainTimeline.to("#lock-and-shield-assembled", {
            scale: 1.0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.3");

        // Fade particle swarm down to a shimmering glow level instead of complete blackout!
        mainTimeline.to(animState, {
            opacity: 0.65, // Retain particles as a gorgeous glowing swarm inside the SVG lock shell
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.8");

        // Fire expanding sonar scan wave outwards from center
        mainTimeline.set(".sonar-sweep-ring", { opacity: 0.95, width: 10, height: 10 });
        mainTimeline.to(".sonar-sweep-ring", {
            width: 1950,
            height: 1950,
            opacity: 0,
            duration: 1.8,
            ease: "power2.out"
        }, "-=0.1");

        // Threats turn green and dissolve on sonar wave collision
        // Threats 1, 2, 3 (closer)
        mainTimeline.to(".threat-group[data-id='1'] .threat-node, .threat-group[data-id='2'] .threat-node, .threat-group[data-id='3'] .threat-node", {
            fill: "#10b981",
            filter: "drop-shadow(0 0 12px #10b981)",
            scale: 1.3,
            duration: 0.25
        }, "-=1.2");
        mainTimeline.to(".threat-group[data-id='1'], .threat-group[data-id='2'], .threat-group[data-id='3']", {
            scale: 0,
            opacity: 0,
            duration: 0.45,
            ease: "power2.out"
        }, "-=0.95");

        // Threats 4, 5, 6 (further)
        mainTimeline.to(".threat-group[data-id='4'] .threat-node, .threat-group[data-id='5'] .threat-node, .threat-group[data-id='6'] .threat-node", {
            fill: "#10b981",
            filter: "drop-shadow(0 0 12px #10b981)",
            scale: 1.3,
            duration: 0.25
        }, "-=0.7");
        mainTimeline.to(".threat-group[data-id='4'], .threat-group[data-id='5'], .threat-group[data-id='6']", {
            scale: 0,
            opacity: 0,
            duration: 0.45,
            ease: "power2.out"
        }, "-=0.45");



        // Continuous gentle floating on the locked padlock in secured state
        mainTimeline.to("#lock-and-shield-assembled", {
            y: 590, // Gently floats up by 10px from y = 600
            duration: 2.2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        });

        // Pulsate static elements for deep background interest
        gsap.to(".net-line", {
            stroke: "rgba(0, 243, 255, 0.25)",
            duration: 2.5,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            stagger: 0.2
        });
    }

    // Run on DOM load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountBanner);
    } else {
        mountBanner();
    }
})();
