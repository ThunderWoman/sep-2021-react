import {Button} from "../Button/Button";

const PostItem = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            {id}) {title}
            <Button to={`${id}`} state={post}>Details</Button>
        </div>
    );
};

export {PostItem};