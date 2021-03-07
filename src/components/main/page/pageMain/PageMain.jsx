import Navigation from "./../../../complex/navigation/Navigation"
import CategoryCard from "./../../../block/categoryCard/CategoryCard"
import Container from "./../../../common/container/Container";
import Header from "./../../../complex/header/Header"

import s from "./PageMain.module.scss"

import ATVs1 from "./../../../../assets/images/CategoriesCards/ATVs1.png"
import JetSkis from "./../../../../assets/images/CategoriesCards/JetSkis.png"
import Boats from "./../../../../assets/images/CategoriesCards/Boats.png"
import Snowmobiles from "./../../../../assets/images/CategoriesCards/Snowmobiles.png"
import ATVs2 from "./../../../../assets/images/CategoriesCards/ATVs2.png"
import Engines from "./../../../../assets/images/CategoriesCards/Engines.png"


const PageMain = () => {
	return (
		<>
			<Header style={{ padding: "55px 0 45px 0" }} />
			<Navigation />

			<section className={s.CategoriesCards}>
				<Container
					value={
						<div className={s.grid}>
							<CategoryCard
								valueTitle='Квадроциклы'
								src={ATVs1}
								alt=""
							/>
							<CategoryCard
								valueTitle='Гидроциклы'
								style={{color:"#000"}}
								src={JetSkis }
								alt=""
							/>
							<CategoryCard
								valueTitle='Катера'
								src={Boats }
								alt=""
							/>
							<CategoryCard
								valueTitle='Снегоходы'
								src={Snowmobiles }
								alt=""
							/>
							<CategoryCard
								valueTitle='Вездеходы'
								src={ATVs2}
								alt=""
							/>
							<CategoryCard
								valueTitle='Двигатели'
								src={Engines }
								alt=""
							/>
						</div>
					}
				/>
			</section>

		</>
	);
}

export default PageMain;