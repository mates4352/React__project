import s from "./PageProduct.module.scss"

// complex
import BreadCrumbs from "./../../block/breadCrumbs/BreadCrumbs"
import SliderBlock from "./../../block/sliderBlock/SliderBlock"

// common
import Card from "./../../common/card/Card"

// Image
import like from "./../../../assets/images/svg/like.svg"
import rec from "./../../../assets/images/svg/Rectangle 17.svg"
import rec1 from "./../../../assets/images/svg/Rectangle 17.1.svg"
import rec2 from "./../../../assets/images/svg/Rectangle 17.2.svg"
import star from "./../../../assets/images/svg/Star.svg"
import Sale from "../../common/sale/Sale"


const PageProduct = (props) => {
	return (
		<>
			<BreadCrumbs />
			<section className={s.pageProduct} style={{ padding: "36px 0 80px" }}>
				<Card
				/>
				<div className='info'>
					<h2 className='title'>
						Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
					</h2>
					<span> Код товара:366666-2</span>
					<div className="images">
						<img src={like} alt={'like'} />
						<div className="recs">
							<img src={rec2} alt={'rectangle'} />
							<img src={rec1} alt={'rectangle'} />
							<img src={rec} alt={'rectangle'} />
						</div>
						<div className="stars">
							<img src={star} alt={'star'} />
							<img src={star} alt={'star'} />
							<img src={star} alt={'star'} />
							<img src={star} alt={'star'} />
							<img src={star} alt={'star'} />
						</div>
					</div>
					<div>
						<span>Характеристики</span>
						<span>Наличие в магазине</span>
					</div>
					<a> value='Показать еще' </a>
					<button className="btnBuy">купить</button>
				</div>
			</section>
			<SliderBlock style={{ padding: "100px 0 100px" }} />
			
		</>
	);
}

export default PageProduct;