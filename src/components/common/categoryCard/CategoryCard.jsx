import Link from "./../../common/link/Link";


import s from "./CategoryCard.module.scss"

const CategoryCard = (props) => {
	return (
		<div className={s.wrapper}>
			<h3
				className={s.title}
				style={props.style}
			>
				{props.valueTitle}
			</h3>
			<img
				className={s.img}
				src={props.src}
				alt={props.alt}
			/>
			<Link
				className={s.Link}
				value='Подробее'
				href={props.href}
			/>
		</div>

	);
}

export default CategoryCard;