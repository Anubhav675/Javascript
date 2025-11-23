const form=document.querySelector("#source")
const output=document.querySelector("#target")

form.addEventListener("submit",event=>{

    event.preventDefault();
formData()
   attributeData()

})

function formData(){
    const data=new FormData(form);
const firstName=data.get("firstname")
const lastName=data.get("lastname")
     output.innerText=`From using form data: Your name is ${firstName} ${lastName}  `
}



function attributeData(){
     const first=form.querySelector('input[name="firstname"]').value
const last=form.querySelector('input[name="lastname"]').value
     output.innerText=`Your name is ${first} ${last}  `
}