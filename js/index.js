"use strict";
document.getElementById("check").onclick =()=>{
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var BMI =  parseInt(weight) / parseFloat(height);
    BMI = BMI.toFixed(2)

    try {
        if(weight =="")throw "empty field!";
        if(height =="") throw "empty field!";
    } catch (error) {
        document.getElementById("result").innerText = error
    }

    if(BMI >= 25.0 && BMI <= 29.9){
        document.getElementById("result").innerText = `${BMI} you are overweight`;
    }else if(BMI >= 18.5 && BMI <= 24.9){
        document.getElementById("result").innerText = `${BMI} you are healthy`;
    }else if(BMI < 18.5){
        document.getElementById("result").innerText = `${BMI} you are underweight`;
    }else if (BMI >= 30.0){
        document.getElementById("result").innerText = `${BMI} you are obese`;

    }
}