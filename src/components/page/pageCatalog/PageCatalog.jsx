import iconGrid from "./../../../assets/images/PageCatalog/iconGrid.png";
import iconList from "./../../../assets/images/PageCatalog/iconList.png";


import s from "./PageCatalog.module.scss"


import BreadCrumbs from "./../../block/breadCrumbs/BreadCrumbs"
import RadioBatton from "../../common/radioButton/RadioBatton";
import MenuSorting from "../../block/menuSorting/MenuSorting";
import CheckBox from "../../common/checkBox/CheckBox";

const PageCatalog = () => {
	return (
		<div className={s.pageCatalog}>
			<BreadCrumbs />


			<h2 className={s.titleH2}>Гидроциклы</h2>

			<div className={s.productCategory}>
				<ul className={s.productCategoryLef}>
					<li slassName={s.productCategoryItem}>
						<a className={s.productCategoryLink} href="#">
							Полноприводные
						</a>
					</li>
					<li slassName={s.productCategoryItem}>
						<a className={s.productCategoryLink} href="#">
							5000
						</a>
					</li>
					<li slassName={s.productCategoryItem}>
						<a className={s.productCategoryLink} href="#">
							BRP
						</a>
					</li>
					<li slassName={s.productCategoryItem}>
						<a className={s.productCategoryLink} href="#">
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
					<button className={s.btntitle}>Параметры</button>
					<button className={s.btntitle}>По марке</button>
				</div>

				<MenuSorting
					type="radio"
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
				<MenuSorting
					type="radio"
					id="lebe2"
					for="lebe2"
					labelvalue="Новинки"
					value={
						<>
							<RadioBatton style={{ padding: "0 20px 0 0" }}
								name="on"
								type="radio"
								id="radio_3"
								for="radio_3"
								value="Все"
							/>
							<RadioBatton style={{ padding: "0 20px 0 0" }}
								name="on"
								type="radio"
								id="radio_4"
								for="radio_4"
								value="Новинки"
							/>
							<RadioBatton
								name="on"
								type="radio"
								id="radio_5"
								for="radio_5"
								value="Акции"
							/>
						</>
					}
				/>

				<MenuSorting
					type="checkbox"
					id="lebe3"
					for="lebe3"
					labelvalue="Цена"
				// value={ }
				/>

				<MenuSorting
					type="checkbox"
					id="lebe4"
					for="lebe4"
					labelvalue="Бренд"
					value={ 
						<>
						<CheckBox style={{ padding: "0 90px 0 0" }}
							type="checkbox"
							id="checkbox1"
							for="checkbox1"
							value="BRP"
						/> 
						<CheckBox style={{ padding: "0 90px 0 0" }}
							type="checkbox"
							id="checkbox2"
							for="checkbox2"
							value="Spark 2"
						/> 
						<CheckBox 
							type="checkbox"
							id="checkbox3"
							for="checkbox3"
							value="Spark 3"
						/> 
						</>
					}
				/>


				








			</div>


		</div>
	);
}

export default PageCatalog;