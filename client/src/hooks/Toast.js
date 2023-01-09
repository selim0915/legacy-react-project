import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const useToast = () => {
    const [, setToastRender] = useState(false);
    const toasts = useRef([]);

    const deleteToast = (id) => {
        const filteredToasts = toasts.current.filter((toast) => {
            return toast.id !== id;
        });

        // setToasts(filteredToasts);
        toasts.current = filteredToasts;
        setToastRender(prev => !prev);
    }

    const addToast = (toast) => {
        const id = uuidv4();

        const toastWithId = {
            ...toast,
            id // id: id
        }

        // setToasts(prev => [ ...prev, toastWithId]);
        toasts.current = [...toasts.current, toastWithId];
        setToastRender(prev => !prev);

        setTimeout(() =>{
            deleteToast(id, toasts, setToastRender);
        }, 5000);
    }

    return [
        toasts.current,
        addToast,
        deleteToast
    ];
};

export default useToast;