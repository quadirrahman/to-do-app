import React from 'react' 
import { startAddTask } from '../../actions/tasksAction'
import { connect } from 'react-redux'

class TaskNew extends React.Component {
 
    constructor(){
        super()
        this.state = {
            title: '',
            description: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { title, description} = this.state 
        const formData = { title, description } 
        this.props.dispatch(startAddTask(formData))
        this.setState({
            title: '',
            description: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h2>Add Task</h2>
                    <label>Title</label>
                    <input type = "text" name="title" value={this.state.title} onChange={this.handleChange} /><br />
                    <label>Description</label>
                    <input type = "text" name="description" value={this.state.description} onChange={this.handleChange} /><br />

                    <input type="submit" value="Add Task" />
                </div> 
            </form>

        )
    }
}

export default connect()(TaskNew)