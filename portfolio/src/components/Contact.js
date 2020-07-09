import React from 'react'
import { connect } from 'react-redux'

import { text } from '../actions.js'

import Counter from './Counter.js'
import NetworkLinks from './NetworkLinks.js'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            company: '',
            email: '',
            phone: 0,
            body: ''
        }
    }

    handleChange = evt => {
        evt.preventDefault()

        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = evt => {
        evt.preventDefault()

        const { name, company, email, phone, body } = this.state

        const newBody = {body: `Name: ${name}, Company: ${company}, Email: ${email}, Phone: ${phone}... message: ${body}`}

        this.props.text(newBody)
            .then(() => {
                console.log('message sent', newBody)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className='Contact'>
                <h1 className='aboutHeader'>CONTACT</h1>
                <div className='iconContainer'>
                    <i className="fas fa-wave-square fa-lg"></i>
                </div>
                <form className='contactForm' onSubmit={this.handleSubmit} >
                    <div id='contactDiv' className='contactName'>
                        <label className='contactNameLabel' htmlFor='name'>Full Name: </label>
                        <input className='contactNameInput' onChange={this.handleChange} required type='text' name='name' id='name' />
                    </div>
                    <div id='contactDiv' className='contactCompany'>
                        <label className='contactCompanyLabel' htmlFor='company'>Company: </label>
                        <input className='contactCompanyInput' onChange={this.handleChange} type='text' name='company' id='company' />
                    </div>
                    <div id='contactDiv' className='contactEmail'>
                        <label className='contactEmailLabel' htmlFor='email'>Email: </label>
                        <input className='contactEmailInput' onChange={this.handleChange} required type='email' placeholder='janeDoe@gmail.com' name='email' id='email' />
                    </div>
                    <div id='contactDiv' className='contactPhone'>
                        <label className='contactPhoneLabel' htmlFor='phone'>Phone Number: </label>
                        <input className='contactPhoneInput' onChange={this.handleChange} type='tel' placeholder='12195551234' name='phone' id='phone' />
                    </div>
                    <div id='contactDiv' className='contactBody'>
                        <label className='contactBodyLabel' htmlFor='body'>Please Leave a Message: </label>
                        <textarea className='contactBodyTextarea' onChange={this.handleChange} required placeholder='    Whether it is for work or a criticism, I would love to hear what you have to say.' name='body' id='body' />
                    </div>
                    <button className='contactButton' type='submit'>Send Me Your Info!</button>
                </form>
                <p className='contactThankyou'>Thank you, and I look forward to hearing from you!</p>
                <Counter />
                <NetworkLinks />
            </div>
        )
    }
}

const mapDispatchToProps = {
    text,
}

export default connect(null, mapDispatchToProps)(Contact)