import s from "./Sale.module.scss"

const Sale = (props) => {
	return (
		<span
			className={s.sale}
			style={props.style}
			>
			{props.text}
		</span>
	);
}

export default Sale;
