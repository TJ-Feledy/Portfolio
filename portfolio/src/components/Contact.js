import React from 'react'

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

    render() {
        return (
            <div className='Contact'>
                <h1 className='aboutHeader'>CONTACT</h1>
                <div className='iconContainer'>
                    <i className="fas fa-wave-square fa-lg"></i>
                </div>
                <form className='contactForm'>
                    <div className='contactName'>
                        <label className='contactNameLabel' htmlFor='name'>Full Name: </label>
                        <input className='contactNameInput' type='text' name='name' id='name' />
                    </div>
                    <div className='contactCompany'>
                        <label className='contactCompanyLabel' htmlFor='company'>Company: </label>
                        <input className='contactCompanyInput' type='text' name='company' id='company' />
                    </div>
                    <div className='contactEmail'>
                        <label className='contactEmailLabel' htmlFor='email'>Email: </label>
                        <input className='contactEmailInput' type='email' placeholder='janeDoe@gmail.com' name='email' id='email' />
                    </div>
                    <div className='contactPhone'>
                        <label className='contactPhoneLabel' htmlFor='phone'>Phone Number: </label>
                        <input className='contactPhoneInput' type='tel' placeholder='12195551234' name='phone' id='phone' />
                    </div>
                    <div className='contactBody'>
                        <label className='contactBodyLabel' htmlFor='body'>Please Leave a Message: </label>
                        <textarea className='contactBodyTextarea' placeholder='Whether it is for work or a criticism, I would love to here what you have to say.' name='body' id='body' />
                    </div>
                    <button type='submit'>Send Me Your Info!</button>
                </form>
                <p className='contactThankyou'>Thank you, and I look forward to hearing from you!</p>
            </div>
        )
    }
}

export default Contact