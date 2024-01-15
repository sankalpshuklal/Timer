var left_input_1 = document.querySelector('.timernumber_01');
var left_input_2 = document.querySelector('.timernumber_02');
var right_input_1 = document.querySelector('.timernumber_03');
var right_input_2 = document.querySelector('.timernumber_04');
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