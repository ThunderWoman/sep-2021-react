import React from "react";

const Dog = ({dog: {id, name}, dispatch}) => {
    return (
        <div style={{display: "flex"}}>
            {name}
            <button onClick={() => dispatch({type: 'DEL_DOG', payload: {id}})}>Delete Dog</button>
        </div>
    );
};

export {Dog};