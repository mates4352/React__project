
// import Img from "../../common/img/Img";
// import Span from "../../common/span/Span";
// import P from "../../common/p/P";
// import Ul from "../../common/ul/Ul";
// import Li from "../../common/li/Li";
// import Link from "../../common/link/Link";
// import Container from "../../common/container/Container";



import s from "./SliderCards.module.scss"
import Card from "../card/Card";

import recordPlayer from "./../../../assets/images/svg/recordPlayer.svg"
import navigator from "./../../../assets/images/svg/navigator.svg"
import RF from "./../../../assets/images/svg/RF.svg"
import suit from "./../../../assets/images/svg/suit.svg"

// import price45800 from "./../../../assets/images/svg/price45800.svg"
// import price7000 from "./../../../assets/images/svg/price7000.svg"


const SliderCards = (props) => {
	return (
		<header className={s.wrapper}>
			<Card
				src={recordPlayer}
				valueTitle='BRP Audio-портативная система'
				valuePrice=''
			/>
			<Card
				src={navigator}
				valueTitle='Garmin Echomap Plus 62cv'
				valuePrice='45 800'
			/>
			<Card
				src={RF}
				valueTitle='RF D.E.S.S.TM Key'
				valuePrice=''
			/>
			<Card
				src={suit}
				valueTitle='Мужской костюм 3мм'
				valuePrice='7 000'
			/>
		</header>
	);
}

export default SliderCards;
