import React from 'react'
import commonValidate from '../../util/commonValidate'

export default function withInputGroup(Comp) {
    return class withInputGroup extends React.Component {
        static defaultProps = {
            datas: []
        }
        static propTypes = {
            datas: commonValidate.datas.isRequired
        }


        render() {
            const CompArr = this.props.datas.map(item => <Comp key={item.value} info={item} {...this.props} /> )
            return <>
                {CompArr}
            </>
        }
    }
}
