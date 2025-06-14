/**
 * Copy event for copy data 
 */
// Get input box data for copy
const textContent = document.getElementById('text-box');
// Select DOM for show status
const copyStatus = document.getElementById('status');

// Add listener to copy content
textContent.addEventListener('copy', () => {
    copyStatus.textContent = 'You copied the text';
});

// Add listener to cut content
textContent.addEventListener('cut', function () {
    copyStatus.textContent = 'You cut the text !'
}); 

// Add listener to past content
textContent.addEventListener('past', function () {
    copyStatus.textContent = 'You pat the text !'
}); 


    // Get the input element
    const input = document.getElementById('phoneInput');

    // Add event listener for 'paste' event
    input.addEventListener('paste', (e) => {
      e.preventDefault(); // Stop default paste behavior

      // Get plain text from clipboard
      const pastedData = e.clipboardData.getData('text');

      // Sanitize: remove all whitespace characters
      const sanitizedData = pastedData.replace(/\s/g, '');

      // Set cleaned value into the input field
      input.value = sanitizedData;
    });









