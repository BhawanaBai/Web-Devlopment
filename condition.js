//condition statement
if (5>3){
    console.log(`Hello world`);
}
else{
    console.log("Hii")
}


let number = 9
if(number%2==0){
    console.log(`Even`);
}
else{
    console.log(`Odd number`);
}

//write a program that gives the message of weather is pleasent and only when the temprature is greater than or equals to 25 and it is raining else print the weather is hot


let temp = 40 //globle scope variable 
let isRaining = false
let message = "" //empty string
if (temp<= 25 || isRaining){ // || this is or's sign

    message = `weather is pleasent`
}
else{
    message = `weather is hot`
}
console.log({message});


///write a program that gives the message of weather is pleasent and only when the temprature is greater than or equals to 25 and it is raining else print the weather is hot when temprature is greater hsn 25 and less than and equals to 40 else  print "weather is hot"

let temprature = 45
let itsRaining = true
let msg = ''
if (temprature <= 25){
    meaaage_1 = 'weather is pleasent'
}
else if (temprature >25 && temprature<=40){
    message_1 = 'weather is hot'
}
console.log(msg)


//marks <=100 and marks >=90 grade A*
//marks <90 and marks >79  grade A
//marks <=79 and marks >69  grade B
//marks <=69 and marks >=50  grade C 
//marks  <50 grade Try again 
//Questons to do


let marks = 60
let Grade = "" 
if(marks<=100){
    message_2 = ''  
}
else if (marks<= 100 && marks>= 90){
    message_3 = "Grade A+"
}
else if (marks<=90 && marks>=80){
    message_3 = "Grade A"
}

else if (marks<=80 && marks>=70){
    message_3 = "Grade B"
}
else if (marks<=70 && marks>=60){
    message_3 = "Grade C"
}
 marks
console.log(message);