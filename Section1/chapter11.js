//함수 선언
function greeting(){
    console.log("안녕하세요!");
}
// console.log("호출전");
// greeting(); //소괄호 필수
// console.log("호출후");

function getArea(width, height){ //매개변수
    //let width =10;
    //let height = 20;
    let area = width * height;
    function another (){ //중첩함수
        console.log("another");
    }
    another();
    //console.log(area);
    return area;
}
let area1 = getArea(10,20); //인수
let area2 = getArea(20,30); 

console.log(area1);
console.log(area2);


//함수의 위치와 상관없음
//호이스팅 
//->끌어올린다는 뜻
