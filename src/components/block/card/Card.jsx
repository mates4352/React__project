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
			<Span className={s.boxSale} value={
				<P className={s.sale} value='SALE' />
			} />
			<Span className={s.like} value={
				<Img src={like} alt={'Like'} />
			} />
			<div className={s.wrapImg}>
				<Img src={props.src} alt={'product'} />
			</div>
			<div className={s.wrapText}>
				<P
					className={s.text}
					value={props.valueTitle}
				/>
			</div>
			<Span className={s.wrapPrice} value={
				<P className={s.textPrice} 
				value={props.valuePrice} />
			} />
			<Button
				className={s.btnCart}
				value={
					<Img src={cart} alt={'Cart'} />
				}
			/>
		</div>
	);
}


// const Card = (props) => {
// 	return (
// 			<div className={s.сard}>
// 				<Span className={s.boxSale} value={
// 					<P className={s.sale} value='SALE'/>
// 					}/>
// 				<Span className={s.like} value={
// 					<Img src={like} alt={'Like'} />
// 					}/>
// 				<div className={s.wrapImg}>
// 					<Img src={waistcoat} alt={'product'} />
// 				</div>
// 				<div className={s.wrapText}>
// 					<P
// 						className={s.text}
// 						value="Спасательный жилет BRP Men's Airflow PFD"
// 					/>
// 				</div>
// 				<div className={s.wrapPrice}>
// 					<Img src={price6900} alt={'6900'} />
// 				</div>
// 				<Button
// 					className={s.btnCart}
// 					value={
// 						<Img src={cart} alt={'Cart'} />
// 					}
// 				/>
// 			</div>
// 	);
// }


export default Card;