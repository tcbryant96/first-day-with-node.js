
import Nav from "./components/Nav";

import React, {useState} from 'react';
import ToDoCard from './components/ToDoCard'



function App(props) {
// const [to_do, setToDo] = useState([]);
//     // function handleToDoClick(e){
//     //   const ToDo = e.target.ToDoInput.value;
//     //   let newTODO = [...to_do,ToDo ]
//     //   setToDo(newTODO)
//     }
  return (

<>
<Nav/>
<div>
<ToDoCard/>
</div>





</>
  );
}

export default App;
