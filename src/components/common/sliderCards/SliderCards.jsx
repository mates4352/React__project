//Компоненты
import Card from "./../card/Card";
import "./SliderCards.scss"
// Картинки
import recordPlayer from "./../../../assets/images/svg/recordPlayer.svg"
import navigator from "./../../../assets/images/svg/navigator.svg"
import RF from "./../../../assets/images/svg/RF.svg"
import suit from "./../../../assets/images/svg/suit.svg"
import bag from "./../../../assets/images/svg/bag9800.svg"

//swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation, Autoplay,]);


const SliderCards = (props) => {
	console.log(props);

	const card0 = {
		image: recordPlayer,
		name: 'BRP Audio-портативная система',
		price: '',
		absent: 'нет в наличии',
		message: 'Сообщить о поступлении'
	}

	const card1 = {
		image: navigator,
		name: 'Garmin Echomap Plus 62cv',
		price: '45 800 ₽',
		absent: '',
		message: ''
	}

	const card2 = {
		image: RF,
		name: 'RF D.E.S.S.TM Keyа',
		price: '',
		absent: 'нет в наличии',
		message: 'Сообщить о поступлении'
	}

	const card3 = {
		image: suit,
		name: 'Мужской костюм 3мм',
		price: '7 000 ₽',
		absent: '',
		message: ''
	}

	const card4 = {
		image: bag,
		name: 'Водонепроницаемый Рюкзак',
		price: '9 800 ₽',
		absent: '',
		message: ''
	}

	return (
		<div className="wrapper">
			<Swiper
				spaceBetween={20}
				slidesPerView={4}
				loop={true}
<<<<<<< HEAD
				autoplay={{
					delay: 2500,
					disableOnInteraction: false
			  }}
=======
				// 	autoplay={{
				// 		delay: 2500,
				// 		disableOnInteraction: false
				//   }}
>>>>>>> 4c483568aaf1ee12e10e34292c594a3e95696680
				navigation
			>
				<SwiperSlide className="swipper">
					{/* {props.card0 && */}
					<Card className="card"
						image={card0.image}
						name={card0.name}
						price={card0.price}
						absent={card0.absent}
						message={card0.message}
					/>

				</SwiperSlide>

				<SwiperSlide className="swipper">
					{/* {props.card1 && */}
					<Card className="card"
						image={card1.image}
						name={card1.name}
						price={card1.price}
						absent={card1.absent}
						message={card1.message}
					/>

				</SwiperSlide>

				<SwiperSlide className="swipper">
					{/* {props.card2 && */}
					<Card className="card"
						image={card2.image}
						name={card2.name}
						price={card2.price}
						absent={card2.absent}
						message={card2.message}
					/>

				</SwiperSlide>

				<SwiperSlide className="swipper">
					{/* {props.card3 && */}
					<Card className="card"
						image={card3.image}
						name={card3.name}
						price={card3.price}
						absent={card3.absent}
						message={card3.message}
					/>

				</SwiperSlide>

				<SwiperSlide className="swipper">
					{/* {props.card4 && */}
					<Card className="card"
						image={card4.image}
						name={card4.name}
						price={card4.price}
						absent={card4.absent}
						message={card4.message}
					/>

				</SwiperSlide>

			</Swiper>
		</div>
	);
}

export default SliderCards;
