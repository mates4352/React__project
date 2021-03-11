import ATVs1 from "./../../../assets/images/CategoriesCards/ATVs1.png"
import JetSkis from "./../../../assets/images/CategoriesCards/JetSkis.png"
import Boats from "./../../../assets/images/CategoriesCards/Boats.png"
import Snowmobiles from "./../../../assets/images/CategoriesCards/Snowmobiles.png"
import ATVs2 from "./../../../assets/images/CategoriesCards/ATVs2.png"
import Engines from "./../../../assets/images/CategoriesCards/Engines.png"
import banner from "./../../../assets/images/banner.jpg"
import img from "./../../../assets/images/img.png"

import Navigation from "./../../block/navigation/Navigation"
import CategoryCard from "./../../common/categoryCard/CategoryCard"
import Card from "./../../common/card/Card"

import s from "./PageMain.module.scss"

const PageMain = () => {
	return (
		<>
			<div className={s.banner}>
				<img
					className={s.banner__Img}
					src={banner}
					alt="banner"
				/>
				<Card
					valueText="Лодочный мотор Suzuki DF9.9BRS"
					valuePrice="324234"
					src={img}
				/>
			</div>

			<section className={s.CategoriesCards}>
				<div className={s.grid}>
					<CategoryCard
						Title='Квадроциклы'
						src={ATVs1}
						alt="Квадроциклы"
						href='#'
					/>
					<CategoryCard
						Title='Гидроциклы'
						src={JetSkis}
						alt="Гидроциклы"
						href='#'
					/>
					<CategoryCard
						Title='Катера'
						src={Boats}
						alt="Катера"
						href='#'
					/>
					<CategoryCard
						Title='Снегоходы'
						src={Snowmobiles}
						alt="Снегоходы"
						href='#'
					/>
					<CategoryCard
						Title='Вездеходы'
						src={ATVs2}
						alt="Вездеходы"
						href='#'
					/>
					<CategoryCard
						Title='Двигатели'
						src={Engines}
						alt="Двигатели"
						href='#'
					/>
				</div>
			</section>
		</>
	);
}

export default PageMain;