document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-8');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Skill Bar Animation
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                progressBar.style.width = width;
                observer.unobserve(progressBar);
            }
        });
    }, observerOptions);

    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => skillObserver.observe(bar));

    // Typing Effect for Hero Tagline
    const taglineElement = document.getElementById('hero-tagline');
    if (taglineElement) {
        const text = taglineElement.getAttribute('data-text');
        taglineElement.textContent = '';
        let i = 0;

        // Clear existing content to be safe
        taglineElement.innerHTML = '<span class="typing-cursor">|</span>';

        function typeWriter() {
            if (i < text.length) {
                taglineElement.innerHTML = text.substring(0, i + 1) + '<span class="typing-cursor">|</span>';
                i++;
                setTimeout(typeWriter, 50); // Adjust typing speed here
            } else {
                // Keep cursor blinking at the end
                taglineElement.innerHTML = text + '<span class="typing-cursor animate-pulse">|</span>';
            }
        }

        // Start typing after a small delay
        setTimeout(typeWriter, 500);
    }
});
