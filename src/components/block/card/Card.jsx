import s from "./Card.module.scss"

import Button from "./../../common/button/Button";
import Span from "./../../common/span/Span"
import Img from "./../../common/img/Img";
import P from "../../common/p/P";

import like from "./../../../assets/images/svg/like.svg"
import cart from "./../../../assets/images/svg/cart.svg"


const Card = (props) => {
	return (
		<div className={s.wrapper}>
			<Span className={s.sale} value='SALE' />
			<Img className={s.like} src={like} alt={'Like'} />
			<Img className={s.wrapImg} src={props.src} alt={'product'} />
			<P className={s.text} value={props.valueText} />
			<P className={s.textPrice} value={props.valuePrice} />
			<Button
				className={s.btnCart}
				value={
					<Img src={cart} alt={'Cart'} />
				}
			/>
		</div>
	);
}

export default Card;