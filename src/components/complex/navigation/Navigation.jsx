import Ul from "./../../common/ul/Ul";
import Li from "./../../common/li/Li";
import Link from "./../../common/link/Link";

import s from "./Navigation.module.scss"


const Navigation = (props) => {
	return (
		<section style={props.style} className={s.header}>
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
											value="Квадроциклы"
										/>
									}
								/>
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
							</>
						}
					/>
				</div>
		</section >
	);
}

export default Navigation;
