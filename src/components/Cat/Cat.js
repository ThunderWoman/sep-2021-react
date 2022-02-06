import React from "react";

const Cat = ({cat: {id, name}, dispatch}) => {
    return (
        <div style={{display: "flex"}}>
            {name}
            <button onClick={() => dispatch({type: 'DEL_CAT', payload: {id}})}>Delete Cat</button>
        </div>
    );
};

export {Cat};