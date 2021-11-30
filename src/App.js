import React from 'react'
import Counter from './components/Counter'
import store from './store/index'
import {Provider} from 'react-redux'

export default function App() {
    return (
        <Provider store={store}>
            <div>
                <Counter />
            </div>
        </Provider>
    )
}
