import s from "./PageProduct.module.scss"

// complex
import Header from "../../../complex/header/Header"
import Navigation from "./../../../complex/navigation/Navigation"
import BreadCrumbs from "./../../../complex/breadCrumbs/BreadCrumbs"
import SliderBlock from "../../../complex/sliderBlock/SliderBlock"
import Footer from "../../../complex/footer/Footer"
// block
import Crumb from "../../../block/crumb/Crumb"
import Card from "../../../block/card/Card"
// common
import Titleh2 from "../../../common/title/TitleH2"
import Span from "../../../common/span/Span"
import Img from "../../../common/img/Img"
import Show from "./../../../common/show/Show"
import Button from "../../../common/button/Button"

// Image
import like from "./../../../../assets/images/svg/like.svg"
import rec from "./../../../../assets/images/svg/Rectangle 17.svg"
import rec1 from "./../../../../assets/images/svg/Rectangle 17.1.svg"
import rec2 from "./../../../../assets/images/svg/Rectangle 17.2.svg"
import star from "./../../../../assets/images/svg/Star.svg"




const PageProduct = (props) => {
	return (

		<div className={s.pageProduct}>
			<Header style={{ padding: "27px 0 46px" }} />
			<Navigation />
			<BreadCrumbs
				Crumb={
					<>
						<Crumb href='#' value='Главная' />
						<Crumb href='#' value='Гидроциклы' />
						<Crumb href='#' value='Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic' />
					</>
				}
			/>
			<section className='wrapper' style={{ padding: "36px 0 80px" }}>
				<Card />
				<div className='info'>
					<Titleh2 className='title'value='Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic' />
					<Span value='Код товара: 	366666-2 ' />
					<div className="images">
						<Img src={like} alt={'like'}/>
						<div className="recs">
						<Img src={rec2} alt={'rectangle'}/>
						<Img src={rec1} alt={'rectangle'}/>
						<Img src={rec} alt={'rectangle'}/>
						</div>
						<div className="stars">
							<Img src={star} alt={'star'}/>
							<Img src={star} alt={'star'}/>
							<Img src={star} alt={'star'}/>
							<Img src={star} alt={'star'}/>
							<Img src={star} alt={'star'}/>
						</div>
					</div>
					<div>
						<div>Характеристики</div>
						<div>Наличие в магазине</div>
					</div>
					<Show value='Показать еще'/>
					<Button className="btnBuy" value='купить'/>

				</div>
			</section>
			<SliderBlock style={{ padding: "0px 0 100px" }} />
			<Footer />
		</div>
	);
}

export default PageProduct;