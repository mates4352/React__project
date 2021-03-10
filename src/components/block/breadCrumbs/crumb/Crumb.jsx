import Link from "../../../common/link/Link";

import s from "./Crumb.module.scss"


const Crumb = (props) => {
    return (
		<Link
			className={s.classLink}
			href={props.href}
			value={props.value}
		/>
    );
}

export default Crumb;