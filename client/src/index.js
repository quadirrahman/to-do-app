import React from 'react'
import ReactDOM from 'react-dom' 
import App from './App'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import { startGetUser } from './actions/userAction'
import { startGetTasks } from './actions/tasksAction'

const store = configureStore() 
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

// handle page reload
if(localStorage.getItem('authToken')) {
    store.dispatch(startGetUser())
    store.dispatch(startGetTasks())
}

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))