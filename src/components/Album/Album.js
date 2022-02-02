import {Button} from "../Button/Button";

const Album = ({album}) => {
    const {id, userId, title} = album;
    return (
        <div>
            <div>{id}</div>
            <div>{userId}</div>
            <div>{title}</div>
            <Button to={`${id}/photos`}>Photos</Button>
        </div>
    );
};

export {Album};