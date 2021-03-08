
import Titleh2 from "../../common/title/TitleH2";
import Ul from "../../common/ul/Ul";
import Li from "../../common/li/Li";
import Link from "../../common/link/Link";

import s from "./SliderHeader.module.scss"


const SliderHeader = (props) => {
	return (
		<header className={s.sliderHeader}>
			<Titleh2 className={s.title} value="С этим товаром покупают" />
			<div className={s.wrapper}>
				<Ul
					className={s.list}
					valueItem1={
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
					}
					valueItem2={
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
					}
					valueItem3={
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
					}
					valueItem4={
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
					}
					valueItem5={
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
					}
					valueItem6={
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
					}
				/>
			</div>
		</header>
	);
}

export default SliderHeader;
