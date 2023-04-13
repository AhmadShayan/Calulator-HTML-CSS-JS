function appendChar(char) {
    document.getElementById('result').innerText += char;
}

function clearResult() {
    document.getElementById('result').innerText = '';
}

function deleteLastChar() {
    let result = document.getElementById('result').innerText;
    document.getElementById('result').innerText = result.slice(0, -1);
}

function calculateResult() {
    let result = document.getElementById('result').innerText;
    try {
        let calculatedResult = eval(result); // Using eval() for simplicity, but it's not recommended in production
        document.getElementById('result').innerText = calculatedResult;
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
    }
}
