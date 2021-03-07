const P = (props) => {
	return (
		<p
			className={props.className}
			style={props.fontWeignt}
		>
			{props.value}
		</p>
	);
}

export default P;