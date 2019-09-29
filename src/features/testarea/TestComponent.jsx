
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './testAction'
import { Button } from 'semantic-ui-react'


export class TestComponent extends Component {
  static propTypes = {
    dataNumber: PropTypes.number
  }

  render() {
    const {dataNumber, incrementCounter, decrementCounter} = this.props;
    return (
      <div>
        <h1>Test Components</h1>
        <h3>The answer is {dataNumber}</h3>
        <Button onClick={incrementCounter} positive content="Increment"/>
        <Button onClick={decrementCounter} negative content="Decrement"/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dataNumber: state.test.data
})

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)





