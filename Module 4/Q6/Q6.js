'use strict'
const form=document.querySelector("form")

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    jokes()
})




async function jokes(){
    let article=document.querySelector("article")
if(!article){
    article=document.createElement("article")
document.body.appendChild(article)
}else{
    article.innerHTML=""
}

    try{
    const data=new FormData(form)
    const input1=data.get("q")
    const url=`${form.action}?query=${input1}`
    const response=await fetch(url)
    const json=await response.json()

    for(let i=0;i<json.result.length;i++){
        let p=document.createElement("p")
        p.innerText=json.result[i].value
        article.appendChild(p)

    }

       // console.log(json.result[0].value)
        }
        catch (err){
        const p=document.createElement("p")
        p.innerText=`Error: ${err}`
             article.appendChild(p)
        }

}