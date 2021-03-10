
import Titleh2 from "../../common/title/TitleH2";
import Ul from "../../common/ul/Ul";
import Li from "../../common/li/Li";
import Link from "../../common/link/Link";

import s from "./SelectProduct.module.scss"


const SelectProduct = (props) => {
	return (
		<header className={s.sliderHeader}>
			<Titleh2 className={s.title} value="С этим товаром покупают" />
			<div className={s.wrapper}>
				<Ul
					className={s.list}
					value={
						<>
							<Li
								className={s.item}
								value={
									<Link
										className={s.text}
										href={"#"}
										value="запчасти"
									/>
								}
							/>
							<Li
								className={s.item}
								value={
									<Link
										className={s.text}
										href={"#"}
										value="моторы"
									/>
								}
							/>
							<Li
								className={s.item}
								value={
									<Link
										className={s.text}
										href={"#"}
										value="шины"
									/>
								}
							/>
							<Li
								className={s.item}
								value={
									<Link
										className={s.text}
										href={"#"}
										value="электроника"
									/>
								}
							/>
							<Li
								className={s.item}
								value={
									<Link
										className={s.text}
										href={"#"}
										value="инструменты"
									/>
								}
							/>
							<Li
								className={s.item}
								value={
									<Link
										className={s.text}
										href={"#"}
										value="аксессуары"
									/>
								}
							/>
						</>
					}

				/>
			</div>
		</header>
	);
}

export default SelectProduct;
