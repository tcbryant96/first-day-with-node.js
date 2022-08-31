import React from 'react'

export default function Form(props) {



  
  return (
  <form onSubmit={props.handleToDoClick} className="container ">
      <div>
      <input placeholder='Things To Do...' className='text-center form-control' name= "task"></input>
      <input type="submit" className="btn btn-primary mt-3 form-control" value="Add+"></input>
      </div>
      {props.task.length ? (
       <input type="submit" onSubmit= {props.finishedSubmit} task={props.task}  className="btn btn-danger form-control" value= "Delete-"></input> 
      ):(null)}
  </form>
  
  )
}
