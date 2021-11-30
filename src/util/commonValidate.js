import PropTypes from 'prop-types'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    children: PropTypes.node,
    datas: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })),
    name: PropTypes.string,
    singleData: PropTypes.shape({
        text: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })
}