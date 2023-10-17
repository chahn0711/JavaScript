const currentYear = 2023;
let birthYear;
let age;

// 화면에 입력 받음 [입력받을 변수 = prompt("")]
birthYear = prompt("태어난 연도를 입력 하세요(YYYY) : ", "");
age = currentYear - birthYear;
// document : 웹화면에(.) 사용
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "살 입니다.");
