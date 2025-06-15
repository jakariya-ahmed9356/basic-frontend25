/**
 * Other common events 
 * @param {load} - Page or image fully loaded
 * @param {resize} - Window is resized
 * @param {scroll} - Page is scrolled
 * @param {error} - Error occurs when loading
 * @param {contextmenu} - Right-click menu triggered
 */
// Load website placeholder before main content show
window.addEventListener('load', () => {
    // Get preloader placehoder image
    const preloader = document.getElementById('preloader');
    const mainContent = document.querySelector('.main-content');

    // add timing function for more smooth loading
    setTimeout(() => {
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 700);
});


// Analysis page loading performance
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${Math.round(loadTime)}ms`);
    
    // Send to analytics 
    sendLoadEventToServer(loadTime);
});


// Send event to server and return response times 
function sendLoadEventToServer(loadTime) {
    fetch('/track-load', {
        method: 'POST',
        body: JSON.stringify({ loadTime }),
        headers: {'Content-Type': 'application/json'}
    });
}

// Counter preload
window.addEventListener('load', function () {
    let count = 0;
    const CounterInitial = this.document.getElementById('counter');

    const interval = this.setInterval(() => {
        count++;
        CounterInitial.textContent = count;
        
        if (count >= 100){
            this.clearInterval(interval)
            CounterInitial.style.display = 'none'
        }
    }, 10); // runs after page is fully loaded

}); 


/**
 * Resize event 
 * 
 */

  window.addEventListener('resize', () => {
    // console.log(`New Width: ${window.innerWidth}`);
  });


const title = document.querySelector('h2');

function adjustFontSize() {
    if (window.innerWidth < 600) {
        title.style.fontSize = '16px';
    } else {
        title.style.fontSize = '48px';
    }
}

window.addEventListener('resize', adjustFontSize);
window.addEventListener('load', adjustFontSize);

  // Sidebar hide and show
  const sidebar = document.querySelector('.sidebar')

  function toggleSidebar() {
    if (window.innerWidth < 768) {
        sidebar.style.display = 'none'
    } else {
        sidebar.style.display = 'block'
    }
  }

  window.addEventListener('resize', toggleSidebar);
  window.addEventListener('load', toggleSidebar);



// scrool event
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       console.log('Element in view:', entry.target);
//     }
//   });
// });

// observer.observe(document.getElementById('targetElement'));


//contextmenu event
document.getElementById('noRightClick')
.addEventListener('contextmenu', e => {
    e.preventDefault();
    alert('Right click is disable');
});

//Show context info for right click text
document.getElementById('infoText') .addEventListener('contextmenu', (e) => {
    alert('This is a copyrigh protected text.');
})