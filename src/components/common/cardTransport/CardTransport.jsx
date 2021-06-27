import { NavLink } from "react-router-dom";
import s from "./CardTransport.module.scss"


const CardTransport = (props) => {
	return (
		<NavLink className={s.CategoryCard} to={props.href}>

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

		</NavLink>

	);
}

export default CardTransport;