// 조건문

// if 조건문(if문)
let num = 9;

// num이 10이상일때만 콘솔 출력
if(num >= 10){
    console.log("num은 10 이상입니다");
    console.log("조건이 참 입니다!");
}
// 중간에 멈추게 됨 무한으로 생성 가능
else if(num >=5){
    console.log("5이상입니다.")
}
// 중간에 멈추게 됨 무한으로 생성 가능
else if(num >=3){
    console.log("5이상입니다.")
}
// 조건이 거짓일때 실행될 코드(그렇지 않으면)
else {
    console.log("조건이 거짓입니다!");
}

// if로 시작해서 else로 끝나야함


// 2.swithch 문
// if문과 기능 자체는 동일
// 다수의 조건을 처리할 때 if보다 더 직관적이다

let animal = "dog";
// 비교하고싶은 변수를()안에 넣기 하나의 값을 여러개와 조건이 맞는지 확인하고 싶을때 사용하는거같음
// 핵심은 하나의 값
// 요약: 어떤 변수의 값을 기준으로 각각 다른 코드를 실행시키고 싶으면 이거
switch(animal) {
    case "cat":{
        console.log("고양이")
        break;
    }
    case "dog":
        {
        console.log("더가")
        break;
    }
    case "bear":
        {
        console.log("비우")
        break;
    }
    case "snake":
        {
        console.log("스넹크")
        break;
    }
    case "tiger":
        {
        console.log("랑히호")
        break;
    }
    // 만약 어떤 것도 없다면 else 느낌
    default:{
        console.log("그런동물은 전 모릅니다")
    }
}
// 스위치 케이스문은 기본적으로 위에서 아래로 코드를 실행시키고 만약 일치한다면 
// 그 코드를 실행시키고 아래에 있는 코드도 모두 실행시켜줌