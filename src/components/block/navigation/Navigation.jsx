import { NavLink } from "react-router-dom";
import s from "./Navigation.module.scss"

const Navigation = (props) => {
	return (
		<section className={s.Navigation} style={props.style}>
			<div className={s.wrapper} style={props.styleWrapper}>
				<ul className={s.list} style={props.styleList}>
					<li className={s.item}>
						<NavLink
							style={props.linkStyle}
							className={s.link}
							to={props.href}
						>
							{props.text1}
						</NavLink>
					</li>

					<li className={s.item}>
						<a
							style={props.linkStyle}
							className={s.link}
							to={props.href}
						>
							{props.text2}
						</a>
					</li>

					<li className={s.item}>
						<a
							style={props.linkStyle}
							className={s.link}
							to={props.href}
						>
							{props.text3}
						</a>
					</li>

					<li className={s.item}>
						<a
							style={props.linkStyle}
							className={s.link}
							to={props.href}
						>
							{props.text4}
						</a>
					</li>

					<li className={s.item}>
						<a
							style={props.linkStyle}
							className={s.link}
							to={props.href}
						>
							{props.text5}
						</a>
					</li>

					<li className={s.item}>
						<a
							style={props.linkStyle}
							className={s.link}
							to={props.href}
						>
							{props.text6}
						</a>
					</li>

					<li className={s.item}>
						<a
							style={props.linkStyle}
							className={s.link}
							to={props.href}
						>
							{props.text7}
						</a>
					</li>

					<li className={s.item}>
						<a
							style={props.linkStyle}
							className={s.link}
							to={props.href}
						>
							{props.text8}
						</a>
					</li>
				</ul>
			</div>
		</section >
	);
}

export default Navigation;
