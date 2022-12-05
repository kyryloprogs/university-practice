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
let person = {
    age: 10
}; // Object

//2.	operations with objects, array, enum, string, number, symbol

// Objects
let personNew = {
    age: 10
}; // Object
personNew.age = 15;

console.log(personNew);
// Output: 15
console.log(personNew.toString());
// Output: [object Object]


// Array
const cars = ["Saab", "Volvo", "BMW"];

console.log(cars.filter((el) => el.length > 3))
// Output: [ 'Saab', 'Volvo' ]

console.log(cars.concat(["123"]));
// Output: [ 'Saab', 'Volvo', 'BMW', '123' ]

// Enum

 const Workers = { 
    Men: 'men', 
    Women: 'women'
};
 const selectedWorker = Workers.Women;
 
 switch(selectedWorker)
 {
     case Workers.Men:
         console.log('You choosed men');
         break;
 
     case Workers.Women:
         console.log('You choosed women');
         break;
 
     default:
         console.log('Empty');
 }
// Output: You choosed women

// String
let userName = "Kyrylo";
console.log(userName.length);
// Output: 6
console.log(userName.replace("yry", "test"));
// Output: Ktestlo
console.log(userName.split(''));
// Output: [ 'K', 'y', 'r', 'y', 'l', 'o' ]
console.log(userName.toLocaleUpperCase());
// Output: KYRYLO

// Number
let myNumber = 32;

myNumber.toString(32);
// And standart math operations.

// Symbol
console.log(Symbol("1") === Symbol("1"));
// Output: False
console.log(Symbol.for("1") === Symbol.for("1"));
// Output: True
const globalSym = Symbol.for('foo'); // global symbol
console.log(Symbol.keyFor(globalSym));
// Output: foo



// expected output: "foo"
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
let testA = true;
let testB = false;

if (testA) {
    console.log("Yes");
} else {
    console.log("No");
}
// Output: Yes

console.log((testA ? "Yes" : "No"));
// Output: Yes

while (testA) {
    console.log(testA);
    testA = !testA;
}
// Output: true

let arrayTest = [1,2,3,4,5];
arrayTest.forEach(element => {
    console.log(element);
});
// Output: 
// 1
// 2
// 3
// 4
// 5

let step;
for (step = 0; step < 5; step++) {
  console.log(step);
}
// Output: 
// 0
// 1
// 2
// 3
// 4



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
const first = ["Test"];
const second = ["Test"];

console.log(first === second); // because different references
// Output: False
console.log(first === ["Test"]); // because different references
// Output: False
const third = first;
console.log(first === third); // because equal data and references
// Output: True
console.log(first === first);  // because equal data and references
// Output: True



// 13.	prototypes

function Person() {
    this.firstName = 'Peter';
}

Person.prototype.age = 20;
const person1 = new Person();
console.log(person1.age); // 20
// Output: 20

Person.prototype.firstName = 'NewPeter';
const person2 = new Person();
console.log(person2.firstName); // doesn't changing!!!
// Output: Peter




// 14.	recursion
// program to count down numbers to 1
function counter(num) {
    console.log(num);
    const newNumber = ++num;

    if (newNumber < 10){
        counter(newNumber);
    }
}

counter(0);
// Output:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9


// 15.	hoisting
hoistingTest = 10;
console.log(hoistingTest);
// Output: 10
console.log(testFunctionHoisting());
// Output: 101

var hoistingTest; // Because this var entering in compiling process time.

function testFunctionHoisting() { // Because this function entering in compiling process time.
    return 101;
}


// 16.	 closure
const add = (function () {
        let counter = 0;
        
        return function () {
            ++counter; 
            console.log(counter);
            return counter;
        };
    }
  )();
  
add();
// Output: 1
console.log(add.counter); // counter is private
// Output: undefined
add();
// Output: 2
add();
// Output: 3

// 17.	 working with data using the Fetch API
fetch("https://api.nasa.gov/techtransfer/patent/?engine&api_key=DEMO_KEY")  
.then((response) => response.json())
.then((data) => console.log(data));

// results: [
//     [
//       '59fa10809600022a4d1c7751',
//       'LAR-TOPS-185',
//       'Turbofan <span class="highlight">Engine</span> Acoustic Liner Design and Analysis Tools',
//       'NASA Langley Research Center has developed two tools for turbofan <span class="highlight">engine</span> acoustic liner design and analysis. The first is a statistical approach for broadband liner design and assessment. The second is graphical software to design and analyze resonant channels in acoustic liners.',
//       'LAR-TOPS-185',
//       'aerospace',
//       '',
//       '',
//       '',
//       'LARC',
//       'https://technology.nasa.gov/t2media/tops/img/LAR-TOPS-185/Front.jpg',
//       '',
//       14.232046
//     ], ...


// 18.	 error handling (try / catch)
try {
    throw "ReferenceError";  // or other error
} catch (ex) {
    console.log(ex);
} finally {
    console.log("Finally");
}
// Output:
// ReferenceError
// Finally



// 19.	 events usage
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  button.textContent = `Click count: ${event.detail}`;
});

// 20.	 JSON format / JSON methods
const jsonText = `{
    {
    results: [
      [
        '59fa10809600022a4d1c7751',
        'LAR-TOPS-185',
        'Turbofan <span class="highlight">Engine</span> Acoustic Liner Design and Analysis Tools',
        'NASA Langley Research Center has developed two tools for turbofan <span class="highlight">engine</span> acoustic liner design and analysis. The first is a statistical approach for broadband liner design and assessment. The second is graphical software to design and analyze resonant channels in acoustic liners.',
        'LAR-TOPS-185',
        'aerospace',
        '',
        '',
        '',
        'LARC',
        'https://technology.nasa.gov/t2media/tops/img/LAR-TOPS-185/Front.jpg',
        '',
        14.232046
      ],
      [
        '633018a5342a12ec66056d92',
        'MSC-TOPS-105',
        'Coil-On-Plug Igniter for Reliable <span class="highlight">Engine</span> Starts',
        'Innovators at NASA Johnson Space Center have developed a coil-on-plug ignition system for integrated liquid oxygen (LOX)/liquid methane (LCH4) thermal-vacuum environment propulsion systems operating in a thermal vacuum environment. The innovation will help quell corona discharge issues and reduce overall mass. Corona discharge represents a local region surrounding a high-voltage conductor where air has undergone an electrical breakdown and become conductive due to ionization, allowing a charge to leak off the conductor and cause a possible malfunction. \n' +
          '\n' +
          'NASA worked with commercial vendors to modify off-the-shelf automotive coil-on-plug spark plug systems for use with LOX/LCH4 igniters. The coil-on-plug configuration eliminates the bulky standalone coil-pack and conventional high-voltage spark plug cable by combining the coil and the spark plug into a single component. The test campaign successfully proved that coil-on-plug technology can enable integrated LOX/methane propulsion systems in future spacecraft.',
        'MSC-TOPS-105',
        'propulsion',
        '',
        '',
        '',
        'JSC',
        'https://technology.nasa.gov/t2media/tops/img/MSC-TOPS-105/Lox_front-conv_5.jpg',
        '',
        14.232046
      ]
    }
}`;
  
console.log(JSON.parse(jsonText));
console.log(JSON.stringify(jsonText));


// 21.	 ES last vertion
let array= [1,2,3,5,6];
console.log(array[array.length-1]); // is equal to:
console.log(array.at(-1));
// Output: 6

const animals='Animals:cow,dog,horse';
const regex=/(cow)/gd;
const matches=[...animals.matchAll(regex)];
console.log(matches[0]);
// [
//     'cow',
//     'cow',
//     index: 8,
//     input: 'Animals:cow,dog,horse',
//     groups: undefined,
//     indices: [ [ 8, 11 ], [ 8, 11 ], groups: undefined ]
//  ]
  
// 22.	 async / await

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("готово!"), 1000);
    });
  
    let result = await promise; // будет ждать, пока промис не выполнится (*)
  
    alert(result); // "готово!"
  }
  
  f(); // F runs only when promise done! (because using async wait - await.)

// 23.	 promise

var XMLHttpRequest = require('xhr2');
let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "https://api.nasa.gov/techtransfer/patent/?engine&api_key=DEMO_KEY");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });
  
  myPromise.then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
  );

  // Output: {"results":[["59fa10809600022a4d1c7751","LAR-TOPS-185","Turbofan <span class=\"highlight\">Engine<\/span> ...

// 24.	 asynchrony in JS * (https://www.youtube.com/watch?v=8aGhZQkoFbQ)

// For example: setTimeout();

const myFunction = function(arg) {
    console.log(arg);
};

setTimeout(function() { 
    myFunction("I love You !!!"); 
}, 3000);
// Output: I love You !!!
// 

// 25.	 event loop * (https://www.youtube.com/watch?v=cCOL 7MC4Pl0)

(() => {
    setTimeout(() => {
      console.log('fourth');
    }); // has a default time value of 0
    console.log('this is the first message');

    console.log('second');
  
    setTimeout(() => {
      console.log('fifth');
    }, 0);
  
    console.log('third');
  
  })();
// Output:
// this is the first message
// second
// third
// fourth
// fifth