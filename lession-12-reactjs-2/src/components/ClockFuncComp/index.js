import React, { useState, useEffect } from 'react'

function ClockFuncComponent() {
    const [time, settime] = useState(new Date())
    useEffect(() => {

        let counttime = setInterval(() => {
            settime(new Date(time.getTime() - 1000))
        }, 1000)
        return () => clearInterval(counttime)

    })
    return (
        <div className="Clock">
            <h2>Bây giờ là {time.toLocaleTimeString()}</h2>
        </div>
    )
}


export default ClockFuncComponent