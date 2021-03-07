const Span = (props) => {
	return (
		<span
			className={props.className}
			style={props.style}
		>
			{props.value}
		</span>

	);
}

export default Span;