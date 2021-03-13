import s from "./LinkShow.module.scss"


const LinkShow = (props) => {
	return (
		<a
			className={s.show}
			href={props.href}
		>
			Показать еще
		</a>
	);
}

export default LinkShow;