import s from "./PageProduct.module.scss"
import "./rating.scss"

// components
import BreadCrumbs from "./../../block/breadCrumbs/BreadCrumbs"
import SliderBlock from "./../../block/sliderBlock/SliderBlock"
// import GridSchedule from "../../block/gridSchedule/GridSchedule"
import Navigation from "./../../block/navigation/Navigation"
import { data } from "./../../block/navigation/data"
import Delivery from "./delivery/Delivery"

// common
import Sale from "../../common/sale/Sale"
import BtnShow from "../../common/btnShow/BtnShow"
import BtnBuy from "../../common/btnBuy/BtnBuy"

// Image
import like from "./../../../assets/images/svg/like.svg"
import gidrotsikl36666 from "./../../../assets/images/svg/gidrotsikl36666.svg"
import rec from "./../../../assets/images/svg/Rectangle 17.svg"
import rec1 from "./../../../assets/images/svg/Rectangle 17.1.svg"
import rec2 from "./../../../assets/images/svg/Rectangle 17.2.svg"

// Библиотечка Rating/Material UI
import React from 'react';
import Rating from "./Rating"

// import {SectionDelivery} from 'SectionDelivery'
import { NavLink } from "react-router-dom";



const PageProduct = (props) => {

	return (
		<>
			<BreadCrumbs />

			<section className={s.aboutProduct}>

				<div className={s.bigCard} style={{ margin: "0 100px 0 0" }}>
					<Sale
						style={{ width: "94px", height: "44px", fontSize: "15px", lineHeight: "18px" }}
						text='SALE'
					/>
					<NavLink to={"/PageCatalog"}>
						<img className={s.bigImage} src={gidrotsikl36666} alt={'bigImage'} />
					</NavLink>
					<p className={s.lastPrice}>1 200 475 ₽</p>
					<p className={s.price}>1 100 475 ₽</p>
					<span className={s.message}>Нашли дешевле? Снизим цену!</span>
				</div>

				<div className={s.infoCard}>
					<h2 className={s.title}>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h2>
					<span className={s.code}>Код товара:</span>
					<span className={s.code}>  366666-2</span>
					<div className={s.images}>
						<img className={s.like} src={like} alt={'like'} />
						<div className={s.recs}>
							<img className={s.rec} src={rec2} alt={'rectangle'} />
							<img className={s.rec} src={rec1} alt={'rectangle'} />
							<img className={s.rec} src={rec} alt={'rectangle'} />
						</div>
						<div className='rating'>
							<Rating name="size-large" size="large" style={{ margin: "0 0 0 50px" }}></Rating>
						</div>
					</div>
					<table className={s.table}>
						<tr>
							<th>Характеристики</th>
							<th>Наличие в магазине</th>
						</tr>
						<tr>
							<td id={s.leftcol}>Производитель</td>
							<td id={s.rightcol}>Канада</td>
						</tr>
						<tr>
							<td id={s.leftcol}>Количество мест, шт:  </td>
							<td id={s.rightcol}>3</td>
						</tr>
						<tr>
							<td id={s.leftcol}>Мощность, л.с.</td>
							<td id={s.rightcol}>155</td>
						</tr>
						<tr>
							<td id={s.leftcol}>Тип двигателя</td>
							<td id={s.rightcol}>Бензиновый</td>
						</tr>
						<tr>
							<td id={s.leftcol}>Год выпуска</td>
							<td id={s.rightcol}>2018</td>
						</tr>
					</table>
					<BtnShow style={{ margin: "0 0 40px" }} />
					<BtnBuy style={{ width: "177px", height: "50px", fontSize: "14px", lineHeight: "17px" }} />
				</div>
			</section>

			<Navigation styleList={{ justifyContent: "space-around" }}
				link0={data[8]}
				link1={data[9]}
				link2={data[10]}
				link3={data[11]}
				link4={data[12]}
				link5={data[13]}
				link6={data[14]}
			/>

            {/* <Route path='/Delivery' component={Delivery}/> */}
			<Delivery/>

				
				{/* <section className={s.delivery}>

				<header className={s.header}>
					<form>
						<label className={s.labelShop}>
							Магазин <input className={s.inputShop} type="text" placeholder="Введите название магазина" value={s.value} />
						</label>
					</form>

					<div className={s.radio}>
						<label className={s.customRadio}>
							<input type="radio" name="time" />
							<span>Забрать сегодня</span>
						</label>
					</div>

					<div className={s.radio}>
						<label className={s.customRadio}>
							<input type="radio" name="time" />
							<span>Забрать в течение недели</span>
						</label>
					</div>

				</header>

				<div className={s.gridWrapper}>
					<div className={s.gridItem} id={s.item5}>Адрес</div>
					<div className={s.gridItem} id={s.item6}>Режим работы</div>
					<div className={s.gridItem} id={s.item7}>Доступно</div>
					<div className={s.gridItem} id={s.item8}>Количество</div>
					<div className={s.gridItem} id={s.item9}>Москва, ул. Науки 25</div>

					<div className={s.gridItem} id={s.item10}><GridSchedule /></div>
					<div className={s.gridItem} id={s.item11}>В наличии </div>
					<div className={s.gridItem} id={s.item12}>1<BtnBuy /></div>
					<div className={s.gridItem} id={s.item13}>Москва, ул.  Южная 134</div>
					<div className={s.gridItem} id={s.item14}><GridSchedule /></div>
					<div className={s.gridItem} id={s.item15}>В наличии </div>
					<div className={s.gridItem} id={s.item16}>2<BtnBuy /> </div>
					<div className={s.gridItem} id={s.item17}>Санкт-Петербург, ул. Красная 19</div>
					<div className={s.gridItem} id={s.item18}><GridSchedule /></div>
					<div className={s.gridItem} id={s.item19}>Нет в наличии</div>
					<div className={s.gridItem} id={s.item20}>0<BtnBuy /></div>
					<div className={s.gridItem} id={s.item21}>Киев, ул. Шевченко 167</div>
					<div className={s.gridItem} id={s.item22}><GridSchedule /></div>
					<div className={s.gridItem} id={s.item23}>Нет в наличии</div>
					<div className={s.gridItem} id={s.item24}>0<BtnBuy /></div>
				</div>

			</section> */}



			<SliderBlock style={{ padding: "100px 0" }} />

		</>
	);
}

export default PageProduct