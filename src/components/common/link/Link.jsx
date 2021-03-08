
const Link = (props) => {
	return (
		<a
			className={props.className}
			style={props.style}
			href={props.href}
		>
			{props.value}
		</a>
	);
}

export default Link;