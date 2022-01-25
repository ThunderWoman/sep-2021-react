import './App.css';
import Users from "./Components/Users";
import Posts from "./Components/Posts";
import Comments from "./Components/Comments";


const App = () => {
  return (
      <div className={'wrap'}>
        <div className={'wrapper'}>
          <div><Users/></div>
          <div className={'posts'}><Posts/></div>
        </div>
        <div><Comments/></div>
      </div>
  );
};

export default App;
