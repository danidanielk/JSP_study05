
 //4 ����ȯ
 
 //String()		: ���������� ��ȯ
 
 //Number()		: ���������� ��ȯ
 
 //Boolean()	: �������� ��ȯ
 
 let math = prompt("�������� ?");
 Number(math);
 let eng = prompt("�������� ?");
 Number(eng);
 let avg = (math + eng) /2;
 document.write("������� : " +avg+"<br>");
 //prompt �� ���� ���� ������ �������̴�. ���ڰ� ����Ǿ�û�.
 //�̰� ���������� �ٲ㺸��..
 document.write((Number(math) + Number(eng))/2);
//---------------------------------------------


//Boolean() : ��ȣ���� �������� �ٲ� false �� �˾Ƶθ� ����
// -���� 0
// -�� ���ڿ�("")
// -null
// -undefined
// -NaN
// -�̿ܿ��� ��� true ��.
let a = Number(prompt("asdf"));
document.write(a + "<br>");