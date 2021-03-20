import { NavLink } from "react-router-dom";
import s from "./CardTransport.module.scss"


const CardTransport = (props) => {
	return (
		<div className={s.CategoryCard}>

			{props.title && <h3
				className={s.title}>
				{props.title}
			</h3>}

			{props.img && <img
				className={s.img}
				src={props.img}
				alt={props.alt}
			/>}

			{props.href &&
				<NavLink
					className={s.Link}
					to={props.href}
				>
					Подробее
				</NavLink>
			}

		</div>

	);
}

export default CardTransport;