//콜백함수 
// 자신이 아닌 다른 함수에 인수로써 전달된 함수를 의미함. 
//1. 콜백 함수 
function main(value){
    //console.log(value);
    //value();
}

function sub(){
    //console.log("I am sub");
}

main(sub)

//2. 콜백함수의 활용
function repeat(count,callback){
    for(let idx = 1; idx <=5; idx++){
    callback(idx);
    }
}

repeat(5, function(idx){
    console.log(idx);
});

repeat(5, function(idx){
    console.log(idx*2);
});

repeat(5, (idx) =>{
    console.log(idx*2);
});


// function repeatDouble(count){
//     for(let idx = 1; idx <=5; idx++){
//         console.log(idx*2);
//     }
// }

//repeat(5);
//repeatDouble(5);