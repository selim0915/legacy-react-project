import { v4 as uuidv4 } from "uuid";
import { addToast as add, removeToast} from "../store/toastSlice";
import { useDispatch } from "react-redux";

const useToast = () => {
    const dispatch = useDispatch(); // dispatch 보내다

    const deleteToast = (id) => {
        // const filteredToasts = toasts.current.filter((toast) => {
        //     return toast.id !== id;
        // });

        // // setToasts(filteredToasts);
        // toasts.current = filteredToasts;
        // setToastRender(prev => !prev);
        dispatch(removeToast(id));
    }

    const addToast = (toast) => {
        const id = uuidv4();

        const toastWithId = {
            ...toast,
            id // id: id
        }

        // setToasts(prev => [ ...prev, toastWithId]);

        // toasts.current = [...toasts.current, toastWithId];
        // setToastRender(prev => !prev);

        dispatch(add(toastWithId));

        setTimeout(() =>{
            deleteToast(id);
        }, 5000);
    }

    return [
        addToast,
        deleteToast
    ];
    /*
    배열타입 : 순서 중요, 원하는 이름대로 사용 가능
    return [
        addToast,
        deleteToast
    ];

    객체타입 : 순서상관없이 쓰고 싶은거 가져다 쓰지만 명명 중요
    return {
        addToast,
        deleteToast
    };
     */
};

export default useToast;
