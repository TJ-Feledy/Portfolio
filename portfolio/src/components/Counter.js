import React from 'react'
import { connect } from 'react-redux'
import { getCount } from '../actions.js'
import { withRouter } from 'react-router-dom'



class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: {}
        }
    }

    componentDidMount() {
        this.props.getCount(1)
            .then(res => {
                setTimeout( () => {

                    this.setState({
                        counter: this.props.counter
                    }, () => {console.log(this.state.counter.count)})
                }, 300)
            })
    }


    render() {
        return (
            <div className='Counter'>
                <div className='eyeContainer'><i className="eye far fa-eye"></i></div>
                <p className='count'>{this.state.counter.count}</p>
                <p className='countPopup'>My Portfolio has been viewed {this.state.counter.count} times.</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter,
    isLoading: state.isLoading
})

export default withRouter(connect(mapStateToProps,{getCount})(Counter))