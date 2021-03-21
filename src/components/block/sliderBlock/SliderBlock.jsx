import s from "./SliderBlock.module.scss"

import SelectProduct from "./../../common/selectProduct/SelectProduct"
import SliderCards from "./../../common/sliderCards/SliderCards"

import {data} from "./../../common/card/data"


const SliderBlock = (props) => {
	return (
		<div style={props.style} className={s.wrapper}>
			<SelectProduct className={s.sliderHeader}/>
			<SliderCards
				className={s.sliderCards}
			/>
		</div>
	);
}

export default SliderBlock;
