//Компоненты
import Card from "../card/Card";
// Картинки
import recordPlayer from "./../../../assets/images/svg/recordPlayer.svg"
import navigator from "./../../../assets/images/svg/navigator.svg"
import RF from "./../../../assets/images/svg/RF.svg"
import suit from "./../../../assets/images/svg/suit.svg"
import bag from "./../../../assets/images/svg/bag9800.svg"
// import jacket from "./../../../assets/images/svg/jacket6900.svg"
// import BRP from "./../../../assets/images/svg/BRP68000.svg"
// import equipment from "./../../../assets/images/svg/equipment.svg"


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Autoplay  } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import "./SliderCards.scss"

SwiperCore.use([Navigation,Autoplay,]);



const SliderCards = (props) => {
	// const data0 = {
	// 	image: recordPlayer,
	// 	name:'BRP Audio-портативная система',
	// 	price:'',
	// 	absent:'нет в наличии',
	// 	message:'Сообщить о поступлении',
	// 	// link: '/1'
	// }
	
	// const data1 = {
	// 	image: navigator,
	// 	name:'Garmin Echomap Plus 62cv',
	// 	price:'7 000 ₽',
	// 	absent:'',
	// 	message:'',
	// 	// link: '/2'
	// }
	
	// const data2 = {
	// 	image: RF,
	// 	name:'RF D.E.S.S.TM Key',
	// 	price:'',
	// 	absent:'нет в наличии',
	// 	message:'Сообщить о поступлении',
	// 	// link: '/3'
	// }
	
	// const data3 = {
	// 	image: suit,
	// 	name:'Мужской костюм 3мм',
	// 	price:'7 000 ₽',
	// 	absent:'',
	// 	message:'',
	// 	// link: '/4'
	// }
	
	// const data4 = {
	// 	image: bag,
	// 	name:'Водонепроницаемый Рюкзак',
	// 	price:'9 800 ₽',
	// 	absent:'',
	// 	message:'',
	// 	// link: '/5'
	// }

	let data = [
		{ image: recordPlayer, name: 'BRP Audio-портативная система', price: '', absent: 'нет в наличии', message: 'Сообщить о поступлении'},
		{ image: navigator, name: 'Garmin Echomap Plus 62cv', price: '7 000 ₽', absent: '', message: ''},
		{ image: RF, name: 'RF D.E.S.S.TM Key', price: '', absent: 'нет в наличии', message: 'Сообщить о поступлении'},
		{ image: suit, name: 'Мужской костюм 3мм', price: '7 000 ₽', absent: '', message: ''},
		{ image: bag, name: 'Водонепроницаемый Рюкзак', price: '9 800 ₽', absent: '', message: ''}
	]

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
			>
				<SwiperSlide className="swipper">
				{/* {props.data0 && */}
					<Card className="card"
						image={data[0].image}
						name={data[0].name}
						price={data[0].price}
						absent={data[0].absent}
						message={data[0].message}
					/>
				</SwiperSlide>

				<SwiperSlide className="swipper">
				{/* {props.data1 && */}
					<Card className="card"
						image={data[1].image}
						name={data[1].name}
						price={data[1].price}
						absent={data[1].absent}
						message={data[1].message}
					/>
				</SwiperSlide>

				<SwiperSlide className="swipper">
				{/* {props.data2 && */}
					<Card className="card"
					image={data[2].image}
					name={data[2].name}
					price={data[2].price}
					absent={data[2].absent}
					message={data[2].message}
					/>
				</SwiperSlide>

				<SwiperSlide className="swipper">
				{/* {props.data3 && */}
					<Card className="card"
						image={data[3].image}
						name={data[3].name}
						price={data[3].price}
						absent={data[3].absent}
						message={data[3].message}
					/>
				</SwiperSlide>

				<SwiperSlide className="swipper">
				{/* {props.data4 && */}
					<Card className="card"
					image={data[4].image}
					name={data[4].name}
					price={data[4].price}
					absent={data[4].absent}
					message={data[4].message}
					// link={data4.link}
	
					/>
				</SwiperSlide>
				
			</Swiper>
		</div>
	);
}

export default SliderCards;
