console.log('hello');
// Variables in JS
/* 
var , let, const   (Used for creating keywords)
*/

var name2 = "sparsh";
var name1="s"
var marks=333;
console.log(name2,name1,marks);
var city='delhi'
console.log(city)
// Const is used when a variable's value is not to be changed in future
const owner_name = 'no'
console.log(owner_name)

//block
{
let city='ghaziabad'
console.log(city)
}
console.log(city)

const arr1=[1,2,3,4,2,2 ]
// cant do this arr1=[34,33,22,1]
// we can push elements
arr1.push(33) // adding elements
console.log(arr1)