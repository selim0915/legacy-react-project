import React, { useReducer, useRef } from "react";
import MemoHome from "./MemoHome";

const reducer = (state, action) => {
    let newState = [];

    switch(action.type){
        case 'INIT' : {
            return action.data;
        }
        case 'CREATE' : {
            const newItem = {
                ...action.data
            };
            newState = [newItem, ...state];
            break;
        }
        case 'REMOVE' : {
            newState = state.filter((item)=>item.id !== action.targetId);
            break;
        }
        case 'EDIT' : {
            newState = state.map((item)=>item.id === action.data.id ? {...action.data} : item);
            break;
        }
        default : 
            return state;
    }
    return newState;
}

export const MemoStateContext = React.createContext();
export const MemoDispatchContext = React.createContext();

const Memo = () =>{
    
    const dataId = useRef(0);
    const [data, dispatch] = useReducer(reducer, []);

    const onCreate = (date, content, emotion)=>{
        dispatch({
            type:"CREATE", 
            data: {
                id:dataId.current, 
                data: new Date(date).getTime(), 
                content, 
                emotion
            }
        });
        dataId.current += 1;
    }

    const onRemove = (targetId) => {
        dispatch({type:"REMOVE", targetId});
    }

    const onEdit = (targetId, date, content, emotion) => {
        dispatch({
            type:"REMOVE", 
            data: {
                id: targetId,
                date: new Date(date).getTime(),
                content,
                emotion,
            }
        });
    }

    return (
        <MemoStateContext.Provider value={data}>
            <MemoDispatchContext.Provider value={{onCreate, onEdit, onRemove}}>
                <MemoHome />
            </MemoDispatchContext.Provider>
        </MemoStateContext.Provider>
    )
}
export default Memo;