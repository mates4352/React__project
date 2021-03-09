import Ul from "./../../common/ul/Ul";
import Li from "./../../common/li/Li";
import Link from "./../../common/link/Link";
import Container from "./../../common/container/Container";

import s from "./Navigation.module.scss"


const Navigation = (props) => {
	return (
		<section style={props.style} className={s.header}>
				value={
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
											value="Квадроциклы"
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
											value="Катера"
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
											value="Гидроциклы"
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
											value="Лодки"
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
											value="Вездеходы"
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
											value="Снегоходы"
										/>
									}
								/>
							}
							valueItem7={
								<Li
									className={s.item}
									value={
										<Link
											className={s.text}
											href={"#"}
											value="Двигатели"
										/>
									}
								/>
							}
							valueItem8={
								<Li
									className={s.item}
									value={
										<Link
											className={s.text}
											href={"#"}
											value="Запчасти"
										/>
									}
								/>
							}
						/>
					</div>
				}
		</section>
	);
}

export default Navigation;
