import Img from "../../components/img/Img";
import Item from "../../components/item/Item";
import Link from "../../components/link/Link";
import Text from "../../components/text/Text";
import Span from "../../components/span/Span";
import List from "../../components/list/List";
import Container from "../../layouts/container/Container";

import logo from "./../../../assets/images/header/logo.svg"
import location from "./../../../assets/images/svg/location.svg"
import like from "./../../../assets/images/svg/like.svg"
import person from "./../../../assets/images/svg/person.svg"
import basket from "./../../../assets/images/svg/basket.svg"

import s from "./Header.module.scss"

const Header = (props) => {
	return (
		<header style={props.style} className={s.header}>
			<Container
				className="container"
				value={
					<div className={s.wrapper}>
						<nav className={s.menu}>

							<List
								className={s.list}
								valueItem1={
									<Item
										className={s.item}
										value={
											<Link
												className={s.text}
												to={"#"}
												value="Магазины"
											/>
										}
									/>
								}
								valueItem2={
									<Item
										className={s.item}
										value={
											<Link
												className={s.text}
												to={"#"}
												value="Акции"
											/>
										}
									/>
								}
								valueItem3={
									<Item
										className={s.item}
										value={
											<Link
												className={s.text}
												to={"#"}
												value="Доставка и оплата"
											/>
										}
									/>
								}
							/>
						</nav>

						<div className={s.logo}>
							<Img
								src={logo}
								alt={'logo'}
							/>
							<h1 className={`${s.text} ${s.title}`}>DRIVE MOTO</h1>
						</div>


						<div className={s.row}>

							<div className={s.wrapperSvg}>

								<Img
									className={s.location}
									src={location}
									alt={'logo'}
								/>

								<Text
									className={s.text}
									value="Москва,  ул. Науки  25"
								/>
							</div>

							<List
								className={s.wrapperSvg}
								valueItem1={
									<Item
										className={s.icon}
										value={
											<Img
												src={like}
												alt={'like'}
											/>
										}
									/>
								}
								valueItem2={
									<Item
										className={s.icon}
										value={
											<Img
												src={person}
												alt={'person'}
											/>
										}
									/>
								}
								valueItem3={
									<Item
										className={s.icon}
										value={
											<div className={s.counter}>
												<Img
													src={basket}
													alt={'basket'}
												/>
												<Span
													className={s.number}
													value="0"
												/>
											</div>
										}
									/>
								}
							/>
					</div>
				</div>
				}
			/>
		</header>
	);
}

export default Header;
