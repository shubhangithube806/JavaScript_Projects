

function f1_Variables() {

    //Variables :
    //Variables are container for storing data
    //JavaScript Variables can be declared in 4 ways:
    //1.Automatically   --> x = 5;
    //2.Using var       --> var x = 10;
    //3.Using let       --> let x = 12;
    //4.Using const     --> const pi = 3.14;

    //Variables / Identifires naming rule:
    //All JavaScript variables must be identified with unique names.
    //Names can contain letters(a-z,A-Z), digits(0-9), underscores(_), and dollar($) signs.
    //Names must begin with a letter.  --> e.g firstName, lastName
    //Names can also begin with $ 
    //Names can not begin with digit
    //Names are case sensitive
    //Reserved words (like JavaScript keywords) cannot be used as names.

    // var keyword: 
    // Variables declared with var have Global Scope.
    // Variables declared with var must be Declared before use.
    // Variables declared with var can be Redeclared.


    // let keyword: 
    // Variables declared with let have Block Scope.
    // Variables declared with let must be Declared before use.
    // Variables declared with let cannot be Redeclared in the same scope.


    // const keyword: 
    // Variables defined with const cannot be Redeclared
    // Variables defined with const cannot be Reassigned
    // Variables defined with const have Block Scope

    // 1.Automatically

    var msg;

    x = 10;
    y = 20;
    z = x + y;

    msg = `z = x + y  --> ${z}`;

    // 2.Using var

    var num1 = 25;
    var num2 = 30;
    var sum = num1 + num2;

    msg += `\nvar sum = num1 + num2  --> ${sum}`;

    // 3. Using let

    let n1 = 15;
    let n2 = 25;
    let s = n1 + n2;

    msg += `\nlet s = n1 + n2   --> ${s}`;

    //4.Using const

    const a = 3.14;
    const b = 9.81;
    const c = a + b;

    msg += `\nconst c = a + b  --> ${c}`;

    alert(msg);
}


function f2_Operators() {
     //There are different types of JavaScript operators:
    //1.Arithmetic Operators
    //2.Assignment Operators
    //3.Comparison Operators
    //4.String Operators
    //5.Logical Operators
    //6.Bitwise Operators
    //7.Ternary Operators
    //8.Type Operators

    //1.Arithmetic Operators
    //Arithmetic Operators are used to perform arithmetic on numbers:

    //a.Addition Operator (+)

    var msg = "";

    let x = 10;
    let y = 40;
    let z = x + y;

    msg = `\n z = x + y     --> ${z}`;

    //b.Substraction Operator (-)

    let a = 50;
    let b = 30; 
    let c = a - b;

    msg += `\n c = a - b     -->${c}`;

    //c.Multiplication Operator (*)

    let n1 = 5;
    let n2 = 7;
    let n = n1 * n2;

    msg += `\n n = n1 * n2   -->${n}`;

    //d.Exponential (power) Operator (**)  

    let e1 = 5;
    let e = e1 ** 2;
    
    msg += `\n  e = e1 ** 2   -->${e}`;

    //e.Division Operator (/)

    let d1 = 5;
    let d2 = 2;
    let d = d1 / d2;
    
    msg += `\n  d = d1 / d2   -->${d}`;

    //f.Increment Operator (++)

    let i1 = 15;
    i1++;
    let i = i1;

    msg += `\n i = i1   -->${i}`;


     //g.Decrement Operator (--)

     let D1 = 15;
     D1--;
     let D = D1;
 
     msg += `\n D = D1   -->${D}`;

     //h.Modulus Operator (%)

     let m1 = 8;
     let m2 = 3;
     let m = m1 % m2;

     msg += `\n  m = m1 % m2    -->${m}`;

     alert (msg);

}


function f3_Assignment() {

     //2.Assignment operator
     //Assignment operators assign values to JavaScript variables.

     //a.Addition Assignment Operator (+=)

     var msg = "";

     let h = 10;
     h += 5;

     msg += `\n Addition Assignment (h += 5) then Value of h is --> ${h}`

     let text = "Hello";
     text += " World";

     msg += `\n Value of text is   --> ${text}`;

     //b.Subtraction Assignment Operator (-=)

     let sub = 20;
     sub -= 13;

     msg += `\n sub -= 13     -->${sub}`;

     //c.Multiplication Assignment Operator

     let multi = 10;
     multi *= 5;

     msg += `\n multi *= 5   -->${multi}`;

     //d.Exponentiation Assignment Operator (**=)

     let expo = 6;
     expo **= 2;

     msg += `\n expo **= 2    -->${expo}`;

     //e.Division Assignment Operator (/=)

     let div = 20;
     div /= 5;

     msg += `\n div /= 5     -->${div}`;

     //f.Remainder Assignment Operator (%=)

     let remind = 10;
     remind %= 5;

     msg += `\n remind %= 5  -->${remind}`;

     alert (msg);
}   
  

function f4_DataType() {

     //Data Type
     //JavaScript has 8 Datatypes
     //1.String     //5.Undefined
     //2.Number     //6.Null
     //3.Bigint     //7.Symbol
     //4.Boolean    //8.Object (The object can contain a.An object b.An array c.A date) 

     //1.String
     //When adding a number and a string, JavaScript will treat the number as a string.
     var msg = "";

     let name = "Shubhangi" + " Gunjal";
     
     msg = `\n name = "Shubhangi" + " Gunjal" --> ${name}`;


     //JavaScript evaluates expressions from left to right.
     //JavaScript treats 15 and 4 as numbers, until it reaches "Shubh".
     let num1 =  15 + 4 + "Shubh";

     msg += `\n num1 =  15 + 4 + "Shubh"  --> ${num1}`;

     //the first operand is a string, all operands are treated as strings.
     let num2 = "Shubh" + 15 + 4;

     msg += `\n num2 = "Shubh" + 15 + 4  --> ${num2}`;


     //2.Number
     //All JavaScript numbers are stored as decimal numbers (floating point).

     let x = 3.14;
     let y = 10;
     let a = x + y;

     msg += `\n  a = x + y   --> ${a}`;


     //3.Bigint 
     //JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be 
     //represented by a normal JavaScript Number.

     let b = BigInt("123344465890754211467097");

     msg += `\n  b = BigInt("123344465890754211467097")  --> ${b}`;

     //4.Booleans
     //Booleans can only have two values: true or false.

     let x1 = 7;
     let x2 = 7;
     let x3 = 8;

    msg += `\n  (x1 == x2) and (x1 == x3)  --> ${(x1 == x2) + " " + (x1 == x3)}`;

     //5.Undefined
     //In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

     let bike;

     msg += `\n without a value  --> ${bike}`;

     //6. Object 
     //JavaScript objects are written with curly braces {}.
     //Object properties are written as name:value pairs, separated by commas.

     //a. An object

     const person = {
          firstName : "Pravin", 
          lastName : "Gunjal",
          age : 25,
          bodyWeight : 65
     };

     msg += `\n An object   --> ${person.firstName + " is " + person.age + " years old."}`;

     //b. An array
     //JavaScript arrays are written with square brackets.
     //Array items are separated by commas.
     //The following code declares (creates) an array called cars, containing three items (car names):

     const car = ["Nexon" , "Creata" , "BMW"];

     msg += `\n An array  --> ${car[0]}`;

    

     //c. A Date

     const date = new Date("2023-04-15");

     msg += `\n date = new Date("2023-04-15")  --> ${date}`;

     alert (msg);
}


function f5_Function() {

     //A JavaScript function is a block of code design to perform a particular task.
     //A JavaScript function is exicuted when "something" calls it. 
     //A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

     //Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

     //The parentheses may include parameter names separated by commas:
     //(parameter1, parameter2, ...)

     var msg = "";

     let result = myFunction(4 ,3);

     function myFunction(p1,p2) {
          return p1 * p2;
     }

     msg = `result = myFunction(4 ,3)  --> ${result}`;

     function toCelsius(f) {
          return (5/9) * (f-32);
     }

     let value = toCelsius(77);

     msg += `\n value = toCelsius(77)  -->${value}`;

     alert (msg);
}


function f6_Object() {
     //Objects are variables too. But objects can contain many values.
     //It is a common practice to declare objects with the const keyword.
     

     const flower = {
          name: "rose", 
          color: "red", 
          botanicalName: "rosa cynansis"
     };

     alert(`An Object  --> ${"The botanical name of " + flower.name + " is " + flower.botanicalName}`);

     
}


function f7_Events() {

     //Events
     //HTML events are "things" that happen to HTML elements.
     //An HTML event can be something the browser does, or something a user does.
     //Here are some examples of HTML events:
     //An HTML web page has finished loading
     //An HTML input field was changed
     //An HTML button was clicked
     //Here are some common HTML events:
     //onchange, onclick, onmouseover, onmouseout, onkeydown, onload

     function displayDate() {
          return Date();
     }

     alert(`Todays Date : ${displayDate()}`);
}


function f8_Strings1() {

     //strings:
     //Strings are for storing text

     
     let text = "This is the javaScript string method.";
     
     let msg = `Original String : ${text}\n`
     
        + `Length of String  : ${text.length}\n\n`          // The length property returns the length of a string.


        //Extracting String Characters
        //There are 4 methods for extracting string characters:
        //at(position), charAt(position), charCodeAt, Using property access [] like in arrays

        + `Extracting String Characters : \n`
          + `Using charAt() : ${text.charAt(0)}\n`            //The charAt() method returns the character at a specified index (position) in a string:
          + `Using chartCodeAt() : ${text.charCodeAt(7)}\n`  //The charCodeAt() method returns the code of the character at a specified index in a string:The method returns a UTF-16 code (an integer between 0 and 65535).
          + `Using at() : ${text.at(3)}\n`                      //The at() method returns an indexed element from a string:
          + `Using Backed notation[ ] : ${text[8]}\n\n`           //The bracked notation [] returns an indexed element from a string:
                                  

        //Extracting String Parts
        //There are 3 methods for extracting a part of a string:
        //slice(start, end), substring(start, end), substr(start, length)

        //substr() is similar to slice() but,
        //The difference is that the second parameter specifies the length of the extracted part.

        //JavaScript counts positions from zero.
        //First position is 0.
        //Second position is 1.

        +`Extracting String Parts :\n`
          +`1. slice(start, end):\n`
               +`text.slice(12, 23) : ${text.slice(12, 23)}\n`          //slice out a portion of string from 12 to position 23:
               +`text.slice(12) : ${(text.slice(12))}\n`                //If you omit the second parameter, the method will slice out the rest of the string:
               +`text.slice(-14) : ${text.slice(-14)}\n`                //If a parameter is negative, the position is counted from the end of the string:
               +`text.slice(-14, -8) : ${text.slice(-14, -8)}\n\n`      //This example slices out a portion of a string from position -14 to position -8:

        +`2. substring(start, end)\n`                                    //substring() is similar to slice().
               +`text.substring(24, 30): ${text.substring(23, 30)}\n\n` //The difference is that start and end values less than 0 are treated as 0 in substring().

               +`3. substr(start, length)\n`                            //substr() is similar to slice().
                    +`substr(5, 17) : ${text.substr(5, 17)}\n\n`        //The difference is that the second parameter specifies the length of the extracted part.
     

       +`Converting a String to an Array\n`                              //A string can be converted to an array with the split() method:
          +`Using String split() : ${text.split(" ")}\n`                 //Split on spaces

        alert(msg);
}
   

function f8_Strings2() {

     let text1 = "This is javaScript string method.";

     let msg = `Converting to Upper and Lower Case :\n`
     
          +`text1.toUpperCase() :  ${text1.toUpperCase()}\n`          //A string is converted to upper case with toUpperCase():
          +`text1.toLowerCase() : ${text1.toLowerCase()}\n\n`         //A string is converted to lower case with toLowerCase():
     
     +`JavaScript String concat() :\n`                                //text = "Hello" + " " + "World!"; text = "Hello".concat(" ", "World!"); these two lines do the same.
          +`Using (+) operator : ${text1 + " Concatenation"}\n`
          +`Using concat() : ${text1.concat(" ", "Concatenation")}\n\n`//concat() joins two or more strings:

     +`JavaScript String trim :\n`
          +`Using trim() : ${"   This is trim    ".trim()}\n`                           //The trim() method removes whitespace from both sides of a string:
          +`Using trimStart() : ${"   This is trim    ".trimStart()}\n`
          +`Using trimEnd() : ${"   This is trim    ".trimEnd()}\n\n`

     +`JavaScript String Padding :\n`                                 //This method pads a string with another string (multiple times) until it reaches a given length.
          +`Using padStart() : ${"5".padStart(4,"p")}\n`              //The padStart() method pads a string from the start.
          +`Using  padEnd() : ${"5".padEnd(4, "p")}\n\n`              //To pad a number, convert the number to a string first.

     +`JavaScript String repeat() :\n`                                //The repeat() method returns a string with a number of copies of a string.
          +`Using repeat() : ${"Hello Shubhangi!".repeat(3)}\n`

     +`Replacing String Content :\n`
          +`Using replace() :` 
               +`${"Please visit Shope".replace("Shope","House")}\n`   //The replace() method replaces a specified value with another value in a string:
               +`for case insensitiveness : ${"Please visit Shope".replace(/SHOPE/i, "House")}\n` //To replace case insensitive, use a regular expression with an /i flag (insensitive):
               +`To replace all matches : ${"Please visit Shope and Shope".replace(/Shope/g,"House")}\n`//To replace all matches, use a regular expression with a /g flag (global match):

          +`Using replaceAll() : ${"Please visit Shope and Shope".replaceAll("Shope", "House")}\n` //The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

     

     



     ;
     alert (msg);
}


function f8_String_Search() {

     var  text3 = "Please send me my pictures, 'please' send";

     var msg =`Using indexof() : ${text3.indexOf("send")}\n`          //The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

          +`indexof("send", 10) : ${text3.indexOf("send", 10)}\n`     //a second parameter as the starting position for the search:

          +`Using lastIndexof() : ${text3.lastIndexOf("send")}\n`       //The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
     
          +`lastIndexOf("send", 15) : ${text3.lastIndexOf("send", 15)}\n`//a second parameter as the starting position for the search:

          +`Using String search() : ${text3.search("please")}\n`             //The search() method searches a string for a string (or a regular expression) and returns the position of the match:

          +`Using String match() : ${text3.match("send").length}, ${text3.match("send")}\n`                //The match() method returns an array containing the results of matching a string against a string (or a regular expression).
          
          +`Using String matchAll() :  ${Array.from(text3.matchAll("send")).length}, ${Array.from(text3.matchAll("send"))}\n`//The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).

          +`Using String includes() : ${text3.includes("pictures")}\n`      //The includes() method returns true if a string contains a specified value.       
          
          +`Using String includes() : ${text3.includes("me",20)}\n`
          
          +`Using String startsWith() : ${text3.startsWith("Please")}\n`             //The startsWith() method returns true if a string begins with a specified value.
          
          +`Using String startWith() : ${text3.startsWith("send")}\n`                  //startsWith() is case sensitive.

          +`Using String endWith() : ${text3.endsWith("send")}\n`                      //The endsWith() method returns true if a string ends with a specified value.
          
          +`Using String endWith() : ${text3.endsWith("send", 11)}`
          ;
     alert(msg);
}







        
     


