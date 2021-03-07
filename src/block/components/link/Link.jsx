const Link = (props) => {
	return (
		<a
			className={props.className}
			href={props.to}
			style={props.style}
		>
			{props.value}
		</a>
	);
}

export default Link;