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
import Card from "./../../common/card/Card";
import Options from "../../block/options/Options";


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


{/* ************ Левый блок *************** */}
			<div className={s.wrapper}>
				<Options/>




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