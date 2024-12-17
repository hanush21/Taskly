import { create } from 'zustand'

const useTaskStore = create((set, get) => ({
    tasks: [],
    completedTasks: [],
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
    completeTask: (taskId) => set((state) => {
        const taskToComplete = state.tasks.find(task => task.id === taskId);
        return {
            tasks: state.tasks.filter(task => task.id !== taskId),
            completedTasks: [...state.completedTasks, { ...taskToComplete, completed: true }]
        };
    }),
    getTasks: () => get().tasks,
    getCompletedTasks: () => get().completedTasks,
}))

export default useTaskStore
