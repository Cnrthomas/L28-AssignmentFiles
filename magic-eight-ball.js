const answers = [
    "<br><br><br>Yes", 
    "<br><br><br>No", 
    "<br><br><br>Maybe", 
    "<br><br><br>Ask Again Later", 
    "<br><br><br>Most Likely", 
    "<br><br><br>Probably Not"
]

function displayanswer() {
    let index = Math.floor(Math.random() * answers.length);
    document.getElementById("circle").style.display = 'initial';
    document.getElementById("circle").innerHTML = answers[index];
}

function mousedownclick() {
    let input = document.getElementById("question").value;
    if (input.length < 1) {
        alert("Please enter a question!");
    } else {
        displayanswer();
    }
}

function resetclick() {
    document.getElementById("circle").style.display = 'none';
}

const ball = document.getElementById("ball");
ball.addEventListener("mousedown", mousedownclick);

const reset = document.getElementById("reset");
reset.addEventListener("click", resetclick);