// 1. null 병합 연산자
// 존재하는 값을 추려내는 기능
// null, undefinded가 아닌 값을 찾아내는 연산자

// 초기화를 하지 않아서 undefined
let var1;
let var2 = 10;
let var3 = 20;
//  var1은 undefined var2의 값인 10이 출력댐
let var4 = var1 ?? var2;
// 이건 20출력됨
let var5 = var1 ?? var3;
let var6 = var2 ?? var3;

console.log(var6);

let userName = "이정환";
let userNickName = "winterlood";
// 유저네임이 있다면 userName 출력 없다면 userNickName출력 A가 null 또는 undefined일 때만 B를 사용한다 그래서 안나오는것임
let displayName = userName ?? userNickName;
console.log(displayName);

// 2. typeof 연산자
// --> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
// 현재 타입이 궁금하면 타입오프사용

let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
// 결과값 string
console.log(t1);


// 3. 삼항 연산자
//  항을 3개 사용하는 연산자
//  조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환
let var8 = 10;
// 요구사항 : 변수 res에 var8의 값이 짝수일때는 -> "짝", 홀수 -> "홀"

let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);