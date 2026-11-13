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