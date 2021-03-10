// foto
import instagramLogo from "./../../../assets/images/footerSocial/instagram-sketched 1.png";
import vkLogo from "./../../../assets/images/footerSocial/vk 1.png";
import facebookLogo from "./../../../assets/images/footerSocial/facebook 1.png";
import youtubeLogo from "./../../../assets/images/footerSocial/youtube 1.png";

// components

import Link from "./../../common/link/Link";

import s from "./Footer.module.scss"

function Footer() {
	return (
		<footer className={s.footer}>
			<div className="container">
				<div className={s.top}>
					<div className={s.mail}>

						<h4 className={s.titleEmail}>
							Подпишитесь на нашу рассылку и узнавайте о акциях быстрее
						</h4>
						<form className={s.styles}>

							<input className={s.email}
								value="Введите ваш e-mail:"
							/>
							<button className={s.btn}>
								Отправить
						</button>

						</form>
					</div>

					<div className={s.informationBox}>

						<h4 className={s.title}>
							Информация
					</h4>

						<ul className={s.list}>

							<li className={s.item}>
								<Link
									className={s.link}
									href={"#"}
									value="О компании"
								/>
							</li>

							<li className={s.item}>
								<Link
									className={s.link}
									href={"#"}
									value="Контакты"
								/>
							</li>

							<li className={s.item}>
								<Link
									className={s.link}
									href={"#"}
									value="Акции"
								/>
							</li>

							<li className={s.item}>
								<Link
									className={s.link}
									href={"#"}
									value="Магазины"
								/>
							</li>
						</ul>

					</div>

					<div className={s.shopBox}>
						<h4 className={s.title}>
							Интернет-магазин
					</h4>

						<ul className={s.list}>
							<li className={s.item}>
								<Link
									className={s.link}
									href={"#"}
									value="Доставка и самовывоз"
								/>
							</li>
							<li className={s.item}>
								<Link
									className={s.link}
									href={"#"}
									value="Оплата"
								/>
							</li>
							<li className={s.item}>
								<Link
									className={s.link}
									href={"#"}
									value="Возврат-обмен"
								/>
							</li>
							<li className={s.item}>
								<Link
									className={s.link}
									href={"#"}
									value="Новости"
								/>
							</li>
						</ul>

						<div className={s.social}>
							<img
								className={s.icon}
								src={instagramLogo}
								alt={"instagramLogo"}
							/>
							<img
								className={s.icon}
								src={vkLogo}
								alt={"vkLogo"}
							/>
							<img
								className={s.icon}
								src={facebookLogo}
								alt={"facebookLogo"}
							/>
							<img
								className={s.icon}
								src={youtubeLogo}
								alt={"youtubeLogo"}
							/>
						</div>
					</div>

					<div className={s.bottom}>
						<div className={s.bottomOffen}>
							<Link className={s.offer}
								href={"#"} value="Договор оферты"
							/>
							<Link className={s.offer}
								href={"#"} value="Политика обработки персональных данных"
							/>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
