import axios from '../config/axios'

export const setTasks = (tasks) => {
    return { type: 'SET_TASKS', payload: tasks}
}

export const startGetTasks = () => {
    return (dispatch) => {
        axios.get('/tasks', {
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const tasks = response.data 
            dispatch(setTasks(tasks))
        })
    }
}

export const addTask = (task) => {
    return { type: 'ADD_TASK', payload: task }
}

export const startAddTask = (formData) => {
    return (dispatch) => {
        axios.post('/tasks', formData, {
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const task = response.data 
            dispatch(addTask(task))
            
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const removeTask = (id) => {
    return { type: 'REMOVE_TASK', payload: id }
}

export const startRemoveTask = (id) => {
    return (dispatch) => {
        axios.delete(`/tasks/${id}`, {
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const task = response.data 
            dispatch(removeTask(task._id))
        })
        .catch((err) =>{ 
            alert(err.message)
        })
    }
}
