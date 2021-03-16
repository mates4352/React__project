import s from "./Card.module.scss"

// Картинки
import like from "./../../../assets/images/svg/like.svg"
import cart from "./../../../assets/images/svg/cart.svg"
import Sale from "../sale/Sale";



const Card = (props) => {
	return (
		<div className={s.wrapper}>
			<Sale text='SALE'/>
			<img className={s.like} src={like} alt={'Like'} />
			<img style={props.styleImg} className={s.image} src={props.image} alt={'image'} />
			<p style={props.styleName} className={s.name} >{props.name}</p>
			<div>
				<p className={s.absent} >{props.absent}</p>
				<a className={s.message} >{props.message}</a>
			</div>
			<div>
				<span className={s.price}>{props.price}</span>
				<button className={s.btnCart}>
					<img src={cart} alt={'Cart'} />
				</button>
			</div>
		</div>
	);
}

export default Card;