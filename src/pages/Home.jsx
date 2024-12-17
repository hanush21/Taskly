import React from 'react'
import TaskList from '../components/TaskList'
import CompleteTask from '../components/CompleteTask'

const Home = () => {
    return (
        <div>
            <h1>Lista de tareas</h1>
            <h2>Todas las tareas:</h2>
            <TaskList/>
            <h2>Tareas copletadas:</h2>
            <CompleteTask/>
        </div>
    )
}

export default Home
