// var digit1=5;

// alert(digit1);  

// let x = "number";
// console.log( typeof x)

// let age = 14;
// let hasvotedcard = "no";

// if(age>=14 && hasvotedcard =='yes'){

//     alert("you can vote!")
// }else if(age>=14 && hasvotedcard =='yes'){
//     alert("get your voted id card!");
// }else{

//     alert("you can not vote")
// }

// let isLoggedin =0;

// if(isLoggedin ==1){
//     document.write('login')

// }else{
//     document.write('logout')
// }

//  ternary opertor
// let isLoggedin =0;

// let option =isLoggedin==1? "logout":"login"
//     //    condition            ture    false
// document.write(option)

// let user;

// alert(user??"guest user");

// let input;

// input =1;

// switch(input){
//     case 1:
//         document.write("continue...")
//         break
//         case "y":
//             document.write("continue...")
//             break
//             case "yes":
//                 document.write("continue...")
//             break

//             case "n":
//                 document.write("End...")
//                 break
//                 case 0:
//                     document.write("End...")
//                     break
//                     case "no":
//                 document.write("End...")
//                 break

// }

// let counter = 1;

// while(counter<=10){
//     document.write('Teac gun');
// counter + 2;
// }

// while loop

// let counter =1;
// let sum =0;

// while(counter<=100){
//     if(counter %2==0){
//         sum=sum+counter;
//     }
//     counter++;
// }
// document.write(sum);

// do while 

// let counter =1;
// do{
//     document.write('techgun');
//     counter++;
// }while(counter<=10);

// for(let counter=1; counter<=10; counter++){
//     if(counter==5){
//         break;
//     }
//     document.write(counter);
//     document.write("<br>");
// }

// for(let counter=1; counter<=10; counter++){
//     if(counter==5){
//         continue;
//     }
//     document.write(counter);
//     document.write("<br>");
// }
// for(let counter=1; counter<=10; counter++){
    
//     document.write(counter);
//     document.write("<br>");

//     for(let counter2 =1; counter<3; counter2++)
//     document.write('tech gun');
//     document.write("<br>");
// }


// let age  = prompt('enter your age');

//     if(age != null){
//         console.log('your age is ${age}');
//     }
// else{
//     console.log('you age in not show');
// }

// let response = confirm("are you sure ,you wanted delete");

// if( response ){
//     document.write("delete")
// }else{
//     document.write(" not delete")

// }

// typeconwation

// let type =4;
// console.log(typeof type)

// let newtype = String(type);
// console.log(typeof newtype)

// let str ="adnan \\ ahmad";

 
// string divided to a pararapha is string in a 

// console.log(str);

// let str = "this is javascript tutorial.it is a good for me";

// let substring = str.substr(8,19);

// console.log(substring)

// let book=["math","bio","physich","english","hindi"];
//  book.splice(1,2);

// console.log(book)

// let text = "this is a book for sale";
// let wordarray = text.split('s');
// console.log(wordarray);

// arraylength

// let bookwithpages= [
//     ["math","200"],
//     ["physich","150"],
//     ["english","180"]
// ];
// console.log(bookwithpages[0][1])
// let book=["math","bio","physich","english","hindi"];

// let booklength = book.length;

// for( i=0, i < booklength; i++ ){
//   console.log(`element ${i} is ${book[i]} \n`);
// }

// for each

// let book=["math","bio","physich","english","hindi"];

// book.forEach(myfu)

// function myfu(value){
//   console.log(value)
// }

// for(i=1;i<=10;i++){
//   document.write( `2 x ${i} =${2*i}`);
//   document.write("<br>")
// }

// function using to print table

// function Multable(num){
//   for(i=1;i<=10;i++){
//     document.write(`${num} x ${i} = ${num*i}`);
//     document.write("<br>")
//   }
//   document.write("<br><br>")
// }
// Multable(2);
// document.write("<br>")
// Multable(5);
// document.write("<br>")
// Multable(6);
// document.write("<br>")
// Multable(7);
// document.write("<br>")
// Multable(8);
// document.write("<br>")
// Multable(9);
// document.write("<br>")
// Multable(5);

// function add(a,b){
//   console.log(a+b);
// }
// add(5,6)

// function compare(a,b){
//   if(a > b){
//   return 1;
// }
// else if(b > a){
//   return -1;
// }else{
//   return 0;
// }
// }

// let c =compare (5,6);
// document.write(c);


// anonymous function


// let show= function(){
//   console.log("hello world")
// };

// show();

// setTimeout


// function show(){
//   console.log("adnan")
// };

// setTimeout(show,3000);


// immedtly

// (function(){

//   let str = "hello";

//   console.log(str);

//   alert(str);

// })();

// let msg = "hello my jv"

// function show(){

// console.log(msg);

// }
// show()


// let person ={
//     firstname: 'adnan',
//     lastname: "mohd",
//     age:44
// }

// delete person.lastname
//  console.log(person)

// let person ={
//     firstname: 'adnan',
//     lastname: "mohd",
//     age:44,
//   sayhello(){
//     console.log("hello i am "+ this.firstname+" and i have a "+car.brand+ " new car")
// }
// };

// let car ={
//     brand:'tata',
//     model: 'safari'
// }
// person.sayhello();

// let x = Math.random();

// console.log(x)

// let person ={
//     firstname:'mohd',
//     lastname:'adnan',
//     age:23
// ()};
// console.log("hello my is name"+ this.firstname+"and my")

// let person = {
//     firstname:"adnan",
//     age:41,
// }
// person.lastname="mohd"

// for (let key in person){
//     console.log(key+":"+person[key]);
// }

// function getRandom (min, max){
//     let x = math.floor ( math.random () * (max - min ) ) + min;
//     return x;

// }
//  console.log(getRandom (10 , 20))


// let x = new Date("october 13, 2020 11:12:33")

// let y = new Date();

// if(y>x){
//     console.log("x is past date");

// }else if(x>y){
//     console.log("x is future date");
// }
// else{
//     console.log("x is same date");
// }


// function Student( first , last , age , cls){
//     this.firstname =first
//     this.lastname = last;
//     this.age = age;
//     this.class = cls;
// }
// var student1 = new Student("adnan","mohd",24,12);
// let student2 = new Student("ahmad","mohd",24,12);

// console.log(student1);
// console.log(student2);


// let user ={

//     id: 101,

//     email:"abc@gmail.com",

//     personinfo :{

// name:"adnan",

// adders:{

//     street :"millat",

    // city:"basti",

    // country: "india"
// }
//     }

// };
// console.log(user);

// let person =(){
    
// }


//  tag id select?


// let elm =document.getElementsByTagName("h2");
// console.log(elm)
// console.log(elm.innerHTML)
// elm.innerHTML = " <p> hello</p> ";

// console.log(elm.length)

// for(let i =0; i<elm.length;i++){
//     elm[i].innerHTML = "hello"
// }


// get element by tag name

// let div1=document.getElementById("div1")
// let elm =div1.getElementsByTagName("h2");

// for(let i =0; i<elm.length;i++){
//     elm[i].innerHTML = "hello"
// }

// query selector

// let elm = document.querySelectora("p.intro")
// console.log(elm);


// for(let i = 0; i <elm.length;i++){
//     elm[i].innerHTML = "hello"
// }

// query selector all

// let elm = document.querySelectorAll("p.intro")

// console.log(elm);


// for(let i = 0; i <elm.length;i++){

//     elm[i].innerHTML = "hello"
// }

// parent selector

// let elm = document.getElementById("intro")
// let prt = elm.parentElement;
// console.log(prt)

// traversing Element

// let elm = document.getElementById("intro")
// let node = elm.children;
// console.log(node)

// first chaild selector

// let elm = document.getElementById("intro")
// let node = elm.firstElementChild;
// console.log(node)

// last chaild selector

// let elm = document.getElementById("intro")
// let node = elm.lastElementChild;
// console.log(node)

// full chaild selector

// let elm = document.getElementById("intro")
// let node = elm.children;

// console.log(node)

// sibling selector

// let elm = document.getElementById("intro")
// let node = elm.children;
// console.log(node)


// priveiws sibling selector

// let elm = document.getElementById("intro")
// let node = elm.previousElementSibling;
// console.log(node)

// next sibling sectector

// let elm = document.getElementById("intro")
// let node = elm.nextElementSibling;
// console.log(node)


// innter html fatch

// let elm = document.getElementById("intro")

// let contant = elm.innerHTML;
// console.log(contant);

// set in inner html 

// let elm = document.getElementById("intro")

// elm.innerHTML = "<h1> this is a heading <h1>"

// add id class 

// h1.className = "try";
// h1.id="pi"

// create and 

// append element

// let elm = document.getElementById("intro")

// let h1 = document.createElement('h1')

// h1.className = "try pi";
// h1.id="intro1"
// let text = document.createTextNode("this is a h1 tag")
// h1.appendChild(text);

// h1.textContent = "contant added";

// elm.appendChild(h1)

// document.body.appendChild(h1);

// let pra = document.getElementById("p1");
// console.log(pre.textContent)

// add new li iteam in ul tag

// let list1 = document.getElementById("list");
// let iteam = document.createElement("li")
// iteam.textContent = "list 5";

// list1.appendChild(iteam)






