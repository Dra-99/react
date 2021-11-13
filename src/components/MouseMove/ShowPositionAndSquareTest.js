import ShowPositionAndSquare from './ShowPositionAndSquare'
import React, { PureComponent } from 'react'

export default class ShowPositionAndSquareTest extends PureComponent {
    render() {
        return (
            <div>
                <ShowPositionAndSquare>
                    {value => {
                        return (
                            <>
                                <h2>x: {value.x}, y:{value.y}</h2>
                            </>
                        )
                    }}
                </ShowPositionAndSquare>
                <ShowPositionAndSquare>
                    {value => {
                        return (<div ref={this.container} onMouseMove={this.handleMouseMove}  className="container">
                            <div style={{
                                width: 100,
                                height: 100,
                                left: value.x - 50,
                                top: value.y - 50,
                                background: "#008c8c",
                                position: "absolute"
                            }}>
                            </div>
                        </div>)
                    }}
                </ShowPositionAndSquare>
            </div>
        )
    }
}
