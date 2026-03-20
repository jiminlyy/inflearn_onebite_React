//Promise
//비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체

//대기 - 아직 작업이 완료지 않은 상태
// 성공 - 비동기 작업이 성공적ㅇ로 관료 (대기->성공 = 해결)
//실패 = 비동기 작업 실패 (대기->실패 = 거부)
const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      //console.log("안녕");
      //resolve();
      //resolve("안녕");
    }, 2000);
});


function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

//then 메서드 
//=>그 후에

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });