//������
let name1="dani";

//���ڿ� ���ο� ������ ǥ���� �� ����ϸ� ���� backtick :  ${������}�� �־ ǥ��
let message3=`My name is ${name1}`; //<< ����ǥ�����ִ°�..
document.write(message3 + '<br>');

//��굵 ����
let message5= `I am ${100+99} years old.`;
document.write(message5 +'<br>');


//--------------------------------------
//������ Number
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
//���� boolean
let c= true;
let d= false;
document.write((name == "dani") + "<br>");
document.write((age < 20) + "<br>");
let dd = 20;
document.write(dd);


//------------------------------------------
// null, undefined
let e; 
document.write(e+"<br>");   //undefined ���ߴµ� ���� �Ҵ���� ���� ����
document.write(erljaf + "<br>"); //null �̶��ߴµ� �������� �ʴ� ��


//------------------------------------------
//typeof ������ : ������ �ڷ����� �˾Ƴ� �� ���.
// ���� �ڵ带 ®�ٸ� �� �����ڴ� ��������� �ٸ������ڰ� �ڵ带 ®����, ������ ���� ������Ÿ��(�ڷ���) �� �˾ƾ��Ҷ� ���.
// or API�� ���ؼ� �޾ƿ� �������� �ڷ����� �˾Ƴ��� �ٸ� ������� ó���ؾ� �Ҷ� ���� ����Ѵ�.
document.write(typeof name1 +"<br>");
