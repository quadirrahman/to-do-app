import React from 'react' 
import { connect } from 'react-redux'
import { startRegisterUser } from '../../actions/userAction'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '', 
            password: ''
        }
    }   

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email, 
            password: this.state.password 
        }
        const redirect = () => {
            return this.props.history.push('/users/login')
        }

        this.props.dispatch(startRegisterUser(formData, redirect))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    render() {
        return (
            <div> 
                <h2>Register with us</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username"> username </label>
                    <input 
                        type="text" 
                        id="username" 
                        value={this.state.username} 
                        name="username" 
                        onChange={this.handleChange} 
                    /> <br/>

                    <label htmlFor="email">email</label>
                    <input 
                        type="text" 
                        id="email" 
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange}
                    /> <br/> 

                    <label htmlFor="password">password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={this.state.password}
                        name="password"
                        onChange={this.handleChange}
                    /> <br/>  

                    <input 
                        type="submit" 
                        value="register"
                    />
                </form>
            </div> 
        )
    }
}

export default connect()(Register)