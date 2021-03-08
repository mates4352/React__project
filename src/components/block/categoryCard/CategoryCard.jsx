import Img from "./../../common/img/Img";
import Link from "./../../common/link/Link";
import Titleh3 from "./../../common/title/Titleh3";


import s from "./CategoryCard.module.scss"

const CategoryCard = (props) => {
	return (
		<div className={s.wrapper}>
			<Titleh3
				className={s.title}
				style={props.style}
				value={props.valueTitle}
			/>
			<Img
				className={s.img}
				src={props.src}
				alt={props.alt}
			/>

			<Link
				className={s.Link}
				value='Подробее'
			/>
		</div>

	);
}

export default CategoryCard;