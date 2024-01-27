(async ()=>{
    await new Promise((res)=>{
        let tasks = require('./logic');
        console.log(tasks);
        res();
    })

    
})

var progressBarContainer = document.querySelector('#progressBarContainer');
var progressBar = document.querySelector('#progressBar');