// alert('Hello world')


// function abc (){
//     console.log("Testing fuction calling");
// }
// console.log(abc);
// abc();


// function printmymessage (message){
//     console.log("Mymessage:"+message);
// }
// printmymessage("a")
// printmymessage("Ahsan")
// printmymessage("Muhammad Ahsan")



// function calculatorDiscount(amount,dis){
//     var price = amount;
//     var discount = dis;
//     var total = price-discount
//     console.log(total);
// }
// calculatorDiscount(400,100);
// calculatorDiscount(1000,200);
// calculatorDiscount(17000,1000)


//==========================
//local variable
//Global variable
//Return


//strong scope

// function abc(){
//     var a = "abc";
//     console.log(a);
// }
// abc();


//week scope

// if(true){
//     var a = "abc";
// }
// console.log(a);


// if(true){
//     if(true){
//     console.log(a);
// }
// }

// var total;
// function calcDiscount(price,discount){
//     total = price-discount
// }
// calcDiscount(1000,200);
// // calcDiscount(2000,300);
// console.log(total);


// function abc(){
//     var a = "Ahsan";
//     return a;
// }
// abc();



//FUNCTIONS PRACTICE TASK

//check the string including "T" and push in other array and return that array.

//Qno: 01
//Write a function which tells letter counts of (word).


// Qno: 02
//write a function which tells that the word which is passed in the argument is palindrome or not (same pronounciation from start to end and from end to start), example : mom, madam, these are palindrome.

// Qno: 03
// create a function that takes 2 perameters, in first perameters take date and in second perameter take a number of days
// the task is showing the date after the counting of second perameter according the date of first perameter.

// Qno: 04
// write a function name calculateSquareRoot taking 1 perameter, calculate square root of the number which is given in perameter. and return the value.

// Qno: 05
// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// Write a JavaScript program to calculate the days left before Eid-ul-Fitr.

// //FINDING THE T;
// function filterStrings(arr) {
//     var resultArray = [];

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].includes("T")) {
//             resultArray.push(arr[i]);
//         }
//     }

//     return resultArray;
// }

// var arr1 = ["UTY", "TYU", "QWE", "FGH", "TRT", "MQM", "TFT", "VJVJVT", "TVJVJVJ", "JHB", "BJ", "JBVH","TWO"];
// var filteredArray = filterStrings(arr1);
// console.log(filteredArray);



// var arr1 = ["UHY", "FTD", "JUY", "DTSSSR", "TFT", "VJJG", "FHT", "VJVJVT", "TVJVJVJ", "JHB", "BJ", "JBVH","TWO"];
// var arrWithT = [];

// for (var i = 0; i < arr1.length; i++) {
//   if (arr1[i].includes("T")) {
//     arrWithT.push(arr1[i]);
//   }
// }

// console.log(arrWithT);
// Now arrWithT contains ["FTD", "DTSSSR", "TFT", "VJVJVT", "TVJVJVJ"]



// var a = ["AHSAN", "TARIQ", "HASNAIN", "TAHA", "ABU BAKAR", "HUSSAIN", "UMAR", "USMAN", "ALI", "NOOR", "HAMZA", "ZAID", "HUNAIN", "HOOR"]
// var  b = [];

// for (var i = 0; i < a.length; i++) {
//     if (a[i].includes("A")) {
//         b.push(a[i]);
//     }
// }
// console.log(b);


// Qno: 01
//Write a function which tells letter counts of (word).

// function countLetters(word) {
//     var letterCounts = {};

//     // Har harf ki ginti shumar karna
//     for (var i = 0; i < word.length; i++) {
//         var letter = word[i];

//         // Agar harf pehli dafa aaya hai to uski count 1 karna
//         // Warna count barhane ke liye 1 ziyada kar dena
//         if (letterCounts[letter] === undefined) {
//             letterCounts[letter] = 1;
//         } else {
//             letterCounts[letter]++;
//         }
//     }

//     return letterCounts;
// }

// var word = "ahsan";
// var result = countLetters(word);
// console.log(result);


// Qno: 02
//write a function which tells that the word which is passed in the argument is palindrome or not (same pronounciation from start to end and from end to start), example : mom, madam, these are palindrome.

// function isPalindrome(word) {
//     // Harf ko chhota kar ke case-sensitive hone wale muqablay ko handle karna
//     var lowerCaseWord = word.toLowerCase();
    
//     // Sirf alphanumeric characters ko bachane ke liye word mein se non-alphanumeric characters ko nikalna
//     var alphanumericOnly = lowerCaseWord.replace(/[^a-z0-9]/g, '');

//     // Word ko ulta karke reverse karna
//     var reversed = alphanumericOnly.split('').reverse().join('');

//     // Original word aur reversed word ka muqabla karna
//     return alphanumericOnly === reversed;
// }

// // Kuch examples ke sath function ka istemal dikhana
// console.log(isPalindrome("mom")); // true
// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false



// Qno: 03
// create a function that takes 2 perameters, in first perameters take date and in second perameter take a number of days
// the task is showing the date after the counting of second perameter according the date of first perameter.

// function addDaysToDate(date, days) {
//     // Di gayi tareekh ko copy karke modify karna
//     var resultDate = new Date(date);

//     // Dinon ki tadaad ko di gayi tareekh mein shamil karna
//     resultDate.setDate(resultDate.getDate() + days);

//     // Modified tareekh ko wapas karna
//     return resultDate;
// }

// // Function ka istemal karke tareekh ko update karke dikhana
// var givenDate = new Date();
// var daysToAdd = 5;
// var newDate = addDaysToDate(givenDate, daysToAdd);

// console.log("Di gayi tareekh:", givenDate.toDateString());
// console.log("Dinon ki tadaadi:", daysToAdd);
// console.log("Nayi tareekh:", newDate.toDateString());


// Qno: 04
// write a function name calculateSquareRoot taking 1 perameter, calculate square root of the number which is given in perameter. and return the value.
// Function to calculate square root
// function calculateSquareRoot(number) {
//     // Check if the number is negative
//     if (number < 0) {
//         return "Number cannot be negative";
//     }
//     // Calculate square root using Math.sqrt() function
//     var squareRoot = Math.sqrt(number);
//     // Return the calculated square root
//     return squareRoot;
// }

// // Example usage
// var number = 16; // Change the number as per requirement
// var result = calculateSquareRoot(number);
// console.log("Square root of", number, "is", result);



// function checkpolendrome(word){
//     var a = word.split("").reverse().join("");
//     console.log(a);
// }
// checkpolendrome("ahsan")


// function tellAfterDate(dt,num){
//     var a = newDate(dt);
//     a.setdate(newDate(dt).getDate()+num);
//     console.log(a);
// }


// function showtime(){
//     var dt = new Date();

//     var arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     var dayIdex = dt.getDay();
//     console.log("Today is :"+arr[dayIdex]);
// }
// showtime();


//Qno: 05 Write a JavaScript program to calculate the days left before Eid-ul-Fitr.
// Eid-ul-Fitr se bachay hue dinon ka hisaab karnay wala function
// function daysLeftUntilEid() {
//     // Eid-ul-Fitr ki date ka tayyun karein
//     const eidDate = new Date('2024-04-10');

//     // Aaj ki date ko lein
//     const today = new Date();

//     // Eid-ul-Fitr tak bachay hue dinon ka tayyun karein
//     const daysLeft = Math.ceil((eidDate - today) / (1000 * 60 * 60 * 24));

//     // Natija ko print karein
//     console.log('Eid-ul-Fitr tak bachay hue din:', daysLeft);
// }

// // Function ko call karein
// daysLeftUntilEid();


//TIKTOK APP
