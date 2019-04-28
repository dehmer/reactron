import React from 'react'

const Welcome = props =>
  <div>
    <h1>Hello World!</h1>
    We are using node {props.versions.node},
    Chrome {props.versions.chrome},
    and Electron {props.versions.electron}.
  </div>

export default Welcome