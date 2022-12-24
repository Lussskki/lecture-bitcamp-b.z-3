

const CounterButton = (props) =>{
    return <button onClick={()=>{
        props.setCount(props.count+1)
    }}
    >Count is {props.count}</button>
}

export default CounterButton