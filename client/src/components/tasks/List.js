import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGetTasks } from '../../actions/tasksAction'

class TasksList extends React.Component {

    componentDidMount() {
        if(this.props.tasks.length == 0) {
            this.props.dispatch(startGetTasks())
        }
    }

    render() {
        return (
            <div> 
                <h2>Tasks - { this.props.tasks.length } </h2>
                <ul>
                    { this.props.tasks.map(task => {
                        return <li key={task._id}>{task.title} <button>Remove Task</button></li>
                    })}
                </ul>


                <Link to="/tasks/new">Add Task</Link>
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const EnhancedComponent = connect(mapStateToProps)(TasksList)

export default EnhancedComponent
