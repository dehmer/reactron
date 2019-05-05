import React from 'react'
import fs from 'fs'

const Info = props => {
  // Access to node API is possible:
  console.log('hell, yeah!', process.versions, fs.constants)
  return <div></div>
}

export default Info