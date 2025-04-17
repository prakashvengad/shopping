import {React} from 'react';
import './App.css';
import { useState } from 'react';
import TodoList  from './components/todolist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Onlineshopping from './components/onlineshopping';

function App(){
  return(
    <>
    <div>
      <Onlineshopping/>
    </div>
    </>
  )
}

export default App;
// function App() {

//   const [count, setCount] = useState(0);
//   const [inputt, setInputt] = useState("");

//   const handleInc = () => {
//     setCount(count + 1);
//   }

//   const handleDec = () => {
//     setCount(count - 1);
//   }

//   const handleChange = (e) => {
//     console.log(e.target.value);
//     setInputt(e.target.value);
//   }
  
//   return (
//     <>
//    <div className="border1">
//     <div className="testing">
//       Hi this is my first application in react
//     </div>
//     <div className="test">
//      {count}  : DB
//     </div>
//     <button className="button" onClick={handleInc}>Increment</button>
//     <button className="button1" onClick={handleDec}>Decrement</button>
    
//     </div>
//     </>
//   );
// }