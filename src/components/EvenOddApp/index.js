import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRadomNum = () => Math.ceil(Math.random() * 100)

  increament = () => {
    const randomNum = this.getRadomNum()

    this.setState(prev => ({count: prev.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="counter-container">
        <div className="container">
          <h1> Count {count} </h1>
          <p className="count"> Count is {displayText} </p>
          <button type="button" onClick={this.increament}>
            Increment
          </button>
          <p> Increase By Random Number Between 0 to 100 </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
