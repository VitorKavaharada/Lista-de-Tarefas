import React from 'react'

const ToDo = ({todo}) => {
  return (
    <div>
        <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <p className='category'>
                ({todo.category})
              </p>
              <div>
                <button>Completar</button>
                <button>Deletar</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ToDo