import Link from "../link/Link";

import s from "./Show.module.scss"


const Show = (props) => {
	return (
		<Link
			className={s.classShow}
			href={props.href}
			style={props.style}
			value={props.value}
		/>
	);
}

export default Show;