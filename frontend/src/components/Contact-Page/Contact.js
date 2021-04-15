import React, {Component} from 'react'
import ContactServices from '../../services/contact.services'

import ContactSubmit from './ContactSubmit'

export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.onFormChange = this.onFormChange.bind(this)
        this.submitContact = this.submitContact.bind(this)
        this.updateErrors = this.updateErrors.bind(this)

        this.errors = {
            blankName: 'Please provide a name.',
            blankEmail: 'Please provide an email.',
            improperEmail: 'Please enter a valid email.'
        }

        this.errorStyle = {
            color: 'red',
            fontSize: '12px'
        }

        this.state = {
            submitted: false,

            // Contact Form Field Values
            name: '',
            email: '',
            description: '',

            // Field Value Potential Errors
            nameErr: '',
            emailErr: ''
        }
    }

    updateErrors(){
        // Name Not Provided
        if (!this.state.name){
            this.setState({
                nameErr: this.errors.blankName
            })
        } else {
            // Maybe add an if else to check if the name has a number or special character?
            this.setState({
                nameErr: ''
            })
        }

        // Email Not Provided
        if(!this.state.email){
            this.setState({
                emailErr: this.errors.blankEmail
            })
        } 
        // Type Check the Email (WIP)
        else if (!this.state.email.includes('@')){
            this.setState({
                emailErr: this.errors.improperEmail
            })
        } else {
            this.setState({
                emailErr: ''
            })
        }
    }


    submitContact(e){
        this.updateErrors()
        if(!(this.state.nameErr && this.state.emailErr)){
            var data = {
                name: this.state.name,
                email: this.state.email,
                description: this.state.description
            }
            ContactServices.submitForm(data)
                .then(response => {
                    this.setState({
                        name: response.data.name,

                        submitted: true
                    })
                    console.log(response.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    onFormChange(e){
        let key = e.target.name
        let value = e.target.value
        this.setState({[key]: value})

    }

    render(){
        return(
            <div style={{'minHeight': '100vh'}}>
                <h2>{this.state.holder}</h2>
                {this.state.submitted ? (
                    <ContactSubmit />
                ) : (
                    <div>
                    {/* Name Input */}
                    <div className='form-group'>
                        <label for='name'>Name:</label>
                        <input
                            type='text'
                            className='form-control'
                            id='name'
                            required
                            placeholder='Enter Name'
                            onChange={this.onFormChange}
                            name='name'
                        />
                        <strong
                            style={this.errorStyle}
                        >{this.state.nameErr}</strong>
                    </div>

                    {/* Email Input */}
                    <div className='form-group'>
                        <label for='email'>Email:</label>
                        <input
                            type='text'
                            className='form-control'
                            id='email'
                            required
                            placeholder='Enter Email'
                            onChange={this.onFormChange}
                            name='email'
                        />
                        <strong
                            style={this.errorStyle}
                        >{this.state.emailErr}</strong>
                    </div>

                    {/* Description Input */}
                    <div className='form-group'>
                        <label for='description'>Description:</label>
                        <input
                            type='text'
                            className='form-control'
                            id='description'
                            required
                            placeholder='Enter Description'
                            onChange={this.onFormChange}
                            name='description'
                        />
                        <br />
                    </div>

                    {/* Submit Button */}
                    <button onClick={this.submitContact} className='btn btn-success'>
                        Submit
                    </button>

                </div>
                )}

            </div>
        )
    }
}