import BlogForm from "../componets/BlogForm"

const CreatePage = ({ addToast }) => {
    return (
        <div>
            <BlogForm editing={false} addToast={addToast} />
        </div>
    );
};

export default CreatePage;