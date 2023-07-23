import React from 'react'
import SearchBar from './components/SearchBar'
import {Todo} from './model'


const App: React.FC = () => {
  const [todo, setTodo] = React.useState<string>("")
  const [todos, setTodos] = React.useState<Todo[]>([])

const handleAddTodo = (e:React.FormEvent<HTMLFormElement>) =>{
  e.preventDefault();

  if (todo){
    setTodos(
      [...todos,
      {id: Date.now(), todo, isDone: false}]);
      setTodo("");
  }
}

  return (
    <div className='container'>
      <h1 className="text-3xl font-bold text-center m-5">
        Nota
      </h1>
      <SearchBar todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      {todos.map(item => (
        <li key={item.id}>{item.id} | {item.todo} | {item.isDone ? 'completed' : 'open'}</li>
      ))}
    </div>
  )
}

export default App
