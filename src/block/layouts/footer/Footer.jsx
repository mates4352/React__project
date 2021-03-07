// foto
import instagramLogo from "./../../../assets/images/footerSocial/instagram-sketched 1.png";
import vkLogo from "./../../../assets/images/footerSocial/vk 1.png";
import facebookLogo from "./../../../assets/images/footerSocial/facebook 1.png";
import youtubeLogo from "./../../../assets/images/footerSocial/youtube 1.png";

// components
import Input from "../../components/input/Input";
import Button from "./../../components/button/Button";
import Titleh4 from "../../components/title/Titleh4";
import Item from "../../components/item/Item";
import Link from "../container/Container";
import Container from "../container/Container";
import List from "../../components/list/List";

import s from "./Footer.module.scss"
import Img from "../../components/img/Img";

import "./Footer.module.scss"

function Footer() {
	return (
		<footer className={s.footer}>
			<Container
				value={
					<>
						<div className={s.top}>
							<div className={s.mail}>

								<Titleh4 className={s.titleEmail}
									value="Подпишитесь на нашу рассылку 
						и узнавайте о акциях быстрее"/>
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
								<List
									className={s.item}
									valueItem1={
										<Item
											value={
												<Link
													className={s.link}
													to={"#"}
													value="О компании"
												/>
											}
										/>
									}
									valueItem2={
										<Item
											value={
												<Link
													className={s.link}
													to={"#"}
													value="Контакты"
												/>
											}
										/>
									}
									valueItem3={
										<Item
											value={
												<Link
													className={s.link}
													to={"#"}
													value="Акции"
												/>
											}
										/>
									}
									valueItem4={
										<Item
											value={
												<Link
													className={s.link}
													to={"#"}
													value="Магазины"
												/>
											}
										/>
									}
								/>

							</div>

							<div className={s.shopBox}>
								<Titleh4 className={s.title} value="Интернет-магазин" />

								<List
									className={s.item}
									valueItem1={
										<Item
											value={
												<Link
													className={s.link}
													to={"#"}
													value="Доставка и самовывоз"
												/>
											}
										/>
									}
									valueItem2={
										<Item
											value={
												<Link
													className={s.link}
													to={"#"}
													value="Оплата"
												/>
											}
										/>
									}
									valueItem3={
										<Item
											value={
												<Link
													className={s.link}
													to={"#"}
													value="Возврат-обмен"
												/>
											}
										/>
									}
									valueItem4={
										<Item
											value={
												<Link
													className={s.link}
													to={"#"}
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
									to={"#"} value="Договор оферты"
								/>
								<Link className={s.offer}
									to={"#"} value="Политика обработки персональных данных"
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
