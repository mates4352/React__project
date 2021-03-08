import s from "./Card.module.scss"

import Button from "./../../common/button/Button";
import Span from "./../../common/span/Span"
import Img from "./../../common/img/Img";
import P from "../../common/p/P";

import waistcoat from "./../../../assets/images/svg/waistcoat.svg"
import cart from "./../../../assets/images/svg/cart.svg"
// import cartIcon from "./../../../assets/images/svg/cartIcon.svg"
import price6900 from "./../../../assets/images/svg/price6900.svg"


const Card = (props) => {
	return (
			<div className={s.сard}>
				<Span className={s.sale} value={'Sale'}/>
				<Span className={s.like} value={'Like'}/>
				<div className={s.wrapImg}>
					<Img src={waistcoat} alt={'product'} />
				</div>
				<div className={s.wrapText}>
					<P
						className={s.text}
						value="Спасательный жилет BRP Men's Airflow PFD"
					/>
				</div>
				<div className={s.wrapPrice}>
					<Img src={price6900} alt={'6900'} />
				</div>
				<Button
					className={s.btnCart}
					value={
						<Img src={cart} alt={'Cart'} 
						    // value={
							// 	<Img className={s.cartIcon} src={cartIcon} alt={'cartIcon'}
							// 	/>
							// }
						/>
					}
				/>
			</div>
	);
}

export default Card;