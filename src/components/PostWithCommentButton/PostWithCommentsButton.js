import {Post} from "../Post/Post";
import {Button} from "../Button/Button";

const PostWithCommentsButton = ({post}) => {
    return (
        <div>
            <Post post={post}/>
            <Button to={`comments`}>Comments</Button>
        </div>
    );
};

export {PostWithCommentsButton};