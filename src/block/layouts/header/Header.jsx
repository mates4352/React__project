import Img from "../../components/img/Img";
import Link from "../../components/link/Link";

import s from "./Header.module.scss"

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.wrapper}>
				<nav className={s.menu}>
					<ul className={s.list}>

						<li className={s.item}>
							<Link
								className={s.link}
								to={"#"}
								value="Магазины"
							>
							</Link>
						</li>

						<li className={s.item}>
						<Link
								className={s.link}
								to={"#"}
								value="Акции"
							>
						</Link>
						</li>

						<li className={s.item}>
						<Link
							className={s.link}
							to={"#"}
							value="Доставка и оплата"
					>
						</Link>
						</li>

					</ul>
				</nav>

				<div className={s.logo}>
					<Img className={s.img} src={'#'} alt={'logo'}/>
					<h1 className={s.title}>DRIVE MOTO</h1>
				</div>

			</div>  
		</header> /* header */ 
  );
}

export default Header;
