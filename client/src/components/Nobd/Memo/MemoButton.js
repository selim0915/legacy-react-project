const MemoButton = ({text, type, onClick}) => {
    const btnType = ["positive", "negative"].includes(type) ? type : 'default';

    return (
        <button className={["MemoButton", `MemoButton_${btnType}`].join(" ")} onClick={onClick}>
            {text}
        </button>
    )
}

MemoButton.defaultProps ={
    type: "default",
}

export default MemoButton;