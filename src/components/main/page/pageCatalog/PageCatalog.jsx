import Header from "../../../complex/header/Header"
import Footer from "../../../complex/footer/Footer"
import Navigation from "./../../../complex/navigation/Navigation"




import s from "./PageCatalog.module.scss"

const PageCatalog = () => {
	return (
		<>
			<Header style={{ padding: "55px 0 45px 0" }}/>
			<Navigation />

			
			<Footer />
			{/* <Bread
				valueItem1={
					<Item
						className={s.item}
						value={
							<Link
								className={s.link}
								to={"#"}
								value="Главная"
							/>
						}
					/>
				}
				valueItem1={
					<Item
						className={s.item}
						value={
							<Link
								className={s.link}
								to={"#"}
								value="234234"
							/>
						}
					/>
				}

			/>
		</> */}
		</>
	);
}

export default PageCatalog;