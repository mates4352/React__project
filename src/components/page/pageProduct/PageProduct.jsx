import s from "./PageProduct.module.scss"

// complex
import BreadCrumbs from "./../../block/breadCrumbs/BreadCrumbs"
import SliderBlock from "./../../block/sliderBlock/SliderBlock"

// common
import Sale from "../../common/sale/Sale"
import LinkShow from "../../common/linkShow/LinkShow"

// Image
import like from "./../../../assets/images/svg/like.svg"
import gidrotsikl36666 from "./../../../assets/images/svg/gidrotsikl36666.svg"
import rec from "./../../../assets/images/svg/Rectangle 17.svg"
import rec1 from "./../../../assets/images/svg/Rectangle 17.1.svg"
import rec2 from "./../../../assets/images/svg/Rectangle 17.2.svg"
import star from "./../../../assets/images/svg/Star.svg"






const PageProduct = (props) => {
	return (
		<>
			<BreadCrumbs />

			<section className={s.aboutProduct}>

				<div className={s.bigCard} style={{ margin: "0 100px 0 0" }}>
					<Sale
					style={{ width: "94px", height: "44px" }} 
					text='SALE'
					/>
					<img className={s.bigImage} src={gidrotsikl36666} alt={'bigImage'} />
					<p className={s.lastPrice}>1 200 475 ₽</p>
					<p className={s.price}>1 100 475 ₽</p>
					<a className={s.message}>Нашли дешевле? Снизим цену!</a>
				</div>

				<div className={s.infoCard}>
					<h2 className={s.title}>
						Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
					</h2>
					<span className={s.code}> Код товара:366666-2</span>
					<div className={s.images}>
						<img className={s.like} src={like} alt={'like'} />
						<div className={s.recs}>
							<img className={s.rec} src={rec2} alt={'rectangle'} />
							<img className={s.rec} src={rec1} alt={'rectangle'} />
							<img className={s.rec} src={rec} alt={'rectangle'} />
						</div>
						<div className={s.stars}>
							<img src={star} alt={'star'} />
							<img src={star} alt={'star'} />
							<img src={star} alt={'star'} />
							<img src={star} alt={'star'} />
							<img src={star} alt={'star'} />
						</div>
					</div>
					<div className={s.table}>
						<table>таблица</table>
						{/* <span>Характеристики</span>
						<span>Наличие в магазине</span> */}
					</div>
					<LinkShow href={'#'}/>
					{/* <a className={s.show}>Показать еще</a> */}
					<button className={s.btnBuy}>купить</button>
				</div>
			</section>

			<SliderBlock style={{ padding: "100px 0" }} />

		</>
	);
}

export default PageProduct;