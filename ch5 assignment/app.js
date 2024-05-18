  //  question 1 and 2
    document.write("The sum of 5 and 3 is " + (5 + 3) + "<br>");
    document.write("The subtraction of 5 and 3 is " + (5 - 3) + "<br>");
    document.write("The multiplicaton of 5 and 3 is " + (5 * 3) + "<br>");
    document.write("The dividision of 5 and 3 is " + (5 / 3) + "<br>");
    document.write("The reminder of 5 and 3 is " + (5 % 3) + "<br>");
    document.write("<br>");
    document.write("<br>");



    // question 3
    // declare a variable
    let myVariable;
    // show the value of variable in your browser
    document.write("value after variable declaration is: " + myVariable+ "<br>");
    // Initialize the variable with some number
    myVariable = 5;
     // show the value of variable in your browser
     document.write("Initial value: " + myVariable + "<br>");
    //  Increment the varible
    myVariable++;
     // show the value of variable in your browser
     document.write("value after Increment is: " + myVariable + "<br>");
    // add 7 to the variable
    myVariable += 7;
     // show the value of variable in your browser
     document.write("value after addition is: " + myVariable + "<br>");
    //  decrement the variable 
    myVariable--;
     // show the value of variable in your browser
     document.write("value after decrement is: " +myVariable + "<br>");
    //  show the reminder after dividing the variable'svalue by 3
    let reminder = myVariable % 3
     document.write("The reminder  is: " + reminder + "<br>");



     document.write("<br>");
     document.write("<br>");
     document.write("<br>");

    //  question 4
    //  store the ticket in  variable 
    let ticketPrice = 600;
    // calculate the cost of buying 5 tickets
    let totalCost = ticketPrice * 5;
    // display the result
    document.write("The cost of buying 5 movie tickets is: " + totalCost + "PKR");


    document.write("<br>");
     document.write("<br>");
     document.write("<br>");


    // question 5
    // table of any number
    document.write("table of 6" + "<br>");
    document.write('6 x 1 = ', 6*1, '<br>')
    document.write('6 x 2 = ', 6*2, '<br>')
    document.write('6 x 3 = ', 6*3, '<br>')
    document.write('6 x 4 = ', 6*4, '<br>')
    document.write('6 x 5 = ', 6*5, '<br>')
    document.write('6 x 6 = ', 6*6, '<br>')
    document.write('6 x 7 = ', 6*7, '<br>')
    document.write('6 x 8 = ', 6*8, '<br>')
    document.write('6 x 9 = ', 6*9, '<br>')
    document.write('6 x 10 = ', 6*10, '<br>')

    document.write("<br>");
     document.write("<br>");
     document.write("<br>");

       // question 6
        // Store a Celsius temperature into a variable
  let celsius = 37;

  // Convert it to Fahrenheit and output
  let fahrenheit = (celsius * 9/5) + 32;
  document.write(celsius + "°C is " + fahrenheit + "°F" + "<br>");

  // Store a Fahrenheit temperature into a variable
  let fahrenheit2 = 98;

  // Convert it to Celsius and output
  let celsius2 = (fahrenheit2 - 32) * 5/9;
  document.write(fahrenheit2 + "°F is " + celsius2 + "°C");


  document.write("<br>");
  document.write("<br>");
  document.write("<br>");



  //    // question 7

  let item1Price = 0;
  let item2Price = 0;
  let item1Quantity = 0;
  let item2Quantity = 0;
  let shippingCharges = 0;
  
  // Get input from user (replace with actual input mechanism)
  item1Price = parseFloat(prompt("Enter price of item 1: "));
  item2Price = parseFloat(prompt("Enter price of item 2: "));
  item1Quantity = parseInt(prompt("Enter quantity of item 1: "));
  item2Quantity = parseInt(prompt("Enter quantity of item 2: "));
  shippingCharges = parseFloat(prompt("Enter shipping charges: "));
  
  // Calculate subtotal
  let subtotal = (item1Price * item1Quantity) + (item2Price * item2Quantity);
  
  // Calculate total
  let total = subtotal + shippingCharges;
  
  // Print output
  document.write("Subtotal: $" + subtotal.toFixed(2));
  document.write ("Shipping Charges: $" + shippingCharges.toFixed(2));
  document.write("Total: $" + total.toFixed(2));
  

  document.write("<br>");
  document.write("<br>");
  document.write("<br>");   
  
     // question 8
    //  store total marks and marks obtained by a student in 2 variables
    let totalMarks = 100;
    let marksObtained = 80;
    // compute the percentage
    let percentage = (marksObtained / totalMarks)* 100;
    // show the result in the browser
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks: Obtained; " + marksObtained + "<br>");
    document.write("Percentage: " + percentage +  "%");



    document.write("<br>");
  document.write("<br>");
  document.write("<br>");   
  
     // question 9

 // Assume we have 10 US dollars and 25 Saudi Riyals
 let usd = 10;
 let sar = 25;

 // Convert the total currency to Pakistani Rupees in a single expression
 let pkRupess = (usd * 104.80) + (sar * 28);

 // Display the result
 document.write("Total in Pakistani Rupees: " + pkRupess);




 document.write("<br>");
  document.write("<br>");
  document.write("<br>");   
  
     // question 10
 let num = 10;
let result = (num + 5) * 10 / 2;
document.write(result);




document.write("<br>");
document.write("<br>");
document.write("<br>");   

   // question 11
// Store the current year
let currentYear = 2024;

// Store their birth year
let birthYear = 2003;

// Display the current year
document.write("Current Year: " + currentYear + "<br>");

// Display the birth year
document.write("Birth Year: " +  birthYear + "<br>");

// Calculate and display the age
document.write("Your age is " + (currentYear - birthYear) + "<br>");



document.write("<br>");
document.write("<br>");
document.write("<br>");   

   // question 12

// Store a radius into a variable
let radius = 5;

// Calculate the circumference
let circumference = 2 * 3.142 * radius;

// Output the circumference
document.write(`The circumference is ${circumference}`+ "<br>");

// Calculate the area
let area = 3.142 * radius ** 2;

// Output the area
document.write(`The area is ${area}`);



document.write("<br>");
document.write("<br>");
document.write("<br>");   

   // question 13


// Store your favorite snack into a variable
let favoriteSnack = "chocolate chips";

// Store your current age into a variable
let currentAge = 30;

// Store a maximum age into a variable
let maxAge = 100;

// Store an estimated amount per day (as a number)
let amountPerDay = 5;

// Calculate how many would you eat total for the rest of your life
let totalForLife = (maxAge - currentAge) * 365 * amountPerDay;

// Output the result to the screen
document.write( "Favorite Snack: " + favoriteSnack + "<br>") ;
document.write( "Current Age: " + currentAge + "<br>") ;
document.write( "Max Age: " + maxAge + "<br>") ;
document.write( "Amount Per Day: " + amountPerDay + "<br>") ;
document.write(`You will need ${totalForLife} ${favoriteSnack} to last you until the ripe old age of ${maxAge}.`);