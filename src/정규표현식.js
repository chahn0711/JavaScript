﻿// 정규표현식을 사용하여 문자열 검색, 대체, 추출 등을 수행, 패턴 매칭
// exec() : 패턴과 일치하는 문자열을 반환, 없으면 null
// let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// const pattern = /가장+/g;
// const result1 = pattern.exec(targetStr);
// // console.log(result1);
// const result2 = pattern.exec(targetStr);
// console.log(result2);
// test() : 문자열에 특정 패턴과 일치하는 문자열이 있는지 검색, 있으면 true, 없으면 false
// let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// const pattern = /가장+/g;
// const result1 = pattern.test(targetStr);
// console.log(result1);
// const result2 = pattern.test(targetStr);
// console.log(result2);

let phonNumber = "안녕하세요. 제 번호는 010-5006-4146  001-1234-5678 입니다. 전화 주세요^^";
const regex = /\d{3}-\d{3,4}-\d{4}/g; // g : 전체 다 찾음
let rst1 = regex.test(phonNumber);
console.log(rst1);
