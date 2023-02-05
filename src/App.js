import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";

function App() {
  const [showaddTask, setShowaddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Docters Appointment',
        day: 'feb 5 at 2am',
        reminder: true
    },
    {
        id: 2,
        text: 'Docters Appointment',
        day: 'feb 5 at 2am',
        reminder: true
    },
    {
        id: 3,
        text: 'Docters Appointment',
        day: 'feb 5 at 2am',
        reminder: false
    }
])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 100000) +  1
  const newTask = { id,...task }
  setTasks([...tasks, newTask])
}


//Delete Task
  const deleteTask =(id) => {
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
      task.id === id ? 
      { ...task, reminder: !task.reminder} 
      : task)
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => 
        setShowaddTask(!showaddTask)} 
        showAdd={showaddTask}/>
      {showaddTask === true ? <AddTask onAdd={addTask}/> : null}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
