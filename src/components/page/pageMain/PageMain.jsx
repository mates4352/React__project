import img from "./../../../assets/images/img.png"
import discountImg from "./../../../assets/images/discount/discount.png"

import CategoriesCards from "../../block/CategoriesCards/CategoriesCards"
import Card from "./../../common/card/Card"
import SliderBlock from "../../block/sliderBlock/SliderBlock"
import { data } from "./../../common/cardTransport/data"

import s from "./PageMain.module.scss"

import SliderBanner from "../../block/sliderBanner/SliderBanner"

const PageMain = () => {
	console.log(data);
	return (
		<div className={s.PageMain}>

			<div className={s.banner}>
				<SliderBanner />
				<Card
					styleCard={{minWidth:"265px"}}
					absent="Лодочный мотор Suzuki DF9.9BRS"
					price="190000р"
					image={img}
				/>
			</div>

			<div className={s.Search}>
				<div className={s.SearchTop}>
					<span className={s.SearchText}>Поиск по  номеру</span>
					<span className={s.SearchText}>Поиск по марке</span>
					<span className={s.SearchText}>Поиск по названию товара</span>
				</div>
				<div className={s.SearchInput}>
					<input
						type="text"
						className={s.input}
						placeholder="Введите марку"
					/>
					<button className={s.button}>искать</button>
				</div>
			</div>

			<CategoriesCards
				card0={data[0]}
				card1={data[1]}
				card2={data[2]}
				card3={data[3]}
				card4={data[4]}
				card5={data[5]}
			/>

			<SliderBlock style={{ padding: "100px 0" }} />
			<div className={s.discount}>
				<img
					className={s.discountImg}
					src={discountImg}
				/>
				<h3 className={s.discountTitle} >CКИДКИ <br />на все запчасти до 70%</h3>
				<a
					className={s.discountLink}
					href='#'
				>
					ПОСМОТЕТЬ ВСЕ
				</a>
			</div>
			<SliderBlock style={{ padding: "100px 0" }} />
		</div>
	);
}

export default PageMain;