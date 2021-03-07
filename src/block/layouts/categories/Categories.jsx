import Item from "../../components/item/Item";
import Link from "../../components/link/Link";
import List from "../../components/list/List";
import Container from "../container/Container";

import s from "./Categories.module.scss"


const Categories = (props) => {
	return (
		<section style={props.style} className={s.header}>
			<Container
				className="container"
				value={
					<div className={s.wrapper}>
						<List
							className={s.list}
							valueItem1={
								<Item
									className={s.item}
									value={
										<Link
											className={s.text}
											to={"#"}
											value="Квадроциклы"
										/>
									}
								/>
							}
							valueItem2={
								<Item
									className={s.item}
									value={
										<Link
											className={s.text}
											to={"#"}
											value="Катера"
										/>
									}
								/>
							}
							valueItem3={
								<Item
									className={s.item}
									value={
										<Link
											className={s.text}
											to={"#"}
											value="Гидроциклы"
										/>
									}
								/>
							}
							valueItem4={
								<Item
									className={s.item}
									value={
										<Link
											className={s.text}
											to={"#"}
											value="Лодки"
										/>
									}
								/>
							}
							valueItem5={
								<Item
									className={s.item}
									value={
										<Link
											className={s.text}
											to={"#"}
											value="Вездеходы"
										/>
									}
								/>
							}
							valueItem6={
								<Item
									className={s.item}
									value={
										<Link
											className={s.text}
											to={"#"}
											value="Снегоходы"
										/>
									}
								/>
							}
							valueItem7={
								<Item
									className={s.item}
									value={
										<Link
											className={s.text}
											to={"#"}
											value="Двигатели"
										/>
									}
								/>
							}
							valueItem8={
								<Item
									className={s.item}
									value={
										<Link
											className={s.text}
											to={"#"}
											value="Запчасти"
										/>
									}
								/>
							}
						/>
					</div>
				}
			/>
		</section>
	);
}

export default Categories;
