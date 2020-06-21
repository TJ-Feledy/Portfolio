import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { updateCount } from '../actions.js'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: this.props.counter
    }
  }


  clickHandler = evt => {
    let newCounter = {
      ...this.state.counter,
      count: this.state.counter.count++
    }
    const id = newCounter.id
    
    this.props.updateCount(newCounter, id)
  }

  render() {
    return (
      <div className="home">
        <p className="hello">
          Hello, my name is <span className="name">Theodore Feledy.</span>
        </p>
        <Link to="/about" className="aboutLink">
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
  updateCount
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);