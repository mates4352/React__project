import s from "./BtnBuy.module.scss"


const BtnBuy = (props) => {
	return (
		<div className={s.wrap}>
			<button
				className={s.buy}
				style={props.style}
				onSubmit={props.submit}
			>
				купить
	</button>
		</div>

	);
}

export default BtnBuy;