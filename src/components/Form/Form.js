import React, {useRef} from "react";

const Form = ({dispatch}) => {
  const catInput = useRef();
  const dogInput = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset()
  }

  const saveCat = () => {
    dispatch({type: "ADD_CAT", payload: {cat: catInput.current.value}})
  }

  const saveDog = () => {
    dispatch({type: "ADD_DOG", payload: {dog: dogInput.current.value}})
  }

    return (
        <form onSubmit={onSubmit}>
            <label><input type="text" placeholder={"cat"} ref={catInput}/></label>
            <button onClick={saveCat}>Save Cat</button>

        <label><input type="text" placeholder={"dog"} ref={dogInput}/></label>
            <button onClick={saveDog}>Save Dog</button>
        </form>
    );
};

export {Form};