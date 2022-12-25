const inputDob = document.querySelector("#dob");
const inputLuckyNum = document.querySelector("#num");
const btn = document.querySelector("button");
const divOutput = document.querySelector("#output");

function showOutput(num){
    if(num == 0){
        divOutput.innerHTML = "Congratulations, your Birthday is a Lucky day!🥳";
    }else{
        divOutput.innerHTML = "Sorry, your birthday is not a lucky day!🤐";
    }
}

function checkBirthday(){
    let dob = inputDob.value;
    let luckyNum = inputLuckyNum.value;
    dob = dob.replaceAll("-","");
    dob = parseInt(dob);
    let digit = 0;

    while(dob != 0){
        digit += dob % 10;
        dob = Math.floor(dob/10);
    }

    digit = digit % luckyNum;
    showOutput(digit);
}

btn.addEventListener("click", checkBirthday)