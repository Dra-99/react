import React, { Component } from 'react'

export default function withLog(Comp) {
    class WithLog extends Component {

        componentDidMount() {
            console.log("挂载完成")
        }
        

        render() {
            const {ref1, ...rest} = this.props;
            return (
                <>
                    <Comp {...rest} ref={ref1} />
                </>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithLog {...props} ref1={ref} />
    })
}
