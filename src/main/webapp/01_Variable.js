//alert('zzzzzz');


//	1.변수 : 데이터를 담는 그릇
//		변수에 접근 방법
//		-alert()			: 경고창을 띄워주는 함수
//		-console.log()		: 로그를 띄우는 함수
//		-document.write()	: 웹페이지에 내용을 출력
		
//name = "dani";
//age = 300;       //이런 방식은 전역변수의 형태이기때문에 위험함.

//이걸 방지하기 위해 변수 선언의 형태로 3가지 방법이있는데.

//	1.var 	: 중복해서 변수선언가능 , 초기화가 가능
var a =10;
console.log(a);
var a =20;
console.log(a);
var a = 30;
console.log(a);
var a;
// a 는 30이 나옴 기존에 선언해둔 변수를 까먹고 다시 값을 할당하는 실수가 발생할 수 있음 기억력 좋으면 쓰세요



//	2.let	:변수명 중복사용 불가
let name = "dani"
console.log(name)
name="sen" 	//값은 변경가능
console.log(name)


//	3.const	:값이 절대로 바뀌지 않는 상수. 싱글톤느낌 값 수정 불가 콘스트의 변수명은 꼭 대문자로 입력!