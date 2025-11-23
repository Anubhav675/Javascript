const form=document.querySelector("form")
const p=document.createElement("p")
form.appendChild(p)

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    get();
})

const output =document.querySelector("p")

async function get(){
    const data= new FormData(form)
    const input1=data.get("q")
    const url=`${form.action}?q=${input1}`
    try{
        const response=await fetch(url)
        const json=await response.json()
        console.log(json)
        console.log(json[0].show.url)

        const doc=document.querySelector("body")
        let div2=document.querySelector("#results")
        if(!div2) {
            div2 = document.createElement("div")
            div2.id = "results"

            doc.appendChild(div2)
        }
        else{
            div2.innerHTML = ""
        }



        for(i=0;i<json.length;i++){
            const article=document.createElement("article")

            const h2=document.createElement("h2")
            h2.innerText=json[i].show.name
            article.appendChild(h2)

            const a=document.createElement("a")
            a.href=json[i].show.url
            a.innerText=json[i].show.url
            a.target="_blank"
            article.appendChild(a)

            const img=document.createElement("img")
            img.src=json[i].show.image? json[i].show.image.medium :""
            img.alt=json[i].show.name ? json[i].show.name:"no image"
            article.appendChild(img)

            const div=document.createElement("div")
            div.innerHTML=json[i].show.summary
            article.appendChild(div)


            div2.appendChild(article)


        }

    }
    catch(err){
        output.innerText=`Error: ${err}`
    }
}