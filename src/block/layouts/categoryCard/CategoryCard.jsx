import Img from "../../components/img/Img";
import Span from "../../components/span/Span";
import Titleh3 from "../../components/title/Titleh3";

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

			<Span
				className={s.span}
				value='Подробее'
			/>
		</div>

	);
}

export default CategoryCard;