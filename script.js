const steps = {
    1: {
        title: "Predictive Empathy",
        icon: "fa-heart",
        quote: "Identifying friction before it becomes resistance.",
        bullets: ["Resistance and Sentiment Analysis", "User-Centric Change Management", "Persona Pain Point Mapping"]
    },
    2: {
        title: "AI Augmented Enablement",
        icon: "fa-wand-magic-sparkles",
        quote: "Prioritizing relevant, hands-on practice for adult learners.",
        bullets: ["AI-Augmented Speed and Scale", "Performance Gap Analysis", "Function-Specific Workshop Design"]
    },
    3: {
        title: "Clear Results",
        icon: "fa-chart-line",
        quote: "Aligning performance metrics to business outcomes.",
        bullets: ["ROI Impact Tracking", "Performance Metrics", "Iterative Strategy Tuning"]
    }
};

function showStep(num) {
    const step = steps[num];
    const content = document.getElementById('step-inner');
    for (let i = 1; i <= 3; i++) {
        const container = document.getElementById('step-container-' + i);
        const mDesc = document.getElementById('mobile-desc-' + i);
        if (i === num) {
            if (container) {
                container.classList.add('border-[#be185d]', 'bg-white/10');
                container.classList.remove('border-white/10', 'bg-white/5');
            }
            if (mDesc) {
                mDesc.classList.remove('hidden');
                mDesc.innerHTML = `<p class="text-gray-300 text-sm mb-4 leading-relaxed">"${step.quote}"</p><ul class="space-y-2 text-pink-300 text-xs font-bold">${step.bullets.map(b => `<li><i class="fas fa-check-circle mr-2"></i> ${b}</li>`).join('')}</ul>`;
            }
        } else {
            if (container) {
                container.classList.remove('border-[#be185d]', 'bg-white/10');
                container.classList.add('border-white/10', 'bg-white/5');
            }
            if (mDesc) {
                mDesc.classList.add('hidden');
            }
        }
    }
    if (content) {
        content.style.opacity = '0';
        setTimeout(() => {
            content.innerHTML = `
                <div class="bg-[#be185d] w-16 h-16 rounded-full flex items-center justify-center mb-8 shadow-2xl">
                    <i class="fas ${step.icon} text-2xl text-white"></i>
                </div>
                <h4 class="text-4xl font-black mb-6 uppercase tracking-tight">${step.title}</h4>
                <p class="text-xl text-gray-300 leading-relaxed mb-8 font-light italic">"${step.quote}"</p>
                <ul class="space-y-4 text-pink-300 font-bold text-lg">
                    ${step.bullets.map(b => `<li><i class="fas fa-check-circle mr-3"></i> ${b}</li>`).join('')}
                </ul>
            `;
            content.style.opacity = '1';
        }, 200);
    }
}

// Initialize components on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initGlobalElements();
    initZoomOverlay();

    // If steps container is present, show phase 1
    if (document.getElementById('step-inner')) {
        showStep(1);
    }

    // Observe reveal elements (including those dynamically injected)
    document.querySelectorAll('.reveal').forEach(r => observer.observe(r));
});

function initGlobalElements() {
    let path = window.location.pathname;
    let page = path.split('/').pop() || 'index.html';
    if (page === '/') page = 'index.html';

    const isHome = page === 'index.html';

    // 1. Render Header
    const headerEl = document.getElementById('global-header');
    if (headerEl) {
        if (isHome) {
            headerEl.className = "fixed top-0 left-0 w-full z-[60] bg-white shadow-sm m-0 p-0";
        } else {
            headerEl.className = "fixed top-0 left-0 w-full z-[60] bg-[#fdf2f8]/90 backdrop-blur-md shadow-sm m-0 p-0";
        }

        const homeClass = isHome ? "text-pink-400 font-bold" : "text-[#be185d] hover:text-pink-400 font-bold";
        const portfolioClass = isHome ? "text-[#be185d] hover:text-pink-400 font-bold" : "text-pink-400 font-bold";

        const overviewPrefix = isHome ? "" : "./";

        const dropdownStacksClass = page === "the-stacks-demo.html" ? "bg-[#fdf2f8] text-[#be185d] font-bold" : "text-gray-700 hover:bg-[#fdf2f8] hover:text-[#be185d]";
        const dropdownSimClass = page === "micro-simulation-demo.html" ? "bg-[#fdf2f8] text-[#be185d] font-bold" : "text-gray-700 hover:bg-[#fdf2f8] hover:text-[#be185d]";
        const dropdownNewsClass = page === "news-case-study.html" ? "bg-[#fdf2f8] text-[#be185d] font-bold" : "text-gray-700 hover:bg-[#fdf2f8] hover:text-[#be185d]";

        const mobileStacksClass = page === "the-stacks-demo.html" ? "text-pink-400 font-bold" : "text-[#be185d] hover:text-pink-400 font-bold";
        const mobileSimClass = page === "micro-simulation-demo.html" ? "text-pink-400 font-bold" : "text-[#be185d] hover:text-pink-400 font-bold";
        const mobileNewsClass = page === "news-case-study.html" ? "text-pink-400 font-bold" : "text-[#be185d] hover:text-pink-400 font-bold";

        headerEl.innerHTML = `
        <div class="trans-motif w-full m-0 p-0"></div>
        <nav class="grid grid-cols-2 items-center w-full px-6 md:px-12 py-3 relative">
            <div class="flex items-center font-extrabold text-xl tracking-tighter text-[#be185d] h-full">
                <a href="./" class="text-[#be185d] hover:text-pink-400" style="text-decoration: none;">LILY MCKAY</a>
            </div>
            <div class="flex justify-end items-center h-full w-full">
                <div class="hidden md:flex gap-8 items-center font-bold text-[13px] tracking-widest text-[#1f2937]">
                    <a href="./" class="${homeClass} transition uppercase" style="text-decoration: none;">Home</a>
                    
                    <!-- Overview Dropdown -->
                    <div class="relative group py-2">
                        <button class="flex items-center gap-1.5 text-[#be185d] hover:text-pink-400 transition uppercase font-bold text-[13px] tracking-widest" style="background: none; border: none; padding: 0;">
                            About Me <i class="fas fa-chevron-down text-[9px] transition-transform duration-300 group-hover:rotate-180"></i>
                        </button>
                        <div class="absolute top-full left-0 hidden group-hover:block pt-2 z-50">
                            <div class="w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2">
                                <a href="${overviewPrefix}#identity" class="block px-4 py-2 text-[11px] text-gray-700 hover:bg-[#fdf2f8] hover:text-[#be185d] transition font-bold uppercase tracking-wider" style="text-decoration: none;">Core Pillars</a>
                                <a href="${overviewPrefix}#enablement" class="block px-4 py-2 text-[11px] text-gray-700 hover:bg-[#fdf2f8] hover:text-[#be185d] transition font-bold uppercase tracking-wider" style="text-decoration: none;">My Approach</a>
                                <a href="${overviewPrefix}#experience" class="block px-4 py-2 text-[11px] text-gray-700 hover:bg-[#fdf2f8] hover:text-[#be185d] transition font-bold uppercase tracking-wider" style="text-decoration: none;">My Journey</a>
                            </div>
                        </div>
                    </div>

                    <!-- Portfolio Dropdown -->
                    <div class="relative group py-2">
                        <button class="flex items-center gap-1.5 ${portfolioClass} transition uppercase font-bold text-[13px] tracking-widest" style="background: none; border: none; padding: 0;">
                            Case Studies <i class="fas fa-chevron-down text-[9px] transition-transform duration-300 group-hover:rotate-180"></i>
                        </button>
                        <div class="absolute top-full left-0 hidden group-hover:block pt-2 z-50">
                            <div class="w-64 bg-white border border-gray-100 rounded-xl shadow-xl py-2">
                                <a href="news-case-study.html" class="block px-4 py-2 text-[11px] ${dropdownNewsClass} transition uppercase tracking-wider" style="text-decoration: none;">AI Workflow Automation</a>
                                <a href="micro-simulation-demo.html" class="block px-4 py-2 text-[11px] ${dropdownSimClass} transition uppercase tracking-wider" style="text-decoration: none;">Micro-Learning Simulation</a>
                                <a href="the-stacks-demo.html" class="block px-4 py-2 text-[11px] ${dropdownStacksClass} transition uppercase tracking-wider" style="text-decoration: none;">Book-Tracking App</a>
                            </div>
                        </div>
                    </div>

                    <a href="#contact" class="bg-[#be185d] text-white px-6 py-2 rounded-lg border border-transparent hover:bg-[#fdf2f8] hover:text-[#be185d] hover:border-[#be185d] transition uppercase" style="text-decoration: none;">Contact</a>
                </div>
                <button onclick="toggleMenu()" class="md:hidden flex items-center justify-center text-[#be185d] focus:outline-none">
                    <i id="menu-icon" class="fas fa-bars text-2xl leading-none m-0 p-0"></i>
                </button>
            </div>
            
            <!-- Hamburger Menu -->
            <div id="mobile-menu" class="hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex-col items-start px-6 py-8 space-y-6 md:hidden z-[70]">
                <a href="./" onclick="toggleMenu()" class="block w-full ${isHome ? 'text-pink-400 font-bold' : 'text-[#be185d] hover:text-pink-400 font-bold'} text-lg tracking-widest uppercase" style="text-decoration: none;">Home</a>
                
                <!-- Overview Section on Mobile -->
                <div class="w-full space-y-2">
                    <span class="block w-full text-[#1f2937] font-bold text-xs uppercase tracking-wider opacity-60">About Me</span>
                    <div class="pl-4 space-y-2 border-l-2 border-pink-100">
                        <a href="${overviewPrefix}#identity" onclick="toggleMenu()" class="block w-full text-[#be185d] font-bold text-base tracking-widest uppercase hover:text-pink-400" style="text-decoration: none;">Core Pillars</a>
                        <a href="${overviewPrefix}#enablement" onclick="toggleMenu()" class="block w-full text-[#be185d] font-bold text-base tracking-widest uppercase hover:text-pink-400" style="text-decoration: none;">My Approach</a>
                        <a href="${overviewPrefix}#experience" onclick="toggleMenu()" class="block w-full text-[#be185d] font-bold text-base tracking-widest uppercase hover:text-pink-400" style="text-decoration: none;">My Journey</a>
                    </div>
                </div>

                <!-- Portfolio Section on Mobile -->
                <div class="w-full space-y-2">
                    <span class="block w-full ${isHome ? 'text-[#1f2937] opacity-60' : 'text-pink-400'} font-bold text-xs uppercase tracking-wider">Case Studies</span>
                    <div class="pl-4 space-y-2 border-l-2 ${isHome ? 'border-pink-100' : 'border-pink-300'}">
                        <a href="news-case-study.html" onclick="toggleMenu()" class="block w-full ${mobileNewsClass} text-base tracking-widest uppercase" style="text-decoration: none;">AI Workflow Automation</a>
                        <a href="micro-simulation-demo.html" onclick="toggleMenu()" class="block w-full ${mobileSimClass} text-base tracking-widest uppercase" style="text-decoration: none;">Micro-Learning Simulation</a>
                        <a href="the-stacks-demo.html" onclick="toggleMenu()" class="block w-full ${mobileStacksClass} text-base tracking-widest uppercase" style="text-decoration: none;">Book-Tracking App</a>
                    </div>
                </div>

                <a href="#contact" onclick="toggleMenu()" class="inline-block bg-[#be185d] text-white px-8 py-3 rounded-lg font-bold text-lg tracking-widest uppercase border border-transparent hover:bg-[#fdf2f8] hover:text-[#be185d] hover:border-[#be185d] transition mt-2" style="text-decoration: none;">Contact</a>
            </div>
        </nav>
        `;
    }

    // 2. Render Contact Section
    const contactEl = document.getElementById('global-contact');
    if (contactEl) {
        contactEl.innerHTML = `
        <section id="contact" class="bg-[#fdf2f8] py-32 px-6">
            <div class="max-w-4xl mx-auto text-center reveal">
                <h2 class="text-5xl font-black mb-8 text-[#1f2937]">Let's connect.</h2>
                <p class="text-xl text-gray-600 mb-14 max-w-2xl mx-auto leading-relaxed">Ready for the Agentic Era? I'm helping teams of all sizes transform the way employees work and engage with AI.<br><span class="block mt-4 font-bold">Let's build something together!</span></p>
                <div class="flex flex-wrap justify-center gap-12">
                    <a href="mailto:lily.morin423@gmail.com" target="_blank" class="flex items-center text-[#be185d] font-black text-xl hover:text-pink-400 transition">
                        <i class="fas fa-envelope mr-4"></i> lily.morin423@gmail.com
                    </a>
                    <a href="https://linkedin.com/in/lilymorin" target="_blank" class="flex items-center text-[#be185d] font-black text-xl hover:text-pink-400 transition">
                        <i class="fab fa-linkedin mr-4"></i> /in/lilymorin
                    </a>
                </div>
            </div>
        </section>
        <div class="trans-motif"></div>
        `;
    }

    // 3. Render Footer & Back-to-Top Button
    const footerEl = document.getElementById('global-footer');
    if (footerEl) {
        const currentYear = new Date().getFullYear();
        footerEl.className = "bg-white py-12 px-6 border-t border-gray-100";
        footerEl.innerHTML = `
            <div class="text-center text-gray-400 text-xs font-bold uppercase tracking-[0.2em] flex flex-col sm:flex-row items-center justify-center gap-3 leading-relaxed">
                <span class="flex items-center gap-2"><i class="fas fa-copyright text-pink-300"></i> ${currentYear} Lily McKay.</span>
                <span class="hidden sm:inline text-pink-300">•</span>
                <span class="flex items-center gap-2">Built with Gemini. <i class="fas fa-wand-magic-sparkles text-pink-300"></i></span>
            </div>
            
            <!-- Back to Top Button -->
            <button id="backToTop" onclick="scrollToTop()" class="fixed bottom-8 right-8 bg-[#be185d] text-white p-4 rounded-full shadow-2xl border border-transparent hover:bg-[#fdf2f8] hover:text-[#be185d] hover:border-[#be185d] transition-all duration-300 z-50 flex items-center justify-center w-12 h-12">
                <i class="fas fa-chevron-up text-lg"></i>
            </button>
        `;
    }
}

function initZoomOverlay() {
    // 1. Create overlay container dynamically if it doesn't exist
    let overlay = document.getElementById('zoom-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'zoom-overlay';
        overlay.className = 'zoom-overlay';
        overlay.innerHTML = `
            <button class="zoom-close" aria-label="Close image zoom">&times;</button>
            <img src="" alt="Zoomed view" />
        `;
        document.body.appendChild(overlay);
    }

    const closeBtn = overlay.querySelector('.zoom-close');
    const zoomImg = overlay.querySelector('img');

    const closeZoom = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeZoom);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeZoom();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeZoom();
        }
    });

    window.openZoom = (src) => {
        if (window.innerWidth >= 1024) {
            zoomImg.src = src;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (menu && icon) {
        menu.classList.toggle('hidden');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Reveal animations on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

// Safe scroll handler for Back to Top button & pointer-events disable on scroll
let isScrolling;
window.addEventListener('scroll', () => {
    // 1. Manage backToTop visibility
    const btt = document.getElementById('backToTop');
    if (btt) {
        const sections = ['identity', 'stacks-case-study', 'case-study-assets', 'simulation-case-study'];
        const shouldShow = sections.some(sectionId => {
            const section = document.getElementById(sectionId);
            return section && window.scrollY > section.offsetTop - 200;
        });
        
        if (shouldShow) {
            btt.classList.add('visible');
        } else {
            btt.classList.remove('visible');
        }
    }

    // 2. Set scrolling class on body to disable iframe events
    document.body.classList.add('is-scrolling');
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
    }, 150);
}, { passive: true });


// Interactive Timeline Card Toggler
function toggleTimelineCard(cardElement) {
    const isActive = cardElement.classList.toggle('active');
    const chevron = cardElement.querySelector('.fa-chevron-down');
    if (chevron) {
        if (isActive) {
            chevron.classList.add('rotate-180');
        } else {
            chevron.classList.remove('rotate-180');
        }
    }
}
