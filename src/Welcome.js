import React from 'react'

// webpack target 'electron-renderer' enables usage of ES6 import for native modules:
import { ipcRenderer } from 'electron'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: '' }
  }

  componentDidMount() {
    ipcRenderer.on('time', (_, message) => {
      this.setState({ time: message })
    })
  }

  render() {
    const { versions } = this.props
    const time = () => this.state.time ? this.state.time.toString() : ''

    return (
      <div>
        <h1>Hello World!</h1>
        <p>
          We are using node { versions.node },
          Chrome { versions.chrome },
          and Electron { versions.electron }.
        </p>

        <p>Now it is { time() }...</p>
      </div>
    )
  }
}

export default Welcome