import useTaskStore from "../context/TaskStore"


const TaskList = () => {
    const task = useTaskStore(state => state.task);
    const deleteTask = useTaskStore(state => state.deleteTask)
    const addTask = useTaskStore( state => state.addTask)
    const editTask = useTaskStore(state => state.editTask)
    
    return (
        <>
        <ul>

            {
                task.map(task => (
                    <li key={task.id}> 
                    {task.title} 
                    {task.description}
                    <button onClick={()=> editTask(task.id)}>Editar</button>
                    <button onClick={()=> deleteTask(task.id)}>Eliminar</button>
                    </li>
                ))
            }
            <button onClick={()=> addTask({id : Date.now(), texto : "Nueva tarea"})}>Agregar Tarea</button>
        </ul>
        </>
    )
}

export default TaskList
