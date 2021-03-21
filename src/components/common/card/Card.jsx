import s from "./Card.module.scss"

// Картинки
import like from "./../../../assets/images/svg/like.svg"
import cart from "./../../../assets/images/svg/cart.svg"
import Sale from "../sale/Sale";
import { NavLink } from "react-router-dom";



const Card = (props) => {
	return (
		<div style ={props.styleCard} className={s.wrapper}>
			<Sale text='SALE' />
			<img className={s.like} src={like} alt={'Like'} />

			<NavLink to={"/PageProduct"}>
				<img style={props.styleImg} className={s.image} src={props.image} alt={'image'} />
			</NavLink>
		
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