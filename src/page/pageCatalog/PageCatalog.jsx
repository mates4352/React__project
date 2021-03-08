import Header from "../../block/layouts/header/Header"
import Footer from "../../block/layouts/footer/Footer"
import Bread from "../../block/layouts/breadCrumbs/BreadCrumbs"
import Item from "../../block/components/item/Item";
import Link from "../../block/components/link/Link";
import Categories from "../../block/layouts/categories/Categories";



import s from "./../../block/layouts/breadCrumbs/BreadCrumbs.module.scss";

const PageCatalog = () => {
	return (
		<>
			<Header style={{ padding: "55px 0 45px 0" }}/>
			<Categories/>
			<Bread />
			<Footer />
			{/* <Bread
				valueItem1={
					<Item
						className={s.item}
						value={
							<Link
								className={s.link}
								to={"#"}
								value="Главная"
							/>
						}
					/>
				}
				valueItem1={
					<Item
						className={s.item}
						value={
							<Link
								className={s.link}
								to={"#"}
								value="234234"
							/>
						}
					/>
				}

			/>
		</> */}
		</>
	);
}

export default PageCatalog;