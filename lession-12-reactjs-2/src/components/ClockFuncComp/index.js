import React, { useState, useEffect } from 'react'
let check=new Date()
function ClockFuncComponent() {
    const [time, settime] = useState(new Date().toLocaleTimeString())
    // settime(new Date(time+1000))
    useEffect(() => {
        
        let counttime = setInterval(() => {
            check.setSeconds(check.getSeconds()-1)
            console.log(check)
            // settime(new Date(time - 1000))
            settime(check.toLocaleTimeString())
        }, 1000)
        // console.log(time.getTime())
        return () => clearInterval(counttime)

    })
    return (
        <div className="Clock">
            <h2>Bây giờ là {time}</h2>
        </div>
    )
}


export default ClockFuncComponent