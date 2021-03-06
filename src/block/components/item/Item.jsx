const Item = (props) => {
	console.log(props);
	return (
		<li className={props.className}>{props.value}</li>
		
  );
}

export default Item;