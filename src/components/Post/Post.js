const Post = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div>
            <hr/>
            <div>ID: {id}</div>
            <div>UserId: {userId}</div>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export {Post};