//1. 배열의 구조 분해 할당
let arr = [1,2,3];

let [one, two, three] = arr;
//console.log(one, two,three);

//2. 객체의 구조 분해 할당
let person = {
    name : "이정환",
    age : 27
};

let { name, age: myAge} = person;
//console.log(name, myAge);

//3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age})=>{
    console.log(name, age);
};
//반드시 객체를 보내야함
func(person);