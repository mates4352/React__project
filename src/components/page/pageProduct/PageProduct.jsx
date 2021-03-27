import s from "./PageProduct.module.scss"
import Delivery from "./delivery/Delivery"

// components
import BreadCrumbs from "./../../block/breadCrumbs/BreadCrumbs"
// import data from "./../../block/breadCrumbs/crumb/data"
import SliderBlock from "./../../block/sliderBlock/SliderBlock"
import Navigation from "./../../block/navigation/Navigation"
import { data } from "./../../block/navigation/data"

// common
import Sale from "../../common/sale/Sale"
import BtnShow from "../../common/btnShow/BtnShow"
import BtnBuy from "../../common/btnBuy/BtnBuy"

// images
import like from "./../../../assets/images/svg/like.svg"
import gidrotsikl36666 from "./../../../assets/images/svg/gidrotsikl36666.svg"
import rec from "./../../../assets/images/svg/Rectangle 17.svg"
import rec1 from "./../../../assets/images/svg/Rectangle 17.1.svg"
import rec2 from "./../../../assets/images/svg/Rectangle 17.2.svg"

// Библиотечка Rating/Material UI
import React from 'react';
import Rating from "./Rating";
import "./rating.scss"
import { NavLink } from "react-router-dom";


const PageProduct = (props) => {
	return (
		<>
			<BreadCrumbs
			// Crumb0={data[0]}
			// Crumb1={data[1]}
			// Crumb1={data[2]}
			/>

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

			<Delivery />

			<SliderBlock style={{ padding: "100px 0" }} />

		</>
	);
}

export default PageProduct