// SPA JavaScript - This file is now minimal since most functionality is handled by React
// Only keeping essential utilities that might be needed

// Global utility functions
window.openWhatsApp = function() {
    const phoneNumber = '972535305330'; // 053-530-5330 with country code
    const message = 'שלום סופיה! אני מעוניינת לקבוע תור בקליניקה בערד';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};

// Loading animation for SPA
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Intersection Observer for animations (can be used by React components)
window.observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

window.observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, window.observerOptions);
