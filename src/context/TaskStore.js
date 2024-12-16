import create from 'zustand'


const useTaskStore = create((set) => ({
    tasks: [],
    addTask: (newTask) => set((state) => ({
        tasks: [...state.tasks, newTask]
    })),

    editTask: (id, updatedTask) => set((state) => ({
        tasks: state.tasks.map(task =>
            task.id === id ? { ...task, ...updatedTask } : task
        )
    })),

    deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter(task => task.id !== id)
    })),
    
    filteredTasks: (filter) => {
        return useTaskStore.getState().tasks.filter(filter)
    }
}))

export default useTaskStore
