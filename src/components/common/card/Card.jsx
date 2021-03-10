import s from "./Card.module.scss"

import like from "./../../../assets/images/svg/like.svg"
import cart from "./../../../assets/images/svg/cart.svg"


const Card = (props) => {
	return (
		<div className={s.wrapper}>
			<span className={s.sale} value='SALE' />
			<img className={s.like} src={like} alt={'Like'} />
			<img className={s.wrapImg} src={props.src} alt={'product'} />
			<p className={s.text}>{props.valueText}</p>
			<span className={s.textPrice}> {props.valuePrice}</span>
			<button className={s.btnCart}>
					<img src={cart} alt={'Cart'} />
			</button>
		</div>
	);
}

export default Card;