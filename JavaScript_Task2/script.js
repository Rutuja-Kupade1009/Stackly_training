//Variables & Data Types
//1.Create a variable using let and store your name. Print its data type using typeof.
let name="Rutuja";
console.log(typeof(name));
//2.Create a variable containing your age. Print its value and data type.
let age=24;
console.log(age);
console.log(typeof(age));
//3.Create a variable containing true. Print its value and data type.
let isApplicable=true;
console.log(isApplicable);
//4.Declare a variable without assigning any value. Print its value and data type.
let qualification;
console.log(qualification);
console.log(typeof qualification);
//5.Create a variable containing null. Print its value and data type.
let value = null;
console.log(value);
console.log(typeof value);
//6.Create five variables containing a string, number, boolean, undefined, and null. Print all five.
let myName = "Rutuja";
let myAge = 24;
let working = true;
let city;
let salary = null;
console.log(myName);
console.log(myAge);
console.log(working);
console.log(city);
console.log(salary);
//7.Create a variable containing your qualification and print its data type.
let qualification1="B.Tech";
console.log(typeof(qualification1)); 
//8.Create a variable containing your salary and check whether its data type is number.
let salary1=10000;
console.log(typeof(salary1));
console.log(typeof(salary1)==="number");
//9.Create a variable containing "100" and another containing 100. Print the data type of both.
let strNumber = "100";
let num = 100;
console.log(typeof(strNumber));
console.log(typeof(num));
//10.Create variables for your name, age, qualification, and working status. Print all their values and data types.
let name1 = "Rutuja";
let age1 = 24;
let qualification2 = "B.Tech";
let workingStatus = true;
console.log(name1, typeof(name1));
console.log(age1, typeof(age1));
console.log(qualification2, typeof(qualification2));
console.log(workingStatus, typeof(workingStatus));

//Arrays
//11.Create an array containing five fruit names. Print the complete array.
let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];
console.log(fruits);
//12.Create an array containing five numbers. Print the first element.
let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);
//13.Create an array containing six colors. Print the third element.
let colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];
console.log(colors[2]);
//14.Create an array containing five mobile brands. Print the last element using length.
let mobiles = ["Samsung", "Apple", "OnePlus", "Vivo", "Oppo"];
console.log(mobiles[mobiles.length - 1]);
//15.Create an array containing seven numbers. Print the second-last element using length.
let numbers1 = [10, 20, 30, 40, 50, 60, 70];
console.log(numbers1[numbers1.length - 2]);
//16.Create an array containing your favorite foods. Print the first, third, and last elements.
let foods = ["Pizza", "Burger", "Biryani", "Maggie", "Dosa"];
console.log(foods[0]);
console.log(foods[2]);
console.log(foods[foods.length - 1]);
//17.Create an array containing five cricketer names. Print the fourth cricketer.
let cricketers = ["Virat", "Rohit", "Dhoni", "Jadeja", "Bumrah"];
console.log(cricketers[3]);
//18.Create an array containing different toys. Print the last toy dynamically using length - 1.
let toys = ["Car", "Doll", "Ball", "Robot"];
console.log(toys[toys.length - 1]);
//19.Create an array containing 10 values. Print the first, last, and second-last values.
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(values[0]);
console.log(values[values.length - 1]);
console.log(values[values.length - 2]);
//20.Create an array containing fruits, toys, and a cricketer's name.
//  Print the complete array and any three individual values.
let mixed = ["Apple", "Mango", "Car", "Doll", "Virat"];
console.log(mixed);
console.log(mixed[0]);
console.log(mixed[2]);
console.log(mixed[4]);

//Objects
//21.Create an object containing name, age, and city. Print the complete object.
let person = { name: "Rutuja", age: 22, city: "Pune"};
console.log(person);
//22.Create an object containing your name, qualification, and company. Print the company.
let employee = { name: "Rutuja",qualification: "B.Tech",company: "Stackly"};
console.log(employee.company);
//23.Create an object containing a fruits array. Print the second fruit.
let fruitObject = {fruits: ["Apple", "Mango", "Banana"]};
console.log(fruitObject.fruits[1]);
//24.Create an object containing a toys array. Print the last toy dynamically.
let toyObject = {toys: ["Car", "Doll", "Robot", "Ball"]};
console.log(toyObject.toys[toyObject.toys.length - 1]);
//25.Create an object containing cricketer and team. Print the cricketer's name.
let player = {cricketer: "Virat Kohli",team: "India"};
console.log(player.cricketer);
//26.Create an object containing fruitName, toyName, and cricketer. Print all three properties.
let objects = {fruitName: "Apple",toyName: "Car",cricketer: "Rohit"};
console.log(objects.fruitName);
console.log(objects.toyName);
console.log(objects.cricketer);
//27.Create an object with two arrays: students and courses. Print the first student and second course.
let college = { students: ["Rutuja", "Priya", "Sneha"], courses: ["Java", "Python", "JavaScript"]};
console.log(college.students[0]);
console.log(college.courses[1]);
//28.Create an object containing a mobile array and print the third mobile.
let mobileObject = {mobile: ["Samsung", "Apple", "OnePlus", "Vivo"]};
console.log(mobileObject.mobile[2]);
//29.Create an object containing employeeName, skills, and experience. Print the second skill.
let employeeDetails = { employeeName: "Rutuja", skills: ["Java", "SQL", "JavaScript"], experience: 2};
console.log(employeeDetails.skills[1]);
//30.Create an object containing your personal information and print any three individual properties.
let personalInfo = {name: "Rutuja",age: 24, city: "Pune", qualification: "B.Tech", company: "Stackly"};
console.log(personalInfo.name);
console.log(personalInfo.age);
console.log(personalInfo.qualification);

//Arithmetic Operators
//31.Create two numbers and perform addition, subtraction, multiplication, and division.
let a = 20;
let b = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
//32.Create two numbers and find their remainder using %.
let x = 20;
let y = 6;
console.log(x % y);
//33.Find the result of 2 ** 5.
console.log(2 ** 5);
//34.Create two variables and perform all six arithmetic operations: +, -, *, /, %, **.
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);
//35.Create a variable containing 10. Increase its value by 5 using +.
let number = 10;
number = number + 5;
console.log(number);

//Increment & Decrement
//36.Create a variable with value 10 and use pre-increment. Print the result.
let a1 = 10;
console.log(++a1);
//37.Create a variable with value 10 and use post-increment. Print the result.
let a2 = 10;
console.log(a2++);
console.log(a2);
//38.Create a variable with value 20 and use pre-decrement. Print the result.
let a3 = 20;
console.log(--a3);
//39.Create a variable with value 20 and use post-decrement. Print the result.
let a4 = 20;
console.log(a4--);
console.log(a4);
//40.Create two variables and demonstrate the difference between pre-increment and post-increment.
let pre = 10;
let post = 10;
console.log(++pre); 
console.log(post++); 
console.log(pre); 
console.log(post);

//Assignment Operators
//41.Create a = 20 and b = 10. Use += and print the result.
let a5 = 20;
let b5 = 10;
a5 += b5;
console.log(a5);
//42.Create a = 50 and b = 20. Use -= and print the result.
let c = 50;
let d = 20;
c -= d;
console.log(c);
//43.Create a = 10 and b = 5. Use *= and print the result.
let e = 10;
let f = 5;
e *= f;
//44.Create a = 100 and b = 10. Use /= and print the result.
let g = 100;
let h = 10;
g /= h;
console.log(g);
//45.Create a = 25 and b = 4. Use %= and print the result.
let i = 25;
let j = 4;
i %= j;
console.log(i);

//Comparison, Logical & Ternary
//46.Compare two numbers using <, >, <=, and >=. Print all results.
let num3 = 20;
let num4 = 10;
console.log(num3>num4);
console.log(num3<num4);
console.log(num3>=num4);
console.log(num3<=num4);
//47.Compare a number and a string using both == and ===. Observe the difference.
let number1 = 10;
let string = "10";
console.log(number1 == string);
console.log(number1 === string);
//48.Create two conditions using numbers and combine them using &&, ||, and !.
let age2 = 23;
let hasId = true;
console.log(age2 >= 18 && hasId === true);
console.log(age2 >= 18 || hasId === false);
console.log(!(age2 >= 18));
//49.Create a variable called age. Using a ternary operator, print "Eligible" if the age is 18 or above; otherwise print "Not Eligible".
let age3 = 24;
let result = age3 >= 18 ? "Eligible" : "Not Eligible";
console.log(result);
//50.Create marks variable and use a ternary operator:
//If marks are 35 or above → print "Pass"
//Otherwise → print "Fail"
let marks = 75;
let result1 = marks >= 35 ? "Pass" : "Fail";
console.log(result1);