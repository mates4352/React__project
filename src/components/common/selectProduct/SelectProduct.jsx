import s from "./SelectProduct.module.scss"


const SelectProduct = (props) => {
	return (
		<header className={s.sliderHeader}>
			<h2 className={s.title}>  С этим товаром покупают</h2>
			<div className={s.wrapper}>
				<ul className={s.list}>
					<li className={s.item}>
						<a
							className={s.link}
							href={"#"}
						>
							запчасти
						</a>
					</li>

					<li className={s.item}>
						<a
							className={s.link}
							href={"#"}
						>
							моторы
						</a>
					</li>

					<li className={s.item}>
						<a
							className={s.link}
							href={"#"}
						>
							шины
						</a>
					</li>

					<li className={s.item}>

						<a
							className={s.link}
							href={"#"}

						>
							электроника
						</a>
					</li>

					<li className={s.item}>
						<a
							className={s.link}
							href={"#"}
						>
							инструменты
						</a>
					</li>

					<li className={s.item}>
						<a
							className={s.link}
							href={"#"}
						>
							аксессуары
						</a>
					</li>

				</ul>
			</div>
		</header>
	);
}

export default SelectProduct;
