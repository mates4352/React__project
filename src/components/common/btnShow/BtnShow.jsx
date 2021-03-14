import s from "./BtnShow.module.scss"


const BtnShow = (props) => {
	return (
		<button
		className={s.show}
		style={props.style}
		onSubmit={props.submit}
	>
		Показать еще
	</button>
	);
}

export default BtnShow;