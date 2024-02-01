
//making temporary array for testing 

var tasks = [{
    'task' : 1,
    'tasktime1' : 1,
    'tasktime2' : 0, 
    'tasktime3' : 1, 
    'tasktime4' : 0, 
    'breaktime1' : 1, 
    'breaktime2' : 0, 
    'breaktime3' : 0, 
    'breaktime4' : 1, 
    'title' : "task 1"
}];

//adding the tasks in task Container div
for(let i = 0; i<tasks.length; i++){
    const elementdiv = document.createElement('div');
    elementdiv.classList.add('taskitems');
    elementdiv.textContent = tasks[i].title;
    
    const taskContainer = document.querySelector('#taskContainer');
    taskContainer.appendChild(elementdiv);
    
}

//Calculating the number of seconds


