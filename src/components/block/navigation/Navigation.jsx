import Link from "./../../common/link/Link";

import s from "./Navigation.module.scss"


const Navigation = (props) => {
	return (
		<section style={props.style} className={s.header}>
			<div className={s.wrapper}>
				<ul className={s.list}>
					<li className={s.item}>
						<Link
							className={s.link}
							href={"#"}
							value="Квадроциклы"
						/>
					</li>

					<li className={s.item}>
						<Link
							className={s.link}
							href={"#"}
							value="Катера"
						/>
					</li>

					<li className={s.item}>
						<Link
							className={s.link}
							href={"#"}
							value="Гидроциклы"
						/>
					</li>

					<li className={s.item}>
						<Link
							className={s.link}
							href={"#"}
							value="Лодки"
						/>
					</li>

					<li className={s.item}>
						<Link
							className={s.link}
							href={"#"}
							value="Вездеходы"
						/>
					</li>

					<li className={s.item}>
						<Link
							className={s.link}
							href={"#"}
							value="Снегоходы"
						/>
					</li>

					<li className={s.item}>
						<Link
							className={s.link}
							href={"#"}
							value="Двигатели"
						/>
					</li>

					<li>
						<Link
							className={s.link}
							href={"#"}
							value="Запчасти"
						/>
					</li>
				</ul>
			</div>
		</section >
	);
}

export default Navigation;
