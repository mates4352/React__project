import s from "./BtnBuy.module.scss"


const BtnBuy = (props) => {
	return (
		<div className={s.wrap}>
			<button
				className={s.buy}
				style={props.style}
				onSubmit={props.submit}
				href={props.href}
			>
				купить
	</button>
		</div>

	);
}

export default BtnBuy;