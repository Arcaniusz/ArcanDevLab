let currentLanguage = 'en';
let currentGalleryIndex = 0;
let typingIndex = 0;
let currentTextIndex = 0;
let isErasing = false;

const typingTexts = [
    "Frontend Designer",
    "Creative Coder", 
    "Web Designer",
    "UI/UX Designer"
];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeComponents();
    initializeTypingAnimation();
    initializeFormHandlers();
    initializeScrollHandlers();
    
    if (!localStorage.getItem('selectedLanguage')) {
        showLanguageModal();
    }
});

// Language Management
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
        document.getElementById('languageSelect').value = savedLanguage;
    }
    updateTranslations();
}

function selectLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    document.getElementById('languageSelect').value = lang;
    updateTranslations();
    hideLanguageModal();
}

function updateTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getTranslation(key);
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    updateSelectOptions();
    
    updateFAQ();
    
    updateGallery();
}

function getTranslation(key) {
    return translations[currentLanguage] && translations[currentLanguage][key] 
        ? translations[currentLanguage][key] 
        : translations.en[key];
}

function updateSelectOptions() {
    const packageSelect = document.getElementById('packageType');
    if (packageSelect) {
        const options = packageSelect.querySelectorAll('option');
        options[0].textContent = getTranslation('selectPackage');
        options[1].textContent = `${getTranslation('basicPackage')} - $299`;
        options[2].textContent = `${getTranslation('proPackage')} - $599`;
        options[3].textContent = `${getTranslation('customPackage')} - ${getTranslation('customPrice')}`;
    }
}

// Modal Management
function showLanguageModal() {
    const modal = document.getElementById('languageModal');
    modal.classList.add('show');
}

function hideLanguageModal() {
    const modal = document.getElementById('languageModal');
    modal.classList.remove('show');
}

// Language select handler
document.getElementById('languageSelect').addEventListener('change', function(e) {
    selectLanguage(e.target.value);
});

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function initializeScrollHandlers() {
    window.addEventListener('scroll', handleScroll);
}

function handleScroll() {
    const scrollY = window.scrollY;
    
    const bgElements = document.querySelectorAll('.bg-element');
    bgElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrollY * speed}px)`;
    });
}

function initializeTypingAnimation() {
    const typingElement = document.getElementById('typingText');
    if (!typingElement) return;
    
    function typeText() {
        const currentText = typingTexts[currentTextIndex];
        
        if (!isErasing && typingIndex < currentText.length) {
            typingElement.textContent = currentText.slice(0, typingIndex + 1);
            typingIndex++;
            setTimeout(typeText, 100);
        } else if (!isErasing && typingIndex === currentText.length) {
            setTimeout(() => {
                isErasing = true;
                typeText();
            }, 2000);
        } else if (isErasing && typingIndex > 0) {
            typingElement.textContent = currentText.slice(0, typingIndex - 1);
            typingIndex--;
            setTimeout(typeText, 50);
        } else if (isErasing && typingIndex === 0) {
            isErasing = false;
            currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
            setTimeout(typeText, 500);
        }
    }
    
    typeText();
}

// Gallery Management
function updateGallery() {
    const galleryContent = document.getElementById('galleryContent');
    const galleryDots = document.getElementById('galleryDots');
    
    if (!galleryContent || !galleryDots) return;
    
    const currentStyle = uiStyles[currentGalleryIndex];
    
    const styleColors = {
        'corporate': { bg: '#2563eb', text: '#2563eb' },
        'saas': { bg: '#6366f1', text: '#6366f1' },
        'ecommerce': { bg: '#ea580c', text: '#ea580c' },
        'creative': { bg: '#8b5cf6', text: '#8b5cf6' },
        'dark': { bg: '#3b82f6', text: '#3b82f6' },
        'medical': { bg: '#1d4ed8', text: '#1d4ed8' },
        'restaurant': { bg: '#d97706', text: '#d97706' },
        'agency': { bg: '#64748b', text: '#64748b' }
    };
    
    const currentColor = styleColors[currentStyle.style] || styleColors.corporate;
    
    galleryContent.innerHTML = `
        <div class="gallery-item">
            <div>
                <img src="${currentStyle.image}" alt="${currentStyle.title}" class="gallery-image">
                <div class="gallery-features">
                    ${currentStyle.features.map(feature => `
                        <div class="feature-badge" style="background: ${currentColor.bg}20; color: ${currentColor.text}; border: 1px solid ${currentColor.bg}40;">${feature}</div>
                    `).join('')}
                </div>
            </div>
            <div class="gallery-info">
                <h3 class="gallery-title">${currentStyle.title}</h3>
                <p class="gallery-description">${currentStyle.description}</p>
                <div class="style-indicator" style="background: ${currentColor.bg}; color: white;">${currentStyle.style.toUpperCase()} STYLE</div>
                <div class="gallery-buttons">
                    <button class="btn btn-primary" style="background: ${currentColor.bg};" onclick="openDemo('${currentStyle.style}')">View Demo</button>
                    <button class="btn btn-secondary" style="border-color: ${currentColor.bg}; color: ${currentColor.text};" onclick="showStyleDetails('${currentStyle.style}')">Learn More</button>
                </div>
            </div>
        </div>
    `;
    
    galleryDots.innerHTML = uiStyles.map((_, index) => `
        <button class="gallery-dot ${index === currentGalleryIndex ? 'active' : ''}" 
                onclick="setGalleryIndex(${index})"></button>
    `).join('');
}

function nextStyle() {
    currentGalleryIndex = (currentGalleryIndex + 1) % uiStyles.length;
    updateGallery();
}

function previousStyle() {
    currentGalleryIndex = currentGalleryIndex === 0 ? uiStyles.length - 1 : currentGalleryIndex - 1;
    updateGallery();
}

function setGalleryIndex(index) {
    currentGalleryIndex = index;
    updateGallery();
}

// FAQ Management
function updateFAQ() {
    const faqContainer = document.getElementById('faqContainer');
    if (!faqContainer) return;
    
    faqContainer.innerHTML = faqData.map((item, index) => `
        <div class="faq-item glass" id="faq-${index}">
            <button class="faq-question" onclick="toggleFAQ(${index})">
                <span>${getTranslation(item.questionKey)}</span>
                <i class="fas fa-plus"></i>
            </button>
            <div class="faq-answer">
                <div class="faq-answer-content">
                    ${getTranslation(item.answerKey)}
                </div>
            </div>
        </div>
    `).join('');
}

function toggleFAQ(index) {
    const faqItem = document.getElementById(`faq-${index}`);
    const icon = faqItem.querySelector('.faq-question i');
    
    faqItem.classList.toggle('open');
    
    if (faqItem.classList.contains('open')) {
        icon.className = 'fas fa-minus';
    } else {
        icon.className = 'fas fa-plus';
    }
}

// Form Handlers
function initializeFormHandlers() {
    const contactForm = document.getElementById('contactForm');
    const orderForm = document.getElementById('orderForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderForm);
    }
}

async function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    try {
        const response = await fetch('https://getform.io/f/bejlrrwa', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to send message');
        }
        
        showToast('success', 'Message sent successfully!');
        e.target.reset();
        
    } catch (error) {
        showToast('error', 'Failed to send message. Please try again.');
    }
}

async function handleOrderForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    formData.append('form_type', 'order');
    
    try {
        const response = await fetch('https://getform.io/f/bejlrrwa', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to place order');
        }
        
        showToast('success', 'Order placed successfully!');
        e.target.reset();
        
    } catch (error) {
        showToast('error', 'Failed to place order. Please try again.');
    }
}

// Toast Notifications
function showToast(type, message) {
    const toast = document.getElementById('toast');
    const icon = toast.querySelector('.toast-icon');
    const messageElement = toast.querySelector('.toast-message');
    
    messageElement.textContent = message;
    
    toast.className = `toast ${type} show`;
    
    if (type === 'success') {
        icon.className = 'toast-icon fas fa-check-circle';
    } else if (type === 'error') {
        icon.className = 'toast-icon fas fa-exclamation-circle';
    }
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

function initializeComponents() {
    initializeLogosSlider();
    updateGallery();
    updateFAQ();
}

// Logos Slider
function initializeLogosSlider() {
    const slider = document.getElementById('logosSlider');
    if (!slider) return;
    
    const logoHTML = companyLogos.map(company => `
        <img src="${company.logo}" 
             alt="${company.name}" 
             class="logo-item" 
             onclick="window.open('${company.url}', '_blank')"
             loading="lazy">
    `).join('');
    
    slider.innerHTML = logoHTML + logoHTML;
    
    slider.classList.add('animate-slide');
    
    slider.addEventListener('mouseenter', () => {
        slider.style.animationPlayState = 'paused';
    });
    
    slider.addEventListener('mouseleave', () => {
        slider.style.animationPlayState = 'running';
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Demo function
function openDemo(style) {
    const demoUrls = {
        'corporate': './demos/corporate.html',
        'saas': './demos/saas.html',
        'ecommerce': './demos/ecommerce.html',
        'creative': './demos/creative.html',
        'dark': './demos/dark.html',
        'medical': './demos/medical.html',
        'restaurant': './demos/restaurant.html',
        'agency': './demos/agency.html'
    };
    
    const url = demoUrls[style] || '#';
    if (url !== '#') {
        window.open(url, '_blank');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .pricing-card, .contact-card, .faq-item');
    animateElements.forEach(el => observer.observe(el));
});
