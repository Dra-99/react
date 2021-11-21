import React from 'react'
import scrollWithAnimate from './util/scrollWithAnimate';

export default function withScrollReset(Comp) {
    return class ScrollResetWrapper extends React.Component {

        componentDidMount() {
            scrollWithAnimate();
        }
        

        render() {
            return <Comp {...this.props} />
        }
    }
}
