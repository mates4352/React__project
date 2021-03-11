import s from "./Crumb.module.scss"


const Crumb = (props) => {
	return (
		<a
			className={s.classLink}
			href={props.href}
		>
			{props.value}
		</a>
	);
}

export default Crumb;