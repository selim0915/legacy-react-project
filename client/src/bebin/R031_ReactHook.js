import { useEffect, useState } from "react";

function R031_ReactHook(props) {
    const [contents, setContents] = useState('R031_ReactHook');

    useEffect(() => {
        console.log("useEffect");
    })

    
    return(
        <div>
            <h2>{contents}</h2>
            <button onClick={() => setContents('R031_ReactHook 22')}>btn</button>
        </div>
    )
}

export default R031_ReactHook;