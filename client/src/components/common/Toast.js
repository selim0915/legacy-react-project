import prototypes from "prop-types";

// https://blog.logrocket.com/how-to-create-a-custom-toast-component-with-react/

const toastStyle = {
    position: "fixed",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "5px 15px",
    border: "none",
    borderRadius: "10px",
    background: "#000",
    opacity: "20%",
    color: "#fff"
}

const Toast = ({ toasts }) =>{
    return (
        <div>
            {toasts.map((toast) => (
                <div key={toast.id} style={toastStyle}>
                    {toast.text}
                </div>
            ))}
        </div>
    );
};

Toast.prototypes = {
    toasts: prototypes.arrayOf(prototypes.shape({
        text: prototypes.string,
        type: prototypes.string,
    })).isRequired,
    deleteToast: prototypes.func.isRequired,
}

Toast.defaultProps = {
    toasts: [],
}

export default Toast;