import React from 'react'

const DestructureCar = (props) => {
    const {name, brand, model} = props
  return (
    <div>
        <h1>I love {name} especially {brand} brand, and {model} model</h1>
    </div>
  )
}

export default DestructureCar