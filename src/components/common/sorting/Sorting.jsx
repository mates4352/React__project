import Link from "./../../common/link/Link";

import s from "./Sorting.module.scss"


const Sorting = (props) => {
	return (
		<Link
			className={s.sortingLink}
			href={props.href}
			value={props.value}
		/>
	);
}

export default Sorting;