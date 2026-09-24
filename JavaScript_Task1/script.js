//Variables var
//1.Create a variable using var and store your name. Print it in the console.
var name="Rutuja";
console.log("myName: ",name);
//2.Create a var variable for your age and print it.
var age=prompt("Enter your age");
console.log("Age: ",age);
//3.Declare a var variable without assigning a value. Then assign a value and print it.
var division;
division="a div";
console.log("Division: ",division);
//4.Create a var variable with value 20, then change it to 40. Print the final value.
var num=20;
num=40;
console.log("num: ",num);
//5.Create a var variable and redeclare it with another value. Print the result.
var x=12;
console.log("x: ",x);
var x=14;
console.log("x: ",x);
//6.Create three var variables for your name, age, and city. Print all three.
var myName="Rutuja";
var myAge=24;
var city="Pune";
console.log("Name: ",myName, ",Age: ", myAge, ",city: ",city);
//7.Create a var variable for your college name and print it.
var collegeName="SVERI's College of Engineering, Pandharpur"
console.log("CollegeName: ",collegeName);
//8.Create a var variable for your favorite subject and print it.
var favSubject="Computer Networks";
console.log("favSubject: ",favSubject);
//9.Create a var variable with a number and change the number three times. Print the final value.
var numchange = 10;
numchange = 20;
numchange = 30;
numchange = 40;
console.log(numchange);
//10.Create a var variable called salary, assign a value, reassign it, and print the final salary.
var salary=50000;
salary=89000;
console.log("salary: ",salary);
//Variables let
//11.Create a let variable to store your name and print it.
let stdName="Ram";
console.log("student Name: ",stdName);
//12.Create a let variable to store your age and print it.
let stdAge=12;
console.log("stdAge: ",stdAge);
//13.Declare a let variable first, then assign a value later. Print it.
let nCity;
nCity = "Pune";
console.log(nCity);
//14.Create a let variable with value 100, change it to 200, and print it.
let n=100;
n=200;
console.log(n);
//15.Create three let variables for name, qualification, and location. Print them.
let snm="Rutuja";
let qual="B.tech";
let loc="Pune";
document.writeln("Student_Name: ",snm, ", Qualification: ",qual, ",location: " , loc);
//16.Create a let variable called course and store "JavaScript".
let course="javascript";
console.log(course);
//17.Create a let variable called marks, assign 50, then change it to 80. Print it.
let m = 50;
m = 80;
console.log("marks",m);
//18.Create a let variable called companyName and print it.
let companyName = "Stackly";
console.log(companyName);
//19.Create a let variable called experience and assign your experience in years.
let experience = 2.7;
document.writeln("experience in yrs: ",experience);
//20.Create a let variable called mobileModel and print its value.
let mobileModel = "Samsung";
console.log(mobileModel);

//Variables – const
//21.Create a const variable to store your name and print it.
const cname="Sita";
console.log(name);
//22.Create a const variable to store your date of birth and print it.
const dob="10/09/2002";
console.log(dob);
//23.Create a const variable called company and store a company name.
const companynm = "Stackly";
console.log(companynm);
//24.Create a const variable called country and store "India".
const country="India";
console.log(country);
//25.Create three const variables for your name, age, and city. Print them.
const constName = "Rutuja";
const constAge = 24;
const constCity = "Pune";
console.log(constName);
console.log(constAge);
console.log(constCity);
//26.Create a const variable called courseName and store "JavaScript".
const courseN = "JavaScript";
console.log(courseN);
//27.Create a const variable called collegeName and print it.
const clg="SVERI's College of Engineering, Pandharpur.";
console.log("collegeName: ",clg);
//28.Create a const variable called favoriteColor and print it.
const favoriteColor="Orange";
console.log(favoriteColor);
//29.Create a const variable called employeeId and print it.
const empId="Stk234";
console.log(empId);
//30.Create a const variable called officeLocation and print it.
const officeLocation="Banglore";
document.writeln(",officeLocation: ",officeLocation);

//Printing Statements
//31.Print the number 100 using console.log().
console.log(100);
//32.Print your name using console.log().
console.log("Rutuja");
//33.Print your age and qualification using separate console.log() statements.
console.log("Age: ",24);
console.log("B.Tech");
//34.Print "Welcome to JavaScript" in the console.
console.log("Welcome to JavaScript");
//35.Print five different values using five console.log() statements.
console.log("Rutuja");
console.log(24);
console.log("Pune");
console.log("Java");
console.log("Stackly");
//36.Create a variable called userName and print it using console.log().
var userName = "Rutuja";
console.log("userName: ",userName);
//37.Create a variable called userAge and print it using console.log().
var userAge = 24;
console.log(userAge);
//38.Print your name, age, city, and qualification in the console.
console.log("Rutuja");
console.log(24);
console.log("Pune");
console.log("B.Tech");

//Popup Methods
//39.Display "Welcome to JavaScript" using alert().
alert("Welcome to JavaScript");
//40.Create a variable containing your name and display it using alert().
var Nm = "Rutuja";
alert(Nm);
//41.Ask the user "What is your name?" using prompt() and display the entered name using alert().
var qname = prompt("What is your name?");
alert(qname);
//42.Ask the user for their age using prompt() and print the entered age in the console.
var qage = prompt("What is your age?");
console.log(qage);
//43.Ask the user for their qualification using prompt() and display it using alert().
var EmpQualification = prompt("What is your qualification?");
alert(EmpQualification);
//44.Ask the user for their city using prompt() and print the city in the console.
var qCity = prompt("What is your city?");
console.log(qCity);
//45.Use confirm() to ask "Do you know JavaScript?".
confirm("Do you know JavaScript?");
//46.Use confirm() to ask "Do you want to continue?".
confirm("Do you want to continue?");
//47.Ask the user's name and qualification using two prompt() statements and display both using document.writeln().
var uname = prompt("What is your name?");
var uqualification = prompt("What is your qualification?");
document.writeln("User_Name: " + name);
document.writeln("<br>");
document.writeln("User_Qualification: " + uqualification);
//document.writeln() + Console Methods
//48.Create a variable containing "Hello Everyone" and display it on the webpage using document.writeln().
var message = "Hello Everyone";
document.writeln(message);
//49.Print your name using console.log(), your qualification using console.warn(), and your city using console.error().
console.log("Rutuja");
console.warn("B.Tech");
console.error("Pune");
//50.Create a small User Information Task:
var usrName = prompt("What is your name?");
var usrAge = prompt("What is your age?");
var usrQualification = prompt("What is your qualification?");
console.log(usrName);
console.warn(usrAge);
console.error(usrQualification);
document.writeln("Name: " + usrName);
document.writeln("<br>");
document.writeln("Age: " + usrAge);
document.writeln("<br>");
document.writeln("Qualification: " + usrQualification);




