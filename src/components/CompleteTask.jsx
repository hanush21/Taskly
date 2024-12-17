import useTaskStore from "../context/TaskStore"
import { useShallow } from 'zustand/shallow'


const CompleteTask = () => {
    const taskCompleted = useTaskStore(state => state.completedTasks)


    const completedTasks = useTaskStore(
        useShallow(state => state.tasks.filter(task => task.completed))
    );

    return (
        <>
        <ul>
            {completedTasks.map(task => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
        </>
    )
}

export default CompleteTask;