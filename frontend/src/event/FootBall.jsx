import React from 'react'

const FootBall = () => {
  const shoot = () => {
    alert("GOAL")
  }
  return (
    <>
    <button onClick={shoot}>click</button>
    <button onClick={() => { return alert("offside")}}>send</button>
    </>
  )
}

export default FootBall