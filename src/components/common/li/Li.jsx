const Li = (props) => {
	return (
		<li
			className={props.className}
			style={props.style}
		>
			{props.value}
		</li>

	);
}

export default Li;