function clearScreen() {
    document.getElementById("result").value = "";
}

// Appenda the clicked button's value to the diasplay
function setScreenValue(value) {
    const r = document.getElementById("result");
    if(r.value ==="Enter an expression" || r.value === "Invalid expression") r.value = "";
    r.value += value;
}



// Calculates and displays the result
function calculateResult() {
    const resultElement = document.getElementById("result");
    const expression = resultElement.value.trim();

    //Check for epty input
    if (expression === '') {
        resultElement.value = 'Enter an expression';
        return;
    }

    // Evaluate expression and handle errors
    try {
        resultElement.value = eval(expression);
    } catch (e) {
        resultElement.value = 'Invalid expression';
    }
}