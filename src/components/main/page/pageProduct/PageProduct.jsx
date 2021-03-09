
import Header from "../../../complex/header/Header"
import Navigation from "./../../../complex/navigation/Navigation"
import BreadCrumbs from "./../../../complex/breadCrumbs/BreadCrumbs"
import Crumb from "../../../block/crumb/Crumb"
import AboutProduct from "../../../complex/aboutProduct/AboutProduct"
import SliderBlock from "../../../complex/sliderBlock/SliderBlock"
import Footer from "../../../complex/footer/Footer"

import s from "./PageProduct.module.scss"



const PageProduct = (props) => {
	return (
	
			<div className={s.pageProduct}>
				<Header style={{ padding: "27px 0 46px 0" }}/>
				<Navigation />
				<BreadCrumbs 
						Crumb= {
							<>
						<Crumb href='#' value='Главная'/>
						<Crumb href='#' value='Гидроциклы'/>
						<Crumb href='#' value='Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic'/>
						</>
						}
				/>
				<AboutProduct style={{ padding: "36px 0 80px 0" }}/>
				<SliderBlock style={{ padding: "0px 0 100px 0" }}/>
				<Footer />
			</div>
		
	);
}

export default PageProduct;