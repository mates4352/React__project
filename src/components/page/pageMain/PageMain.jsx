import ATVs1 from "./../../../assets/images/CategoriesCards/ATVs1.png"
import JetSkis from "./../../../assets/images/CategoriesCards/JetSkis.png"
import Boats from "./../../../assets/images/CategoriesCards/Boats.png"
import Snowmobiles from "./../../../assets/images/CategoriesCards/Snowmobiles.png"
import ATVs2 from "./../../../assets/images/CategoriesCards/ATVs2.png"
import Engines from "./../../../assets/images/CategoriesCards/Engines.png"
import banner from "./../../../assets/images/banner.jpg"
import img from "./../../../assets/images/img.png"
import discountImg from "./../../../assets/images/discount/discount.png"

import CategoryCard from "./../../common/categoryCard/CategoryCard"
import Card from "./../../common/card/Card"

import s from "./PageMain.module.scss"


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import SliderBlock from "../../block/sliderBlock/SliderBlock"

SwiperCore.use([Navigation ]);


const PageMain = () => {
	return (
		<div className={s.PageMain}>
			<div className={s.banner}>
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					navigation
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide className={s.swipper}>
							<img
								className={s.bannerImg}
								src={banner}
								alt="banner"
							/>
					</SwiperSlide>
					<SwiperSlide className={s.swipper}>
							<img
								className={s.bannerImg}
								src={banner}
								alt="banner"
							/>
					</SwiperSlide>
					<SwiperSlide className={s.swipper}>
							<img
								className={s.bannerImg}
								src={banner}
								alt="banner"
							/>
					</SwiperSlide>
	  </Swiper>
				<Card
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

			<section className={s.CategoriesCards}>
				<div className={s.grid}>
					<CategoryCard
						Title='Квадроциклы'
						src={ATVs1}
						alt="Квадроциклы"
						href='#'
					/>
					<CategoryCard
						Title='Гидроциклы'
						src={JetSkis}
						alt="Гидроциклы"
						href='#'
					/>
					<CategoryCard
						Title='Катера'
						src={Boats}
						alt="Катера"
						href='#'
					/>
					<CategoryCard
						Title='Снегоходы'
						src={Snowmobiles}
						alt="Снегоходы"
						href='#'
					/>
					<CategoryCard
						Title='Вездеходы'
						src={ATVs2}
						alt="Вездеходы"
						href='#'
					/>
					<CategoryCard
						Title='Двигатели'
						src={Engines}
						alt="Двигатели"
						href='#'
					/>
				</div>
			</section>
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