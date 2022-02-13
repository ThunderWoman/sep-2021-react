import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../../store";
import {Post} from "../../components";

const PostsPage = () => {
    const {posts} = useSelector(state => state['postsReducer']), dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPosts())
    }, []);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsPage};