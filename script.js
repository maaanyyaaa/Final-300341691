let countdownInterval;

// Function to get the current date
function getCurrentDate() {
    return new Date().getTime();
}

// Function to start the countdown timer
function start() {
    const userDate = document.getElementById("birthday").value;
    const countDownDate = new Date(userDate).getTime();

    // Clear any existing intervals
    clearInterval(countdownInterval);

    // Update the countdown every 100 milliseconds
    countdownInterval = setInterval(function() {
        // Get the current date and time using the getCurrentDate function
        const now = getCurrentDate();

        // Find the distance between now and the countdown date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes, seconds, and deciseconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const deciseconds = Math.floor((distance % 1000) / 100);

        // Display the result in the corresponding elements
        document.getElementById("demo").innerHTML = 
            days + " <sub>days</sub> " + 
            ("0" + hours).slice(-2) + " <sub>hrs</sub> " + 
            ("0" + minutes).slice(-2) + " <sub>mins</sub> " + 
            ("0" + seconds).slice(-2) + " <sub>secs</sub> " + 
            deciseconds + " <sub>dicsecs</sub>";

        // If the countdown is over, display "EXPIRED"
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 100);
}
