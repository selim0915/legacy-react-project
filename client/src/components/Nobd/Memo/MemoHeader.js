const MemoHeader = ({headText, leftChild, rightChild}) => {
    return (
        <header className="memo_header">
            <div className="head_btn_left">
                {leftChild}
            </div>
            <div className="head_text">
                {headText}
            </div>
            <div className="head_btn_right">
                {rightChild}
            </div>
        </header>
    )
}
export default MemoHeader;