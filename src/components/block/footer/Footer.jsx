// foto
import instagramLogo from "./../../../assets/images/footerSocial/instagram-sketched 1.png";
import vkLogo from "./../../../assets/images/footerSocial/vk 1.png";
import facebookLogo from "./../../../assets/images/footerSocial/facebook 1.png";
import youtubeLogo from "./../../../assets/images/footerSocial/youtube 1.png";

// components
import s from "./Footer.module.scss"

function Footer() {
	return (
		<footer className={s.footer}>

			<div className={s.top}>
				<div className={s.mail}>
					<h4 className={s.titleEmail}>Подпишитесь на нашу рассылку и узнавайте о акциях быстрее</h4>
					<form className={s.form}>
						<input className={s.email} placeholder="Введите ваш e-mail:" />
						<button className={s.btn}>Отправить</button>
					</form>
				</div>

				<div className={s.informationBox}>
					<h4 className={s.title}>Информация</h4>
					<ul className={s.list}>
						<li className={s.item}><a className={s.link} href={"#"}>О компании</a></li>
						<li className={s.item}><a className={s.link} href={"#"}> Контакты</a></li>
						<li className={s.item}><a className={s.link} href={"#"}> Акции</a></li>
						<li className={s.item}><a className={s.link} href={"#"}> Магазины</a></li>
					</ul>
				</div>

				<div className={s.shopBox}>
					<h4 className={s.title}>Интернет-магазин</h4>
					<ul className={s.list}>
						<li className={s.item}><a className={s.link} href={"#"}>Доставка и самовывоз</a></li>
						<li className={s.item}><a className={s.link} href={"#"}>Оплата</a></li>
						<li className={s.item}><a className={s.link} href={"#"}>Возврат-обмен</a></li>
						<li className={s.item}><a className={s.link} href={"#"}>Новости</a></li>
					</ul>
				</div>

				<div className={s.social}>
					<a className={s.socialLink} href="#">
						<img
							className={s.icon}
							src={instagramLogo}
							alt={"instagramLogo"}
						/>
					</a>
					<a className={s.socialLink} href="#">
						<img
							className={s.icon}
							src={vkLogo}
							alt={"vkLogo"}
						/>
					</a>
					<a className={s.socialLink} href="#">
						<img
							className={s.icon}
							src={facebookLogo}
							alt={"facebookLogo"}
						/>
					</a>
					<a className={s.socialLink} href="#">
						<img
							className={s.icon}
							src={youtubeLogo}
							alt={"youtubeLogo"}
						/>
					</a>
				</div>

			</div>
			<div className={s.bottom}>
				<small className={s.bottomOffen}>
					<a className={s.offer} href={"#"}> Договор оферты</a>
					<a className={s.offer} href={"#"}> Политика обработки персональных данных</a>
				</small>
			</div>
		</footer>
	);
}

export default Footer;
