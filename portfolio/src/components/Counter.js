import React from 'react'
import { connect } from 'react-redux'



class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter = {}
        }
    }

    componentDidMount() {

        this.setState({
            counter: this.props.counter
        })
    }

    render() {
        return (
            <div className='Counter'>
                <div className='eyeContainer'><i className="eye far fa-eye"></i></div>
                <p className='count'>this.state.counter.count</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter,
    isLoading: state.isLoading
})

export default connect(mapStateToProps)(Counter)