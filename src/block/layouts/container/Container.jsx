import "./Container.scss"

const Container = (props) => {

	console.log(props);
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