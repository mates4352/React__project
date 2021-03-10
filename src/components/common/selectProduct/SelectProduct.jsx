
import Link from "./../../common/link/Link";

import s from "./SelectProduct.module.scss"


const SelectProduct = (props) => {
	return (
		<header className={s.sliderHeader}>
			<h2 className={s.title}>  С этим товаром покупают</h2>
			<div className={s.wrapper}>
				<ul className={s.list}>
					<li className={s.item}>
						<Link
							className={s.link}
							href={"#"}
							value="запчасти"
						/>
					</li>

					<li className={s.item}>
						<Link
							className={s.link}
							href={"#"}
							value="моторы"
						/>
					</li>

					<li className={s.item}>
						<Link
							className={s.link}
							href={"#"}
							value="шины"
						/>
					</li>

					<li className={s.item}>

						<Link
							className={s.link}
							href={"#"}
							value="электроника"
						/>
					</li>

					<li className={s.item}>
						<Link
							className={s.link}
							href={"#"}
							value="инструменты"
						/>
					</li>

					<li className={s.item}>

						<Link
							className={s.link}
							href={"#"}
							value="аксессуары"
						/>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default SelectProduct;
