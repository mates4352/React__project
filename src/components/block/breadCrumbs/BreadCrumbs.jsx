import Crumb from "./../../block/breadCrumbs/crumb/Crumb";

import s from "./BreadCrumbs.module.scss";

const BreadCrumbs = (props) => {
	// <Crumb href='#' value='Гидроциклы' />
	// <Crumb href='#' value='Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic' />
	return (
		<ul className={s.BreadCrumbs}>
			<li className={s.BreadCrumb}>
			{props.Crumb0 &&
				<Crumb
					href={props.Crumb0.href}
					value={props.Crumb0.value}
				/>
			}
			{props.Crumb1 &&
				<Crumb
					href={props.Crumb1.href}
					value={props.Crumb1.value}
				/>
			}
			{props.Crumb2 &&
				<Crumb
					href={props.Crumb2.href}
					value={props.Crumb2.value}
				/>
			}
				
			</li>
		</ul>
	);
}

export default BreadCrumbs;