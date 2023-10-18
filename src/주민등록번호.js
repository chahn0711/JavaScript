/* 
문자열을 자르는 substring사용
날짜 계산을 위해 Date 내장 객체 사용 (new Date())
주민등록번호 입력 길이 체크
하이픈 포함 여부 체크 (indexOf)
HTML + CSS로 이쁘게 출력 하기 

필요한 거
prompt
주민번호 아닌거 걸러내기 alert, while, break, length(길이 찾기)
성별 구하는 공식
나이 구하는 공식
성별 나이 구하려면 
숫자 골라낼 인덱스 필요 indexOf
날짜 계산 : 나이 구하기 위해서
console.log(`나이: ${}`);


*/


let jumin;
while(true) {
    jumin = prompt("주민등록번호 : ", "");
    if(jumin.length != 14) alert("입력 오류 : 다시 입력 하세요.");
    else {
        if(jumin.indexOf("-") == -1) alert("하이픈이 누락되었습니다");
        else break;
    }
}
let gender = jumin.charAt(7); // 문자열에서 해당 인덱스 문자를 추출
let gerderStr;
if (gender == "1" || gender == "3") gerderStr = "남성";
else gerderStr = "여성";

let birthYear = jumin.substring(0, 2); // 주민등록번호에서 맨앞에 2자를 잘라냄
if(gender == "1" || gender == "2") { // gender가 1 또는 2이면 19xx년에 출생
    birthYear = "19" + birthYear;
} else birthYear = "20" + birthYear; // 20xx년도 출생
birthYear = Number(birthYear); // 계산을 위해 태어날 년도 문자열을 숫자로 변경

const date = new Date(); // 날짜 객체 만들기
const currYear = date.getFullYear(); // 2022
let age = currYear - birthYear; // 현재 년도에서 태어난 년도 빼면 나이가 됨

document.write("<p class='box'> 성별 : " + gerderStr + "<br>" + "나이 : " + age + "</p>");