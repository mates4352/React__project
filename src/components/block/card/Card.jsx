import s from "./Card.module.scss"

import Button from "./../../common/button/Button";
import Span from "./../../common/span/Span"
import Img from "./../../common/img/Img";
import P from "../../common/p/P";

import waistcoat from "./../../../assets/images/svg/waistcoat.svg"
import cart from "./../../../assets/images/svg/cart.svg"
import price6900 from "./../../../assets/images/svg/price6900.svg"


const Card = (props) => {
	return (
		<>
			<div className={s.сard}>
				<Span value='Sale' />
				<Span value='Like' />
				<Img src={waistcoat} alt={'product'} />
				<P className={s.text} value="Спасательный жилет BRP Men's Airflow PFD" />
				<Img src={price6900} alt={'6900'} />
				<Button
					className={s.btnCart}
					value={
						<Img src={cart} alt={'Cart'}
						/>
					}
				/>
			</div>
		</>
	);
}

export default Card;