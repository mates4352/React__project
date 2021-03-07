const Container = (props) => {

	console.log(props);
	return (
		<div
			className={props.className}
			style={props.style}
		>
			{props.value}
		</div>
	);
}

export default Container;