import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store"
import {Comment} from "../../components";

const CommentsPage = () => {
    const {comments} = useSelector(state => state['commentsReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())
    }, []);

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default {CommentsPage};