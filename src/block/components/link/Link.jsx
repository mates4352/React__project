const Link = (props) => {
	return (
		<a className={props.className} href={props.to}>{props.value}</a>
  );
}

export default Link;