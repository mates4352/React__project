

import s from "./CategoryCard.module.scss"

const CategoryCard = (props) => {
	return (
		<div className={s.CategoryCard}>
			<h3
				className={s.title}
			>
				{props.Title}
			</h3>
			<img
				className={s.img}
				src={props.src}
				alt={props.alt}
			/>
			<a
				className={s.Link}
				href={props.href}
			>
				Подробее
			</a>
		</div>

	);
}

export default CategoryCard;