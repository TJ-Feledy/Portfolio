import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { updateCount, getCount } from '../actions.js'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: this.props.counter
    }
  }
  
  componentDidMount() {
    this.props.getCount(1)
        .then(res => {
            this.setState({
                counter: this.props.counter
            }, () => {console.log(this.state.counter.count)})
        })
}

  addToCount = evt => {
    let currCount = this.state.counter.count
    let newCounter = {
      id: this.state.counter.id,
      count: currCount +1
    }
    console.log('newCounter', newCounter)
    const id = newCounter.id
    
    this.props.updateCount(newCounter, id)
      .then(() => {
        this.setState({
          counter: this.props.counter
        })
      })
  }

  render() {
    return (
      <div className="home">
        <p className="hello">
          Hello, my name is <span className="name">Theodore Feledy.</span>
        </p>
        <Link onClick={this.addToCount} to="/about" className="aboutLink">
          <h3 className="homeLink">
            Let's get started! <i className="fas fa-caret-right"></i>
          </h3>
        </Link>
        <p className="hello">I'm a Full Stack Web Developer.</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = {
  updateCount,
  getCount
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);