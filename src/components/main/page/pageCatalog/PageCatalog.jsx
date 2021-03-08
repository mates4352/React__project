import Header from "../../../complex/header/Header"
import Footer from "../../../complex/footer/Footer"
import Navigation from "./../../../complex/navigation/Navigation"




import s from "./PageCatalog.module.scss"

import BreadCrumbs from "../../../complex/breadCrumbs/BreadCrumbs"


const PageCatalog = () => {
	return (
		<>
			<Header style={{ padding: "55px 0 45px 0" }}/>
			<Navigation />

			<BreadCrumbs 
				value1="Главная" href1={"#"}
				value2="Гидроциклы" href2={"#"}
				value3="Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic" href3={""}
			/>
			<Footer />
		</>
	);
}

export default PageCatalog;