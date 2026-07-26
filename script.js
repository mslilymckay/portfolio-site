const steps = {
    1: {
        title: "Predictive Empathy",
        icon: "fa-heart",
        quote: "Identifying friction before it becomes resistance.",
        bullets: ["Resistance and Sentiment Analysis", "User-Centric Change Management", "Persona Pain Point Mapping"]
    },
    2: {
        title: "AI Augmented Enablement",
        icon: "fa-robot",
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

window.onload = () => { 
    showStep(1); 
};

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

document.querySelectorAll('.reveal').forEach(r => observer.observe(r));

// Safe scroll handler for Back to Top button
window.addEventListener('scroll', () => {
    const btt = document.getElementById('backToTop');
    const identitySection = document.getElementById('identity');
    if (btt && identitySection) {
        const identityTop = identitySection.offsetTop;
        if (window.scrollY > identityTop - 200) {
            btt.classList.add('visible');
        } else {
            btt.classList.remove('visible');
        }
    }
});

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
