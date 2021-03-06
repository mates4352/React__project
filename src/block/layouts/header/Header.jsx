import Img from "../../components/img/Img";
import Item from "../../components/item/Item";
import Link from "../../components/link/Link";

import logo from "./../../../assets/images/header/logo.svg"

import s from "./Header.module.scss"


const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.wrapper}>
				<nav className={s.menu}>
					<ul className={s.list}>

						<Item
							className={s.item}
							value={
								<Link
									className={s.link}
									to={"#"}
									value="Магазины"
								/>
							}
						>
						
						</Item>

						<Item
							className={s.item}
							value={
								<Link
									className={s.link}
									to={"#"}
									value="Акции"
								/>
							}
						>
						</Item>

						<Item
							className={s.item}
							value={
								<Link
									className={s.link}
									to={"#"}
									value="Доставка и оплата"
								/>
							}
						>
						</Item>

					</ul>
				</nav>

				<Img
					className={s.logo}
					srs={logo}
					alt={'logo'}
				/>

			</div> 
		</header> /* header */
  );
}

export default Header;
