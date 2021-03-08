const Input = (props) => {
	return (
		<input 
		className={props.className} 
		style={props.style}
		placeholder={props.value}
		type={props.type}
		/>
  );
}

export default Input;
