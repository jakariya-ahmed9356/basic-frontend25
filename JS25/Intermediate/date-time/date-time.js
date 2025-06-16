
/**
 * @function {new Date()} - Creates a new date object
 * @function {Date.now()} - Returns timestamp
 * @function {Date.parse()} - Parses a date string
 * @function {Date.UTC} - Returns UTC time without timzone offset
 * @function {toDateStrig()} - Converts to readable date
 * @function {toLocaleString()} - Convert to readable time
 * @function {toISOString} - ISO 8601 string (ideal for API)
 * @function {getFullYear()} - Get 4-digit year
 * @function {getMonth()} - Get month (0-11)
 * @function {getDate()} - Getday of the month
 * @function {getHours()} - Time values
 * @function {getMinutes()} - time value
 * @function {getSeconds()} - time value
 * @function {getTime()} - Get timestamp(ms) form date
 * @function {setFullYear} - Modify date parts
 * @function {setMonth} - Modify date parts
 * @function {setHours()} - Set Time Manually
 * @function {setMinutes} - Set Time Manually
 * 
 */

/**
 * Format and disply the crueent date in a readably way
 * uses the user's local time and formats it as: "sunday , June 15, 2025"
 */
const formattedDate = document.getElementById('formatte-date');

const today = new Date();

formattedDate.textContent = today.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});


// Track how long user styed on a page
// Reference element for show spand time 
const showTotalTime = document.getElementById('spend-time');
const startTime = Date.now();

window.addEventListener('beforeunload', () => {
    const endTime = Date.now();
    const timeSpand = Math.round((endTime - startTime) / 1000);
    // showTotalTime.textContent = `User spend: ${timeSpand}`;
});

// track user duration stay on page and display in browser
let totalTime = 0;

// Start counting as soon as the page fully loads 
window.addEventListener('load', () => {
    setInterval(() => {
        totalTime++;
        // showTotalTime.textContent = totalTime;
    }, 1000);
});

// Optinally send data to server when user leaves the page
window.addEventListener('beforeload', () => {
    console.log(`User Stayed: ${showTotalTime} seconds.`);
});


// Track user how much times stay on the page
let entryTime = localStorage.getItem('entryTime');
// if not found time in local storage set time in local storage 
if (!entryTime) {
    entryTime = Date.now(); // current timestamp in ms
    localStorage.setItem('entryTime', entryTime);
}

// Convert seconds into "hr-m-s"
function formatTime(secondsElapsed) {
    const hrs = Math.floor(secondsElapsed / 3600);
  const mins = Math.floor((secondsElapsed % 3600) / 60);
  const secs = secondsElapsed % 60;

  const hourStr = hrs > 0 ? `${hrs} ${hrs === 1 ? 'hour' : 'hours'}` : '';
  const minuteStr = mins > 0 ? `${mins} ${mins === 1 ? 'minute' : 'minutes'}` : '';
  const secondStr = secs > 0 ? `${secs} ${secs === 1 ? 'second' : 'seconds'}` : '';

  if (mins < 10 && hrs === 0) {
    // Show only seconds for under 10 minutes
    return secondStr || '0 seconds';
  } else {
    // Show full format
    return [hourStr, minuteStr, secondStr].filter(Boolean).join(' ');
  }
}
// Update the time very second
setInterval(() => {
    const currentTime = Date.now();
    const secondsElapsed = Math.floor((currentTime - entryTime) / 1000);
    // showTotalTime.textContent = formatTime(secondsElapsed)
}, 1000);



// Count down only days
const deadline = new Date("2025-12-31T23:59:59");
const coutDown = document.getElementById('countdown');

const timer = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = deadline - now;

    if (timeLeft <= 0) {
        clearInterval(timer);
        coutDown.textContent = "🎉 Happy New Year!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    // coutDown.textContent = `${days} days left`;

}, 1000);


  // Set deadline date (Year-Month-DayTHH:MM:SS)
    const downDeadline = new Date("2025-07-10T14:30:00").getTime();
    const countdown = document.getElementById("countdown");

    const timerSet = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = downDeadline - now;

      if (timeLeft <= 0) {
        clearInterval(timerSet);
        countdown.textContent = "🎉 Happy New Year!";
        return;
      }

      // Convert milliseconds into days, hours, minutes, seconds
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // Display the result in a formatted string
      coutDown.textContent = 
        `${days}d ${hours}h ${minutes}m ${seconds}s left`;
    }, 1000);














