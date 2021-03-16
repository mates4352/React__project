//Компоненты
import Card from "../card/Card";
// Картинки
import recordPlayer from "./../../../assets/images/svg/recordPlayer.svg"
import navigator from "./../../../assets/images/svg/navigator.svg"
import RF from "./../../../assets/images/svg/RF.svg"
import suit from "./../../../assets/images/svg/suit.svg"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Autoplay  } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import "./SliderCards.scss"

SwiperCore.use([Navigation,Autoplay]);


const SliderCards = (props) => {
	return (
		<div className="wrapper">
			<Swiper
				spaceBetween={20}
				slidesPerView={4}
				Autoplay = {1}
				navigation
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide className="swipper">
					<Card
						image={recordPlayer}
						name='BRP Audio-портативная система'
						price=''
						absent='нет в наличии'
						message='Сообщить о поступлении'
					/>
				</SwiperSlide>

				<SwiperSlide className="swipper">
					<Card
						image={navigator}
						name='Garmin Echomap Plus 62cv'
						price='7 000 ₽'
						absent=''
						message=''
					/>
				</SwiperSlide>

				<SwiperSlide className="swipper">
					<Card
						image={RF}
						name='RF D.E.S.S.TM Key'
						price=''
						absent='нет в наличии'
						message='Сообщить о поступлении'
					/>
				</SwiperSlide>

				<SwiperSlide className="swipper">
					<Card
						image={suit}
						name='Мужской костюм 3мм'
						price='7 000 ₽'
						absent=''
						message=''
					/>
				</SwiperSlide>

				<SwiperSlide className="swipper">
					<Card
						image={suit}
						name='Мужской костюм 3мм'
						price='7 000 ₽'
						absent=''
						message=''
					/>
				</SwiperSlide>

				<SwiperSlide className="swipper">
					<Card
						image={suit}
						name='Мужской костюм 3мм'
						price='7 000 ₽'
						absent=''
						message=''
					/>
				</SwiperSlide>
				
			</Swiper>
		</div>
	);
}

export default SliderCards;
