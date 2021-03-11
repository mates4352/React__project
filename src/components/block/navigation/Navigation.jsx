
import s from "./Navigation.module.scss"


const Navigation = (props) => {
	return (
		<section style={props.style} className={s.header}>
			<div className={s.wrapper}>
				<ul className={s.list}>
					<li className={s.item}>
						<a
							className={s.link}
							href={"#"}
						>
							Квадроциклы
						</a>
					</li>

					<li className={s.item}>
						<a
							className={s.link}
							href={"#"}
						>
							Катера
						</a>
					</li>

					<li className={s.item}>
						<a
							className={s.link}
							href={"#"}
						>
							Гидроциклы
						</a>
					</li>

					<li className={s.item}>
						<a
							className={s.link}
							href={"#"}
						>
							Лодки
						</a>
					</li>

					<li className={s.item}>
						<a
							className={s.link}
							href={"#"}
						>
							Вездеходы
						</a>
					</li>

					<li className={s.item}>
						<a
							className={s.link}
							href={"#"}
						>
							Снегоходы
						</a>
					</li>

					<li className={s.item}>
						<a
							className={s.link}
							href={"#"}
						>
							Двигатели
						</a>
					</li>

					<li>
						<a
							className={s.link}
							href={"#"}
						>
							Запчасти
						</a>
					</li>
				</ul>
			</div>
		</section >
	);
}

export default Navigation;
