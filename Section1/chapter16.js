//1. 상수 객체
// 상수는 저장된 값을 다시는 바꿀 수 없다.
// animal = {a:1} 또다른 객체 생성하는 것은 오류임. 
const animal ={
    type : "고양이",
    name : "나비",
    color : "black",
};

animal.age = 2; //추가 
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

//2. 메서드

const person ={
    name : "이정환",
    // sayHi : function(){
    //     console.log("안녕!");
    // },
    //매서드 선언 - 사용 방법 이것도 있다.
    sayHi (){
        console.log("안녕!");
    },
}

//호출방법
person.sayHi();
person["sayHi"]();