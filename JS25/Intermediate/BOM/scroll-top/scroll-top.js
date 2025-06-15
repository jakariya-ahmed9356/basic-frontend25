/**
 * Botton to Top Smooth scroll behavior
 */
// Get reference to element for botton to top scroll behavior
const scrollBtn = document.getElementById('scroll-btn');

window.addEventListener('scroll', () => {
    // Show scroll button after scrolled down
    if (window.scrollY > 30) {
        scrollBtn.classList.add('show')
        scrollBtn.hidden = false;
    } else {
        scrollBtn.classList.remove('show');
        scrollBtn.hidden = false;
    }

    // Scroll to top smothly
    scrollBtn.addEventListener('click', () => {
        const smoothScroll = 'scrollBehavior' in document.documentElement.style;
        if (smoothScroll) {
            window.scrollTo({ top: 0, behavior: 'smooth'});
        } else {
            // Fallback for old brower 
            const scrollInterval = setInterval();

            if(window.scrollY === 0) clearInterval(() => {
                window.scrollY(0, -50)
            }) 
        }
    }); 


});