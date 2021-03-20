import { NavLink } from "react-router-dom";

import s from "./Link.module.scss"

const Link = (props) => {
	return (
		<li className={s.item}>
			<NavLink
				style={props.style}
				className={s.link}
				to={props.href}
			>
				{props.text}
			</NavLink>
		</li>

	);
}

export default Link;
