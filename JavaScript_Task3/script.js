//Logical Operators
//1.Use && to check whether 10 > 5 and 20 > 15 are true.
console.log(10>15 && 20>15);
//2.Use && to check whether 10 > 15 and 20 > 10 are true.
console.log(10>15 && 20>10);
//3.Use || to check whether 10 > 20 or 15 > 10 is true.
console.log(10>20 || 15>10);
//4.Use || to check whether 5 > 10 or 20 < 15 is true.
console.log(5>10 || 20<15);
//5.Use ! to reverse the result of 10 > 5.
console.log(!(10>5));
//6.Use ! to reverse the result of 10 < 5.
console.log(!(10<5));
//7.Create two conditions using && and || and print the final result.
let a = 10 > 5;
let b = 20 < 30;
console.log(a && b);
console.log(a || b);
//8.Create three conditions using &&, ||, and ! together.
let x = 10 > 5;
let y = 20 < 15;
let z = 30 > 10;
console.log(x && !y || z);

//Ternary Operator
//9.Create an age variable. If age is 18 or above, print "Eligible"; otherwise print "Not Eligible".
let age=24;
console.log(age>=18?"Eligible":"Not Eligible");
//10.Create a marks variable. If marks are 35 or above, print "Pass"; otherwise print "Fail".
let marks=40;
console.log(marks>40?"Pass":"Fail");
//11.Create a number variable. Check whether it is greater than 10 using a ternary operator.
let number=30;
console.log(number>10?"Greater":"Smaller");
//12.Create a number variable. Check whether it is even or odd using a ternary operator.
let num=35;
console.log(num%2==0 ?"Even":"Odd");
//13.Create a salary variable. If salary is greater than 30000, print "Good Salary"; otherwise print "Low Salary".
let salary=55000;
console.log(salary>30000 ? "Good Salary":"Low Salary");

//Concatenation & Template Strings
//14.Create three variables containing your first name, last name, and city. Join them using +.
let stdName="Rutuja";
let lastName="Kupade";
let city="Pune";
console.log(stdName+" "+lastName+ " "+city);

//15.Create name and age variables and print them together using concatenation.
let myName="Rutuja";
let myAge=24;
console.log("My Name is: "+myName + ".My age is: "+age);

//16.Create three variables: product, price, and brand. Print them as one sentence using +.
let product="Pen";
let brand="Lexi";
let Price=10;
console.log("The product "+brand+ " "+product + " is of Rs."+Price);

//17.Create variables for your name, qualification, and company. Display them using a template string.
let name1="Rutuja";
let qualification="B.Tech";
let company="Stackly";
console.log(`My name is ${name1}, I have completed ${qualification}, and I work at ${company}.`);

//18.Create name, age, and city variables. Display them using a template string in one sentence.
let name2 = "Rutuja";
let age2 = 24;
let city2 = "Pune";
console.log(`My name is ${name2}, I am ${age2} years old, and I live in ${city2}.`);

//Type Casting — Implicit
//19.Add a string and a number. Print the result and its typeof.
let result1 = "10" + 5;
console.log(result1);
console.log(typeof result1);
//20.Add a number and a number. Print the result and its typeof.
let result2 = 10 + 5;
console.log(result2);
console.log(typeof result2);
//21.Add a number and true. Print the result and its typeof.
let result3 = 10 + true;
console.log(result3);
console.log(typeof result3);
//22.Add a number and null. Print the result and its typeof.
let result4 = 10 + null;
console.log(result4);
console.log(typeof result4);
//23.Add a string and true. Print the result and its typeof.
let result5 = "Hello" + true;
console.log(result5);
console.log(typeof result5);
//24.Add a string and an array. Print the result and its typeof.
let result6 = "Hello" + [1, 2, 3];
console.log(result6);
console.log(typeof result6);
//25.Add a number and an object. Print the result and its typeof.
let result7 = 10 + {};
console.log(result7);
console.log(typeof result7);
//26.Create three different expressions using different data types and check their resulting data types.
console.log("10" + 5);
console.log(10 - "5");
console.log(true + 5);
console.log(typeof ("10" + 5));
console.log(typeof (10 - "5"));
console.log(typeof (true + 5));

//Type Casting — Explicit
//27.Convert "100" into a number using Number() and print the result.
let a1 = "100";
console.log(Number(a1));
//28.Convert "25" into a number and check its data type using typeof.
let a2 = "25";
console.log(Number(a2));
console.log(typeof Number(a2));
//29.Convert true into a number using Number().
console.log(Number(true));
//30.Convert false into a number using Number().
console.log(Number(false));
//31.Convert an empty string into a number using Number().
console.log(Number(""));
//32.Convert null into a number using Number().
console.log(Number(null));
//33.Convert undefined into a number using Number().
console.log(Number(undefined));
//34.Convert "Hello" into a boolean using Boolean().
console.log(Boolean("Hello"));
//35.Convert an empty string into a boolean using Boolean().
console.log(Boolean(""));
//36.Convert 0, 1, and -1 into boolean values using Boolean().
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));
//37.Convert an array into a boolean using Boolean().
console.log(Boolean([1, 2, 3]));
//38.Convert an object into a boolean using Boolean().
console.log(Boolean({}));

//Conditional Statements
//39.Create an age variable. Using if, print "Eligible" if the age is 18 or above.
let age3 = 20;
if (age3 >= 18) {
    console.log("Eligible");
}
//40.Create an age variable. Using if...else, print whether the person is eligible to vote.
let age4 = 17;
if (age4 >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}
//41.Create a marks variable and use if...else to print "Pass" or "Fail".
let marks1 = 45;
if (marks1 >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}
//42.Create a time variable and use else if to display:
let time = 14;
if (time >= 1 && time <= 6) {
    console.log("Early Morning");
} 
else if (time >= 7 && time <= 12) {
    console.log("Morning");
} 
else if (time >= 13 && time <= 17) {
    console.log("Afternoon");
} 
else if (time >= 18 && time <= 19) {
    console.log("Evening");
} 
else if (time >= 20 && time <= 24) {
    console.log("Night");
} 
else {
    console.log("Invalid Time");
}
//43.Create a temperature variable and use if...else if...else to print:
let temperature = 30;
if (temperature > 35) {
    console.log("Hot");
} 
else if (temperature >= 20 && temperature <= 35) {
    console.log("Normal");
} 
else {
    console.log("Cold");
}
//44.Create a nested if program
let age5 = 25;
let height = 175;
let weight = 65;
if (age5 >= 18) {
    if (height >= 170) {
        if (weight >= 60) {
            console.log("Eligible");
        }
    }
}
//45.Create a trafficLight variable with values "red", "yellow", or "green". Use switch to print the appropriate action.
let trafficLight = "red";

switch (trafficLight) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Wait");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic light");
}
//46.Create a day variable with values "Monday" to "Sunday". Use switch to print the day.
let day = "Monday";

switch (day) {

    case "Monday":
        console.log("Monday");
        break;

    case "Tuesday":
        console.log("Tuesday");
        break;

    case "Wednesday":
        console.log("Wednesday");
        break;

    case "Thursday":
        console.log("Thursday");
        break;

    case "Friday":
        console.log("Friday");
        break;

    case "Saturday":
        console.log("Saturday");
        break;

    case "Sunday":
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}
//47.Create a choice variable with values 1, 2, or 3.
let choice = 2;

switch (choice) {

    case 1:
        console.log("Start");
        break;

    case 2:
        console.log("Settings");
        break;

    case 3:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}
//48.Use a for loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//49.Use a while loop to print numbers from 10 to 1.
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}
//50.Create an array of fruits and use
let fruits = ["Apple", "Mango", "Banana", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}
let employee = {
    name: "Rutuja",
    role: "Java Full Stack Developer",
    experience: "2+ years"
};

for (let key in employee) {
    console.log(key + " : " + employee[key]);
}
