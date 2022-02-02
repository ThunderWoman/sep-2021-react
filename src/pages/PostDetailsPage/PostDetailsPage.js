import {useEffect, useState} from "react";
import {Outlet, useLocation, useParams} from "react-router-dom";
import {PostWithCommentsButton} from "../../components";
import {postService} from "../../services";

const PostDetailsPage = () => {
  const [post, setPost] = useState(null);
  const {state} = useLocation();
  const {id} = useParams();

    useEffect(() => {
        if (!state) {
            postService.getById(id).then(value => setPost(value))
            return;
        }
        setPost(state);
    }, [id]);

    return (
        <div>
            {post && <PostWithCommentsButton post={post}/>}
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};