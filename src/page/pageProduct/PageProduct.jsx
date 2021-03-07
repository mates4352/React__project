import "./PageProduct.scss"
import './../../block/layouts/card/Card';
import Card from "./../../block/layouts/card/Card";


const PageProduct = () => {
	return (
		<>
			<div className="grid">
				<div className="empty">empty</div>
				<header className="header">header</header>
				<section className="breadCrumb">breadCrumb</section>
				<section className="containerCards">containerCards</section>
				<section className="navigation">navigation</section>
				<section className="infoShop">infoShop</section>
				<section className="innerCards">innerCards
			<Card />
				</section>
				<footer className="footer">footer</footer>
			</div>
		</>
	);
}

export default PageProduct;