import React from 'react'

const ToDo = ({todo, removeTodo}) => {
  return (
    <div>
        <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <p className='category'>
                ({todo.category})
              </p>
              <div>
                <button className='complete'>Completar</button>
                <button className='remove'onClick={()=>removeTodo(todo.id)}>x</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ToDo