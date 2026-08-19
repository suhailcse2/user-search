// console.log("code is running ")
// console.log("code is running  2")
// console.log("code is running  3")
// console.log("code is running  4")
//  console.log("enter 2 numbers")
// let a=Number(prompt("enter 1st number :"));
// let b=Number(prompt("enter 2nd number :"));
//  console.log("$a and $b",a,b);
// calc(a,b);
// function calc(a,b){
//     console.log("Sum :",(a+b));
//     console.log("Multiply", (a*b));
  
//     if(a>b){
//         console.log("Difference",(a-b));
//           console.log("Divide" ,(a/b));
//     }
//     else{
//         console.log("Difference",(b-a));
//           console.log("divide",(b/a));
//     }
// }
// var name="SUhail";
// var num=7;
// console.log(name+num);
// console.log(typeof(name+num));

// const object={
//     name:"suhail",
//     age:18

// }
// object.city="aligarh";
// console.log(object);
// var a="3";
// var b=3;
// if(a==b){
//     console.log('a == b Equal');
// }
// if(a===b){
//     console.log('a === b Equal');
// }
// else{
//     console.log('a===b not Equal');
// }
// const prompt = require("prompt-sync")();
// let age=Number(prompt("enter your age"));
// let re=( (age>=18 )?"you can vote":"you cannot vote" )
// console.log(re);

// var object={
//    name:"suhail",
//     age:18,
//     id:117
//  }
//  for (var key in object) {
//     let su=object[key];
//        console.log(key ,su);
       
//  }
// for...of → values ke liye (Array, String, Set, etc.)
// for...in → keys/indexes ke liye (mostly Objects)
// let arr=["suhail","shaheen","arbaz"];
// for (const element of arr) {
//     console.log(element);
    
// }
// var stdmarks={
//     s1:78,
//     s2:89,
//     s3:90
// // }
// var stdmarks=[123,235,67,356]
// stdmarks.forEach(element => {
//     let sum=10;
//     sum+=element;
//     console.log(sum);
    
// });
// console.log(stdmarks);

// for (const element of stdmarks) {
//     let sum=10;
//     sum+=element;
//     console.log(sum);
// console.log(stdmarks);
// }
// console.log(stdmarks);
// for (let index = 0; index < stdmarks.length; index++) {
//     stdmarks[index]+=10;
//     console.log(stdmarks[index]);
    
//     console.log(stdmarks);
// }
//  console.log(stdmarks);

// function sum(a,b){

//      if (typeof a !== "number" || typeof b !== "number") {
//         throw new Error("Only numbers are allowed!");
//     }

//     return a + b;
// }
   
  
//    const sumn = (a,b) => {
//     let c=a+b;
//     return c;
//    };

// console.log('SUM OF 2 NUMBERS');

// const prompt = require("prompt-sync")();
// let a=Number(prompt("enter a number"));
// let b=Number(prompt("enter another number"));

// let total=sumn(a,b);
// console.log(total);
// let name="Suhail"
// let names=`your name is ${name}`;
// console.log(names);
// console.log(`your name is ${name}`);
// let name="Suhail"
// let d=name.slice(2,4)
// console.log(d); // output ha last exclude
// console.log(name.slice(2)); // st se end index tak
// let newname=name.replace("Suhail","SHAHEEN")
// console.log(newname);
// let name3=name.concat( newname)
// let name4=name+newname
// console.log(name3);
// console.log(name4);
// name5="    harry"
// console.log(name5.trim()); // remove whitespace
// let name = "Suhail Khan";

// console.log(name.startsWith("Suhail")); // true
// console.log(name.startsWith("Khan"));   // false

// console.log(name.endsWith("Khan"));   // true
// console.log(name.endsWith("Suhail")); // false

// let str = "Hello JavaScript";

// str.startsWith("Hello");      // true
// str.endsWith("Script");       // true
// str.includes("Java");         // true

// let str="plzz give me rs 100"
// let amount=str.slice("plzz give me rs ".length) //value number not string
// console.log(amount);

// ARRAY METHODS
// let n=[3,4,6]
// let k=n.toString();
// console.log(n);
// console.log(k);
// console.log(n.join("-"));
// console.log(n.pop()); // remove last element  and update new arr but return pop value
// console.log(n); // remove last element  and update new arr but return pop value
// let arr=[1,2,4,5]
// console.log(arr.push(8)); //add  a element in arr but return lengh
// console.log(arr);
// console.log(arr.shift()); // remove 1st elemt and return it
// console.log(arr);
// console.log(arr.unshift(6)); // add 1st elemt begenning and return it
// console.log(arr);
// delete arr[1] // act as operator and return empty space
// console.log(arr);
// let ar2=[6,7,8]
// let ar3=[9,11,10]
// console.log(arr.concat(ar2,ar3));
// console.log(ar3.sort());

// console.log(arr.splice(1,0,23,56)); // 1=postion to add,0=no. of elemnts to remove,baaki ke new wlemts
// console.log(arr);
// let arp=[arr.slice(1,3)] // last exclude
// console.log(arp);
// let arpe=[arr.slice(3)]//st se end tak
// console.log(arpe);
// console.log(arr.reverse()); // reverse whole array
// let a=5;
// let b=6;

// function sum(a,b){
//     return a+b;
// }
// let pa=document.querySelector(".container")
// undefined
// pa.style.background="green"
// 'green'
// let ch=pa.childNodes
// undefined
// ch
// NodeList(9) [text, div#b1.box, text, div#b2.box, text, div#b3.box, text, div#b4.box, text]
// let ch=document.querySelector(".box")
// undefined
// ch.style.background="yellow"
// 'yellow'
// ch=document.querySelectorAll(".box")
// NodeList(4) [div#b1.box, div#b2.box, div#b3.box, div#b4.box]0: div#b1.box1: div#b2.box2: div#b3.box3: div#b4.boxlength: 4[[Prototype]]: NodeList
// for(i=0;i<4;i++){
// }
// undefined
// for(i=0;i<4;i++){

// VM3076:2 Uncaught SyntaxError: Unexpected end of input (at VM3076:2:1)
// for(i=0;i<4;i++){}

// undefined
// for(i=0;i<4;i++){ch(i).style.background="yellow"}
// VM3133:1 Uncaught TypeError: ch is not a function
//     at <anonymous>:1:18
// (anonymous) @ VM3133:1
// for(i=0;i<4;i++){ch.nodelist.ch(i).style.background="yellow"}
// VM3153:1 Uncaught TypeError: Cannot read properties of undefined (reading 'ch')
//     at <anonymous>:1:30
// (anonymous) @ VM3153:1
// ch.nodelist
// undefined
// ch.NodeList
// undefined
// for(i=0;i<4;i++){ch[i].style.background="yellow"}
// 'yellow'
// ch[3].style.background="red"
// 'red'
// let he=document.querySelector("#hding")
// undefined
// he.style.background="blue"
// 'blue'
// he.setAttribute('class',"hello")
// undefined
// he.className
// 'hello'
// he.classList
// DOMTokenList ['hello', value: 'hello']0: "hello"length: 1value: "hello"[[Prototype]]: DOMTokenList
// he.className="suhail,hero"
// 'suhail,hero'


// let pe=document.querySelector(".container")
// undefined
// pe.lastChild
// #textassignedSlot: nullbaseURI: "http://127.0.0.1:5500/index.html"childNodes: NodeList []data: "\n    "firstChild: nullisConnected: truelastChild: nulllength: 5nextElementSibling: nullnextSibling: nullnodeName: "#text"nodeType: 3nodeValue: "\n    "ownerDocument: documentparentElement: div.containerparentNode: div.containerpreviousElementSibling: div#b4.boxpreviousSibling: div#b4.boxtextContent: "\n    "wholeText: "\n    "[[Prototype]]: Text
// let hk=pe.lastChild
// undefined
// hk
// #textassignedSlot: nullbaseURI: "http://127.0.0.1:5500/index.html"childNodes: NodeList []data: "\n    "firstChild: nullisConnected: truelastChild: nulllength: 5nextElementSibling: nullnextSibling: nullnodeName: "#text"nodeType: 3nodeValue: "\n    "ownerDocument: documentparentElement: div.containerparentNode: div.containerpreviousElementSibling: div#b4.boxpreviousSibling: div#b4.boxtextContent: "\n    "wholeText: "\n    "[[Prototype]]: Text
// let hk=pe.lastElementChild
// undefined
// hk
// <div class=​"box" id=​"b4">​ho​</div>​
// let be=document.querySelectorAll(".box")
// undefined
// let arr=pe.childNodes
// VM4575:1 Uncaught SyntaxError: Identifier 'arr' has already been declared (at VM4575:1:1)
// let arr=pe.children
// VM4631:1 Uncaught SyntaxError: Identifier 'arr' has already been declared (at VM4631:1:1)
// pe.classList
// DOMTokenList ['container', value: 'container']0: "container"length: 1value: "container"[[Prototype]]: DOMTokenList
// pe.classList.add
// ƒ add() { [native code] }
// pe.classList.add("par")
// undefined
// pe.classList
// DOMTokenList(2) ['container', 'par', value: 'container par']0: "container"1: "par"length: 2value: "container par"[[Prototype]]: DOMTokenList

// let pe=document.querySelector(".container")
// undefined
// pe.classList.add("par")
// undefined
// pe.classList
// DOMTokenList(2) ['container', 'par', value: 'container par']0: "container"1: "par"length: 2value: "container par"[[Prototype]]: DOMTokenList
// pe.classList.toggle"container"
// VM5170:1 Uncaught SyntaxError: Unexpected string (at VM5170:1:20)
// pe.classList.toggle('container')
// false
// pe.classList
// DOMTokenList ['par', value: 'par']0: "par"length: 1value: "par"[[Prototype]]: DOMTokenList
// pe.classList.toggle("suhail")
// true
// pe.classList
// DOMTokenList(2) ['par', 'suhail', value: 'par suhail']0: "par"1: "suhail"length: 2value: "par suhail"[[Prototype]]: DOMTokenList
// pe.classList.remove("para")
// undefined
// pe.classList
// DOMTokenList(2) ['par', 'suhail', value: 'par suhail']0: "par"1: "suhail"length: 2value: "par suhail"[[Prototype]]: DOMTokenList
// pe.classList.contains("suhail")
// true
// function boback() {
//       confirm(' are you really want to change theme ?');
//     if (document.body.style.background == "white") {
//         document.body.style.background = "black";
       
        
//     } else {
//         document.body.style.background = "white";
//     }

// }

// let but = document.querySelector("#btn");

// but.addEventListener("click", function() {
//     boback();
// });
// function printb(event){
// alert('you click on '+event.target.textContent);
// }
// let anc=document.querySelector("a")
// anc.addEventListener('click',function (action){
//     action.preventDefault();
//     anc.textContent="click ho gya"
// })
// let bosses=document.querySelectorAll(".box")
// for (let i = 0; i < bosses.length; i++) {
 
//    let boss=bosses[i];
// // boss.addEventListener('click',function(){
// //     alert('you click on box'+(i+1));
// boss.addEventListener('click',
//     printb);
    
// }
//     const t1=performance.now();
//     for (let i = 0; i <50 ; i++) {
//         let par=document.createElement("p")
//         par.innerText="hero hu"
//         document.body.appendChild(par);
//     }
//     const t2=performance.now();
//     console.log('1st total time taken : '+(t2-t1));

//     const t3=performance.now();
//     let mydiv=document.createElement("div")

//      for (let i = 0; i <50 ; i++) {
//         let par=document.createElement("p")
//         par.innerText="hero hu"
//        mydiv.appendChild(par)
//     }
//       document.body.appendChild(mydiv);
//       const t4=performance.now();

//     console.log('2nd total time taken : '+(t4-t3));
// 1st total time taken : 1.0999999940395355
// index.js:346 2nd total time taken : 0.29999999701976776
//    const t5=performance.now();
// let fragment=document.createDocumentFragment();
// for (let i = 0; i < 50; i++) {
//     let para=document.createElement("p")
//     para.textContent="i am para "+i;
// // no reflow and no repaint for the below line
//     fragment.appendChild(para);
// // this below line take 1 reflow and 1 repaint
//     document.body.appendChild(fragment)
// }
//    const t6=performance.now();
// console.log('3rd total time taken : '+(t6-t5)); //o.5
// async function get(){

//     console.log('1st hu run ho gya');
// }
// setTimeout(get,5000);


// console.log('2nd hu me');
// console.log('3rd hu me');
// let promise = new Promise((resolve, reject) => {

//     // let success = true; //output data recieved
// let success = false;//output data not recieved
//     if (success) {
//         resolve("Data received");
//     } else {
//         reject("Data not received");
//     }

// });

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// let promise=new Promise((resolve,reject)=>{
// let customer=true;
// if(customer){
// resolve("you are our customer")}
// else{
// reject("you are not our customer")}
// });
// promise.then((result)=>{

//     console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// let promise= new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     resolve("success")
// },5000)
// })
// promise.then((result)=>{
//     console.log(result)
// }
// )
// // console.log('me to baad wala hu babu');//me to baad wala hu babu,5sec baad success
// let promise = Promise.resolve(10);

// promise
//     .then((num) => {

//         console.log(num);

//         return num * 2;

//     })
//     .then((num) => {

//         console.log(num);

//         return num + 5;

//     })
//     .then((num) => {

//         console.log(num);

//     });
    // output
    // 10
    // 20
    // 25
    // promise ke andar promiss

    // Promise.resolve(10)
    // .then((num) => {

    //     return new Promise((resolve) => {

    //         setTimeout(() => {

    //             resolve(num * 2);

    //         }, 2000);

    //     });

    // })
    // .then((result) => {

    //     console.log(result);

    // }); //20 2 sec baad

    // #finally use dono me execute hoga
//     let promise = new Promise((resolve, reject) => {

//     resolve("Success");

// });

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Operation finished");
//     });
// Promise.resolve(10)
//     .then((num) => {

//         throw new Error("Something went wrong");

//     })
//     .catch((error) => { //error catch karlega promiss ke andar se

//         console.log(error.message);

//     });
// let p = Promise.resolve("Hello");// promiss banega
// let p = new Promise((resolve) => {
//     resolve("Hello");
// });
// p.then((value) => {

//     console.log(value);

// });//hello

// let p = Promise.reject("Error");
// p.catch((error) => {

//     console.log(error);

// });//error
// let p1 = Promise.resolve("A");
// let p2 = Promise.resolve("B");
// let p3 = Promise.resolve("C");
// Promise.all([p1, p2, p3])
//     .then((result) => {

//         console.log(result);

//     });//["A", "B", "C"] Agar ek bhi Promise reject ho gaya:

// p1 → fulfilled
// p2 → rejected
// p3 → fulfilled

// to Promise.all() reject ho jayega.

// Agar tumhe sabhi promises ka result chahiye, chahe success ho ya failure:
// Promise.allSettled([p1, p2, p3])
//     .then((results) => {


//         console.log(results);


//     });

// Ye har Promise ka status batata hai.

// Example:

// fulfilled
// rejected
// fulfilled

// // race() mein jo Promise sabse pehle settle hota hai, uska result milta hai.
// Promise.race([p1, p2, p3])
//     .then((result) => {


//         console.log(result);


//     });

// // "Settle" ka matlab:

// // fulfilled OR rejected

// // Dono mein se jo pehle hua, race() usse return karega.

// Promise.any() ko yaad rakhna:
// Pehla successful Promise.
// Example:
// Promise.any([p1, p2, p3])
//     .then((result) => {


//         console.log(result);


//     });

// Agar:

// p1 → rejected
// p2 → fulfilled
// p3 → fulfilled

// to p2 ka result milega.

// Agar sab reject ho gaye, tab Promise.any() reject hota hai.

// ALL         → all successful
// ALLSETTLED  → everyone ka result
// RACE        → first settled
// ANY         → first successful

// function getUser() {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             let success = true;

//             if (success) {
//                 resolve({
//                     name: "Suhail",
//                     age: 18
//                 });
//             } else {
//                 reject("Unable to get user");
//             }

//         }, 2000);

//     });

// }
// getUser()
//     .then((user) => {

//         console.log(user);

//     })
//     .catch((error) => {

//         console.log(error);

//     });//{ name: "Suhail", age: 18 }

//response ek Promise hota hai.
// let response = fetch("https://jsonplaceholder.typicode.com/posts");

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {

//         console.log(response);

//     })
//     .catch((error) => {

//         console.log(error);

//     });
// let response = fetch("https://jsonplaceholder.typicode.com/users");
// fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
//     return response.json();

//     })
//     .then((data) => {

//         console.log(data);

//     })
// .catch((error)=>{
//     console.log(error);
    
// })

// async function getUsers() {

//     let response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//     );

//     let data = await response.json();

//     console.log(data);

// }

// getUsers();
// async function getUser() { //asyn function internally promise return karta hai,to bahr se then use karsakte ho
// try{
//     let response= await fetch("https://jsonplaceholder.typicode.com/users");
//     let users=await response.json();
//     console.log(users);
//     users.forEach(user => {
//         console.log(user.name);
        
//     });
// }
//     catch (error) {

//         console.log("Error:", error);

//     }
// }
// getUser();
// async function getposts() {
//     try{
//         let response=await fetch("https://jsonplaceholder.typicode.com/posts");
    
//     if(!response.ok){
//         throw new error("request failed..");
        
//     }
//      let posts= await response.json();
//  console.log(posts);
// }

//  catch(error){
//     console.log(error);
//  }
 
// }
// getposts();

// async function getusers() {
//    try{ let response=await fetch("https://jsonplaceholder.typicode.com/users");
//     let users=await response.json();
//     if (!response.ok) {
//     throw new Error("Failed to fetch users");
// }
//     let mydiv=document.querySelector("#users")
//     users.forEach((user) => {
//         let par=document.createElement("p");
//        par.innerHTML = `Name: ${user.name}<br>Email: ${user.email}`;

//         mydiv.appendChild(par);
//     });
// }
//     catch(error){
//     console.log(error);
// }
// }

// getusers();
// async function createUser() {

//     try {

//         let user = {
//             name: "Suhail",
//             email: "suhail@gmail.com"
//         };

//         let response = await fetch(
//             "https://jsonplaceholder.typicode.com/users",
//             {
//                 method: "POST",

//                 headers: {
//                     "Content-Type": "application/json"
//                 },

//                 body: JSON.stringify(user)
//             }
//         );

//         if (!response.ok) {
//             throw new Error("Failed to create user");
//         }

//         let data = await response.json();

//         console.log(data);

//     }
//     catch (error) {

//         console.log(error);

//     }
// }

// createUser();

// document.querySelector("#btn").addEventListener("click", async () => {

//     let name = document.querySelector("#name").value;
//     let email = document.querySelector("#email").value;

//     let user = {
//         name: name,
//         email: email
//     };

//     let response = await fetch(
//         "https://jsonplaceholder.typicode.com/users",
//         {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(user)
//         }
//     );

//     let data = await response.json();

//     console.log(data);
// });

// {
//     id: 1,manlo server par ye user hai jiski id 1 hai url me dkho,put full data update
//     name : "Suhail",
//     email : "old@gmail.com"
// }
// async function updateUser() {

//     let updatedUser = {
//         name: "Suhail Khan",
//         email: "suhail@gmail.com"
//     };

//     let response = await fetch(
//         "https://jsonplaceholder.typicode.com/users/1",
//         {
//             method: "PUT",

//             headers: {
//                 "Content-Type": "application/json"
//             },

//             body: JSON.stringify(updatedUser)
//         }
//     );

//     let data = await response.json();

//     console.log(data);
// }

// updateUser();
// {
//     manlo server bar ye HTMLDetailsElement, to patch srif required firld  update karne ke liye
//     id: 1,
//     name: "Suhail",
//     email: "old@gmail.com",
//     username: "suhail123"
// }
// async function updateEmail() {

//     let response = await fetch(
//         "https://jsonplaceholder.typicode.com/users/1",
//         {
//             method: "PATCH",

//             headers: {
//                 "Content-Type": "application/json"
//             },

//             body: JSON.stringify({
//                 email: "new@gmail.com"
//             })
//         }
//     );

//     let data = await response.json();

//     console.log(data);
// }

// updateEmail();

// async function deleteUser() {

//     let response = await fetch(
//         "https://jsonplaceholder.typicode.com/users/1",
//         {
//             method: "DELETE"
//         }
//     );

//     if (response.ok) {
//         console.log("User deleted");
//     }
// }

// deleteUser();
// fetch(url, {
//     method: "METHOD",
//     headers: {...},
//     body: ...
// });
// Lekin GET aur DELETE mein usually body nahi hoti.
// C → Create → POST
// R → Read   → GET
// U → Update → PUT / PATCH
// D → Delete → DELETE

// async function getUsers() {

//     try {

//         let response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         console.log("Status:", response.status);

//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }

//         let users = await response.json();

//         console.log(users);

//     }
//     catch (error) {

//         console.log("Error:", error.message);

//     }
// }

// getUsers();

// async function getUser() {

//     try {

//         let response = await fetch(
//             "https://jsonplaceholder.typicode.com/users/1"
//         );

//         console.log("Status:", response.status);

//         if (!response.ok) {
//             throw new Error(`User fetch failed: ${response.status}`);
//         }

//         let user = await response.json();

//         console.log("Name:", user.name);
//         console.log("Email:", user.email);

//     }
//     catch (error) {

//         console.log(error.message);

//     }
// }

// getUser();

// GET      → Read
// POST     → Create
// PUT      → Replace
// PATCH    → Partial update
// DELETE   → Delete

// Request:
// URL + Method + Headers + Body

// Response:
// Status + Headers + Body
// async function getuser() {
// let mydiv=document.createElement("div");
// let name=document.querySelector("#name")
// let email=document.querySelector("#email")
// let phone=document.querySelector("#phono")
// let button=document.querySelector("#btn")
// let form=document.querySelector("#userform")
// form.addEventListener("submit", (e) => {

//     e.preventDefault();

//     let Name = document.querySelector("#name").value;
//     let Phone = document.querySelector("#phone").value;
//     let Email = document.querySelector("#email").value;

//     let user = {
//         name: Name,
//         phone: Phone,
//         email: Email
//     };

//     console.log(user);

//     let mydiv = document.createElement("div");

//     mydiv.innerHTML = `
//         Name: ${user.name}<br>
//         Email: ${user.email}<br>
//         Phone: ${user.phone}
//     `;

//     document.body.appendChild(mydiv);
// });