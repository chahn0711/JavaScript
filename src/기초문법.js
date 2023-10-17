﻿// 자바스크립 한 줄 주석
/*
    여러줄 주석
*/
// 변수와 상수 : var, let const
// var : es6 이전에 사용하던 변수 생성 문법 (호이스팅 (: 자바가 읽기 쉽게 임의적으로 위로 올려놓고 해석을 함)특징을 가지고 있음), 중복 선언 가능, 재할당 가능
// let : 변수 선언 문법, 자바의 변수의 형태와 동일, 중복 선언 불가, 재할당 가능
// const : 상수 선언, 재할당 불가, es6에서 추가

// 문자열
// let str = "문자열" + '연결 연산자 사용' + '이것도 사용 가능';
// console.log(str);

let name = "곰돌이사육사";
// let age = 23;
let addr = "경기도 수원시";

// 템플릿 문자열 : ``(백틱)을 사용해서 만드며, ES6에서 추가 됨
// console.log(`저의 이름은 ${name}, 나이는 ${age}, 주소는 ${addr}`);

// 숫자형(Number) : 자바스크립트는 정수와 실수를 구분하지 않고 숫자형으로 취급
let num1 = 10.1;
console.log(typeof(num1)); // typeof는 데이터 타입을 확인하는 함수
let sum = 0.1 + 0.2; // 부동 소수점은 근사치 계산을 하기 때문에 정확한 정수값이 나오지 않음
console.log(sum); // 0.30000000000000004 실수 사용시 근사치 값으로 나오기 때문에 정확성이 떨어짐

// 논리형 : 참과 거짓 구분
let age = 20;
let isAdult = (age > 18) ? true : false;
// if(isAdult) console.log("성인 입니다.");
// else console.log("성인이 아닙니다.");
// undefined : 변수는 선언되었지만 아직 값이 정해지지 않았음을 의미 (개발자가 대입하는 자료형이 아님)
let empty;
console.log(empty);
// null : 변수나 상수를 선언하고 의도적으로 선언한 공간을 비워둘 때 사용
let empty2 = null;
console.log(empty2);
// undefined와 null을 묶어서 특수 자료형이라고도 합니다.

// 객체(object) : 자바스크립트의 핵심 자료형 입니다.
// 기본 자료형을 제외하고 자바스크립트의 대부분의 자료구조는 객체로 이루어져 있음
// 객체 자료형은 배열, 객체 리터럴, 함수 등이 있음
// 배열 : 복수의 데이터를 정의할 수 있는 자료형
// let score = [80, 90, 100, 88];
// console.log(score);
// 자바스크립트의 배열은 자바와 다르게 모든 자료형을 저장 할 수 있음
let array = ["아이브", "안우진", 21, true, [100, 99, 88]];
console.log(array);
let array1 = [];
// 객체 리터럴 : 객체를 정의하는 가장 간단한 방법이며, 자바스크립트에서 가장 많이 사용되는 문법
// 객체 리터럴은 키와 값의 한쌍으로 구성(map:java 유사), 중괄호를 이용해서 생성
//let score = [80, 90, 100, 88]; // 성적의 키값을 알 수 없음(배열의 한계)
let score = {
    kor: 80, 
    eng: 90,
    mat: 100,
    scn: 87,
};
console.log(score); // { kor: 80, eng: 90, mat: 100, scn: 87 }
console.log(score['mat']); // 100

const person = {
    name: "곰돌이사육사",
    age: 22,
    addr: "경기도 수원시",
    info: function() {// 익명의 함수
        return `저의 이름은 ${this.name}이고, 나이는 ${this.age}, 주소는 ${this.addr} 입니다.`;
    }
}
// console.log(person.info());

// toString() : 배열안의 모든 문자를 쉼표를 이용해 모두 결합 후 포함