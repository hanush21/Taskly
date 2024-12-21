import useTaskStore from "../context/TaskStore"


const CompleteTask = () => {
    const completedTasks = useTaskStore(state => state.completedTasks);
    
    
    return (
        <>
        <ul>
            {completedTasks.map(task => (
                <li key={task.id}>{task.title} {task.description} </li>
            ))}
        </ul>
        </>
    )
}

export default CompleteTask;