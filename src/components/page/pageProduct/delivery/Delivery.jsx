import { NavLink } from "react-router-dom";
import s from "./Delivery.module.scss"

import GridSchedule from "../../../block/gridSchedule/GridSchedule"
import BtnBuy from "../../../common/btnBuy/BtnBuy"

const Delivery = () => {
	return (
		<section className={s.delivery}>

		<header className={s.header}>
			<form>
				<NavLink className={s.labelShop} to={"/PageMain"}>
					Магазин <input className={s.inputShop} type="text" placeholder="Введите название магазина" value={s.value} />
				</NavLink>
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

	</section>
	);
}

export default Delivery;
