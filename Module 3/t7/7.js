'use strict';
const a=document.querySelector("#trigger")
const i=document.querySelector("img")
const b=i.src


a.addEventListener("mouseenter",()=>{
i.src="img/picB.jpg"
})
a.addEventListener("mouseleave",()=>{
    i.src=b
})