import logo from "./../../../assets/images/header/logo.svg"
import location from "./../../../assets/images/svg/location.svg"
import like from "./../../../assets/images/svg/like.svg"
import person from "./../../../assets/images/svg/person.svg"
import basket from "./../../../assets/images/svg/basket.svg"
import Navigation from "../navigation/Navigation"
import { data } from "./../navigation/data"
import { NavLink } from "react-router-dom"
import s from "./Header.module.scss"



const Header = (props) => {

	return (
		<>
			<header className={s.header} style={props.style}>
				<div className={s.header__wrapper}>
					<nav className={s.menu}>
						<ul className={s.list}>

							<li className={s.item}>
								<NavLink
									className={s.text}
									to={"/PageMain"}
								>
									Магазины
								</NavLink>
							</li>

							<li className={s.item}>
								<NavLink
									className={s.text}
									to={"#"}
								>
									Акции
								</NavLink>
							</li>

							<li className={s.item}>
								<NavLink
									className={s.text}
									to={"#"}
								>
									Доставка и оплата
								</NavLink>
							</li>

						</ul>
					</nav>

					<div className={s.logo}>
						<img
							src={logo}
							alt={'logo'}
						/>
						<h1 className={`${s.text} ${s.title}`}>DRIVE MOTO</h1>
					</div>

					<div className={s.row}>
						<div className={s.wrapperBlock}>
							<img
								className={s.location}
								src={location}
								alt={'logo'}
							/>

							<p className={s.text}>
								Москва,  ул. Науки  25
						</p>

						</div>

						<div className={s.wrapperBlock}>
							<img
								className={s.icon}
								src={like}
								alt={'like'}
							/>
							<img
								className={s.icon}
								src={person}
								alt={'person'}
							/>
							<div className={s.counter}>
								<img
									className={s.icon}
									src={basket}
									alt={'basket'}
								/>
								<span className={s.number}>
									0
							</span>
							</div>
						</div>

					</div>
				</div>
			</header>
			<Navigation
				link0={data[0]}
				link1={data[1]}
				link2={data[2]}
				link3={data[3]}
				link4={data[4]}
				link5={data[5]}
				link6={data[6]}
			/>
		</>
	);
}

export default Header;
