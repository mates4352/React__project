const Input = (props) => {
	return (
		<input 
		className={props.className} 
		style={props.style}
		placeholder={props.value}
		/>
  );
}

export default Input;
