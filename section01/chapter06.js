// 1.묵시적 형 변환 자바스크립트 엔진이 알아서 형변환 하는것

let num = 10;
let str = "20";

const result = num + str;
console.log(result)
// num 이 묵시적으로 문자열로 변경되어 두개의 문자열을 합쳐서 이어붙여준것 1020 출력
// 2. 명시적 형 변환
//  -> 프로그래머 내장함수(자바스크립트가 기본으로 제공하는 함수) 등을 이용해서 직접 형 변환을 명시

// 2-1 문자열 -> 숫자
let str1 = "10";
// 넘버라는 내장함수 사용
let strToNum1 = Number(str1);
console.log(10 + strToNum1);


let str2 = "10개"
// 문자를 포함하고 있는경우 사용
let strToNum2 = parseInt(str2);
console.log(strToNum2);

