// 단락 평가 활용 사례
// 첫번째 값 만으로도 값을 구할 수 있으면 뒤의 값을 안본다.

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });