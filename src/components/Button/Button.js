import {Link} from "react-router-dom";

const Button = ({to, state, children, ...props}) => {
    return (
        <Link to={to} state={state} {...props}>
            <button>{children}</button>
        </Link>
    );
};

export {Button};