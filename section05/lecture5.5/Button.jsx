// const Button = (props) =>{
//     console.log(props);
//     return <button style = {{color : props.color}}>
//         {props.text} - {props.color}
//         </button>;
// };

//default를 위해서

const Button = ({children, text, color = "black"}) =>{
    // const onClickButton = () =>{
    //     console.log(text);
    // }
    const onClickButton = (e) =>{
        console.log(e);
        console.log(text);
    }
    return (
        <button 
        // onClick = {() => {
        //     console.log(text);
        // }}
        onClick = {onClickButton}
        //onMouseEnter = {onClickButton}
        style = {{color :color}}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
    );
};
//props로 반드시 어떤 값이 들어올것이라고 생각하고 toUpperCase이면 안된다. 

export default Button;