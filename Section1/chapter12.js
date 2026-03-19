//1. 함수 표현식 

function funcA(){
   // console.log("funcA");
}

let varA = funcA;
varA();

let varB = function funcB(){
   // console.log("funcB");

};
//funcB는 함수로 호출된 것은 아니다. 

//2. 화살표 함수
// let varC = () =>{
//     return 1;
// };
//let varC = () =>1;

//console.log(varC());

let varC = (value) =>value +1;

console.log(varC(10));