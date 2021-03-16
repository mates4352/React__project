//Компоненты
import Card from "../card/Card";
// Картинки
import recordPlayer from "./../../../assets/images/svg/recordPlayer.svg"
import navigator from "./../../../assets/images/svg/navigator.svg"
import RF from "./../../../assets/images/svg/RF.svg"
import suit from "./../../../assets/images/svg/suit.svg"
import bag from "./../../../assets/images/svg/bag9800.svg"
import jacket from "./../../../assets/images/svg/jacket6900.svg"
import BRP from "./../../../assets/images/svg/BRP68000.svg"
import equipment from "./../../../assets/images/svg/equipment.svg"


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Autoplay  } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import "./SliderCards.scss"

SwiperCore.use([Navigation,Autoplay,]);


const SliderCards = (props) => {
	return (
		<div className="wrapper">
			<Swiper
				spaceBetween={20}
				slidesPerView={4}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false
			  }}
				navigation
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide className={s.swipper}>
					<Card className={s.card}
						image={recordPlayer}
						name='BRP Audio-портативная система'
						price=''
						absent='нет в наличии'
						message='Сообщить о поступлении'
					/>
				</SwiperSlide>

				<SwiperSlide className={s.swipper}>
					<Card className={s.card}
						image={navigator}
						name='Garmin Echomap Plus 62cv'
						price='7 000 ₽'
						absent=''
						message=''
					/>
				</SwiperSlide>

				<SwiperSlide className={s.swipper}>
					<Card className={s.card}
						image={RF}
						name='RF D.E.S.S.TM Key'
						price=''
						absent='нет в наличии'
						message='Сообщить о поступлении'
					/>
				</SwiperSlide>

				<SwiperSlide className={s.swipper}>
					<Card className={s.card}
						image={suit}
						name='Мужской костюм 3мм'
						price='7 000 ₽'
						absent=''
						message=''
					/>
				</SwiperSlide>

				<SwiperSlide className={s.swipper}>
					<Card className={s.card}
						image={bag}
						name='Водонепроницаемый Рюкзак'
						price='9 800 ₽'
						absent=''
						message=''
					/>
				</SwiperSlide>

				<SwiperSlide className={s.swipper}>
					<Card className={s.card}
						image={jacket}
						name="Спасательный жилет BRP Men's Airflow PFD"
						price='6 900 ₽'
						absent=''
						message=''
					/>
				</SwiperSlide>

				<SwiperSlide className={s.swipper}>
					<Card className={s.card}
						image={BRP}
						name='BRP Audio-Premium System'
						price='68 000 ₽'
						absent=''
						message=''
					/>
				</SwiperSlide>

				<SwiperSlide className={s.swipper}>
					<Card className={s.card}
						image={equipment}
						name='Спасательное снаряжение'
						price=''
						absent='нет в наличии'
						message='Сообщить о поступлении'
					/>
				</SwiperSlide>
				
			</Swiper>
		</div>
	);
}

export default SliderCards;
