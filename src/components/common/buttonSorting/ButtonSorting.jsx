import s from "./ButtonSorting.module.scss"

const ButtonSorting = (props) =>  {
	return (
		<button
			className={s.buttonSorting}
			style={props.style}
		>
			{props.value}
		</button>
	);
}

export default ButtonSorting;
