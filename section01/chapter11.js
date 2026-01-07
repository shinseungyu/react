// 함수
// 공통으로 사용되는 유사한 코드를 붙여서 이름을 붙여 불러서 사용하는거 
// 함수
function greeting() {
    console.log("안녕하세요!");
}

greeting();
// 함수 만들고 함수 호출!
// 함수를 실행시키면 첫번째로 함수를 먼저 실행시킴 그리고 위에서 아래로 실행시키는 방식


// 이값을 함수가 받아서 사용 첫번째가 위드 두번째가 헤이트
// 매개변수
function getAreaa(width, height){
    let area = width * height;
    // 함수안에서 이렇게 return을 사용하게 되면 return이후에 적힌 값을 반환하게 된다.
    // 반환값이라고 부름 

    function another(){
        console.log("dssa")
    }
    another();
    // 함수 안에 함수 사용가능(중첩함수)
    return area;

    //여기서 값이 이렇게 있으면 리턴아래코드는 실행되지 않음 
    console.log("das");
}
// 예를들어서 이렇게 작성하게 되면 인수가 함수의 매게변수르 들어가서 리턴값이 area니까 area를 반환
// 해서 area12 는 200이 됨
let area12 = getArea(10, 20);
// 인수
getArea(30, 20);
// 인수


let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}