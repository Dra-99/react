import React, { Component } from 'react'
import Banner from './index'
import img1 from './image/b1.png';
import img2 from './image/b2.png';
import img3 from './image/b3.png';
import img4 from './image/b4.png';


export default class Test extends Component {

    state = {
        imgArr: [img1, img2, img3, img4],
    }

    render() {
        return (
            <div>
                <Banner imgArr={this.state.imgArr} />
            </div>
        )
    }
}
