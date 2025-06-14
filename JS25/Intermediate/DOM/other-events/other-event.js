/**
 * Other common events 
 * @param {load} - Page or image fully loaded
 * @param {resize} - Window is resized
 * @param {scroll} - Page is scrolled
 * @param {error} - Error occurs when loading
 * @param {contextmenu} - Right-click menu triggered
 */


// window.addEventListener('load', () => {
//     // Get preloader placehode image 
//     const preloader = document.getElementById('preloader');
//     // Get main content area for display after preload
//     const mainContent = document.querySelector('main-content');

//     setTimeout(() => {
//         preloader.style.display = 'none';
//         mainContent.style.display = 'block';
//     }, 1000);

// })


window.addEventListener('load', () => {
    // Get preloader placehoder image
    const preloader = document.getElementById('preloader');
    const mainContent = document.querySelector('main-content');

    // add timing function for more smooth loading
    setTimeout(() => {
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
        preloader.style.transform = 'translate 2s';
    }, 700);
});


















