import s from "./Sorting.module.scss"


const Sorting = (props) => {
	return (
		<a
			className={s.sortingLink}
			href={props.href}
		>
			{props.value}
		</a>
	);
}

export default Sorting;