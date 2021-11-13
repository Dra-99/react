import React, {PureComponent} from 'react'
import "./index.css"

export default function withShowMouseMove(Comp) {
    return class ShowMouseMove extends PureComponent {

        state = {
            x: 0,
            y: 0
        }
    
        container = el => {
            this.div = el;
        }
    
        handleMouseMove = (e) => {
            const mouseX = e.clientX - this.div.getBoundingClientRect().left;
            const mouseY = e.clientY - this.div.getBoundingClientRect().top;
            this.setState({
                x: mouseX,
                y: mouseY
            })
            console.log(mouseX, mouseY)
        }
    
        render() {
            return (
                <div ref={this.container} onMouseMove={this.handleMouseMove}  className="container">
                    <Comp {...this.props} x={this.state.x} y={this.state.y} />
                </div>
            )
        }
    }
}
