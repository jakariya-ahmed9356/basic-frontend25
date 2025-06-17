/**
 * @function {try} - Code that might throw an error
 * @function {catch(error)} - Code that handles the error
 * @function {finally} - Code that always runs (optional)
 * 
 */


try {
    // JSON.parse() convert json string into object
    const data = JSON.parse('{"name": "Jakariya"}');
    // console.log(data.name);
} catch (err) {
    // Only run if the try block fails 
    console.error("Invalid JSON:", err.message);
} finally {
    // always runs, whether an error happened or not
    console.log("Execution Finish")
}


// Loggin errors to server (Expert Practice)
try {
    riskyFunction();
} catch (err) {
    console.error("App Error:", err.message);

    // Send to error monitoring service
    fetch('/log-error', {
        method: 'POST',
        body: JSON.stringify({error: err.message}),
        headers: { 'Content-Type': 'application/json'}
    });

}














