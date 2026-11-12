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

