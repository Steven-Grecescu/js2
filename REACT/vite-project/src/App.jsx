import { useState } from 'react'
import { nanoid } from 'nanoid'
import ListItem from './ListItem.jsx'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const [todoList, setToDoList] = useState([
    {id:nanoid(5), content : "item 1"},
    {id:nanoid(5), content : "item 2"},
    {id:nanoid(5), content : "item 3"}
  ])

  const [todo, setToDo] = useState("")
  const [showValidation,setShowValide] = useState(false)

  function deleteTodo(id) {
    setToDoList(todoList.filter(todo => todo.id!== id))

  }

  function handleSubmit(e){
    e.preventDefault()
    if(todo === ""){
      setShowValide(true)
      return
    }
    setToDoList([...todoList, {id:nanoid(), content : todo}])
    setToDo("")
    setShowValide(false)
  }


  return (
    <>
     <div className="h-screen bg-slate-900">
        <div className="max-w-4xl mx-auto pt-20 px-6">
          <h1 className="text-3xl text-slate-100 mb-4 text-center"> La To-Do-Liste </h1>
          <form onSubmit={handleSubmit} className="mb-10">
           <label htmlFor="todo-item" className="text-slate-50">Ajouter une chose a faire</label>
           <input value={todo} onChange={e=>setToDo(e.target.value)} type="text" id="todo-item" className=" mt-1 block w-full rounded" placeholder="Ajouter une nouvelle tâche"/>
            {showValidation &&(<p className='text-red-400'>Veuillez saisir une tâche</p>)}
            <button type="submit" className=" mt-4 py-2 px-2 bg-slate-50 rounded min-w-[135px]">Ajouter</button>
          </form>
          <ul >

          {todoList.length === 0 && (
            <li className='text-slate-50 text-md'>Pas d'items à afficher</li>
          )}


          {todoList.length> 0 && 
            todoList.map(item => (
              <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
          ))}



      
            
          </ul>
        </div>
     </div>
    </>
  )
}

export default App
