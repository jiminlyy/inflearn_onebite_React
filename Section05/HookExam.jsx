import { useState } from "react";
//3가지 hook 관련된 팁
//1. 함수 컴포넌트, 커스텀 훅, 내부에서만 호출 가능
//2. 조건부로 호출될 수 없다. 
function useInput(){ //커스텀 훅이 된다. 
    const [input, setInput] = useState("");
    
    const onChange = (e) => {
        setInput(e.target.value);
    };
    return [input, onChange];
}
const HookExam = () =>{
    //const[input, onChange] = getInput();

    //const state = useState();
    
    // const [input, setInput] = useState("");
    
    // const onChange = (e) => {
    //     setInput(e.target.value);
    // };

    return(
    <div>
        hookexam
    </div>
    )
}
export default HookExam;