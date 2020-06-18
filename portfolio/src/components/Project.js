import React from 'react'






class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            project: this.props.project,
        }
    }

    render() {

        const {project} = this.state

        return (
            <div className='Project'>
                <img className='projectImg' src={project} alt='project' />
            </div>
        )
    }
}


export default Project