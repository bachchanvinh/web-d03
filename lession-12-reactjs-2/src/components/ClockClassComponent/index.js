import React from 'react'

class ClockClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }
    componentDidMount() {
        setInterval(
            () => this.tick(), 1000
        )
        console.log(this.state.date.getTime(), this.state.date)
    }
    tick() {
        // this.setState({ date: new Date(this.state.date-1) })
        this.setState(state => ({
            date: new Date(state.date - 1000)
        }))

    }
    render() {
        return (
            <div className="Clock">
                <h2>Bây giờ là {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default ClockClassComponent