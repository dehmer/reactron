import React from "react"
import ReactDOM from "react-dom"
import Welcome from "./Welcome"

ReactDOM.render(
  <Welcome versions={ process.versions } />,
  document.getElementById('root')
)