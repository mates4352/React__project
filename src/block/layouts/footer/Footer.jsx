import instagramLogo from "./../../../assets/images/footerSocial/instagram-sketched 1.png";
import vkLogo from "./../../../assets/images/footerSocial/vk 1.png";
import facebookLogo from "./../../../assets/images/footerSocial/facebook 1.png";
import youtubeLogo from "./../../../assets/images/footerSocial/youtube 1.png";

import Email from "./../../components/email/Email";
import Button from "./../../components/button/Button";

import "./Footer.scss"
import Titleh4 from "../../components/title/Titleh4";
import Item from "../../components/item/Item";
import Link from "../container/Container";
import Container from "../container/Container";
import List from "../../components/list/List";




function Footer() {
	return (
		<div className="footer">
			<Container
				className="container"
				value={
					<>
						<div div className="footer-top">
							<div className="footer-mail">

								<Titleh4 className="footer-title-email" value="Подпишитесь на нашу рассылку 
						и узнавайте о акциях быстрее"/>
								<form className="footer-styles">
									<Email />
									<Button className="btn" value="Отправить" />
								</form>
							</div>
							<div className="footer-information-box">
								<Titleh4 className="footer-title" value="Информация" />

								<List
									className="footer-item"
									valueItem1={
										<Link
											className="link"
											to="#"
											value="О компании"
										/>
									}
								/>
								<List
									className="footer-item"
									valueItem1={
										<Link
											className="link"
											to="#"
											value="Контакты"
										/>
									}
								/>
								<List
									className="footer-item"
									valueItem1={
										<Link
											className="link"
											to="#"
											value="Акции"
										/>
									}
								/>
								<List
									className="footer-item"
									valueItem1={
										<Link
											className="link"
											to="#"
											value="Магазины"
										/>
									}
								/>
							</div>

							<div className="footer-online-shop-box">
								<Titleh4 className="footer-title" value="Интернет-магазин" />

								<List
									className="footer-item"
									valueItem1={
										<Link
											className="link"
											to="#"
											value="Доставка и самовывоз"
										/>
									}
								/>
								<List
									className="footer-item"
									valueItem1={
										<Link
											className="link"
											to="#"
											value="Оплата"
										/>
									}
								/>
								<List
									className="footer-item"
									valueItem1={
										<Link
											className="link"
											to="#"
											value="Возврат-обмен"
										/>
									}
								/>
								<List
									className="footer-item"
									valueItem1={
										<Link
											className="link"
											to="#"
											value="Новости"
										/>
									}
								/>
							</div>

							<div className="footer-social">
								<img className="footer-icon" src={instagramLogo} alt="" />
								<img className="footer-icon" src={vkLogo} alt="" />
								<img className="footer-icon" src={facebookLogo} alt="" />
								<img className="footer-icon" src={youtubeLogo} alt="" />
							</div>
						</div>

						<div className="footer-bottom">
							<div className="footer-bottom-offen">
								<Link className="footer-offer" to="#" value="Договор оферты" />
								<Link className="footer-offer" to="#" value="Политика обработки персональных данных" />
							</div>

						</div>

					</>
				}

			/>


		</div>
	);
}

export default Footer;
