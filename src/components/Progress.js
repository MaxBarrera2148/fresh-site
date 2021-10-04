import React from 'react'
import "./Progress.css"


const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div id="progress" className="progress">
			<div id="progress-done" className="progress-done" style={style}>
			</div>
		</div>
	)
}

export default Progress