const tasksInitialState = []
const tasksReducer = (state = tasksInitialState, action) => {
    switch(action.type) {
        case 'SET_TASKS' : {
            return [...action.payload] // [].concat(action.payload)
        }
        case 'ADD_TASK' : {
            // return state.concat(action.payload)
            return [...state, action.payload]
        }
        case 'REMOVE_TASK' : {
            return state.filter(task => task._id !== action.payload)
        }
        case 'EDIT_TASK' : {
            return state.map(task => {
                if(task._id === action.payload._id) {
                    return { ...action.payload }
                } else {
                    return {...task }
                }
            })
        }
        default: {
            return [...state]
        }
    }
}

export default tasksReducer