import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState => ({
      speed: prevState.speed < 200 ? prevState.speed + 10 : prevState.speed,
    }))
  }

  applyBreak = () => {
    this.setState(prevState => ({
      speed: prevState.speed > 0 ? prevState.speed - 10 : prevState.speed,
    }))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer-img"
        />
        <h1 className="speed-in-kmph">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="accelerate-btn" onClick={this.accelerate}>
            Accelerate
          </button>
          <button className="apply-break-btn" onClick={this.applyBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
