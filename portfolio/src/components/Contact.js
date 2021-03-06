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
            phone: '',
            body: '',
            bodyPlaceholder: '    Whether it is for work or a criticism, I would love to hear what you have to say.',
            thankYou: 'I look forward to hearing from you!'
        }
    }

    handleChange = evt => {
        evt.preventDefault()

        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    mouseEnter = evt => {
        evt.preventDefault()

        this.setState({
            thankYou: 'Your info will be texted directly to my personal phone!'
        })
    }

    mouseLeave = evt => {
        evt.preventDefault()

        this.setState({
            thankYou: 'I look forward to hearing from you!'
        })
    }



    handleSubmit = evt => {
        evt.preventDefault()

        const { name, company, email, phone, body } = this.state

        const newBody = `Name: ${name}, Company: ${company}, Email: ${email}, Phone: ${phone}... message: ${body}`

        this.props.text(newBody)
            .then(() => {
                this.setState({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    body: '',
                    bodyPlaceholder: 'Thank you, and I hope you enjoyed my portfolio!'
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { name, email, company, phone, body, bodyPlaceholder } = this.state
        return (
            <div className='Contact'>
                <h1 className='aboutHeader'>CONTACT</h1>
                <div className='iconContainer'>
                    <i className="fas fa-wave-square fa-lg"></i>
                </div>
                <form className='contactForm' onSubmit={this.handleSubmit} >
                    <div id='contactDiv' className='contactName'>
                        <label className='contactNameLabel' htmlFor='name'>Full Name: </label>
                        <input className='contactNameInput' value={name} onChange={this.handleChange} required type='text' name='name' id='name' />
                    </div>
                    <div id='contactDiv' className='contactCompany'>
                        <label className='contactCompanyLabel' htmlFor='company'>Company: </label>
                        <input className='contactCompanyInput' value={company} onChange={this.handleChange} type='text' name='company' id='company' />
                    </div>
                    <div id='contactDiv' className='contactEmail'>
                        <label className='contactEmailLabel' htmlFor='email'>Email: </label>
                        <input className='contactEmailInput' value={email} onChange={this.handleChange} required type='email' placeholder='janeDoe@gmail.com' name='email' id='email' />
                    </div>
                    <div id='contactDiv' className='contactPhone'>
                        <label className='contactPhoneLabel' htmlFor='phone'>Phone Number: </label>
                        <input className='contactPhoneInput' value={phone} onChange={this.handleChange} type='tel' placeholder='12195551234' name='phone' id='phone' />
                    </div>
                    <div id='contactDiv' className='contactBody'>
                        <label className='contactBodyLabel' htmlFor='body'>Please Leave a Message: </label>
                        <textarea className='contactBodyTextarea' value={body} onChange={this.handleChange} required placeholder={bodyPlaceholder} name='body' id='body' />
                    </div>
                    <button className='contactButton' type='submit' onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>Send Me Your Info!</button>
                </form>
                <p className='contactThankyou'>{this.state.thankYou}</p>
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