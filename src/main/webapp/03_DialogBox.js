
//대화상자
//alert, prompt, confirm

// alert: 경고창 
alert("경고!");
//-----------------------------------------


// prompt : 값을 입력받을 수 있음
let name = prompt("write your name");
alert(`안녕하세요,${name}님. 곧 퇴근입니다.`);
// prompt 는 2개의 파라미터를 가질 수 있음
let reservation = prompt("예약일을 입력해주세요.","2022-09-");
//-----------------------------------------


//confirm : 확인받음
//값 :     확인-> true    //  취소 -> false
let isAdult = confirm("당신은 성인이냐?");
alert(isAdult);