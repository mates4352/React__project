
// import Img from "../../common/img/Img";
// import Span from "../../common/span/Span";
// import P from "../../common/p/P";
// import Ul from "../../common/ul/Ul";
// import Li from "../../common/li/Li";
// import Link from "../../common/link/Link";
// import Container from "../../common/container/Container";


import Card from "../../block/card/Card"
import s from "./AboutProduct.module.scss"






const AboutProduct = (props) => {
	return (
		<div style={props.style} className={s.wrapper}>
			<Card/>
			<div className='information'>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</div>
		</div>
	);
}

export default AboutProduct;
