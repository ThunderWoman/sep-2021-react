import './App.css'

import {useSelector} from "react-redux";

import {Form} from "./components";
import {Cars} from "./components";

const App = () => {
    const {users} = useSelector(state => state.users);

    return (
        <div>
            <Form/>
            <Cars/>
            {users.map((user, index) => <div key={index}>{user}</div>)}
        </div>
    );
};

export default App;