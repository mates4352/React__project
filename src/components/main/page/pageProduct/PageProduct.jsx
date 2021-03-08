
import Header from "../../../complex/header/Header"
import Navigation from "./../../../complex/navigation/Navigation"
import SliderBlock from "../../../complex/sliderBlock/SliderBlock"
import Footer from "../../../complex/footer/Footer"

import s from "./PageProduct.module.scss"


const PageProduct = (props) => {
	return (
	
			<div className={s.pageProduct}>
				<Header style={{ padding: "27px 0 46px 0" }}/>
				<Navigation />

				<SliderBlock style={{ padding: "0px 0 100px 0" }}/>
				<Footer />
			</div>
		
	);
}

export default PageProduct;