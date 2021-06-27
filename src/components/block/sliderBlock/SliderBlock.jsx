import s from "./SliderBlock.module.scss"

import SelectProduct from "./../../common/selectProduct/SelectProduct"
import SliderCards from "./../../common/sliderCards/SliderCards"




const SliderBlock = (props) => {
	return (
		<div style={props.style} className={s.wrapper}>
			<SelectProduct className={s.sliderHeader} />
			<SliderCards
			// className={s.sliderCards}
			// card0 = {props.card}
			// card1 = {props.card}
			// card2 = {props.card}
			// card3 = {props.card}
			// card4 = {props.card}
			/>
		</div>
	);
}

export default SliderBlock;
