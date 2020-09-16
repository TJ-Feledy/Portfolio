import React from 'react'






class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: this.props.project.image,
            name: this.props.project.name
        }
    }

    render() {

        const {image, name} = this.state

        return (
            <div className='Project'>
                <img className='projectImg' src={image} alt='project' />
                <div className='projectTitle'>{name}</div>
            </div>
        )
    }
}


export default Project