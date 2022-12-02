//문자형
let name1="dani";

//문자열 내부에 변수를 표현할 때 사용하면 좋은 backtick :  ${변수명}을 넣어서 표현
let message3=`My name is ${name1}`; //<< 느낌표옆에있는거..
document.write(message3 + '<br>');

//계산도 가능
let message5= `I am ${100+99} years old.`;
document.write(message5 +'<br>');


//--------------------------------------
//숫자형 Number
let age = 100;
let height = 180.2;
document.write(1+2+"<br>");
document.write(1-2+"<br>");
document.write(1*2+"<br>");
document.write(1/2+"<br>");
document.write(6%4+"<br>");

let a = 1/0;
document.write(a + "<br>");

let b = name1/2;
document.write(b+"<br>");

let aa = "im ";
let bb = ".";
document.write(aa+name1+bb+"<br>");


//-----------------------------------------
//논리형 boolean
let c= true;
let d= false;
document.write((name == "dani") + "<br>");
document.write((age < 20) + "<br>");
let dd = 20;
document.write(dd);


//------------------------------------------
// null, undefined
let e; 
document.write(e+"<br>");   //undefined 라고뜨는데 값이 할당되지 않은 상태
document.write(erljaf + "<br>"); //null 이라고뜨는데 존재하지 않는 값


//------------------------------------------
//typeof 연산자 : 변수의 자료형을 알아낼 때 사용.
// 직접 코드를 짰다면 이 연산자는 쓸모없지만 다른개발자가 코드를 짰을때, 변수에 대한 데이터타입(자료형) 을 알아야할때 사용.
// or API를 통해서 받아온 데이터의 자료형을 알아내서 다른 방식으로 처리해야 할때 자주 사용한다.
document.write(typeof name1 +"<br>");
