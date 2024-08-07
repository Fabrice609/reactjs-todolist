import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todos} = props

//DEMONSTRATE WHAT A TODO LIST SHOULD LOOK LIKE
//arrays

//moved the elements to the parent component 

 //Mapping out content from array
        //the reason we use mapping is so we can use HTML or JSX once and have it be
        //applied to each element

  return (
    <ul className='main'>
             {todos.map((todo, todoIndex) => {
                 return (                   
                    <TodoCard {...props}  key={todoIndex}
                        index={todoIndex}>
                        <p>{todo}</p>
                        </TodoCard>
                  
          )
          
        })}
    </ul>
  )
  
    }
