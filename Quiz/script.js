// Identifying the button
let button = document.getElementById("finish-btn")

// watching the button for a click and running once the button is clicked
button.addEventListener("click", done)


function done (){
    let input1 = document.getElementById("in1").value.toLowerCase()
    let input2 = document.getElementById("in2").value.toLowerCase()
    let input3 = document.getElementById("in3").value.toLowerCase()
    let input4 = document.getElementById("in4").value.toLowerCase()
    let score = 0

if (input1 === "5" || input1 === "five"){
        score += 1;
        document.getElementById("result1").innerHTML = "Correct";
    }   else {
        document.getElementById("result1").innerHTML = "Incorrect";
    }
if (input2 === "indifferent boredom") {
    score += 1
    document.getElementById("result2").innerHTML = "Correct";
    }   else if (input2 === "calibrating boredom"){
        score += 1
        document.getElementById("result2").innerHTML = "Correct";
    }   else if (input2 === "searching boredom"){
        score += 1
        document.getElementById("result2").innerHTML = "Correct";
    }   else if (input2 === "reacting boredom"){
        score += 1
        document.getElementById("result2").innerHTML = "Correct";
    }   else if (input2 === "apathetic boredom"){
        score += 1
        document.getElementById("result2").innerHTML = "Correct";
    }   else {
        document.getElementById("result2").innerHTML = "Incorrect";
    }

if (input3 === "school or work") {
        score += 1
        document.getElementById("result3").innerHTML = "Correct";
    }   else {
        document.getElementById("result3").innerHTML = "Incorrect";
    }

if (input4 === "depression") {
        score += 1
        document.getElementById("result4").innerHTML = "Correct";
}   else {
    document.getElementById("result4").innerHTML = "Incorrect";
}
    console.log(score)
    let percent = score/4 * 100
    console.log(percent)
    document.getElementById("percent").innerHTML = percent + "%";
    document.getElementById("score").innerHTML = score + "/4";
if (score <= 2){
    document.getElementById("try").innerHTML = "Try Again";
}   else if (score < 4) {
    document.getElementById("try").innerHTML = "Good Job!";
}   else {
    document.getElementById("try").innerHTML = "Amazing!";
}
}                   
