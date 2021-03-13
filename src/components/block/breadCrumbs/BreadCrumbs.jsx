import Crumb from "./../../block/breadCrumbs/crumb/Crumb";

import s from "./BreadCrumbs.module.scss";

const BreadCrumbs = (props) => {
	// <Crumb href='#' value='Гидроциклы' />
	// <Crumb href='#' value='Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic' />
	return (
		<ul className={s.BreadCrumbs}>
			<li className={s.BreadCrumb}>
				<Crumb
					href='#'
					value='Главная'
				/>
			</li>
		</ul>
	);
}

export default BreadCrumbs;