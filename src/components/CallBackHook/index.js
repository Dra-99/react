//App.js
import React, { useState, useCallback } from 'react'
class Test extends React.PureComponent {
	render() {
		console.log("Test Render")
		return (
			<div>
				<h1>{this.props.text}</h1>
				<button onClick={this.props.onClick}>点击</button>
			</div>
		)
	}
}
function Parent() {
	console.log("Parent Render")
	const [text, setText] = useState(123)
	const [n, setN] = useState(0)
	const handleClick = useCallback(() => {
			setText(123)
	},[])
	return (
		<div>
			<Test text={text} onClick={handleClick} />
			<input type="number"
				value={n}
				onChange={e => {
					setN(parseInt(e.target.value))
				}}
			/>
		</div>
	)
}

export default function CallBackHook() {
	return (
		<div>
			<Parent />
		</div>
	)
}




