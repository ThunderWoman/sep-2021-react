import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Comment} from "../../components";
import {postService} from "../../services";

const PostCommentsPage = () => {
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        postService.getCommentsById(id).then(value => setComments([...value]))
    }, []);

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostCommentsPage};