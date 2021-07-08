import React from 'react' 
import { connect } from 'react-redux'
import { startGetTasks, startRemoveTask } from '../../actions/tasksAction'
import TaskNew from '../tasks/New'

class Dashboard extends React.Component {

    constructor(){
        super()
        this.state = {
            isShow: false
        }
    }

    componentDidMount() {
        if(this.props.tasks.length == 0) {
            this.props.dispatch(startGetTasks())
        }
    }

    handleRemove = (id) => {
        this.props.dispatch(startRemoveTask(id))
    }

    handleShow = (id) => {
        this.setState( prevState => {
            return {
                isShow: !prevState.isShow
            }
        })
    }

    render() {
        return (
            <div> 
                <h2>Tasks - { this.props.tasks.length } </h2>
                <ul>
                    { this.props.tasks.map(task => {
                        return <li key={task._id}>
                            {task.title}
                            {
                                this.state.isShow? ( 
                                    <div>{task.description}
                                    <button onClick={() => {this.handleShow(task._id)}}>Hide Description</button>
                                    </div>
                                ) : (
                                    <button onClick={()=>{
                                        this.handleShow(task._id)
                                    }}>Show Task</button>
                                )
                            }                            
                            <button onClick={() => {
                                this.handleRemove(task._id)
                            }}>Remove Task</button>
                        </li>
                    })}
                </ul>
                <TaskNew />
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const EnhancedComponent = connect(mapStateToProps)(Dashboard)

export default EnhancedComponent


