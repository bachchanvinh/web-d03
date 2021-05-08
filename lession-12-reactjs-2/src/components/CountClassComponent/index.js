import React from 'react'
import './style.css'

class CountClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        // this.count1 = this.count1.bind(this)
    }
    count1(count) {
        // let data = this.state.count
        // data += count
        // this.setState({ count: data })
        this.setState(state=>({
            count:state.count+count
        }))
    }
    render() {
        return (
            <div className="counter">
                <button onClick={() => this.count1(-1)}>-1</button>
                <h2>{this.state.count}</h2>
                <button onClick={() => this.count1(1)}>+1</button>
            </div>
        )
    }
}

export default CountClassComponent