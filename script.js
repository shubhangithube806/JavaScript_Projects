

function f1_variables() {

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


function f2_operators() {
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

function f3_assignment() {

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

function f5_function() {

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


function f6_object() {
     //Objects are variables too. But objects can contain many values.
     //It is a common practice to declare objects with the const keyword.
     var msg = "";

     const flower = {
          name: "rose", 
          color: "red", 
          botanicalName: "rosa cynansis"
     };

     msg = `An Object  --> ${"The botanical name of " + flower.name + " is " + flower.botanicalName}`;

     alert(msg);
}


