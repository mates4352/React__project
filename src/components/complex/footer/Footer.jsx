// foto
import instagramLogo from "./../../../assets/images/footerSocial/instagram-sketched 1.png";
import vkLogo from "./../../../assets/images/footerSocial/vk 1.png";
import facebookLogo from "./../../../assets/images/footerSocial/facebook 1.png";
import youtubeLogo from "./../../../assets/images/footerSocial/youtube 1.png";

// components
import Input from "./../../common/input/Input";
import Button from "./../../common/button/Button";
import Titleh4 from "./../../common/title/Titleh4";
import Container from "./../../common/container/Container";
import Img from "./../../common/img/Img";
import Ul from "./../../common/ul/Ul";
import Li from "./../../common/li/Li";
import Link from "./../../common/link/Link";

import s from "./Footer.module.scss"

function Footer() {
	return (
		<footer className={s.footer}>
			<Container
				value={
					<>
						<div className={s.top}>
							<div className={s.mail}>

								<Titleh4
									className={s.titleEmail}
									value="Подпишитесь на нашу рассылку и узнавайте о акциях быстрее"
								/>
								<form className={s.styles}>
									<Input className={s.email}
										value="Введите ваш e-mail:"
									/>
									<Button className={s.btn}
										value="Отправить"
									/>
								</form>
							</div>

							<div className={s.informationBox}>
								<Titleh4 className={s.title}
									value="Информация" />
								<Ul
									className={s.item}
									valueItem1={
										<Li
											value={
												<Link
													className={s.link}
													href={"#"}
													value="О компании"
												/>
											}
										/>
									}
									valueItem2={
										<Li
											value={
												<Link
													className={s.link}
													href={"#"}
													value="Контакты"
												/>
											}
										/>
									}
									valueItem3={
										<Li
											value={
												<Link
													className={s.link}
													href={"#"}
													value="Акции"
												/>
											}
										/>
									}
									valueItem4={
										<Li
											value={
												<Link
													className={s.link}
													href={"#"}
													value="Магазины"
												/>
											}
										/>
									}
								/>

							</div>

							<div className={s.shopBox}>
								<Titleh4 className={s.title} value="Интернет-магазин" />

								<Ul
									className={s.item}
									valueItem1={
										<Li
											value={
												<Link
													className={s.link}
													href={"#"}
													value="Доставка и самовывоз"
												/>
											}
										/>
									}
									valueItem2={
										<Li
											value={
												<Link
													className={s.link}
													href={"#"}
													value="Оплата"
												/>
											}
										/>
									}
									valueItem3={
										<Li
											value={
												<Link
													className={s.link}
													href={"#"}
													value="Возврат-обмен"
												/>
											}
										/>
									}
									valueItem4={
										<Li
											value={
												<Link
													className={s.link}
													href={"#"}
													value="Новости"
												/>
											}
										/>
									}
								/>
							</div>

							<div className={s.social}>
								<Img
									className={s.icon}
									src={instagramLogo}
									alt={"instagramLogo"}
								/>
								<Img
									className={s.icon}
									src={vkLogo}
									alt={"vkLogo"}
								/>
								<Img
									className={s.icon}
									src={facebookLogo}
									alt={"facebookLogo"}
								/>
								<Img
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

					</>
				}
			/>
		</footer>
	);
}

export default Footer;
