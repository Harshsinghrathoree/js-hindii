/*
s = 'harsh'
console.log(s);
//let , var , const

a = 34
b = null
c = true 

if(true){
    let d = 32
    var a = 34
    console.log(typeof a);
}
console.log(a)
console.log(typeof b);
*/

/**** */


// string to number
score = "123"
console.log(typeof score);
a = Number(score)
console.log(a);
// string to boolean
s  = "s"
d = Boolean(s)
console.log(d);
// number to string
c = -45
e = String(c)
console.log(e);


/*let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2")

console.log( 2 + 4 * 5 - 3 / 3 )

console.log("2" > 1);
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


console.log(2 == "2");*/



/***** String *********************/
nam = "Harsh"
age = 23;
console.log(nam + " AGe : "+age );
console.log(`My name is ${nam} and my age is : ${age} `);

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-US'));





let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
//let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());