import useTaskStore from "../context/TaskStore"
import { useShallow } from 'zustand/shallow'


const CompleteTask = () => {
    const completedTasks = useTaskStore(state => state.completedTasks);
    const deleteCompletedTask = useTaskStore(state => state.deleteCompletedTask);

    
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