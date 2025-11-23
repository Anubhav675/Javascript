'use strict';
const a=document.querySelector("#operation")
const b=document.querySelector("#result")



let result=0
function calculate(){
const input1=Number(document.querySelector("#num1").value)
const input2=Number(document.querySelector("#num2").value)
    if(a.value==="add"){
        result=input1+input2
    }
    else if(a.value==="sub"){
        result=input1-input2
    }
    else if(a.value==="multi"){
        result=input1*input2
    }
    else if(a.value==="div"){
        result=input1/input2
    }
    else {
        result="enter values"
    }
    b.innerText=result


    }
    const button1=document.querySelector("button")
button1.addEventListener("click",()=>{
    calculate()
    })





