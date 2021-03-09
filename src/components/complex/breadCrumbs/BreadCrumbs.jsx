import Container from "../../common/container/Container";
import Ul from "../../common/ul/Ul";

import s from "./BreadCrumbs.module.scss"

const BreadCrumbs = (props) => {
	return (
		<Container
			value={
				<Ul
					className={s.ul}
					valueItem1={props.Crumb}
				/>
			}
		/>
	);
}

export default BreadCrumbs;