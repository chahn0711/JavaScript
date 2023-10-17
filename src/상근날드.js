// 3개의 햄버거와 2개의 음료의 가격을 입력 받아 제일 싼 세트 메뉴의 가격 구하기(50원 할인)
// CSS를 이쁘게 적용
function getPrice() {
    let menu = [];
    for(let i = 0; i < 5; i++) {
        menu[i] = Number(document.getElementById("menu" + (i+1)).value);
    }
    let minB = menu[0];
    let minD = menu[3];
    for (let i = 0; i < menu.length; i++) {
        if (i < 3 && minB > menu[i]) minB = menu[i];
        if (i > 2 && minD > menu[i]) minD = menu[i];
    }
    document.getElementById("value").innerHTML = (minD + minB - 50) + "원";
}