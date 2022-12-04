// 1.	data types 

// Primitive
console.log(null); // Null type
console.log(undefined); // Undefined type
console.log(true); // or false - Boolean type
console.log(123); // Number
console.log(Symbol('foo')); // Symbol
console.log("String"); // String type
console.log(BigInt(9007199254740991)); // BigInt type
// Output: 
// null
// undefined
// true
// Symbol(foo)
// String
// 9007199254740991n

// Non-primitive
let person = {}; // Object

//2.	operations with objects, array, enum, string, number, symbol



// 3.	logical operators ( || && ! ) 
console.log(!true); // False
let a = false;
let b = true;
console.log(-1 || -3 || 1); // -1
console.log(a || b); // true
// Output: 
// False
// -1
// True

// 4.	pre-increment / post-increment
let c = 1;
let d = 1;
console.log(c++); // post-increment = out 1, then +1;
console.log(++d); // pre-increment = 1+1 then out 2
// Output: 
// 1
// 2

// 5.	destructuring assignment
let e, f, someOther;
[e, f, ...someOther] = ['Hello', 'Peter', 'Parker', 'other', 'words', 'here'];

console.log(someOther, e, f); // e = Hello, f = Peter
// Output: [ 'Parker', 'other', 'words', 'here' ] Hello Peter


// 6.	function types (generators, arrow, pure etc.)
let testArray = [123, 43, 123, 423, 23];
let testNumber = 15;
// Arrow
let firstFunction = () => testArray.filter((num) => num > 100);
console.log(firstFunction());
// Output: [ 123, 123, 423 ]

// Pure
function pureFunc(numberData) {
    return numberData * 15; // We are not using global variables here.
}
console.log(pureFunc(101));
// Output: 1515

// Not Pure
function notPureFunc(numberData) {
    return numberData * testNumber; // We using global variable testNumber.
}
console.log(pureFunc(101));
// Output: 1515


// Generators
function* testGenerator() {
    yield "First result";
    yield "Second result";
    yield "Third result";
    return "Final";
  }

let testGenUser = testGenerator();

let firstResult = testGenUser.next();
console.log(firstResult);
// Output: { value: 'First result', done: false }
let secondResult = testGenUser.next();
console.log(secondResult);
// Output: { value: 'Second result', done: false }
let thirdResult = testGenUser.next();
console.log(thirdResult);
// Output: { value: 'Third result', done: false }
let fourthResultne = testGenUser.next();
console.log(fourthResultne);
// Output: { value: 'Final', done: true }

// 7.	conditions and cycles
// 8.	global / local variables, area of visibility 

let globalVarA = 15;

{
    let localVar = 5;
    console.log(globalVarA);
    // Output: 15
}
console.log(localVar);
// Output: ReferenceError: localVar is not defined

// 9.	let / const
const testConstVar = 10; // doesn't changing.
// testConstVar = 14;
// TypeError: Assignment to constant variable.

let testLetVar = 15; // we can change it
testLetVar = -1;

console.log(testLetVar);
// Output: -1

// 10.	getters and setters
const obj = {
    log: ['a', 'b', 'c'],
    get latestData() {
      return this.log;
    },
    set latestData(inputData) {
        this.log = inputData; 
    }
  };
  
  console.log(obj.latestData);
  // Output: [ 'a', 'b', 'c' ]
  obj.latestData = ['1'];
  console.log(obj.latestData);
  // Output: [ '1' ]

// 11.	this
const thisObj = {
    prop: 42,
    func: function() {
        let prop = 13;
        return this.prop;
    },
}
console.log(thisObj.func());
// Output: 42;

const thisObjSecond = {
    prop: 42,
    func: function() {
        let prop = 13;
        return prop;
    },
}
console.log(thisObjSecond.func());
// Output: 13;


// 12.	ref VS value
// 13.	prototypes
// 14.	recursion
// 15.	hoisting
hoistingTest = 10;
console.log(hoistingTest);
// Output: 10
console.log(testFunctionHoisting());
// Output: 101

var hoistingTest; // Because this var entering in compiling process time.

function testFunctionHoisting() { // Because this function entering in compiling process time.
    return 101;
}; 
// 16.	 closure
// 17.	 working with data using the Fetch API
// 18.	 error handling (try / catch)
// 19.	 events usage
// 20.	 JSON format / JSON methods
// 21.	 ES last vertion
// 22.	 async / await
// 23.	 promise

// 24.	 asynchrony in JS * (https://www.youtube.com/watch?v=8aGhZQkoFbQ)
// 25.	 event loop * (https://www.youtube.com/watch?v=cCOL7MC4Pl0)
