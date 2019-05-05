import React from 'react'
import L from 'leaflet'
import { ipcRenderer } from 'electron'

const K = value => fn => { fn(value); return value }

class Map extends React.Component {

  componentDidMount() {
    const {id, options, tileProvider} = this.props
    this.map = K(L.map(id, options))(map => {
      L.tileLayer(tileProvider.url, tileProvider).addTo(map)
    })

    // Demonstrate Electron API usage:
    ipcRenderer.on('time', (event, message) => {
      console.log(event, message)
    })
  }

  render() {
    return <div id={ this.props.id } className={ this.props.className }></div>
  }
}

export default Map