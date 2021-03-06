import instagramLogo from "./../../../assets/images/footerSocial/instagram-sketched 1.png";
import vkLogo from "./../../../assets/images/footerSocial/vk 1.png";
import facebookLogo from "./../../../assets/images/footerSocial/facebook 1.png";
import youtubeLogo from "./../../../assets/images/footerSocial/youtube 1.png";

import Email from "./../../components/email/Email";
import Button from "./../../components/button/Button";

import "./Footer.scss"




function Footer() {
	return (
		<div className="footer">

			<div div className="top">
				<div className="mail">
					<div className="title">
						Подпишитесь на нашу рассылку 
						и узнавайте о акция быстрее
					</div>
					<Email />
					<Button />
				</div>

				<ul className="information">
					<li className="item">Информация</li>
					<li className="item">О компании</li>
					<li className="item">Контакты</li>
					<li className="item">Акции</li>
					<li className="item">Магазины</li>
				</ul>

				<ul className="online-shop">
					<li className="shop-item">Интернет-магазин</li>
					<li className="shop-item">Доставка и самовывоз</li>
					<li className="shop-item">Оплата</li>
					<li className="shop-item">Возврат-обмен</li>
					<li className="shop-item">Новости</li>
				</ul>

				<div className="social">
					<img className="icon" src={instagramLogo} alt="" />
					<img className="icon" src={vkLogo} alt="" />
					<img className="icon" src={facebookLogo} alt="" />
					<img className="icon" src={youtubeLogo} alt="" />
				</div>
			</div>

			<div className="footer-bottom">
				
			</div>

		</div>
);
}

export default Footer;
