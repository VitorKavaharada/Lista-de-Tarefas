import './ToDo.css';
import React from 'react'

const ToDo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div>
        <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through":""}}>
            <div className="content">
              <p>{todo.text}</p>
              <p className='category'>
                ({todo.category})
              </p>
              <div>
                <button className='complete' onClick={()=>completeTodo(todo.id)}>Completar</button>
                <button className='remove'onClick={()=>removeTodo(todo.id)}>Excluir</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ToDo