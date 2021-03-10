import Header from "../../../complex/header/Header"
import Footer from "../../../complex/footer/Footer"
import Navigation from "./../../../complex/navigation/Navigation"




import s from "./PageCatalog.module.scss"

import BreadCrumbs from "../../../complex/breadCrumbs/BreadCrumbs"
import Crumb from "../../../block/crumb/Crumb"
import Container from "../../../common/container/Container"
import Sorting from "../../../block/sorting/Sorting"
import Titleh2 from "../../../common/title/TitleH2"
import Ul from "../../../common/ul/Ul"



const PageCatalog = () => {
	return (
		<>
			<Container
				value={
					<>
						<Header style={{ padding: "55px 0 45px 0" }} />
						<Navigation />
					</>
				}
			/>


			<BreadCrumbs
				Crumb={
					<>
						<Crumb
							href="#"
							value="Главная"
						/>
						<Crumb
							href="#"
							value="Гидроциклы"
						/>
					</>
				}
			/>

			<Container
				value={
					<>
						<Titleh2
							className={s.titleH2}
							value="Гидроциклы"
						/>

						<Ul
							className={s.sortingLef}
							valueItem1={
								<>
									<Sorting
										href="#"
										value="Полноприводные"
									/>
									<Sorting
										href="#"
										value="от 5000"
									/>
									<Sorting
										href="#"
										value="BRP"
									/>
									<Sorting
										href="#"
										value="еще"
									/>
								</>
							}
						/>

						<select>
							<>
								<option >По полулярности</option>
								<option >По цене (min)</option>
								<option >По цене (max)</option>
								<option >По количеству отзывам</option>
							</>
						</select>

					</>
				}
			/>




			<Footer />
		</>
	);
}

export default PageCatalog;