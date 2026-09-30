//JavaScript Functions 
//Basic Functions
//1.Create a function named hello that prints "Hello Everyone".
function hello(){
    console.log("Hello Everyone");
}
hello();
//2.Create a function named welcome that prints "Welcome to JavaScript" and call it.
function welcome(){
    console.log("Welcome To JavaScript");
}
welcome();
//3.Create a function named navi that prints your name.
function navi(){
    console.log("My Name is Rutuja");
}
navi();
//4.Create a function named message that prints three different messages.
function message(){
    console.log("Hello Everyone Lets learn Web Development.");
    console.log("We will learn HTML,CSS, JavaScript.");
    console.log("JavaScript is a scripting language.")
}
//5.Create a function named numbers that prints numbers from 1 to 5 using a for loop.
function numbers(){
    for(let i=1;i<6;i++){
        console.log(i);
    }
}
numbers();
//6.Create a function named check that contains an if condition and prints a message when the condition is true.
function check(){
  let num=10;
  if(num%2==0){
    console.log("Even number");
  }else{
    console.log("Odd number");
  }
}
check();
//7.Create a function named details that prints your name, qualification, and role.
function details(){
    console.log("My Name is Rutuja.")
    console.log("My Qualification is B.Tech");
    console.log("My Role is Java FullStack Developer");
}
details();
//8.Create a function named company that prints your company name.
function company(){
    console.log("Company Name: Stackly");
}
company();
//9.Create a function named welcomeUser and call it three times.
function welcomeUser(){
    console.log("Welcome to JavaScript");
}
welcomeUser();
welcomeUser();
welcomeUser();
//10.Create two different functions and call both functions.
function one(){
    console.log("Let's Learn Functions...");
}
function two(){
    console.log("welcome to coding world...");
}
one();
two();
//Parameters & Arguments
//11.Create a function with one parameter and print the parameter value.
function display(name){
    console.log("Name is: ",name);
}
display("Rutuja");
//12.Create a function with two parameters and print both values.
function displayInfo(name, age){
    console.log("Name is: "+name+" and age is: "+age);
}
displayInfo("Rutuja",24);
//13.Create a function add(a,b) that prints the addition of two numbers.
function add(a,b){
    console.log(a+b);
}
add(2,5);
//14.Create a function sub(a,b) that prints the subtraction of two numbers.
function sub(a,b){
    console.log(a-b);
}
sub(5,4);
//15.Create a function multiply(a,b) that prints the multiplication of two numbers.
function multiply(a,b){
    console.log(a*b);
}
multiply(5,6);
//16.Create a function divide(a,b) that prints the division of two numbers.
function divide(a,b){
    console.log(a/b);
}
divide(8,2);
//17.Create a function student(name, age) and print the student's details.
function student(name,age){
    console.log("Student Name: "+name+". Student age: "+age+".");
}
student("Rutuja",24);
//18.Create a function employee(name, role, salary) and print all three values.
function employee(name,role,salary){
    console.log("Employee Name: "+name+". Role: "+role+". salary"+salary);
}
employee("Rutuja","Java FullStack Developer",55000);
//19.Create a function with four parameters and pass four arguments while calling it.
function addition(a,b,c,d){
    console.log(a+b+c+d);
}
addition(1,2,3,4);
//20.Create a function with six parameters and pass six different values.
function multiplication(a,b,c,d,e,f){
    console.log(a*b*c*d*e*f);
}
multiplication(1,2,3,4,5,6);
//Default Parameters
//21.Create a function student(name, department, cgpa) with a default value for department.
function student(name,department="CSE",cgpa){
    console.log("Name is: "+name+". Department is: "+department+". cgpa="+cgpa);
}
student("Rutuja",undefined,9.6);
//22.Create a function user(name, age = 18) and call it without passing the age.
function user(name, age = 18){
    console.log("Name is: "+name+". age is: "+age);
}
user("Rutuja");
//23.Create a function employee(name, role = "Developer") and call it with only the name.
function employee(name,role="Developer"){
    console.log("Name : "+name+". Role: "+role);
}
employee("Rutuja");
//24.Create a function form(name, department, cgpa, disability = "no") similar to the function in your notes.
//  Call it twice with different arguments.
function form(name, department, cgpa, disability = "no") {
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("CGPA:", cgpa);
    console.log("Disability:", disability);
}
form("Rutuja", "CSE", 9.66);
form("Rahul", "IT", 8.5, "yes");
//25.Create a function with two normal parameters and one default parameter.
function employee(name, salary, role = "Developer") {
    console.log(name);
    console.log(salary);
    console.log(role);
}
employee("Rutuja", 40000);
//Return
//26.Create a function that accepts two numbers and returns their addition.
function addno(a,b){
    return a+b;
}
let result=addno(10,20);
console.log(result);
//27.Create a function that accepts two numbers and returns their subtraction.
function subno(a,b){
    return a-b;
}
let res=subno(20,10);
console.log(res);
//28.Create a function that accepts two numbers and returns their multiplication.
function mult(a,b){
    return a*b;
}
let multi=mult(1,5);
console.log(multi);
//29.Create a function that accepts two numbers and returns their division.
function div(a,b){
 return div(a/b);
}
let div1=div(8,2);
console.log(div1);
//30.Create a function salary() that returns 40000. Store the returned value in a variable and print it.
function salary() {
    return 40000;
}
let sal = salary();
console.log(sal);
//31.Create a function that accepts an employee's salary and returns the salary.
function employeeSalary(salary) {
    return salary;
}
let sal1 = employeeSalary(50000);
console.log(sal1);
//32.Create a function that returns a person's name. Store the returned value in a variable and print it.
function getName() {
    return "Rutuja";
}
let name = getName();
console.log(name);
//33.Create a function that returns "Pass" if marks are 35 or above and "Fail" otherwise.
function resultm(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}
console.log(resultm(70));
console.log(resultm(30));
//34.Create a function that accepts price and discount and returns the discount value.
function discountValue(price, discount) {
    return discount;
}
let val = discountValue(1000, 200);
console.log(val);
//35.Create a function that returns the result of an arithmetic operation and use that returned value in another function.
function addf(a, b) {
    return a + b;
}
function multiplyf(number) {
    return number * 2;
}
let value = addf(10, 20);
let finalResult = multiplyf(value);
console.log(finalResult);
//Outer Scope
//36.Create a variable outside a function and access it inside the function.
let n = "Rutuja";
function display1() {
    console.log(n);
}
display1();
//37.Create an object outside a function containing name and designation. Create a function that prints those values.
let employee1 = {
    name: "Rutuja",
    designation: "Developer"
};
function display2() {
    console.log(employee1.name);
    console.log(employee1.designation);
}
display2();
//38.Create a variable salary outside a function. Create a function that adds a bonus to that salary and prints the result.
let s = 40000;
function calculateSalary() {
    let bonus = 5000;
    console.log(s + bonus);
}
calculateSalary();
//39.Create an object containing employee details outside a function. Access its properties inside a function.
let emp1 = {
    name: "Rutuja",
    age: 24,
    role: "Java Developer"
};
function displayEmployee() {
    console.log(emp1.name);
    console.log(emp1.age);
    console.log(emp1.role);
}
displayEmployee();
//40.Create two functions that access the same variable created outside both functions.
let nm1 = "Rutuja";
function first() {
    console.log(nm1);
}
function second() {
    console.log(nm1);
}
first();
second();
//Named, Anonymous & Arrow Functions
//41.Create a named function that accepts a parameter and prints it.
function displayName(){
    console.log("Rutuja");
}
displayName();
//42.Create an anonymous function stored inside a variable and call it.
let displaystd = function(name) {
    console.log(name);
};
displaystd("Rutuja");
//43.Create an arrow function that accepts one parameter and prints it.
let displayAge = (age) => {
    console.log(name);
};
displayAge(24);
//44.Create an arrow function with two parameters that adds two numbers.
let addnum = (a, b) => {
    return a + b;
};
console.log(addnum(10, 20));
//45.Create a named function, anonymous function, and arrow function that all perform the same addition operation.
function addNamed(a, b) {
    return a + b;
}
console.log(addNamed(10, 20));
let addAnonymous = function(a, b) {
    return a + b;
};
console.log(addAnonymous(10, 20));
let addArrow = (a, b) => {
    return a + b;
};
console.log(addArrow(10, 20));
//IIFE
//46.Create an IIFE that immediately prints "Hello JavaScript" when the program runs.
(function() {
    console.log("Hello JavaScript");
})();
hello();
//47.Create an IIFE that accepts a name parameter and prints "Hello" followed by the name.
(function(name) {
    console.log("Hello", name);
})("Rutuja");
//48.Create an IIFE that accepts product and discount parameters and displays a special-offer message, similar to the example in your notes.
(function(product, discount) {
    console.log(product + " is available with " + discount + "% discount");
})("Laptop", 20);
//Callback & Higher-Order Functions
//49.Create an add function that accepts a callback and two numbers. Add the numbers and then call the callback function with two numbers.
function add3(callback, a, b) {
    let result = a + b;

    console.log("Addition:", result);

    callback(20, 10);
}
function callbackFunction(a, b) {
    console.log("Callback received:", a, b);
}
add3(callbackFunction, 10, 20);
//50.reate a sub function and pass it as a callback to the add function. The add function should first print the addition result 
// and then execute the subtraction callback, following the structure from your notes.
function add4(callback, a, b) {
    let result = a + b;
    console.log("Addition:", result);
    callback(a, b);
}
function sub4(a, b) {
    console.log("Subtraction:", a - b);
}
add4(sub4, 20, 10);
