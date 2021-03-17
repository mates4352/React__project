import banner from "./../../../assets/images/banner.jpg"

import { Swiper, SwiperSlide,  } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import "./SliderBanner.scss"

SwiperCore.use([Navigation,]);

const SliderBanner = (props) => {
	return (
		<Swiper
			spaceBetween={0}
			slidesPerView={1}
			loop={true}
			autoplay={{
				delay: 5000,
				disableOnInteraction: false
			}}
			navigation
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide className="swipper">
				<img
					className="bannerImg"
					src={banner}
					alt="banner"
				/>
			</SwiperSlide>

			<SwiperSlide className="swipper">
				<img
					className="bannerImg"
					src={banner}
					alt="banner"
				/>
			</SwiperSlide>

			<SwiperSlide className="swipper">
				<img
					className="bannerImg"
					src={banner}
					alt="banner"
				/>
			</SwiperSlide>

		</Swiper>
	);
}

export default SliderBanner;