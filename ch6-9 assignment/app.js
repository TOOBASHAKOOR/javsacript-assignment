// question 2

var a = 2;
var b = 1;
var result;

// Stage 1: --a
a = --a;

// Stage 2: --a - --b
a = --a - --b;

// Stage 3: --a - --b + ++b
a = --a - --b + ++b;

// Stage 4: --a - --b + ++b + b--
result = --a - --b + ++b + b--;
document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");
document.write("result = " + result + "<br>");



document.write("<br>");
document.write("<br>");
document.write("<br>");

// question 3

// Get the name from the user
var name = prompt("Please enter your name:");

// Greet the user
alert("Hello, " + name + "! Nice to meet you!");




document.write("<br>");
document.write("<br>");
document.write("<br>");

// question 5


// Get the number from the user
var num = prompt("Enter a number (or press OK for default):");

// Set default value if user doesn't enter a number
if (num === null || num === "") {
  num = 5;
}

// Display multiplication table
document.write("Multiplication Table of " + num + "<br>");
for (var i = 1; i <= 10; i++) {
  document.write(num + " x " + i + " = " + num * i + "<br>");
}


document.write("<br>");
document.write("<br>");
document.write("<br>");

// question 6


// Take three subjects names from user
var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

// Total marks for each subject
var totalMarks = 100;

// Take obtained marks for each subject
var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// Calculate total marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Display result in a table
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td><td>" + totalMarks + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td><td>" + totalMarks + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td><td>" + totalMarks + "</td></tr>");
document.write("<tr><td>Total</td><td>" + totalObtainedMarks + "</td><td>" + (totalMarks * 3) + "</td></tr>");
document.write("<tr><td>Percentage</td><td>" + percentage.toFixed(2) + "%</td><td></td></tr>");
document.write("</table>");
