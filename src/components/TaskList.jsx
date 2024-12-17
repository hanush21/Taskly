import useTaskStore from "../context/TaskStore"
import { useRef, useState } from "react";

const TaskList = () => {
    const [newTaskName, setNewTaskName] = useState('');
    const [newDescTask, setNewDescTask] = useState('');
    const [editingTask, setEditingTask] = useState(null);


    const tasks = useTaskStore(state => state.tasks);
    const deleteTask = useTaskStore(state => state.deleteTask)
    const addTask = useTaskStore(state => state.addTask)
    const editTask = useTaskStore(state => state.editTask)
    const taskCompleted = useTaskStore(state => state.taskCompleted)

    const AddNewTask = ()=> {
        addTask({id: Date.now(), title: newTaskName , description: newDescTask , completed: false})
        setNewTaskName('')
        setNewDescTask('')
    }
    const editing = (task)=>{
        setEditingTask(task);
        setNewTaskName(task.title);
        setNewDescTask(task.description);
    }
    const UpdateTask = ()=>{
        if(editingTask){
            editTask(editingTask.id,{
                title: newTaskName,
                description: newDescTask
            });
            setEditingTask(null);
            setNewTaskName('');
            setNewDescTask('');
        }
    }



    return (
        <>
        <ul>
            {tasks.map(task => (
                <li key={task.id}> 
                    <p>{task.title}</p>
                    <p>{task.description}</p>
                    <div>
                    <button onClick={()=>  editing(task)}>Editar</button>
                    <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                    <button onClick={() => taskCompleted(task.id)}>Completado</button>
                    </div>
                </li>
            ))}
        </ul>
        <input value={newTaskName} onChange={event => setNewTaskName(event.target.value)} type="text" placeholder="Nombre de la tarea"/>
        <input value={newDescTask} onChange={event => setNewDescTask(event.target.value)} type="text" placeholder="Descripcion"/>
        <button onClick={editingTask ? UpdateTask : AddNewTask} 
        disabled={!newTaskName.trim() || !newDescTask.trim()}>
            {editingTask ? "Actualizar tarea" : "Agregar tarea"}
        </button>
        </>
    )
}

export default TaskList
