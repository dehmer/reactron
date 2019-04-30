import React from "react"
import ReactDOM from "react-dom"
import './index.css'
import Map from './Map'

const center = L.latLng(48.65400545105681, 15.319061279296877)
const mapOptions = {
  center,
  zoomControl: false, // default: true
  zoom: 13
}

const tileProvider = {
  "id": "OpenStreetMap.Mapnik",
  "name": "OpenStreetMap",
  "url": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  "maxZoom": 19,
  "attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
}

ReactDOM.render(
  <Map
    id='map'
    className='map'
    tileProvider={ tileProvider }
    options={ mapOptions }
  />,
  document.getElementById('root')
)