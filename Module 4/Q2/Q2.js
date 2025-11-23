const form=document.querySelector("form")
const p=document.createElement("p")
form.appendChild(p)

output=document.querySelector("p")
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    get()
})

async function get(){
    const data= new FormData(form)
    const input1=data.get("q")
   const url=`${form.action}?q=${input1}`

    try{
        const response=await fetch(url)
        const json=await response.json()
      console.log(JSON.stringify(json,null,2))
    }
    catch (err){
        output.textContent=`Error: ${err}`
    }
}