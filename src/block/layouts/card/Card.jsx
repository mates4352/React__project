import s from "./Card.module.scss"

// import Like from "./../../components/like/Like";
// import Sale from "../../components/sale/Sale";
import Img from "../../components/img/Img";
import Text from "../../components/text/Text";
import Button from "../../components/button/Button";

import waistcoat from "./../../../assets/images/svg/waistcoat.svg"
import cart from "./../../../assets/images/svg/cart.svg"
import price6900 from "./../../../assets/images/svg/price6900.svg"



const Card = (props) => {
	return (
		<>
			<div className={s.сard}>
				<div>Sale</div>
				<div>Like</div>
				<Img src={waistcoat} alt={'product'} />
				<Text className={s.text} value="Спасательный жилет BRP Men's Airflow PFD" />
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