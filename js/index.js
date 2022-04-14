"use strict";
document.getElementById("check").onclick =()=>{
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
<<<<<<< HEAD
    var BMI = parseFloat(weight) / parseFloat(height);
=======
    var BMI =  parseFloat(weight) / parseFloat(height);
>>>>>>> a85642eacdf6fe0168589e346614994d5e411154
    BMI = BMI.toFixed(2)

    try {
        if(weight =="")throw "empty field!";
        if(height =="") throw "empty field!";
    } catch (error) {
        document.getElementById("result").innerText = error
    }

    if(BMI >= 25.0 && BMI <= 29.9){
        document.getElementById("result").innerText = `${BMI}kgm-2 you are overweight`;
    }else if(BMI >= 18.5 && BMI <= 24.9){
        document.getElementById("result").innerText = `${BMI}kgm-2 you are healthy`;
    }else if(BMI < 18.5){
        document.getElementById("result").innerText = `${BMI}kgm-2 you are underweight`;
    }else if (BMI >= 30.0){
        document.getElementById("result").innerText = `${BMI}kgm-2 you are obese`;

    }
}
