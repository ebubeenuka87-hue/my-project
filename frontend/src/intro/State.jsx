import React, { useState } from 'react'





const State = () => {
  const [count, setcount] = useState(0)

const increasecount = () => {
  setcount(count + 1)
}

const decreasecount = () => {
  setcount(count - 1)
}
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={increasecount}> add</button>
       <button onClick={decreasecount}> minus</button>

    </div>
  )
}

export default State