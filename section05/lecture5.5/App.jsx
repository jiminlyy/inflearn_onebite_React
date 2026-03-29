
import './App.css'
import Header from "./conponents/Header.jsx"; //확장자 안써고 괜찮
import Main from "./conponents/Main.jsx";
import Footer from "./conponents/Footer.jsx";
import Button from "./conponents/Button.jsx";
function App() {
  const buttonProps = {
    text : "메일",
    color : "red",
    a :1,
    b:2,
    c : 3,
  };
  return (
    <>
    <Button {...buttonProps}/>
    <Button text = {"카페"}/> 
    <Button text = {"블로그"}>
      <div>자식요소</div>
      <Header/>
    </Button>
    </>
  );
};

export default App;
