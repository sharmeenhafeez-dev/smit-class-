// var userFavNum = prompt("enter your fav num");
// prompt default my string consider krta h hr cheez ko q k user is my kuch b type kr 
// skta h like apna name b yani abcd jb k hmny us sy number manga h ab jb us ny no likha
//  to prompt hony ki waja sy us ko string smjha or 55 hmy ans diya agr hm ab prompt k sat 
// + ko likhy gy to wo string ni ly ga us ko num ly ga jsy(+prompt)
// ya phr hm console my var k st b + lga skty h 
// example
// 1)var userFavNum = +prompt("enter your fav num"); 
// 2)console.log(+userFavNum + 5)
// in my sy kisi ak way sy likhy gy to ans ya ga like agr user ny 4 btya h apna no
// or hm us my 5 add krwa ry h to ans aya ga 9
// wrna ans ata 45 ya concatnation hojati h srting ki waja sy
// lakin agr hm   (console.log(+userFavNum *5) ) + ki jaga
// multyply  likhy gy to phr koi frq ni pry ga mnz multyply hi hoga
// console.log(+userFavNum + 5)


// comparision operators
// 1(==) ya value ko ni dakhta yani type kon si h k num h ya string h (5 == "5")
// ans true ( == )agy ja k bug creat krta h is liya use ni krna chahiy
// 2(===) (5 == "5")  ya type ko dakhta h k kn si h  ans false  ( use always === ) ya ni krta creat 
// 1 operater

// console.log(5=="5") true
// console.log(5==="5") false

// is my ult hoga yani ya do value barabr ni h to true hoga or agr barabr h to false

// 2 operater
// !==   is my b type ko dakta ni h
// !=== is my type ko dakht h  same uper wali condition

// console.log(5!= 5) false
// console.log(5!==6) true

// 3 operater
//  <'> <= ,>=
// let num1 = 5;
// let num2 = 6;
// console.log(num1 < num2)  true
// console.log(num1 > num2)  false
// let num1 = 6;  
// let num2 = 6;
// console.log(num1 <= num2)  true  equal value
// let num1 = 5;
// let num2 = 6;
// console.log(num1 <= num2)  true lessthen value
// let num1 = 7;
// let num2 = 6;
// console.log(num1 <= num2)  false graterthen value

// let userage1 = 7;
// onsole.log(userage1 <= 18) false  q k user ki age km h 18 sy

// let userage2 = 30;
// onsole.log(userage2 <= 18) true  q k user ki age zyda h 18 sy


// if or else condition


// let userAge = +prompt("enter your age")

// if (userAge >=18) { console.log ("you can apply for test");}


// else {
//     console.log("you are not eligible")
// }

// game

let userFavNum = +prompt("enter a number")
let computerNum = Math.round(Math.random() * 10);


if (userFavNum === computerNum )
{console.log("you won!")}


else{
    console.log("you lose!" + computerNum)
}




