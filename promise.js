const { resolve } = require("path");

let a = 20;
let b = 0;


let waitData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let b = 40;
        resolve(b);
    },2000);
});

waitData.then((c)=>{
    b = c;
    console.log(a+b);
})



