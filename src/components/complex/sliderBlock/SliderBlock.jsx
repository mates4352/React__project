
// import Img from "../../common/img/Img";
// import Span from "../../common/span/Span";
// import P from "../../common/p/P";
// import Ul from "../../common/ul/Ul";
// import Li from "../../common/li/Li";
// import Link from "../../common/link/Link";
// import Container from "../../common/container/Container";


import s from "./SliderBlock.module.scss"

import SliderHeader from "../../block/sliderHeader/SliderHeader"
import SliderCards from "../../block/sliderCards/SliderCards"




const SliderBlock = (props) => {
	return (
		<div style={props.style} className={s.wrapper}>
			<SliderHeader className={s.sliderHeader} />
			<SliderCards className={s.sliderCards} />
		</div>
	);
}

export default SliderBlock;
