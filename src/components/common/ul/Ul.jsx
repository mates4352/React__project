const Ul = (props) => {
	return (
		<ul
			style={props.style}
			className={props.className}
		>
			{props.value}
		</ul>
	);
}

export default Ul;