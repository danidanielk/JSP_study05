
 //4 형변환
 
 //String()		: 문자형으로 변환
 
 //Number()		: 숫자형으로 변환
 
 //Boolean()	: 논리형으로 변환
 
 let math = prompt("수학점수 ?");
 Number(math);
 let eng = prompt("영어점수 ?");
 Number(eng);
 let avg = (math + eng) /2;
 document.write("평균점수 : " +avg+"<br>");
 //prompt 로 받은 값은 무조건 문자형이다. 숫자가 연결되어나올뿐.
 //이걸 숫자형으로 바꿔보자..
 document.write((Number(math) + Number(eng))/2);
//---------------------------------------------


//Boolean() : 괄호값을 논리형으로 바꿈 false 를 알아두면 편함
// -숫자 0
// -빈 문자열("")
// -null
// -undefined
// -NaN
// -이외에는 모두 true 다.
let a = Number(prompt("asdf"));
document.write(a + "<br>");