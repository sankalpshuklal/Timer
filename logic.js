var left_input_1 = document.querySelector('.timernumber_01');
var left_input_2 = document.querySelector('.timernumber_02');
var right_input_1 = document.querySelector('.timernumber_03');
var right_input_2 = document.querySelector('.timernumber_04');
var createButton = document.querySelector('.createButtonDiv');
var createSection = document.querySelector('.createSection');
var breakinput_1 = document.querySelector('.breaktimernumber_01');
var breakinput_2 = document.querySelector('.breaktimernumber_02');
var breakinput_3 = document.querySelector('.breaktimernumber_03');
var breakinput_4 = document.querySelector('.breaktimernumber_04');
var task_title = document.querySelector('#titleInputBox');
var add_taskbutton = document.querySelector('#add_task');
var rightCreateSection = document.querySelector('.right_create');
var createRoutineButton = document.querySelector('#setRoutine');


function addClass(element, classname){
    element.classList.add(`${classname}`);
}
function removeClass(element,classname){
    element.classList.remove(`${classname}`);
}

//making the create button function 
createButton.addEventListener('click',async()=>{
    // createSection.style.display = "block";    
    await addClass(createButton, 'createButtonTransition');
    await new Promise ((resolve,reject)=>{
        setTimeout(() => {
            removeClass(createButton, 'createButtonTransition');
            resolve();
        }, 100);

    });
    await new Promise((resolve,reject)=>{
        createSection.style.visibility = "visible";
        resolve();
    })
});

//only fill one digit in the input block
left_input_1.addEventListener('input', function(){
    let input_num = left_input_1.value
    if (left_input_1.value>9){
        left_input_1.value = (left_input_1.value).slice(0,1);
        left_input_2.focus();
        left_input_2.value = input_num.slice(1,2);
    }
})
left_input_2.addEventListener('input',function(){
    let input_num = left_input_2.value
    if (left_input_2.value>9){
        left_input_2.value = (left_input_2.value).slice(0,1);
        right_input_1.focus();
        right_input_1.value = input_num.slice(1,2);
    }
})
right_input_1.addEventListener('input',function(){
    let input_num = right_input_1.value
    if (right_input_1.value>9){
        right_input_1.value = (right_input_1.value).slice(0,1);
        right_input_2.focus();
        right_input_2.value = input_num.slice(1,2);
    }
})
right_input_2.addEventListener('input',function(){
    if (right_input_2.value>9){
        right_input_2.value = (right_input_2.value).slice(0,1);
    }
})

//only fill one digit in the input block
breakinput_1.addEventListener('input', function(){
    let input_num = breakinput_1.value
    if (breakinput_1.value>9){
        breakinput_1.value = (breakinput_1.value).slice(0,1);
        breakinput_2.focus();
        breakinput_2.value = input_num.slice(1,2);
    }
})
breakinput_2.addEventListener('input',function(){
    let input_num = breakinput_2.value
    if (breakinput_2.value>9){
        breakinput_2.value = (breakinput_2.value).slice(0,1);
        breakinput_3.focus();
        breakinput_3.value = input_num.slice(1,2);
    }
})
breakinput_3.addEventListener('input',function(){
    let input_num = breakinput_3.value
    if (breakinput_3.value>9){
        breakinput_3.value = (breakinput_3.value).slice(0,1);
        breakinput_4.focus();
        breakinput_4.value = input_num.slice(1,2);
    }
})
breakinput_4.addEventListener('input',function(){
    if (breakinput_4.value>9){
        breakinput_4.value = (breakinput_4.value).slice(0,1);
    }
})


//creating entries in the in the form of the objects 

let tasks = [];
var tasknumber = 1;
add_taskbutton.addEventListener('click', ()=>{
    
    var taskitem = {
        'task' : tasknumber,
        'tasktime1' : left_input_1.value,
        'tasktime2' : left_input_2.value, 
        'tasktime3' : right_input_1.value, 
        'tasktime4' : right_input_2.value, 
        'breaktime1' : breakinput_1.value, 
        'breaktime2' : breakinput_2.value, 
        'breaktime3' : breakinput_3.value, 
        'breaktime4' : breakinput_4.value, 
        'title' : task_title.value

    };
    tasks.push(taskitem);
    tasknumber++;
    //creating the div for displaying the taks in the list
    var newtask = document.createElement('div')
    newtask.id = "taskitem";
    newtask.innerHTML = task_title.value;
    rightCreateSection.appendChild(newtask); 
})
createRoutineButton.addEventListener('click', async()=>{
    createSection.style.visibility = "hidden";
    window.location.href = "./timerun.html";
    module.exports = tasks;
    
})



