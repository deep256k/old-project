
// // //1.  block scoping

// var a = 10;
// if(a == 10){
//     var dept = 'engineering'
// }
// console.log(a);
// console.log(dept);



// // //2. function scoping


// // var a = 10;
// // function foo(){
// // if(a == 10){
// //     var dept = 'engineering'
// // }
// // }
// // console.log(a);
// // console.log(dept);


// //  SCOPES EXAMPLES

// // 1.

// var a  = 10;
// var b= 30;
// function foo(){
//     // value of b will change but only inside the function
//     var b= 50;
//     console.log(b);

// }

// foo();
// console.log(b);

// // 2 function declration

// var name = "mark"
// function printName(name){
//     var message = "hello " + name;
//     return message;
// }
// console.log(printName("Ricky"));

// // 3 arrow Function

// let name = "mark";

// const printName = name =>{
//     let message = "hello " + name;
//     return message;
// }

// console.log(printName('ricky'));

// // 5  FUNCTION DEFINATION

// // var name = "mark"
// // var printName = function(name){
// //     var message = "hello " + name;
// //     return message;
// // }
// // console.log(printName("Ricky"));

// // IIFE

// // (function(){
// //     var a = 10;
// //     var b = 20;
// //     console.log(a+b);
// // })();


// // IMPORTANT

// var a = 10;
// function myfn(){
//     var b= a;
//      c=20;
//     console.log(b);
// }
// myfn();
// console.log(c);


// var a = 15;
// function outer(){
//     var b = a;
//     console.log(b);
//     function inner(){
//         var b = 20;
//         var c = b;
//         console.log(c);
//     }
//     inner();
// }
// outer();


//HOISTING


// var a = 10;
// function outer(){
//     var b = a;
//     console.log(b);
//     function inner(){
//         // order is changed  now check the output
//         var c = b;   
//         var b = 20;
//         console.log(c);
//     }
//     inner();
// }
// outer();



// console.log(a);
// var a;
// a = 10;

// let  a = 10;
// console.log(a);
// a = 30;
// console.log(a);

// let count = 20 ;
// for(let i = 0;i<10; i++){
// let count = i;
// console.log(count);

// }
// console.log(count);

// not clear

// function printAmount() {
//     console.log( amount.toFixed(2 ) );
// }

// var amount = 99.99;


// printAmount(); // "99.99"

// amount = amount * 2;

// printAmount(); // "199.98"

// CLOSURES

// let a =10;
// function outer(){
//     let b =20;
//     function inner(){
//         console.log(a);
//         console.log(b);
//     }
//     inner();
// }
// outer();

///////////////////////////////////////////////////

// let a =10;
// function outer(){
//     let b =30;
//     //function expression 
//     var inner = function(){
//         console.log(a);
//         console.log(b);
//     }
//     // instead of calling the function we are returning it
//     return inner;
// }

//  var innerFun = outer();
//  //calling the inner function here inner remembers it's scope
//  innerFun();



/////////////////////////////////////// IMPORTANT

// let a =10;
// function outer(){
//     let b =30;
//     //function expression
//     var inner = function(){
//         a++;
//         b++;
//         console.log(a);
//         console.log(b);
//     }
//     // instead of calling the function we are returning it
//     return inner;
// }

// var innerFun = outer();
// //calling the inner function here inner remembers it's scope
// innerFun();

// //a new variable b is created for every execution of function
//  //outer but variable a will be same becoz it is global variable CHECK OUTPUT
// var innerFun2 = outer();
// innerFun2();


////////////////////////////

// Closures In Callbacks

// let a = 10;
// function myfn(){
//     console.log(a);
// }

// setTimeout(myfn,2000);


////////////////////////////////////////////


// let a= 10;
// function myfn(){
//     console.log(a);
// }
// //here myfn remembers it's scope
// setTimeout(myfn,2000);

// //here done gets printed first
// console.log('done');



// The Module Pattern

// NORMAL PATTERN

// let person = {
//     'firstName' : 'Mark',
//     'lastName'  : 'Waugh',
//     'getFirstName': function(){
//         return this.firstName;
//     },
//     'getLastName' : function(){
//         return this.lastName;
//     }
// }
// console.log(person.getFirstName());

// GETTER

// function createPerson(){
//     let firstName = 'Mark';
//     let lastName  = 'Waugh';
//     // here getFirstName function remembers it's scope
//     let returnObj = {
//         'getFirstName': function(){
//             return firstName;
//         },
//         'getLastName' : function(){
//             return lastName;
//         },
//         'setFirstName': function(name){
//             firstName = name;
//         },
//         'setLastName' : function(name){
//            lastName = name;
//         }
//     }
//     return returnObj;
// }

// let person = createPerson();
// // now this is undefined which is the aim of using getter and setter
// person.firstName;

// console.log(person.getFirstName());
// person.setFirstName('ricky');
// console.log(person.getFirstName());


// Closures In async Callbacks

// var i =0;
// for(i=0; i<10 ; i++){
//     console.log(i)
// }



//"The argument-function of the method setTimeout is always executed last: once the entire code of the file has been executed."

// ***important


// var i = 0;
// function count(){
//     console.log(i);
// }
// for(i=0; i<10 ; i++){
//      setTimeout(count,1000);
// } 

// var i = 123;

// setTimeout(function () { console.log(i); }, 1000)

// i = 'JAL'


// var i = 123;

// console.log(i);

// i = 'JAL2';

// Solving async with closures

// var i;

// for(i=0;i<10;i++){
//     (function(){
//     var currentvalue = i;
//         setTimeout(function(){
//             console.log(currentvalue)
//         },1000)
//         //console.log(currentvalue)


//     })();
// }


// don't know why it is happening-because let creats block scope

// for(let i = 0; i<10; i++){
//     setTimeout(function(){
//         console.log(i)
//     },1000);
// }


// OBJECTS

// CONSTRUCTOR

// function CreatePerson(name,lastname,age){
//    // var this = {}    This line is eliminating by constructor
//     this.firstName= name;
//     this.lastName = lastname;
//     this.age = age;
//     // return this    This line is eliminating by constructor
// }

// var person = new CreatePerson('mark','waugh',45);
// console.log(person.firstName);
// console.log(person instanceof CreatePerson)

// var obj = {
//     'a': 'one',
//     'b': 'two'
// };
// var c = 'a';
// console.log(obj[c]);

// var arr = [
// 	"hello world",
// 	42,
// 	true
// ];


// var createPerson = {
//     'firstName':'Mark',
//     'lastName' : 'waugh',
//     getFullname : function () {
//         return createPerson.firstName + " " + createPerson.lastName;
//     }
// }
//////////////////////////////////////////


// var person = createPerson.getFullname();
// console.log(person);

// // we are assinging the object to some other object
// createPerson2 = createPerson;
// //assinging the first object to empty object
// createPerson = {};
// //output will be undefined becoz createPerson is empty 
// console.log(createPerson2.getFullname());


// var createPerson = {
//     'firstName':'Mark',
//     'lastName' : 'waugh',
//     getFullname : function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// var person = createPerson.getFullname();
// console.log(person);

// // we are assinging the object to some other object
// createPerson2 = createPerson;
// //assinging the first object to empty object
// createPerson = {};
// //issue can be resolved by using this keyword
// console.log(createPerson2.getFullname());

// const goat = {
//     dietType: 'herbivore',
//     makeSound() {
//       console.log('baaa');
//     },
//     diet() {
//       console.log(goat.dietType);
//     }
//   };
//  goat.diet(); 
/////////////////////////////////////////////////

// function has TWO default argument named arguments and THIS

// function add(){
//     var i=0,sum=0;
//     for(i=0;i<arguments.length;i++){
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(add(10,20,30,4));


// THERE ARE FOUR WAY OF CALLING FUNCTIONS

// function foo() {
//     console.log('function expression');
//     console.log(this)
// }

// foo(); //1 method this.reference = the global object(function expression)

// var obj = { 'name': 'john' }
// obj.foo = function () {
//     console.log('calling function as a object property')
//     console.log(this)
// }

// obj.foo();  //2 method; this.reference = the object reference(calling function as a object property)

// var obj = {
//     note: 'this is a object property',
//     foo: function () {
//         console.log('calling function as a object property');
//         console.log(this)
//     }
// }

// obj.foo();  //2 method  this.reference = the object reference(calling function as a object property)

// function Myfn() {
//     this.foo = 'calling function in constructor mode1';
//     console.log('calling function in constructor mode')
//     console.log(this)
// }
// var person = new Myfn();
// console.log(person.foo);  //3rd Metod this.reference = newly created object in this case myfn(calling function in constructor mode);

///////////////////////VERY IMPORTANT EXAMPLE/////////////
// function Bicycle(cadec,speed,gear,tyrePressure){
//     this.cadec = cadec;
//     this.speed = speed;
//     this.gear = gear;
//     this.tyrePressure = tyrePressure;
//     //console.log(this);
//     this.inflatTyre = function(){
//         this.tyrePressure += 3;
//     }
// }

// var bicycle1 = new Bicycle(50,20,4,25);
// console.log(bicycle1)
// bicycle1.inflatTyre();

//  var bicycle2 = new Bicycle(50,20,4,10);
//  bicycle2.inflatTyre();

// function mechanic(name){
//     this.name = name;

// }

//var mechanicName = new mechanic('mike');
//mechanicName.InflatTyre = bicycle1.inflatTyre;//here we are giving the function instance(inflatTyre) to mechanicName.
// // here output is undefined becoz here  this.tyrePressure is refering to  mechanic object function.
// and there is no tyrePressure in the mechanic object so undefined +3 = undefined
// we can resolve this issue by CALL property. with call property we can bind the this reference  to other object. in this case we are binding it to bicycle1
 //mechanicName.InflatTyre(); // wrong way
 //mechanicName.InflatTyre.call(bicycle1);// now mechanic object function can also inflat the tyrepressure of any bicycle object


 /////EAMPLE ENDS/////

//////////////////PROTOTYPE
//1. whenever we create a function it creates a Prototype object which we can access by prototype property.
//2. whenever we call a function using new keyword it creats a new object with __proto__ property which points to function's Prototype object.

// function foo(){} 
// foo.prototype   // function foo has the prototype object
// var newfooObj = new foo(); // we are calling function foo by using new keyword
// foo.prototype === newfooObj.__proto__ // result is true both are pointing to the Prototype object of function foo
// foo.prototype.test = 'this is the prototype object of function foo'; // assinging a property to function foo
// newfooObj.__proto__.test   // we can acces test property of function foo by newfooObj using __proto__.
// newfooObj.test
// we can also acces test property in  this way . in this javascript engine first look at the newfooObj if it does't find then it goes to Prototype object
//"this is the prototype object of function foo"   // output 

// Example of prototype

// function Employee(name){
//   this.name = name;
// }
 
// Employee.prototype.prank = function(){
//       console.log(this.name, 'prank played');
//   }
//   var emp1 = new Employee('Mark');
//   var emp2 = new Employee('Jane');
//   emp1.prank();
//   emp2.prank();
// //   we can also add objects to the Prototype object on the run time also
//   Employee.prototype.hello = function(){
//     console.log('hello world');
// }
// var emp3 = new Employee('john');
// emp3.prank();
// emp3.hello();
// emp1.hello();

// //we can acces function which has the prototype object using constructor property.
// var proto = Employee.prototype;
// proto.constructor;

//javascript has a gloabal function called object.


// INHERITANCE


// function employee(name){
//    this.name = name
//}
// employee.prototype.getName = function(){return this.name}

// var emp1 = new employee('jack')
// emp1.getName();
// //"jack"
// var emp2 = new employee('jam');
// function manager(name,dept){this.name = name; this.dept = dept}
// manager.prototype.deptName = function(){return this.dept}
// var mng = new manager('mark','sales');
// mng.dept
// //"sales"
// mng.deptName();
// //"sales"
// mng.getName(); //here we can not get name property through manager object.because getName is inside employee prototype object.
// // VM2271:1 Uncaught TypeError: mng.name is not a function
// //     at <anonymous>:1:5
// // (anonymous) @ VM2271:1
// mng.__proto__.__proto__ === Object.prototype // here manager is pointing to global object function but we want to point it to employee prototype.
// //true
// mng.__proto__.__proto__ = employee.prototype // we have changed manager global object to employee prototype object so it can now access getName method;
// //{getName: ƒ, constructor: ƒ}
// mng.getName();
// //"mark"
///////////////////////////////////////////////////////////////////


// UDEMY 

// Example to show the differece between execution stack and scope chain
//  var a = 'Hello!';
//  first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(c);
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     //console.log(c);
//     console.log(a+d);
// }





// Primitive vs objects

// primitive contains the actual value of variable but objects contains only reference

//PRIMITIVE 
// var a = 30;
// var b = a;
// a= 40;
// console.log(a); //here a is 40;
// console.log(b); // b is 30; becoz primitive contains actual value of variable


//OBJECTS
// var obj1 = {
//   age :30
// }
// var obj2 = obj1; //here we are not creating a new Object we are only passing the Reference.
// obj1.age = 40;
// console.log(obj1.age); //output is 40 which was expected 
// console.log(obj2.age); // but b's output is also 40; becoz objects contains reference of variable not the actual value

// Function
// var age = 27;
// var obj = {
//   name:'mark',
//   city:'sydeny'
// }

// function change(a,b){
//   a =30;
//   b.city = 'Melbourne'
// }

// change(age,obj)
// console.log(age); //here age is still 27
// console.log(obj.city); // but city is changed because object contains reference.


// First class function

// var ageArray = [1970,1967,1987,1960,2008]

// function arrfn(arr,fn){
//   var arrRes = []
//   for(i=0; i <arr.length; i++){
//      arrRes.push(fn(arr[i]))
//   }
//   return arrRes;
// }

// // first callback function
// function calAge(el){
//   return 2019- el;
// }


// //  second callback functon
// function isFullage(currentAge){
// finalAge = 2018 - currentAge
//   return finalAge >= 18;
// }

// var result = arrfn(ageArray,calAge);


// var ageResult = arrfn(ageArray,isFullage)
// console.log(ageResult);
// console.log(result);



// function returning function

// function interviewQuestion(job){
//   if(job == 'teacher'){
//     return function(name){
//     console.log('what do you teach' + ' ' + name);
//     }
//   }
//   else if(job == 'designer'){
//     return function(name){
//       console.log(name + ' ' + 'what do you know about ux design')
//     }
//   }
// }
//  var question1 = interviewQuestion('teacher');
//  question1('john'); //first way of calling function using a variable

//  interviewQuestion('designer')('mark'); // direct way of calling function




//IIFE
//  it helps us to obtain data privacy 

// (function(){
//   var a = Math.random() * 10;
//   console.log(a);
//   console.log(a >= 5);
// })();

//////////////////////////////////////

// ES6

//LET AND CONST
//ES5

// var name5 = 'jane smith';
// var age5 = 23;
// name5 = 'jane waugh';
// console.log(name5);


// //es6

// const name6 = 'jane smith';
// let age6 = 23;
// name6 = 'jane waugh';
// age6 = 24;
// console.log(name6); //error can't mutate constant 
// console.log(age6);

// let and const are block scope but var is functional scope



// var i = 10;

// for(var i =0; i<5;i++){
//     console.log(i)
// }
// console.log(i); // out put is 5 becoz var uses functional scoping


 
// let j = 10;

// for(let j =0; j<5;j++){
//     console.log(j)
// }
// console.log(j); //output is 10 becoz let uses block scoping both i's are different here.



// STRINGS
// methods
// 1. startswith
// 2. endswith
// 3. includes
// 4. repeat


// ARROW FUNCTIONS
// NOTE: - arrow function don't have their own THIS keyword they use function's this keyword so they have lexical this keyword.


//Destructuring

// ES5

// var john = ['john',26]
// console.log(john[0]);
// console.log(john[1]);


//ES6

// const[name,age] = ['john', 25]
// console.log(name);
// console.log(age);


// CURRYING
// What this means is that you can pass all of the arguments a function is expecting
//  and get the result, or pass a subset of those arguments and get a function back 
//  that’s waiting for the rest of the arguments. It really is that simple.

//nORMAL wAY
// var noCurry= function(greet,name){
//   console.log(greet + " " + name)
// }
// noCurry("hello", "john")


//Currying
// var curry = function(greet){
//   return function(name){
//     console.log(greet + " " + name)
//   }
// }

// // var currying = curry('hello');
// // currying('john');
// // currying('smith')
// curry('hello')('mark')


//Pass by reference
// 1.

// const spaceship = {
//   homePlanet : 'Earth',
//   color : 'silver'
// };

// let paintIt = obj => {
//   obj.color = 'glorious gold'
// };

// paintIt(spaceship);

// spaceship.color // Returns 'glorious gold'

// 2.

// let spaceship = {
//   homePlanet : 'Earth',
//   color : 'red'
// };
// let tryReassignment = obj => {
//   obj = {
//     identified : false, 
//     'transport type' : 'flying'
//   }
//   console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}

// };
// tryReassignment(spaceship) // The attempt at reassignment does not work.
// spaceship // Still returns {homePlanet : 'Earth', color : 'red'};

// spaceship = {
//   identified : false, 
//   'transport type': 'flying'
// }; // Regular reassignment still works.


// Looping through object


// let spaceship = {
//   crew: {
//   captain: { 
//       name: 'Lily', 
//       degree: 'Computer Engineering', 
//       cheerTeam() { console.log('You got this!') } 
//       },
//   'chief officer': { 
//       name: 'Dan', 
//       degree: 'Aerospace Engineering', 
//       agree() { console.log('I agree, captain!') } 
//       },
//   medic: { 
//       name: 'Clementine', 
//       degree: 'Physics', 
//       announce() { console.log(`Jets on!`) } },
//   translator: {
//       name: 'Shauna', 
//       degree: 'Conservation Science', 
//       powerFuel() { console.log('The tank is full!') } 
//       }
//   }
// }; 
// // for...in
// for (let crewMember in spaceship.crew) {
// console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
// };


// Defer attribute

// <script src="example.js" defer></script> 

// When is defer useful?

// When a script contains functionality that requires interaction with the DOM, the defer attribute
//  is the way to go. This way, it ensures that the entire HTML file has been parsed before the script
//   is executed.



// Async attribute

// The async attribute loads and executes the script asynchronously with the rest of the webpage.
//  This means that, similar to the defer attribute, the HTML parser will continue parsing the rest of the HTML
//   as the script is downloaded in the background. However, with the async flag, the script will not wait until
//    the entire page is parsed: it will execute immediately after it has been downloaded. Here is an example of
//     the async tag:

//<script src="example.js" async></script>

//When is it useful?

// Async is useful for scripts that are independent of other scripts in order to function accordingly. 
// Thus, if it does not matter exactly at which point the script file is executed, asynchronous loading is 
//  most suitable option as it optimizes web page load time.


//Build in object Methods
// const robot = {
// 	model: 'SAL-1000',
//   mobile: true,
//   sentient: false,
//   armor: 'Steel-plated',
//   energyLevel: 75
// };

// // What is missing in the following method call?
// const robotKeys = Object.keys(robot);
//  console.log(robotKeys);

//  // Declare robotEntries below this line:
// const robotEntries = Object.entries(robot)
// console.log(robotEntries);

// // // Declare newRobot below this line:
//  const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

//  console.log(newRobot);


//////////////////////////////////////////////////////////////////////////////////////////////////////
// YOU DON'T KNOW JS

// -- FOR OF LOOP

// var testArreay = ['apple','banana','orange'];
// for(var i = 0;i<testArreay.length;i++){
//   console.log(testArreay[i]);
// }
// for(var test of testArreay){
//   console.log(test);
// }


// var testArreay = ['apple','banana','orange',];
// function greet(i){
//   return 'hello ' + i;
// }
// for(var j= 0 ;j< testArreay.length;j++){
//   console.log(greet(testArreay[j]))
// };



// 2.
// TODO: define addFavoriteBook(..) function
// function addFavoriteBook(bookName) {
// 	if (!bookName.includes("Great")) {
// 		favoriteBooks.push(bookName);
// 	}
// }

// // TODO: define printFavoriteBooks() function

// function printFavoriteBooks() {
// 	console.log(`Favorite Books: ${String(favoriteBooks.length)}`);
// 	for (let bookName of favoriteBooks) {
// 		console.log(bookName);
// 	}
// }

// var favoriteBooks = [];

// addFavoriteBook("A Song of Ice and Fire");
// addFavoriteBook("The Great Gatsby");
// addFavoriteBook("Crime & Punishment");
// addFavoriteBook("Great Expectations");
// addFavoriteBook("You Don't Know JS");

// // print out favorite books
// printFavoriteBooks();

// 3.

// var msg1 = "heelo ";
// var test = 15;
// var msg2 = " javascript"
// var result = msg1 + test + msg2;
// console.log(result)
// console.log(typeof test);
// console.log( `there are ${test + ""} student in class`)


// 4.
// var test = "mark";
//  function myfn(){
//    test = "ricky"
//    console.log(test);
//  }
// console.log(test);
// myfn();
// console.log(test);

// var a = 30;
// function fn(){
//    a = 40;
// console.log(a);

// }
// console.log(a);
// fn();
// console.log(a);

// 5a.
// var test = "mark";
// {
//   var test = "ricky"
// }
// console.log(test)


// // 5b.
// var test = "mark";
// {
//   let test = "ricky"
// }
// console.log(test)


// 6.Closure

// function ask(question){
//     setTimeout(function waitTime(){
//       console.log(question)
//     },3000)
//   }
//   ask("how are you")

// here after the ask function is called  then scope of question variable will still be there because of 
// setTimeout function. it is called closure

// This

//7.
//  16-july-19

// var myObj={
//     teacher:'mark',
//     question(){
//       console.log(this.teacher + ' what implict binding')
//     }
// }
// myObj.question();  implict binding of THIS

// 8.
// function ask(){
//     console.log(`${this.teacher} what is explict binding`)
//   }
  
//   function myfn(){
//    var myobj={
//       teacher:"mark"
//     };
//     ask.call(myobj); explict binding Of THIS
//   }
//   myfn();

// 9. Prototype
// function Workshop(teacher){
//     this.teacher = teacher;
//     console.log("hello from",teacher,this)
// }

// Workshop.prototype.ask = function(ques){
//     console.log(this.teacher,ques,this)
// }
// var deepJS = new Workshop("Mark");
// var reactJS = new Workshop("Ricky");
// deepJS.ask("what is deepJS");
// reactJS.ask("what is ReactJS");

// 10 CLASS
// class Workshop{
//     constructor(teacher){
//         this.teacher= teacher;
//     }
//     ask(ques){
//      console.log(this.teacher,ques)
//     }
// }
// var deepJS = new Workshop("mark");
// var reactJS = new Workshop("Ricky");
// deepJS.ask("what is deepJS");
// reactJS.ask("what is ReactJS");

//11.assingnment from front end masters

// class Bookshelf {
// 	constructor() {
// 		this.favoriteBooks = [];
// 	}

// 	// TODO: define methods `addFavoriteBook(..)`
//     // and `printFavoriteBooks()`
//      addFavoriteBook(bookName) {
//         if (!bookName.includes("Great")) {
//             this.favoriteBooks.push(bookName);
//         }
//     }
//     printFavoriteBooks() {
//     console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
//             for (let bookName of this.favoriteBooks) {
//                 console.log(bookName);
//             }
        
//     }
// }


// function loadBooks(emptybooksArray) {
//     // TODO: call fakeAjax( .. );
//     fakeAjax(BOOK_API,function(bookLists){
//          for(let booklist of bookLists){
//             emptybooksArray.addFavoriteBook(booklist)
//          }
//          emptybooksArray.printFavoriteBooks();
//     })
// }
// var booksArray = new Bookshelf();
// loadBooks(booksArray);

// var BOOK_API = "https://some.url/api";


// // ***********************

// // NOTE: don't modify this function at all
// function fakeAjax(url,cb) {
// 	setTimeout(function fakeLoadingDelay(){
// 		cb([
// 			"A Song of Ice and Fire",
// 			"The Great Gatsby",
// 			"Crime & Punishment",
// 			"Great Expectations",
// 			"You Don't Know JS"
// 		]);
// 	},2000);
// }


// 17th July
// 17-july
// Method vs Function
// Conventionally, a method is a function that is a member of an object or class.

// So, at least in JavaScript, a function will always be a method, even if it’s only a member of the implicit
//  global object.

// Deep JavaScript Foundations, v3


//1.
// var a = 40;
// console.log(a++);
// console.log(a);
// console.log(++a);
// console.log(a);

// 2.
// var a = '5';
// console.log(a++);
// console.log(a);
// console.log(++a);
// console.log(a);

// Note: x++ != x=x+1
// var a = '5'
// console.log((a=a+1));
// var b =5;
// console.log(b++);

// 3.
//****important

// var myAlerts = [];
// for (var i = 0; i < 5; i++) {
//     myAlerts.push(
//         function inner() { 
//             console.log(i);
//         }
//     );
// }
// myAlerts[0]();

//4.
// var i=0;
// var printfn = function(){
//     console.log(i)
// }
// for(i=0;i<10;i++){
//   setTimeout(printfn(i),2000)
// }

//5.
// var i = 123;

// setTimeout(function () { console.log(i); }, 2000)

// i = 'JAL'

//6.
// var i = 123;


// console.log(i);
// i = 'JAL';

//7.
// var i=0;
// var printfn = function(i){
//     console.log(i);
// }
// for(i=0;i<10;i++){
//   setTimeout(printfn.bind(this, i),2000)
// }

// setTimeout(function(){
//   console.log('hey')
// },1000);

//8.
// let i=0;
// const myfn = function(){
//   console.log(i)
// }
// for(let i=0;i<10;i++){
//   setTimeout(myfn,1000);
// }

// 9.
//this is the function for X++;

// function plus(x){
//     var convertedNumber = Number(x);
//     x = convertedNumber+1;
//     return x
//   }
//   var inputNumber = '5';
//   console.log(plus(inputNumber));

// 10.
// var a ;
// var test = typeof a;
// console.log(test);
// var test2 = undefined
// console.log(test == test2)
// console.log(typeof test2)

// 11
// var v = 42n;
// console.log(typeof v) Bigint

// 12.
// Nan is not equal to Nan
// var test = Number('hh/v')
// test === test

//13.
// NaN = invalid number and it's type is number.so Nan is a number but invalid.

// var a = 13;
// var b = 10- 'hello javascript'
// console.log(isNan(a));
// console.log(isNan(b));
// console.log(isNan("hello"));
// Number.isNaN('hello')
// isNaN first convert the value to number and then check it

// 14.
//    var a = -0;
//    console.log(a == 0) output is true
//    console.log(a > 0) output is false
//    console.log(a < 0) output is false


// 15.
// object.is is used th check the equality. because === fails at -0 and null

// var a = -0;
// console.log(Object.is(a,0));

// 16.
// Math.abs()
// 17.console.log('23'>'411') true

// 26-july

// var a = 'hello';
// first();
// function first(){
//     var b = 'hey'
//     second()
//     function second(){
//         var c = 'hi'
//         third();
//     }
// }
// function third(){
//     var d = 'john'
//     console.log(a+b+c+d);
// }

// THIS kEYWORD

// 1.in a regular function call this points to the global object(window)
// 2. in a methos call this points to the object that is calling the method
// 3.the this keyword is not assingned a value untill a function where a function it is defined is called
// Lecture: The this keyword

/*
//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();//here value of this is assingned after the method is called
*/

// var a = 10;
// function myfn(){
//   var b = a;
//   console.log(b);
//   c=20 //here complier skips c variable because there is no var keyword but interpreator assign it the value
//        // and declare it in the global scopr
// }
// myfn();

// 'use strict';

// a =50;
// console.log(a);



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//  console.log(a); //we can not access let variable with let without decalring it
//  let a =20;

// console.log(b);
// var  b;

// var Person = function(name,age){
//     this.name  = name;
//     this.age = age;
// }
// var john = new Person('john',25)
// console.log(john);


// 16-aug

// var x = [2,3,4];

// console.log(x);

// here array as prototype object which contains all the methods we use on array

// Object.create

// var creatPerson = {
//     lastName:'smith',
//     calculateAge :function(){
//         console.log(2019 - this.yearofBirth)
//     }
// }

// var john = Object.create(creatPerson);
// console.log(john)
// john.yearofBirth = 1990;
// console.log(john.calculateAge())

// CALL BIND AND APPLY

// var myobj = {
//     num : 2
// }

// function myfn(a){
//     return this.num + a
// }
// console.log(myfn.call(myobj,3));

// 17-aug

// var a = [];
// console.log(a);
// console.dir(a);

// let i =20;
// for(i=1;i<5;i++){
//     console.log(i);
// }
// console.log(i);


// let j =20;
// for(let j=1;j<5;j++){
//     console.log(j);
// }
// console.log(j);


// 18-aug


// var car = {
//     model:2010,
//     variant :'diesel',
//     color:'black',
//     firstMethod:function(){
//      console.log(this.model)
//     },

//      secondMethod:function(){
//         console.log(this.color)
//      }
// }
// car.secondMethod();
// var test = car.firstMethod; //output is undefined
// test();


// examole not working
// var car = {
//     model:2013,
//     variant :'diesel',
//     color:'black',
//     firstMethod(){
//      console.log(this.model)
//      let insidemethod = () => {
//          var test = 20;
//          console.log(test)
//          console.log(this.color)
//          insidemethod();
//      }
//     }

     
// }
// car.firstMethod();
//car.firstMethod.insidemethod();

// exercise


// let user = {
//     name: "John",
//     go: function() { alert(this.name) }
//   }
  
//   (user.go)() // error!

///destructing
// let person = {
//     age:25,
//     name:'smith'
// };
//  let {age,name} = person;
//  console.log(age);
//  console.log(name);

// function calretirment(dateOfbirth){
//     let currentAge = new Date().getFullYear() - dateOfbirth;
//     let retAge = 60-currentAge;
//     return [currentAge,retAge]
// }
// const [age,retrAge] = calretirment(1990);
// console.log(age);
// console.log(retrAge);

// ARRAY IN ES6

// NOTE: -  WE CAN NOT USE BREAK IN FOREACH AND MAP LOOP
// 1. we can use for of method.
// 2. we can convert node list to array using (from)
// 3.indexOf, findIndex, find


// Spread operator
// var sum1 = function(a,b,c,d){
//     return a+b+c+d;
// }
// console.log(sum1(10,20,30,40));
// //  ES5
// var arr = [10,20,30,40];
// console.log(sum1.apply(null,arr))

// // ES6
// console.log(sum1(...arr));


// Rest parameter

// spread operator is used in function call. rest parameters are used in function declration

//Map
// 1. set,get,has,delete,clear are the methods on the Map.

// Sepration of concern(SOC):-each part of application should be doing work independently


//23-aug
// 1.how to convert a nodeList in to an array using array's prototye and slice ,call
// 2.forEach and it's arguments
// 3.focus() method

// function declration are hoised

// function first(){
//     console.log("first called");
//     second();
// }
// first();

// function second(){
//     console.log("second called")
// }

// --------------------------------------------------------------
// Arrow function are not hoisted
// const first = () =>{
//     console.log("first called")
//     second();
// }

// first();
// const second = () =>{
//     console.log("second")
// }

// [[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]


// Asynchronous JavaScript

// const first = () =>{
//     setTimeout(() => {
//         console.log('async executed')
//     },2000)
// }

// const second = () =>{
//     console.log('execution start');
//     first();
//     console.log('exection ends')
// }
// second();

// CALL BACK HELL

// const getRecipe = () => {
//     setTimeout(() => {
//         const recipeId = [100, 101, 102, 103, 104]
//         console.log(recipeId)
//         setTimeout((id) => {
//             const recipe = {
//                 name: 'pizza',
//                 publisher: 'mark'
//             }
//             console.log(`${id} : ${recipe.name}`);
//             setTimeout(() =>{
//                 console.log(recipe)
//             },1500)
//         }, 1500, recipeId[2])
//     }, 1500)
// }
// getRecipe();

//Promises(relove,reject,then,catch)
// const getIds = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([1, 2, 3, 4, 5])
//     }, 1500)
// })
// const getRecipe = (ids) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const recipe = {
//                 name: 'pizza',
//                 publisher: 'mark'
//             }
//             resolve(`${ids} : ${recipe.name}`)
//         }, 1500, ids)
//     })
// }
// const recipeDetails = (recipeObj) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${recipeObj}`)
//         }, 1500, recipeObj)
//     })
// }
// getIds
//     .then((id) => {
//         console.log(id);
//         return getRecipe(id[2])
//     })
//     .then((recip) => {
//         console.log(recip);
//         return recipeDetails(recipe)
//     })
//     .then((res) => {
//         console.log(res)
//     })

// call bind apply

// var john = {
//     name:'john',
//     age:26,
//     intro: function(style,time){
//         if(style == 'formal'){
//             console.log('hello ' + this.name + " " + time)
//         }
//         else if(style == 'casual'){
//             console.log('hi ' + this.name + " " + time)
//         }
//     }
// }
// //john.intro('formal','morning')

// var emily = {
//     name:'emily',
//     age:25
// }
// john.intro.call(emily,'casual','afternoon')
// note: here emily object is borrowing the intro method from john object using call. apply has the same
// functionality it just accept an array of parameter
// var john2 = function () {
//     this.intro('casual', 'morning')
// } 

// var test = john2.bind(john)
//test();


// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function () {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function () {
//     console.log(this.getPokeName() + 'I choose you!');
// };

// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon(); // 'Pika Chu I choose you!'











