import Container from "../../common/container/Container";
import Li from "../../common/li/Li";
import Link from "../../common/link/Link";
import Span from "../../common/span/Span";
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