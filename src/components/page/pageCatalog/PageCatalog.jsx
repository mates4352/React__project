import iconGrid from "./../../../assets/images/PageCatalog/iconGrid.png";
import iconList from "./../../../assets/images/PageCatalog/iconList.png";

import gidro1 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl1.png";
import gidro2 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl2.png";
import gidro3 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl3.png";
import gidro4 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl4.png";
import gidro5 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl5.png";
import gidro6 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl6.png";
import gidro7 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl7.png";
import gidro8 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl8.png";
import gidro9 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl9.png";
import gidro10 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl10.png";
import gidro11 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl11.png";
import gidro12 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl12.png";




import s from "./PageCatalog.module.scss"


import BreadCrumbs from "./../../block/breadCrumbs/BreadCrumbs"
import RadioBatton from "../../common/radioButton/RadioBatton";
import MenuSorting from "../../block/menuSorting/MenuSorting";
import CheckBox from "../../common/checkBox/CheckBox";

import ButtonSorting from "../../common/buttonSorting/ButtonSorting";
import BtnShow from "../../common/btnShow/BtnShow";
import RangeSlider from "../../block/rangeSlider/RangeSlider";
import Card from "./../../common/card/Card";


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



			<div className={s.wrapper}>

				<div className={s.leftSection}>
					<div className={s.titleMenu}>
						<button className={s.btntitle}>Параметры</button>
						<button className={s.btntitle}>По марке</button>
					</div>
					<div className={s.}>
						<MenuSorting
							type="checkbox"
							id="lebe1"
							for="lebe1"
							labelvalue="Наличие"
							
							/>
						<div className={s.}>
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
						</div>
						
					</div>
					<MenuSorting
						type="checkbox"
						id="lebe1"
						for="lebe1"
						labelvalue="Наличие"
						// value={
						// 	<>
						// 		<RadioBatton style={{ padding: "0 55px 0 0" }}
						// 			name="on"
						// 			type="radio"
						// 			id="radio_1"
						// 			for="radio_1"
						// 			value="В наличиe"
						// 		/>
						// 		<RadioBatton
						// 			name="on"
						// 			type="radio"
						// 			id="radio_2"
						// 			for="radio_2"
						// 			value="Под зака"
						// 		/>
						// 	</>
						// }
					/>

					<MenuSorting
						type="checkbox"
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
						value={
							<div className={s.prise}>
								<RangeSlider />
								<div className={s.specifications}>
									<div className={s.specificationsSelect}>
										<span className={s.specificationsText}>Мощность, л.с.</span>
										<div className={s.specificationsDropdown}>
											<select className={s.selectItem}>
												<option value="90">90</option>
												<option value="130">130</option>
												<option value="154">154</option>
												<option value="230">230</option>
												<option value="300">300</option>
											</select>

										</div>
									</div>

									<div className={s.specificationsSelect}>
										<span className={s.specificationsText}>Мощность двигателя, л.с.</span>
										<div className={s.specificationsDropdown}>
											<select className={s.selectItem}>
												<option value="55">55</option>
												<option value="65">65</option>
												<option value="75">75</option>
											</select>

										</div>
									</div>

									<div className={s.specificationsSelect}>
										<span className={s.specificationsText}>Макс. скорость</span>
										<div className={s.specificationsDropdown}>
											<select className={s.selectItem}>
												<option value="205">205</option>
												<option value="210">210</option>
												<option value="215">215</option>
											</select>

										</div>
									</div>
								</div>
							</div>
						}
					/>



					<MenuSorting
						type="checkbox"
						id="lebe4"
						for="lebe4"
						labelvalue="Бренд"
						value={
							<div className={s.sortingBrend}>
								<CheckBox
									style={{ flex: "0 1 50%", marginBottom: "20px" }}
									type="checkbox"
									id="checkbox1"
									for="checkbox1"
									value="BRP"
								/>
								<CheckBox
									style={{ flex: "0 1 50%" }}
									type="checkbox"
									id="checkbox2"
									for="checkbox2"
									value="Spark 2"
								/>
								<CheckBox
									style={{ flex: "0 1 100%", marginBottom: "20px" }}
									type="checkbox"
									id="checkbox3"
									for="checkbox3"
									value="Spark 3"
								/>
								<BtnShow />
							</div>
						}
					/>

					<MenuSorting
						type="checkbox"
						id="lebe5"
						for="lebe5"
						labelvalue="Модель"
						value={
							<>
								<div className={s.sortingModel}>
									<input className={s.sortingModelInput}
										placeholder="Введите модель"
										type="text" />
									<CheckBox
										style={{ flex: "0 1 50%", marginBottom: "15px" }}
										type="checkbox"
										id="checkbox4"
										for="checkbox4"
										value="Sea-doo Spark 2"
									/>
									<CheckBox
										style={{ flex: "0 1 50%" }}
										type="checkbox"
										id="checkbox5"
										for="checkbox5"
										value="SeaDoo Spark 90"
									/>
									<CheckBox
										style={{ flex: "0 1 50%", marginBottom: "15px" }}
										type="checkbox"
										id="checkbox6"
										for="checkbox6"
										value="SeaDoo GTI 155"
									/>
									<CheckBox
										style={{ flex: "0 1 50%" }}
										type="checkbox"
										id="checkbox7"
										for="checkbox7"
										value="SeaDoo GTR 230"
									/>
									<BtnShow />
								</div>
							</>
						}
					/>

					<MenuSorting
						type="checkbox"
						id="lebe6"
						for="lebe6"
						labelvalue="Акции"
						value={
							<>
								<ButtonSorting style={{ color: "white", backgroundColor: "#1C62CD" }}
									value="Sale"
								/>
								<ButtonSorting style={{ color: "#C4C4C4", backgroundColor: "#F0F0F4" }}
									value="New"
								/>
								<ButtonSorting style={{ color: "#C4C4C4", backgroundColor: "#F0F0F4" }}
									value="Hit"
								/>
								<ButtonSorting style={{ color: "white", backgroundColor: "#2F3035" }}
									value="Дилер"
								/>
							</>
						}
					/>

					<MenuSorting
						type="checkbox"
						id="lebe7"
						for="lebe7"
						labelvalue="Страны"
						value={
							<div className={s.sortingCountru}>
								<CheckBox
									style={{ flex: "0 1 50%", marginBottom: "20px" }}
									type="checkbox"
									id="checkbox8"
									for="checkbox8"
									value="Россия"
								/>
								<CheckBox
									style={{ flex: "0 1 50%" }}
									type="checkbox"
									id="checkbox9"
									for="checkbox9"
									value="Германия"
								/>
								<CheckBox
									style={{ flex: "0 1 50%", marginBottom: "20px" }}
									type="checkbox"
									id="checkbox10"
									for="checkbox10"
									value="Китай"
								/>
								<CheckBox
									style={{ flex: "0 1 50%" }}
									type="checkbox"
									id="checkbox11"
									for="checkbox11"
									value="США"
								/>
								<BtnShow />
							</div>
						}
					/>

					<div className={s.leftSectionBtnSelect}>
						<button className={s.btnSelect}>
							Выбрать
						</button>
						<button className={s.btnSelectDown}>
							Дополнительные параметры
						</button>
						<button className={s.btnSelectReset}>
							Сбросить фильтр
						</button>
					</div>
				</div>

				<div className={s.rightSection}>


					<Card
						image={gidro1}
						styleImg={{ width: "250px", height: "190px", marginRight: "0px" }}
						name="Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango"
						styleName={{ fontSize: "18px" }}
						price="1 049 500 ₽"
						absent=""
						message=""
					/>
					<Card
						image={gidro2}
						styleImg={{ width: "250px", height: "190px" }}
						name="Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic"
						styleName={{ fontSize: "18px" }}
						price="1 100 475 ₽"
						absent=""
						message=""
					/>
					<Card
						image={gidro3}
						styleImg={{ width: "250px", height: "190px" }}
						name="Гидроцикл BRP SeaDoo GTR 230hp X California green "
						styleName={{ fontSize: "18px" }}
						price="1 323 700 ₽"
						absent=""
						message=""
					/>
					<Card
						image={gidro4}
						styleImg={{ width: "250px", height: "190px" }}
						name="Гидроцикл BRP SeaDoo GTR 230hp X California green "
						styleName={{ fontSize: "18px" }}
						price="1 323 700 ₽"
						absent=""
						message=""
					/>
					<Card
						image={gidro5}
						styleImg={{ width: "250px", height: "190px" }}
						name="Гидроцикл BRP SeaDoo GTR 230hp X California green "
						styleName={{ fontSize: "18px" }}
						price="1 323 700 ₽"
						absent=""
						message=""
					/>
					<Card
						image={gidro6}
						styleImg={{ width: "250px", height: "190px" }}
						name="Гидроцикл BRP SeaDoo GTR 230hp X California green "
						styleName={{ fontSize: "18px" }}
						price="1 323 700 ₽"
						absent=""
						message=""
					/>
					<Card
						image={gidro7}
						styleImg={{ width: "250px", height: "190px" }}
						name="Гидроцикл BRP SeaDoo GTR 230hp X California green "
						styleName={{ fontSize: "18px" }}
						price="1 323 700 ₽"
						absent=""
						message=""
					/>
					<Card
						image={gidro8}
						styleImg={{ width: "250px", height: "190px" }}
						name="Гидроцикл BRP SeaDoo GTR 230hp X California green "
						styleName={{ fontSize: "18px" }}
						price="1 323 700 ₽"
						absent=""
						message=""
					/>
					<Card
						image={gidro9}
						styleImg={{ width: "250px", height: "190px" }}
						name="Гидроцикл BRP SeaDoo GTR 230hp X California green "
						styleName={{ fontSize: "18px" }}
						price="1 323 700 ₽"
						absent=""
						message=""
					/>
					<Card
						image={gidro10}
						styleImg={{ width: "250px", height: "190px" }}
						name="Гидроцикл BRP SeaDoo GTR 230hp X California green "
						styleName={{ fontSize: "18px" }}
						price="1 323 700 ₽"
						absent=""
						message=""
					/>
					<Card
						image={gidro11}
						styleImg={{ width: "250px", height: "190px" }}
						name="Гидроцикл BRP SeaDoo GTR 230hp X California green "
						styleName={{ fontSize: "18px" }}
						price="1 323 700 ₽"
						absent=""
						message=""
					/>
					<Card
						image={gidro12}
						styleImg={{ width: "250px", height: "190px" }}
						name="Гидроцикл BRP SeaDoo GTR 230hp X California green "
						styleName={{ fontSize: "18px" }}
						price="1 323 700 ₽"
						absent=""
						message=""
					/>








				</div>


			</div>





		</div>
	);
}

export default PageCatalog;