import React, { useState } from 'react'

const Toggle = () => {
    const [isOn, setIsOn] = useState(false)

  return (
    <button onClick ={() => setIsOn((prev) => !prev)}>
        {isOn ?("ON") : ("OFF")}

    </button>
  )
}

export default Toggle