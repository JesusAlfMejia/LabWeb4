addButton = document.getElementById("addButton");
subsButton = document.getElementById("substractButton");
inputNumber = document.getElementsByClassName("inputNumber")[0];
resetButton = document.getElementsByClassName("resetButton")[0];
equalButton = document.getElementsByClassName("equalButton")[0];
multButton = document.getElementById("multiplicationButton");
divButton = document.getElementById("divisionButton");
result = document.getElementById("resultValue");
logArea = document.getElementById("logInformation");
var operationsArray = "";

function pushNumber(){
    operationsArray += inputNumber.value.trim();
    inputNumber.value = "";
}

function addNumber(){
    inputNumber.value.trim();
    if(inputNumber.value != "") {
        pushNumber();
        operationsArray += " + ";
    }
}

function subsNumber(){
    inputNumber.value.trim();
    if(inputNumber.value != "") {
        pushNumber();
        operationsArray += " - ";
    }
}

function multNumber(){
    inputNumber.value.trim();
    if(inputNumber.value != "") {
        pushNumber();
        operationsArray += " * ";
    }
}

function divNumber(){
    inputNumber.value.trim();
    if(inputNumber.value != "") {
        pushNumber();
        operationsArray += " / ";
    }
}

function equalBtnClicked(){
    if(inputNumber.value == ""){
        result.value = "Syntax ERROR";
        operationsArray = "";
    }else{
        pushNumber();
        result.value = eval(operationsArray);
        operationsArray += " = " + result.value;
        logArea.textContent += operationsArray;
        logArea.textContent += "\n";
        operationsArray = "";
    }

}

function resetBtnClicked(){
    inputNumber.value = "";
    //operationsArray = "";
    result.value = "";
}

addButton.addEventListener('click', addNumber);
subsButton.addEventListener("click", subsNumber);
multButton.addEventListener("click", multNumber);
divButton.addEventListener("click", divNumber);
equalButton.addEventListener("click", equalBtnClicked);
resetButton.addEventListener("click", resetBtnClicked);