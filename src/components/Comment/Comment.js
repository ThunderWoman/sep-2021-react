import css from "./Comment.module.css";

const Comment = ({comment: {id, postId, name, email, body}}) => {
    return (
        <div className={css.Comment}>
            <div>Id: {id}</div>
            <div>PostId: {postId}</div>
            <div>Name: {name}</div>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export {Comment};