// 차이점 : 자바 스크립트는 증감 연산자가 있음
// 비교연산자
// 동등연산자
// console.log(1 == "1"); // 자바스크립트는 같다고 나옴 자바는 ""가 있으면 문자로 인식해서 다르다고 나옴
// console.log(1 == true);
// console.log(0 == false);
// 부등연산자 
// console.log(1 != "1");
// console.log(1 != true);
// console.log(0 != false);

// 일치연산자 (===): 두 값이 같은지를 비교하는데 데이터 타입도 함께 확인
// console.log(1 === "1"); 
// console.log(1 === true);
// console.log(0 === false);

// console.log(1 !== "1");
// console.log(1 !== true);
// console.log(0 !== false);


// 형변환: 묵시적형변환과 명시적 형변환(개발자가 의도를 가지고 변환하는 것)이 있음
let num1 = 10 + Number("10");
// console.log(num1);

// 반복문 : 자바스크립트에서 반복문은 while, do~while, for, for-in, for-of
// let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
// for(let i = 0; i < brands.length; i++) {
//     console.log(brands[i]);
// }

// 고객이 구입 가능한 음료 리스트 구하기
let productList = [
    {
        name: "레쓰비",
        price: 700
    },
    {
        name: "티오피",
        price: 1000
    }, 
    {
        name: "비타500",
        price: 800
    },
    {
        name: "포카리스웨트",
        price: 1000
    }, 
    {
        name: "파워에이드",
        price: 1200
    }
];
let inputCoin = 800;
let outputCoin = []; // 빈 배열 생성
for(let i = 0; i < productList.length; i++) {
    if(productList[i].price <= inputCoin){
        outputList.push(productList[i]); // 배열의 마지막에 새로운 요소 추가
    }
}
console.log(outputList);

// for-in : 객체의 프로퍼티를 열거하는데 사용
let person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

for(let key in person){
    console.log(person[key]); // 키값을 이용해 해당하는 값 출력
}

// for-of : 향상된 for문과 유사
let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
for(let e of brands){
    console.log(e);
}