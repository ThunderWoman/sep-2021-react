import {postService} from "../../services";
import {Outlet} from "react-router-dom";
import css from "./PostsPage.module.css";
import {useEffect, useState} from "react";
import {PostItem} from "../../components";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, []);

    return (
        <div className={css.PostsPage}>
            <div>
                {posts.map(post => <PostItem key={post.id} post={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};