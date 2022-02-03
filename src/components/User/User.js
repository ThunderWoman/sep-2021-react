import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            {id}) {name}
            <Button to={`${id}`} state={user}>Details</Button>
        </div>
    );
};

export {User};