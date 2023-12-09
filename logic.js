//to make sure that user can only enter one digit in the time block
const min_value1 = document.getElementByclass("timernumber_01");
let min_value1_str = min_value1.toString();
let final_min_value1 = min_value1.slice(1,min_value1_str.length);
console.log(final_min_value1);