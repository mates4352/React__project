// import "./Button.scss"

const Button = (props) =>  {
	return (
		<button
			className={props.className}
			style={props.style}
			onSubmit={props.submit}
		>
			{props.value}
		</button>
	);
}

export default Button;
