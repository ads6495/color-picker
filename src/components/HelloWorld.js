import React, { Component } from 'react'

class HelloWorld extends Component {
  state = {
    hue: Math.ceil(Math.random() * 360),
    saturation: Math.ceil(Math.random() * 100),
    lightness: Math.ceil(Math.random() * 100)
  }
  changeHue = event => {
    this.setState({
      hue: event.target.value
    })
  }

  changeSaturation = event => {
    this.setState({
      saturation: event.target.value
    })
  }

  changeLightness = event => {
    this.setState({
      lightness: event.target.value
    })
  }

  randomColor = event => {
    this.setState({
      hue: Math.ceil(Math.random() * 360),
      saturation: Math.ceil(Math.random() * 100),
      light: Math.ceil(Math.random() * 100)
    })
  }

  render() {
    return (
      <main
        style={{
          backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${
            this.state.lightness
          }%)`
        }}
      >
        <h1>HSL Color Picker</h1>
        <input
          className="hue"
          type="range"
          min="0"
          max="100"
          value={this.state.value}
          onChange={this.changeHue}
        />{' '}
        <input
          className="saturation"
          type="range"
          min="0"
          max="100"
          value={this.state.value}
          onChange={this.changeSaturation}
        />{' '}
        <input
          className="lightness"
          type="range"
          min="0"
          max="100"
          value={this.state.value}
          onChange={this.changeLightness}
        />{' '}
        <button type="" onClick={this.randomColor}>
          Generate Color
        </button>
      </main>
    )
  }
}

export default HelloWorld
