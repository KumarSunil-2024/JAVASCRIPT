
/*
//for loop
for(let i=0; i<5; i++){
   // console.log(i);
}
console.log(i);   //var: 5  //let:Reference :i is not defind

//var keyword breaks the scope rule
//let keyword obeys the scope rule

*/

/*
var data=100;
var data=200;

var sub="js";
var sub="jsNode";
console.log(sub);  //var: error
//let syntax Error sub has already 
//let keyword wont allows the duplicate variables
*/


/*
//global
let data=100;
//block
{
    //local
let data=200;
}
console.log(data); //var:200 //let:100

//if any block of code global member called as global pollting issue
//global polluting issue raised beacause of var keyword
// we can overcome global polluting issue by let keyword

*/


/*
//variables declaration and initilization
//variables accessing
console.log(data);   //var:undefined  //let:referenceError cannot access before initlization
let data=100;
//variables undefined  before declaration and initilization called as variable hoisting
//variables hoisting issues raised because of var keyword
//we can overcome variable hoisting with the help of let keyword 

Note:undefined is a datatype or value

*/
/*
                        var                                             let
    ******************************************************************************************************
    ES1                                                                 ES6

    scope rule break                                                    scope rule follows

    duplicate members allows                                            duplicate members won't allows

    global polluting issue raised                                       we can overcome

    variable hoisting raised                                            we can overvome
    *******************************************************************************************************
*/

//const keyword
//const data = 100;
//data = 200;                     //TypeError: Assignment to constant variable.

const arr = [1,2,3,4,5];
//arr = [];                           //TypeError: Assignment to constant variable.

arr[0] = 100;
arr[4] = 500;
arr[5] = 600;
console.log( arr );                     //[ 100, 2, 3, 4, 500, 600 ]

arr.pop();
console.log( arr ); 
arr.shift();
console.log( arr );                     //[ 2, 3, 4, 500 ]





const obj = {
    "sub_one":"Angular12",
    "sub_two":"NodeJS",
    "sub_three":"MongoDB"
};
//obj={};                             //TypeError: Assignment to constant variable.


obj.sub_one = "Angular13";
obj.sub_two = "Deno";
obj.sub_three = "CassandraDB";
console.log(obj);                   //{ sub_one: 'Angular13', sub_two: 'Deno', sub_three: 'CassandraDB' }



var data = Symbol( 100 );
console.log( data );

console.log( typeof data );             //symbol





