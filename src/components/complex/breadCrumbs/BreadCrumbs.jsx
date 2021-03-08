import Item from "../../components/item/Item";
import Link from "../../components/link/Link";
import List from "../../components/list/List";
import Span from "../../components/span/Span";

import s from "./BreadCrumbs.module.scss"

function Bread(props) {
	return (
		<List
			valueItem1={props.valueItem1}
			valueItem2={props.valueItem2}
			valueItem1={props.valueItem1}
			valueItem1={props.valueItem1}
			valueItem1={props.valueItem1}
		/>

		// <List
		// 	className={s.List}
		// 	valueItem1={
		// 		<Item
		// 			className={s.item}
		// 			value={
		// 				<Link
		// 					className={s.link}
		// 					to={"#"}
		// 					value="Главная"
		// 				/>
		// 			}
		// 		/>
		// 	}
		// 	valueItem2={
		// 		<Item
		// 			className={s.item}
		// 			value={
		// 				<Link
		// 					className={s.link}
		// 					to={"#"}
		// 					value="Гидроциклы"
		// 				/>
		// 			}
		// 		/>
		// 	}
		// 	valueItem1={
		// 		<Item
		// 			className={s.item}
		// 			value={
		// 				<Span
		// 					className={s.span}
		// 					value="Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic"
		// 				/>
		// 			}
		// 		/>
		// 	}
		// />
	);
}

export default Bread;
