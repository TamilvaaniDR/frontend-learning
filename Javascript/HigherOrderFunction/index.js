function double(n){
    return n*n;
    }

    let arr=[1,2,3,4,5];
    let result=arr.map(double); 
let pTag=document.getElementById("double");
let h2Tag=document.getElementById("map");
let h3Tag=document.getElementById("listener");
let h1Tag=document.getElementById("result");
let btn=document.getElementById("btn");

btn.addEventListener('click', () => {
        console.log(result); 

        pTag.innerText = "Example for higher order function";
        h1Tag.innerText = result;
        h2Tag.innerText = "Map is an higher order function that takes double fn as an arg";
        h3Tag.innerText = "addEventListener is a higher-order function because it takes the callback arrow function () => {} as an argument";
    })
