import React from "react"
import ReactDOM from "react-dom"
import Welcome from "./Welcome"

// TODO: use process.versions
const versions = {
  node: '12.0.0',
  chrome: '73.0.3683.119',
  electron: '5.0.0'
}

console.log('process', process)

ReactDOM.render(
  <Welcome versions={ versions } />,
  document.getElementById('root')
)