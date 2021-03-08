import logo from "./../../../assets/images/header/logo.svg"
import location from "./../../../assets/images/svg/location.svg"
import like from "./../../../assets/images/svg/like.svg"
import person from "./../../../assets/images/svg/person.svg"
import basket from "./../../../assets/images/svg/basket.svg"

import Img from "./../../common/img/Img";
import Span from "./../../common/span/Span";
import P from "./../../common/p/P";
import Ul from "./../../common/ul/Ul";
import Li from "./../../common/li/Li";
import Link from "./../../common/link/Link";
import Container from "./../../common/container/Container";


import s from "./Header.module.scss"

const Header = (props) => {
	return (
		<header style={props.style} className={s.header}>
			<Container
				value={
					<div className={s.top}>
						<nav className={s.menu}>
							<Ul
								className={s.list}
								valueItem1={
									<Li
										className={s.item}
										value={
											<Link
												className={s.text}
												href={"#"}
												value="Магазины"
											/>
										}
									/>
								}
								valueItem2={
									<Li
										className={s.item}
										value={
											<Link
												className={s.text}
												href={"#"}
												value="Акции"
											/>
										}
									/>
								}
								valueItem3={
									<Li
										className={s.item}
										value={
											<Link
												className={s.text}
												href={"#"}
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

								<P
									className={s.text}
									value="Москва,  ул. Науки  25"
								/>
							</div>

							<Ul
								className={s.wrapperSvg}
								valueItem1={
									<Li
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
									<Li
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
									<Li
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
