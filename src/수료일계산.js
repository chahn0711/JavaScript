// 현재 시간 기준으로 수료일 계산하기
// 24(시간) X 60(분) X 60(초) X 1000(밀리초)
// remainTime = parseInt(remainTime/(1000*60*60*24));
const dDay = new Date("2024-02-21"); // 끝나는 날짜
const cDay = new Date(); // 지금 날짜

const toNow = cDay.getTime(); // 1970년 1월 1일 자정(UTC)부터 현재까지 경과한 시간(밀리초) 반환
const toDay = dDay.getTime(); // 수료하는 날부터 현재까지 경과한 시간?

const remainTime = toDay - toNow; // 남은 시간??

const calcDay = Math.round(remainTime / (1000 * 60 * 60 * 24));
console.log(calcDay);

document.querySelector("#result").innerHTML = calcDay;