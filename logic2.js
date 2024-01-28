// (async ()=>{
//     await new Promise((res)=>{
//         let tasks = require('./logic');
//         console.log(tasks);
//         res();
//     })

    
// })
import {tasklist} from './logic.js';
async function run(){
    console.log(tasklist);
}
run();

var progressBarContainer = document.querySelector('#progressBarContainer');
var progressBar = document.querySelector('#progressBar');