function Button(props) {
    return (
        <div className={`cols-${props.cols}`}>
            <button className={props.class} onClick={() => props.action(props.symbol)}>{props.symbol}</button>
        </div>
    )
}

export default Button;