// 1.number type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
// 나머지 연산은 모듈러라함
// 양의 무한
let inf = Infinity;
// 음의 무한
let minf = -Infinity;
// 연산이 실패했을때
let nan = NaN;
console.log(1 * "hello");
// 2. String Type
// 무조건 문자열은 '',""로 감싸줘야함 
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;
console.log(introduce);
// 백틱으로 감싸면 이런 값들을 동적으로 나오게 할 수 있음 템플릿 리터럴 문법이라고 부름
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduceText);

//3. Boolean Type 
let isSwitchOn = true;
let isEmpty = false;


// 4. Null Type (아무것도 없다) 직접적으로 명시적으로 할당을 함으로써 개발자가 직접 넣어준것임
let empty = null;

// 5.undefinded type 변수를 선언하고 그 변수에 어떠한 값도 집어넣지 않았을때 자동으로 할당되는값
let hello;
console.log(hello); 



