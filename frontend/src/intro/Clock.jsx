import React, { useEffect, useState } from 'react'

const Clock = () => {

    // Stores the current time
    const [time, setTime] = useState(new Date())

    // Controls whether the clock is running
    const [isRunning, setIsRunning] = useState(true)

    // Controls dark and light mode
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {

        // If the clock is stopped, don't create a timer
        if (!isRunning) {
            return
        }

        // Update the time every 1 second
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        // Stop the timer when the component changes/unmounts
        return () => {
            clearInterval(timer)
        }

    }, [isRunning])


    // Get the day of the week
    const day = time.toLocaleDateString('en-US', {
        weekday: 'long'
    })

    // Get the current date
    const date = time.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    })


    return (
        <div className={darkMode ? "clock-container dark" : "clock-container light"}>

            <h1>Digital Clock</h1>

            {/* Day */}
            <div className="day">
                {day}
            </div>

            {/* Date */}
            <div className="date">
                {date}
            </div>

            {/* Time */}
            <div className="clock">
                {time.toLocaleTimeString('en-GB')}
            </div>

            {/* Start and Stop buttons */}
            <div className="buttons">

                <button onClick={() => setIsRunning(true)}>
                    Start
                </button>

                <button onClick={() => setIsRunning(false)}>
                    Stop
                </button>

            </div>

            {/* Dark / Light button */}
            <button
                className="mode-button"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>

        </div>
    )
}

export default Clock 