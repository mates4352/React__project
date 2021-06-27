import banner from "./../../../assets/images/banner.jpg"
import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'
import "./SliderBanner.scss"

const SliderBanner = () => {
	const params = {
	  pagination: {
		 el: '.swiper-pagination',
		 type: 'bullets',
		 clickable: true
	  },
	  navigation: {
		 nextEl: '.swiper-button-next',
		 prevEl: '.swiper-button-prev'
	  },
	  spaceBetween: 30
	}
  
	return(
	  <Swiper {...params}>
			<div>
				<img
					className="bannerImg"
					src={banner}
					alt="banner"
			/>
			</div>
			<div>
				<img
					className="bannerImg"
					src={banner}
					alt="banner"
				/>
			</div>
			<div>
				<img
					className="bannerImg"
					src={banner}
					alt="banner"
				/>
			</div>

	  </Swiper>
	)
 }
  
 export default SliderBanner;





