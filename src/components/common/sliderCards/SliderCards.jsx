
import s from "./SliderCards.module.scss"

//Компоненты
import Card from "../card/Card";
// Картинки
import recordPlayer from "./../../../assets/images/svg/recordPlayer.svg"
import navigator from "./../../../assets/images/svg/navigator.svg"
import RF from "./../../../assets/images/svg/RF.svg"
import suit from "./../../../assets/images/svg/suit.svg"



const SliderCards = (props) => {
	return (
		<div className={s.wrapper}>
			<Card
				image={recordPlayer}
				name='BRP Audio-портативная система'
				price=''
				absent='нет в наличии'
				message='Сообщить о поступлении'
			/>
			<Card
				image={navigator}
				name='Garmin Echomap Plus 62cv'
				price='7 000 ₽'
				absent=''
				message=''
			/>
			<Card
				image={RF}
				name='RF D.E.S.S.TM Key'
				price=''
				absent='нет в наличии'
				message='Сообщить о поступлении'
			/>
			<Card
				image={suit}
				name='Мужской костюм 3мм'
				price='7 000 ₽'
				absent=''
				message=''
			/>
		</div>
	);
}

export default SliderCards;
