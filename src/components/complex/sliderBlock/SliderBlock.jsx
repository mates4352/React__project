import s from "./SliderBlock.module.scss"

import SelectProduct from "../../block/sliderHeader/SelectProduct"
import SliderCards from "../../block/sliderCards/SliderCards"




const SliderBlock = (props) => {
	return (
		<div style={props.style} className={s.wrapper}>
			<SelectProduct className={s.sliderHeader}/>
			<SliderCards className={s.sliderCards} />
		</div>
	);
}

export default SliderBlock;
