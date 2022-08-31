import React, {useState} from 'react'
import Form from './Form'
import ToDo from "./ToDo"

export default function ToDoCard(props) {
  
const [task, setToDo] = useState([]);
    
function handleToDoClick(e){
   e.preventDefault()   
  const ToDo = e.target.task.value;
      let newTODO = [...task,ToDo ];
      setToDo(newTODO);
      e.target.task.value = " ";
}

function finishedSubmit(e){
  const newTask = e.target.task.value;
  
  for(let i of task){
    if (newTask === i){
      console.log('hi')
    }
    
  }
}
  return (
<>
<div className="card col-4">
  <h5 className="card-header text-center">To Do</h5>
    <div className="card-body">
      <h5 className="card-title">My List:</h5>
        <ul>
          {task.map((task, idx)=> <ToDo task={task} key={idx}/>)}
        </ul>
      <div className='text-center'>
      <Form handleToDoClick={handleToDoClick} task={task} finishedSubmit={finishedSubmit}/>
      </div>
    </div>

</div>
</>
  )
}
