import iconGrid from "./../../../assets/images/PageCatalog/iconGrid.png";
import iconList from "./../../../assets/images/PageCatalog/iconList.png";
import ExpandMoreUp from "./../../../assets/images/PageCatalog/ExpandMoreUp.png";

import s from "./PageCatalog.module.scss"


import BreadCrumbs from "./../../block/breadCrumbs/BreadCrumbs"
import RadioBatton from "../../common/radioButton/RadioBatton";
import MenuSorting from "../../block/menuSorting/MenuSorting";

const PageCatalog = () => {
	return (
		<div className={s.pageCatalog}>
			<BreadCrumbs />


			<h2 className={s.titleH2}>Гидроциклы</h2>

			<div className={s.productCategory}>
				<ul className={s.productCategoryLef}>
					<li slassName={s.productCategoryItem}>
						<a className={s.productCategoryLink}>
							Полноприводные
						</a>
					</li>
					<li slassName={s.productCategoryItem}>
						<a className={s.productCategoryLink}>
							5000
						</a>
					</li>
					<li slassName={s.productCategoryItem}>
						<a className={s.productCategoryLink}>
							BRP
						</a>
					</li>
					<li slassName={s.productCategoryItem}>
						<a className={s.productCategoryLink}>
							еще
						</a>
					</li>
				</ul>

				<div className={s.productCategoryRight}>
					<div className={s.productCategorySelect}>
						<select >
							<option value="По полулярности">По полулярности</option>
							<option value="По цене (min)">По цене (min)</option>
							<option value="По цене (max)">По цене (max)</option>
							<option value="По количеству отзывам">По количеству отзывам</option>
						</select>
					</div>

					<button className={s.btnProductCategory}>
						<img className={s.btnIcon}
							src={iconGrid}
							alt={"icon"} />
					</button>
					<button className={s.btnProductCategory}>
						<img className={s.btnIcon}
							src={iconList}
							alt={"icon"} />
					</button>
				</div>
			</div>

			<div className={s.leftSection}>
				<div className={s.titleMenu}>
					<a className={s.titleMenuLink} href="#">Параметры</a>
					<a className={s.titleMenuLink} href="#">По марке</a>
				</div>

				<MenuSorting
					type="checkbox"
					id="lebe1"
					for="lebe1"
					labelvalue="Наличие"
					value={
						<>
							<RadioBatton style={{ padding: "0 55px 0 0" }}
								name="on"
								type="radio"
								id="radio_1"
								for="radio_1"
								value="В наличиe"
							/>
							<RadioBatton
								name="on"
								type="radio"
								id="radio_2"
								for="radio_2"
								value="Под зака"
							/>
						</>
					}




				/>









			</div>


		</div>
	);
}

export default PageCatalog;