function Alert() {
    alert("Have a good day")
}

// ***********************************************

// Function for capitalization of word via button

function capitalizeWords(str) {
    var words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}

function capitalizeAndAlert() {
    var inputString = prompt("Enter a sentence:");
    if (inputString !== null && inputString.trim() !== "") {
        var capitalizedString = capitalizeWords(inputString);
        alert(capitalizedString);
    } else {
        alert("You did not enter any sentence.");
    }
}


// **********************************************************************

// Even And Odd
function evenOdd(){


for (let i = 0; i <=10; i++) {
    if (i%2==0) {
        console.log("even   "+i)
    }
    else{
        console.log("Odd   "+i)
    }
}
}

// Even or odd by user given Number

function UserEvenOdd(){
    var user=parseInt(prompt("enter last number where you want to know which num is even or odd"))
    for(var i=2 ;i<=user ; i++){
        console.log("Even   " +i++)
    }
    for(var a=1 ;a<=user ; a++){
        console.log("Odd    "+ a++)
    }
}

// Function for today day
function Day() {
    var daysname=["Sunday","Monday","Tuesday","Wednesday","Thirsday","Friday","Saturday"]
    var today=new Date();
    var day=today.getDay()
    var now=daysname[day]
    alert(now)
}

// Function for Tell current time
function TellTime() {
    var today=new Date()
    var hour=today.getHours()
    var min=today.getMinutes()
    alert("Time : "+hour+" : "+min)
    
}



// Function for user input calculator
function calculation(){
    input1=parseInt(prompt("Enter first number"))
    input2=parseInt(prompt("Enter second number"))
    input3=prompt("Please select any one + - * / %")
    if (input3== "+") {
        let sum=input1+input2
        alert(sum)     
    }
    else if(input3== "-") {
        let sub=input1-input2
        alert(sub)     
    }
    else if(input3== "*") {
        let product=input1*input2
        alert(product)     
    }
    else if(input3== "/") {
        let divide=input1/input2
        alert(divide)     
    }
    else if (input3== "%") {
        let Modulo=input1+input2
        alert(Modulo)     
    }
    else{
        alert("Please enter right number")
    }
}

// Age Calculator


function agecalculator(){
const currentYear = new Date().getFullYear();


const birthYear = parseInt(prompt("Enter the birth year:"));


const age1 = currentYear - birthYear;

alert(age1)
}

function Table(){
    var user=parseInt(prompt("Enter number"))
    for (let i = 1; i <= 10; i++) {
        console.log(user+" x "+i+" = "+user*i)
}
}
