/**
 * @event {window} => Global object, represtn the brower window
 * @event {navigator} => Browser info (e.g., userGent, online status)
 * @event {screen} => Screen resolution info.
 * @event {Location} => URL manipulation
 * @event {history} => Browser history.
 * @event {alert, prompt, confirm} => Popup boxes
 * @event {setTime, setInterval,cleartimeout, clearInterval}
 * @event {offline/online} - check user offline / online
 * @event {open(),close()} - popup for browser window tap
 * 
 */

//window event 
// const popup = window.open('https://example.com', 'popup', 'width=400, height=600');

// Detect page unload
/** 
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = '';
})
*/

const scrollBtn = document.getElementById('scroll-top');
/**  scroll botton to top

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
});

*/

/**
 * More expert level version scroll bottom to top
 * 
 */

window.addEventListener('scroll', () => {
    // show scroll button only scrolled down
    if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
         scrollBtn.hidden = false;
    } else {
        scrollBtn.classList.remove('show');
        scrollBtn.hidden = true
    }
});

// Scroll to top smoothly, with fallback for older browser
scrollBtn.addEventListener('click', () => {
    if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    } else {
        // Fallback for oder browser
        let scrollInterval = setInterval(() => {
            if (window.scrollY === 0 ) clearInterval(scrollInterval);
            window.scrollY(0, -50); 
        }, 10);
    }
});


// Online Offline navigator

const internetStatus = document.getElementById('internet-status')

/** 
window.addEventListener('load', () => {
    const navigate = navigator.onLine;
    
    if (navigate) { 
        internetStatus.textContent = "You are Online";
    } else {
        internetStatus.textContent = "You are offline";
    }
});

// shortend code
window.addEventListener('load', () => {
    alert(navigator.onLine ? 'You are online.' : 'You are offline.');
});
*/



/**
 * Gelolocation check 


if ('geolocation' in navigator) {
    console.log('Geolocation is supported.');
} else {
    console.log('Geolocation is not supported.');
}
 


if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    console.log(`User location: ${latitude}, ${longitude}`);

    // Example: Fetch stores near user location via API
    fetch(`/api/stores?lat=${latitude}&lng=${longitude}`)
      .then(res => res.json())
      .then(stores => displayStoresOnMap(stores))
      .catch(err => console.error(err));
  }, error => {
    console.error("Error getting location:", error);
  });
} else {
  alert("Geolocation is not supported by your browser.");
}


if ("geolocation" in navigator) {
  const watchId = navigator.geolocation.watchPosition(position => {
    const { latitude, longitude } = position.coords;
    updateDriverLocationOnMap(latitude, longitude);
    sendLocationToServer(latitude, longitude);
  }, error => {
    console.error("Tracking error:", error);
  }, {
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 5000
  });
  
  // To stop tracking later
  // navigator.geolocation.clearWatch(watchId);
}
*/


/**
 * Device Screen info 
 */

// console.log(`Screen width: ${screen.width}, Heigh: ${screen.height}` );

const width = 600;
const height = 400;
const left = (screen.width - width) / 2;
const screenTop = (screen.height - height) / 2;

// window.open("https://example.com", "popup", `width=${width},height:${height},top=${screenTop},left=${left}`);
























