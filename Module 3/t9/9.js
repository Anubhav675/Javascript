function calc(){
    const inputItem=document.querySelector("#calculation").value
    const item=inputItem.trim().match(/\d+|[+\-*/]/g)
    const output=document.querySelector("#result")

    let result=""
console.log(item)
    if(item.length===3){
    for (let i=0;i<item.length;i++){
       let num1=Number(item[0])
        let num2=Number(item[2])
        if(item[1]==="+"||item[1]==="add"){
            result=num1+num2
        }
        else if(item[1]==="-"||item[1]==="sub"){
            result=num1-num2
        }
        else if(item[1]==="*"||item[1]==="multi"){
            result=num1*num2
        }
        else if(item[1]==="/"||item[1]==="div"){
            result=num1/num2
        }
        else {
            result="not defined"
        }
    }
    output.innerText=result
}
    else{
        output.innerText="sorry operators not recognized"
    }

}
const button1=document.querySelector("#start")
button1.addEventListener("click",calc)