import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

//using local storage, we can persist our todos at all times to the local storage 
//of the browser by using a different react hook.
//instead of State we use effect

//effect takes a dependency array and a callback function that will 
//run code when lisentes to different events 
function App() {
 const[todos, setTodos] = useState([])
const [todoValue, setTodoValue] = useState('')

function persistData(newList){
  localStorage.setItem('todos', JSON.stringify({todos: 
    newList}))
}

 function handleAddTodos(newTodo) {
  const newTodoList = [...todos, newTodo]
  persistData(newTodoList)
  setTodos(newTodoList)
 }

 function handleDeleteTodo(index) {
  const newTodoList = todos.filter((todo, todoIndex) => {
    return todoIndex !== index
  })
  persistData(newTodoList)
  setTodos(newTodoList)
 }

 function handleEditTodo(index){
const valueToBeEdited = todos[index]
setTodoValue(valueToBeEdited)
handleDeleteTodo(index)
 }

useEffect(() => {
if (!localStorage) {
  return
}

let localTodos = localStorage.getItem('todos')
if(!localTodos){
  return
}

localTodos = JSON.parse(localTodos).todos
setTodos(localTodos)

}, [])

 //add commercial props
  return (
   <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue}
      handleAddTodos={handleAddTodos} />

      <TodoList handleEditTodo={handleEditTodo}
      handleDeleteTodo={handleDeleteTodo} todos={todos} />
 </>
   //use Reactstate variables to create a todo list
    //use state whenever you have a user interactive app
  )
}

export default App
