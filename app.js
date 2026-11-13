    //   ==========================📝 JavaScript Array Assignments=======================


// 1. Create an array of 3 student names and add one more using push().
// let students = ["ali","ahmed", "sara"];
// students.push("hassan");
// console.log(students); // Output: ["ali", "ahmed", "sara", "hassan"]

// 2. Remove the last item from an array of fruits using pop().
// let fruits = ["apple","banana","orange"];
// fruits.pop();
// console.log(fruits); // Output: ["apple", "banana"]

// 3. Add "Monday" to the beginning of a days array using unshift().
// let days = ["tuesday","wednesday","thursday"];
// days.unshift("monday");
// console.log(days); // Output: ["monday", "tuesday", "wednesday", "thursday"]

// 4. Remove the first item from an array of colors using shift().
// let colors = ["red","green","blue"];
// colors.shift();
// console.log(colors); // Output: ["green", "blue"]


// 5. Use splice() to insert "Math" and "Science" at index 2 of a subjects array.
// let subjects = ["english","history","art"];  
// subjects.splice(2, 0, "Math", "Science");
// console.log(subjects); output: ["english","history", "Math", "Science","art"]


// 6. Use splice() to remove 2 elements starting from index 1 of a cities array.
// let cities = ["quetta","lahore","karachi","islamabad"];
// cities.splice(1,2);
// console.log(cities); // Output: ["quetta", "islamabad"]


// 7. Use slice() to get the first 3 items from a countries array.
// let countries = ["pakistan","india","china","japan","turkey"];
// let firstthreecountries = countries.slice(0,3);
// console.log(firstthreecountries); // Output: ["pakistan", "india", "china"]


// 8. Convert the string "apple,banana,mango" into an array using split().
// let fruit = "apple,banana,mango";
// let fruitarray = fruit.split(",");
// console.log(fruitarray); // Output: ["apple", "banana", "mango"]


// 9. Join an array of characters ['J','S'] into a single string using join().
// let letters = ["m","s"];
// let word = letters.join("");
// console.log(word); // Output: "ms"


// 10. Combine two arrays ['pen','pencil'] and ['eraser','sharpener'] using
// concat().
// let array1 = ["pen","pencil"];
// let array2 = ["eraser","sharpner"],
// combine = array1.concat(array2);
// console.log(combine); // Output: ["pen", "pencil", "eraser", "sharpner"]


// 11. Sort an array of numbers [10, 5, 2, 8] using sort() (as strings).
// let numbers = [75,50,25,90,100,0];
// let arrange = numbers.sort();
// console.log(arrange); // Output: [0, 100, 25, 50, 75, 90] (sorted as strings)



// 12. Sort an array of names alphabetically using sort().
// let names = ["ali","zohan","shakir","ahmad"];
// let arrange = names.sort();
// console.log(arrange); // Output: ["ahmad", "ali", "shakir", "zohan"] (sorted alphabetically)


// 13. Reverse the order of an array of numbers using reverse().
// let num = [1,2,3,4,5];
// let reverse = num.reverse();
// console.log(reverse); // Output: [5,4,3,2,1] (reversed order)


// 14. Use indexOf() to find the index of "Blue" in a colors array.
// let colors = ["red","green","blue","yellow","orange"];
// let find = colors.indexOf("yellow");
// console.log(find); // Output: 3 (index of "yellow" in the array)


// 15. Add three new items to an empty array using push().
// let items = [];
// items.push("beans","rice","sugar");
// console.log(items); // Output: ["beans", "rice", "sugar"] (added three new items)


// 16. Remove the middle item from an array of 5 numbers using splice().
// let num = [1,2,3,4,5,6,7,8,9,10];
// num.splice(2,1); 
// console.log(num); // Output: [1, 2, 4, 5 , 6, 7, 8, 9, 10] (removed the middle item)





// 17. Create a string "HTML CSS JavaScript" and convert it to an array using split().
// let language = "html , css , javascript";
// let combine = language.split(",");
// console.log(combine); // Output: ["html", "css", "javascript"] (converted string to array)


// 18. Create an array ['a', 'b', 'c'], reverse it, then join it with - in between.
// let letters = ["a","b","c"];
// let reverse = letters.reverse();
// let join = reverse.join("-");
// console.log(join); // Output: "c-b-a" (reversed and joined with -)


// 19. Check if "Karachi" exists in an array using indexOf() and show its index.
// let cities = ["lahore","quetta","lahore","karachi","peshawar"];
// let check = cities.indexOf("karachi");
// if (check !== -1) {
//     console.log(`Karachi exists in the array at index: ${check}`); // Output: Karachi exists in the array at index: 3


// } else {
//     console.log("Karachi does not exist in the array.");
// }


// 20. Concatenate two arrays of even and odd numbers using concat() and then reverse
// them.
// let even = [2,4,6,8,10];
// let odd = [1,3,5,7,9,11];
// let concat = even.concat(odd);
// let reverse = concat.reverse();
// console.log(reverse);  output:  [11, 9, 7, 5, 3, 1, 10, 8, 6, 4, 2] (concat and reversed)





//   ==========================📝 JavaScript next part=======================


//   ========================= alert part 1=======================

// 1. Write a script to greet your website visitor using JS alert
// box.

// alert("welcome to my website!")


// 2. Write a script to display following message on your web
// page:

// alert("Error!, please enter a valid password") output: "Error!, please enter a valid password"


// 3. Write a script to display following message on your web
// page: (Hint : Use line break)

// alert("welcome to js land.... \nHappy coding") output: "welcome to js land....
//                                                         nHappy coding"


// 4. Write a script to display following messages in sequence:

// alert("welcome to js land")
// alert("happy coding ")

// 5. Generate the following message through browser’s
// developer console:

// completed

// 6. Make use of alerts in your new/existing HTML & CSS
// project.

// completed in question6.html

// 7. Practice placement of <script></script> element in
// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)


// completed in question6.html


//   ========================= VARIABLES FOR STRINGS part 2=======================

// 1. Declare a variable called username.

// var username;

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.

// var myname = "mustafa rahimi"

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// var message = "hello world"
// alert(message)


// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes

// var name = "mustafa"
// var age = "19"
// var qualification = "matric pass"

// alert("name:"+ name)
// alert("age:"+ age)
// alert("qualification:"+ qualification)

// 5. Write a script to display the following alert using one JS
// variable:

// var check = "pizza\npizz\npiz\npi\np"
// alert(check)


// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

// var email = "mustafarahimi@gmail.com"
// alert("my email address is :" + email)

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

// var book = "a smarter way to learn javascript"
// alert("i am learning from this book:" + book)


// 8. Write a script to display this in browser through JS

// var message = "my name is ali and i want to learn javascript"
// document.write(message)

// 9. Store following string in a variable and show in alert and
// browser through JS

// var pattern = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(pattern)
// console.log(pattern)


//   ========================= VARIABLES FOR NUMBERS  part 3=======================

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box

// var age = "20"
// alert("my age is " + age)

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

// var visitd = "10"

// alert("you have visited this website " + visitd + " times")


// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

// var birthyear = "my age year is 2000"
// document.write(birthyear)

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// var visitorname = "mustafa"
// var visitorproduct = "shoes"
// var visitorquantity = "2 pair"

// document.write(visitorname + " ordered " + visitorquantity + " " + visitorproduct + " from xyz clothing store")




//   ========================= VARIABLE NAMES: LEGAL & ILLEGAL  part 4=======================


// 1. Declare 3 variables in one statement.

// var name,age,fathername;

// 2. Declare 5 legal & 5 illegal variable names.

// var myName;
// var age;
// var student_1;
// var $price;
// var userName;

// var 1name;
// var my-name;
// var var;
// var user name;
// var @price;


// 3. Display this in your browser

// var namescontain = "Letters, numbers, dollar signs ($), and underscores (_)."
// var begin = "A letter, dollar sign ($), or underscore (_)."
// var names = "sensitive"
// var words = "Keywords"

// document.write("variable names can contain, " + namescontain + "<br>")
// document.write("variable must begin with, " + begin + "<br>")
// document.write("variable names are case, " + names + "<br>")
// document.write("variable names should not be js, " + words + "<br>")



//   ========================= MATH EXPRESSIONS   part 5=======================

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// let num1 = 3
// let num2 = 2

// let total = num1 + num2

// document.write("the sum of " + num1 + " and " + num2 + " is " + total)

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// let num1 = 3
// let num2 = 2

// let total = num1 - num2

// document.write("the subtract of " + num1 + " and " + num2 + " is " + total)

// let num1 = 3
// let num2 = 2

// let total = num1 * num2

// document.write("the multiplication of " + num1 + " and " + num2 + " is " + total)


// let num1 = 3
// let num2 = 2

// let total = num1 % num2

// document.write("the modulous of " + num1 + " and " + num2 + " is " + total)


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Valueafter addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.


// a. Declare a variable
// var num;

// // b. Display the value after declaration
// document.write("Value after variable declaration is: " + num + "<br>");

// // c. Initialize the variable with a number
// num = 5;

// // d. Display the initial value
// document.write("Initial value: " + num + "<br>");

// // e. Increment the variable
// num++;

// // f. Display the value after increment
// document.write("Value after increment is: " + num + "<br>");

// // g. Add 7 to the variable
// num = num + 7;

// // h. Display the value after addition
// document.write("Value after addition is: " + num + "<br>");

// // i. Decrement the variable
// num--;

// // j. Display the value after decrement
// document.write("Value after decrement is: " + num + "<br>");

// // k. Find the remainder after dividing by 3
// var remainder = num % 3;

// // l. Display the remainder
// document.write("The remainder is: " + remainder);


// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie. Example output:

// let price = 600

// let totalprice = price * 5

// document.write("the price of five ticket is " + price)


// 5. Write a script to display multiplication table of any
// number in your browser. E.g

// document.write("4 * 1 = 4" + "<br>")
// document.write("4 * 2 = 8" + "<br>")
// document.write("4 * 3 = 12" + "<br>")
// document.write("4 * 4 = 16" + "<br>")
// document.write("4 * 5 = 20" + "<br>")
// document.write("4 * 6 = 24" + "<br>")
// document.write("4 * 7 = 28" + "<br>")
// document.write("4 * 8 = 32" + "<br>")
// document.write("4 * 9 = 36" + "<br>")
// document.write("4 * 10 = 40" + "<br>")

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:

// a. Store a Celsius temperature into a variable.
// var celsius = 25;

// // b. Convert it to Fahrenheit.
// var fahrenheit = (celsius * 9/5) + 32;

// document.write(celsius + "°C is " + fahrenheit + "°F <br>");

// // c. Store a Fahrenheit temperature into a variable.
// var fahrenheitTemp = 70;

// // d. Convert it to Celsius.
// var celsiusTemp = (fahrenheitTemp - 32) * 5/9;

// document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C");


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// let price1 = "300"
// let quantity1 = 3
// let price2 = "340"
// let quantity2 =  5

// let total1 = price1 * quantity1
// let total2 = price2 * quantity2
// let shipping = +"1000"

// let total = total1 + total2 + shipping

// // document.write(total)

// document.write("price of item one is " + price1 + "<br>"+ "<br>")
// document.write("quantity of item one is " + quantity1 + "<br>"+ "<br>")
// document.write("price of item two is " + price2 + "<br>"+ "<br>")
// document.write("quantity of item two is " + quantity2 + "<br>"+ "<br>")
// document.write("shipping charges :" + shipping + "<br>"+ "<br>")

// document.write("your total bill is :" + total + "<br>"+ "<br>")

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// let totalmark = 1000
// let marksobtained = 500

// let percentage = (marksobtained / totalmark) * 100

// document.write("total mark is :" + totalmark + "<br>")
// document.write("mark you got :" + marksobtained + "<br>")
// document.write("total percentage is : " + percentage + "<br>")

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)


// let dollor = 10
// let riyal = 25

// let pkistanicurrency = (dollor * 104.80) + (riyal * 28)

// document.write("total currency in pkr :" + pkistanicurrency)


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// let num = 10

// num = num + 5
// num = num * 10
// num = num / 2

// document.write(num)


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

// let currentyear = 2026
// let birthyear = 2008

// let datebirth = currentyear - birthyear
// let birth = datebirth - 1

// document.write("current year is: " + currentyear + "<br>")
// document.write("birth year is: " + birthyear + "<br>")
// document.write("your current age is " + datebirth + " or " + birth+ "<br>" )


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// a. Store a radius into a variable
// var radius = 5;

// // b. Calculate the circumference
// var circumference = 2 * 3.142 * radius;

// // Display circumference
// document.write("The circumference is " + circumference + "<br>");

// // c. Calculate the area
// var area = 3.142 * radius * radius;

// // Display area
// document.write("The area is " + area);


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// let snack = "chocolate"
// let currentage = 20
// let maxage = 80

// let eat = 2

// let total = (maxage - currentage) * 365 * eat

// document.write("favrote snake:" + snack + "<br>")
// document.write("current age:" + currentage + "<br>")
// document.write("max age:" + maxage + "<br>")
// document.write("eat per day:" + eat + "<br>")

// document.write("you need " + total + "chocalates till the end of your life")





//   ========================= MATH EXPRESSIONS   part 6=======================


// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// var a = 15;

// document.write("The value of a is: " + a + "<br>");

// document.write("The value of a++ is: " + a++ + "<br>");

// document.write("The value of ++a is: " + ++a + "<br>");

// document.write("The value of --a is: " + --a + "<br>");

// document.write("The value of a-- is: " + a-- + "<br>");

// document.write("The final value of a is: " + a);


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


// var a = 2, b = 1;

// var result = --a - --b + ++b + b--;

// document.write("a is: " + a + "<br>");
// document.write("b is: " + b + "<br>");
// document.write("result is: " + result);


// 3. Write a program that takes input a name from user &
// greet the user.

// let name = "mustafa"
// alert("hello, !" + name)

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// Take input from user
// var number = prompt("Enter a number:", 5);

// // If user does not enter a number, use 5
// if (number === null || number === "") {
//     number = 5;
// }

// // Display multiplication table
// document.write("<h2>Multiplication Table of " + number + "</h2>");

// document.write(number + " x 1 = " + number * 1 + "<br>");
// document.write(number + " x 2 = " + number * 2 + "<br>");
// document.write(number + " x 3 = " + number * 3 + "<br>");
// document.write(number + " x 4 = " + number * 4 + "<br>");
// document.write(number + " x 5 = " + number * 5 + "<br>");
// document.write(number + " x 6 = " + number * 6 + "<br>");
// document.write(number + " x 7 = " + number * 7 + "<br>");
// document.write(number + " x 8 = " + number * 8 + "<br>");
// document.write(number + " x 9 = " + number * 9 + "<br>");
// document.write(number + " x 10 = " + number * 10 + "<br>");

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


// a) Take three subject names from user
// var subject1 = prompt("Enter first subject name:");
// var subject2 = prompt("Enter second subject name:");
// var subject3 = prompt("Enter third subject name:");

// // b) Total marks for each subject
// var totalMarks = 100;

// // c) Take obtained marks for first subject
// var marks1 = +prompt("Enter obtained marks in " + subject1);

// // d) Take obtained marks for remaining 2 subjects
// var marks2 = +prompt("Enter obtained marks in " + subject2);
// var marks3 = +prompt("Enter obtained marks in " + subject3);

// // e) Calculate total marks and percentage
// var obtainedMarks = marks1 + marks2 + marks3;
// var maximumMarks = totalMarks * 3;
// var percentage = (obtainedMarks / maximumMarks) * 100;

// // Display marks sheet
// document.write("<h1>Marks Sheet</h1>");

// document.write("Total Marks: " + maximumMarks + "<br><br>");

// document.write(subject1 + ": " + marks1 + "<br>");
// document.write(subject2 + ": " + marks2 + "<br>");
// document.write(subject3 + ": " + marks3 + "<br><br>");

// document.write("Obtained Marks: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "%");




// /   ========================= USER INPUT & CONDITIONAL STATEMENT   part 7=======================

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// Take city name from user
// var city = prompt("Enter your city name:");

// // Check city name
// if (city === "Karachi") {
//     alert("Welcome to city of lights");
// }


// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


// Take gender from user
// var gender = prompt("Enter your gender (male/female):");

// // Check gender
// if (gender === "male") {
//     alert("Good Morning Sir");
// }
// else if (gender === "female") {
//     alert("Good Morning Ma'am");
// }


// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”


// // Take remaining fuel from user
// var fuel = +prompt("Enter remaining fuel in your car (litres):");

// // Check fuel quantity
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }


// var a = 4;

// if (++a === 5) {
//     alert("given condition for variable a is true");
// }


// var b = 82;

// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// var c = 12;

// if (c++ === 13) {
//     alert("condition 1 is true");
// }

// if (c === 13) {
//     alert("condition 2 is true");
// }

// if (++c < 14) {
//     alert("condition 3 is true");
// }

// if (c === 14) {
//     alert("condition 4 is true");
// }


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }


// if (true) {
//     alert("True");
// }

// if (false) {
//     alert("False");
// }



// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

// // Take marks of three subjects
//     var subject1 = +prompt("Enter marks of Subject 1:");
//     var subject2 = +prompt("Enter marks of Subject 2:");
//     var subject3 = +prompt("Enter marks of Subject 3:");

//     // Calculate total and percentage
//     var totalMarks = 300;
//     var obtainedMarks = subject1 + subject2 + subject3;
//     var percentage = (obtainedMarks / totalMarks) * 100;

//     // Calculate grade and remarks
//     var grade;
//     var remarks;

//     if (percentage >= 80) {
//         grade = "A+";
//         remarks = "Excellent";
//     }
//     else if (percentage >= 70) {
//         grade = "A";
//         remarks = "Very Good";
//     }
//     else if (percentage >= 60) {
//         grade = "B";
//         remarks = "Good";
//     }
//     else if (percentage >= 50) {
//         grade = "C";
//         remarks = "Fair";
//     }
//     else if (percentage >= 40) {
//         grade = "D";
//         remarks = "Pass";
//     }
//     else {
//         grade = "F";
//         remarks = "Fail";
//     }

//     // Display result on webpage
//     document.write("<h2>Marks Sheet</h2>");
//     document.write("Total Marks: " + totalMarks + "<br>");
//     document.write("Marks Obtained: " + obtainedMarks + "<br>");
//     document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
//     document.write("Grade: " + grade + "<br>");
//     document.write("Remarks: " + remarks);



// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// Store secret number
// var secretNumber = 7;

// // Take guess from user
// var guess = +prompt("Guess a number between 1 and 10:");

// // Check the guess
// if (guess === secretNumber) {
//     alert("Bingo! Correct answer");
// }
// else if (guess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// }


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3

// // Take number from user
// var number = +prompt("Enter a number:");

// // Check whether number is divisible by 3
// if (number % 3 === 0) {
//     alert("The number is divisible by 3");
// }


// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// // Take number from user
// var number = +prompt("Enter a number:");

// // Check whether number is even or odd
// if (number % 2 === 0) {
//     alert("The number is Even");
// }
// else {
//     alert("The number is Odd");
// }


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// Take temperature from user
// var T = +prompt("Enter temperature:");

// // Check temperature
// if (T > 40) {
//     alert("It is too hot outside.");
// }
// else if (T > 30) {
//     alert("The Weather today is Normal.");
// }
// else if (T > 20) {
//     alert("Today's Weather is cool.");
// }
// else if (T > 10) {
//     alert("OMG! Today's weather is so Cool.");
// }


// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var operator = prompt("Enter operation (+, -, *, /, %):");

// var result;

// if (operator === "+") {
//     result = num1 + num2;
//     alert("Addition: " + result);
// }
// else if (operator === "-") {
//     result = num1 - num2;
//     alert("Subtraction: " + result);
// }
// else if (operator === "*") {
//     result = num1 * num2;
//     alert("Multiplication: " + result);
// }
// else if (operator === "/") {
//     if (num2 !== 0) {
//         result = num1 / num2;
//         alert("Division: " + result);
//     }
//     else {
//         alert("Cannot divide by zero!");
//     }
// }
// else if (operator === "%") {
//     result = num1 % num2;
//     alert("Modulus: " + result);
// }
// else {
//     alert("Invalid operator!");
// }

// / /   ========================= IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS   part 8=======================


// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


// var char = prompt("Enter a character:");

// var ascii = char.charCodeAt(0);

// if (ascii >= 48 && ascii <= 57) {
//     alert("The given input is a Number.");
// }
// else if (ascii >= 65 && ascii <= 90) {
//     alert("The given input is an Uppercase Letter.");
// }
// else if (ascii >= 97 && ascii <= 122) {
//     alert("The given input is a Lowercase Letter.");
// }
// else {
//     alert("The given input is a special character.");
// }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal

// var num1 = +prompt("Enter first integer:");
// var num2 = +prompt("Enter second integer:");

// if (num1 > num2) {
//     alert(num1 + " is larger.");
// }
// else if (num2 > num1) {
//     alert(num2 + " is larger.");
// }
// else {
//     alert("Both integers are equal.");
// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var num = +prompt("Enter a number:");

// if (num > 0) {
//     alert("The number is Positive.");
// }
// else if (num < 0) {
//     alert("The number is Negative.");
// }
// else {
//     alert("The number is Zero.");
// }

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// var char = prompt("Enter a character:");

// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
//     char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {

//     alert(true);
// }
// else {
//     alert(false);
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var correctPassword = "12345";

// var userPassword = prompt("Enter your password:");

// if (userPassword === "") {
//     alert("Please enter your password");
// }
// else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
// }
// else {
//     alert("Incorrect password");
// }

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// alert(greeting);

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements


// var time = +prompt("Enter time in 24-hour format (e.g. 1900):");

// if (time >= 0 && time < 1200) {
//     alert("Good morning!");
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!");
// }
// else if (time >= 1700 && time <= 2359) {
//     alert("Good evening!");
// }
// else {
//     alert("Invalid time!");
// }



// / /   ========================= arrays   part 9=======================

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// studentNames.push("Ali");
// studentNames.push("Ahmed");
// studentNames.push("Sara");

// alert(studentNames);


// 2. Declare an empty array using JS object notation to store
// student names in future.

// studentNames.push("Ali");
// studentNames.push("Ahmed");
// studentNames.push("Sara");

// alert(studentNames);


// 3. Declare and initialize a strings array.

// var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// 4. Declare and initialize a numbers array
// var numbers = [10, 20, 30, 40, 50];

// 5. Declare and initialize a boolean array.
// var isPassed = [true, false, true, true, false];

// 6. Declare and initialize a mixed array.
// var mixedArray = ["Ali", 25, true, "Ahmed", 90, false];

