let x = 7
x = x+5

x+=5 //x=x+5 assignment operator
x*=6
x-=2

let quantity = 0
quantity+=1

//ternary Operators
//let variable = condition ? expression (true) :expression (false)

//write a program that tells whether you can driv or not on the basis of your age


let age = 14
let can_drive = age >18 ? `can drive`:`cannot drive`
console.log(can_drive)

//write a program that tells whether the number is even or not 
//number % 2==0
// let number = 8
// let result = (number % 2==0) ? `even` : `odd` 
// console.log(is_even);

a = 7
//logical operators
console.log(5>7);
console.log(5<7);
console.log(5==5);
console.log(5==2);
console.log(5=="5"); //linient comarison
console.log(5==="5"); //strict comparison
console.log(5>=5);

// 2+2 = 4  addition
// 2+2 = 22 string concatination
console.log(2+2);
console.log("2"+"2");


let first_name = "John"
let last_name = "Doe"
console.log(first_name+last_name);

// declare variables firstname, lastname and age display the output
// as " My name s [firstname] [lastname] and iam [age] years old
// use a ternary operator to check if marks is greater than or equal to 50. Print pass if true else fail."
// Calculate the area of rectangle, length = 12 and width= 5, Display "The area of the rectangle is [value]"
// create variable score = "50abc", convert it into a number and print the result and its datatype
// create variables: userID, Username, email, isverified. Displaytem in a table.

let firstname = "Bhwana"
let lastname = "Bai"
let myage = (19)
console.log(firstname+lastname);


let marks = 50 
let markresult = marks>=50 ? `pass`:`fail`
console.log(markresult);

let length = 12 
let width = 5
let area = length*width
console.log(`The area of rectangle is ${area}`);

let score = "50abc"
score= 50
console.log(`The datatype pf score is ${score}`);

let userID =  ("BBR")
let Username = ("Bhawana")
let email = bhawanabai09gmail.com
let isverified = true
console.table({userID, Username, email, isverified});


let statement = "My name is Bhawana"

console.log(statement.substr(3,7)); //position start from 0 and length from 1
console.log(statement.substring(3,7));
console.log(statement.indexOf('is'));
console.log(statement.lastIndexOf('is'));

console.log(statement.toLocaleLowerCase)
console.log(statement.toLocaleUpperCase);



console.log(`The length of statement variable is ${statement.length}`);
statement = statement.replace("Bhawana" , "Bai");
console.log(statement);
