// 1. 변수
// 변수를 선언한다. 초기화 한다. 
let age = 27;
console.log(age);
// age의 값을 계속해서 바꿀 수 있다
age = 30;
console.log(age);


// 2. 상수
// 한번 저장된 값은 바꿀 수 없음 상수는 무조건 선언과 동시의 초기값을 할당하는 초기화를 시켜줘야함
const birth = "1997.01.07";
birth = "123";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2, 숫자로 시작할 수 없다.
let name1;
//  숫자는 중간이나 맨뒤에 사용할 수 있음
let na2me2;

// 3-3. 예약어를 사용할 수 없다.
// let let 이렇거 사용할 수 없음


// 4. 변수 명명 가이드 변수명은 직관적으로 사용해야 한다.
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;