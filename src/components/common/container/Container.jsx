import "./Container.scss"

const Container = (props) => {
	return (
		<div
			className='container'
			style={props.style}
		>
			{props.value}
		</div>
	);
}

export default Container;