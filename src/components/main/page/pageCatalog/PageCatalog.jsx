import Header from "../../../complex/header/Header"
import Footer from "../../../complex/footer/Footer"
import Navigation from "./../../../complex/navigation/Navigation"




import s from "./PageCatalog.module.scss"

import BreadCrumbs from "../../../complex/breadCrumbs/BreadCrumbs"
import Crumb from "../../../block/crumb/Crumb"


const PageCatalog = () => {
	return (
		<>
			<Header style={{ padding: "55px 0 45px 0" }} />
			<Navigation />

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


			<Footer />
		</>
	);
}

export default PageCatalog;