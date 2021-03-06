import Img from "../../components/img/Img";
import Item from "../../components/item/Item";
import Link from "../../components/link/Link";

import s from "./Header.module.scss"

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.wrapper}>
				<nav className={s.menu}>
					<ul className={s.list}>

						<Item className={s.item}>
							<Link
								className={s.link}
								to={"#"}
								value="Магазины"
							>
							</Link>
						</Item>

						<Item className={s.item}>
							<Link
									className={s.link}
									to={"#"}
									value="Акции"
								>
							</Link>
						</Item>

						<Item className={s.item}>
							<Link
								className={s.link}
								to={"#"}
								value="Доставка и оплата"
							>
							</Link>
						</Item>

					</ul>
				</nav>

				<div className={s.logo}>
					<Img className={s.img} src={'#'} alt={'logo'}/>
					<h1 className={s.title}>DRIVE MOTO</h1>
				</div>

				<Img src={'#'} alt={'logo'}></Img>

			</div>  /* wrapper */
		</header> /* header */
  );
}

export default Header;
