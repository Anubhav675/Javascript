'use strict';
const url="https://api.chucknorris.io/jokes/random"
    async function joke(){
    const response=await fetch(url)
        const json=await response.json()
        console.log(json.value)
    }
    joke()