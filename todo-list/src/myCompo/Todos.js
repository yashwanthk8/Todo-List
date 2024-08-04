import React from 'react'
import { TodoItem } from './TodoItem';
export const Todos = (props) => {
  let myStyle={
    minHeight: "70vh",
    margin:"40px auto"
  }
  return (
    <div className="container">
      <h2 className="text-center ">Todos List</h2>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {props.todos.length === 0 ? "Oh😅 no Todo's to display" :
          props.todos.map((todo) => {
            return(
              <>
             <TodoItem todo={todo} onDelete={props.onDelete} /> <hr/>
              </>
            )
          })
        }
      </div>

    </div>
  )
}
