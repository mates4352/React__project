import s from './mobileMenu.module.scss'
import { NavLink } from 'react-router-dom';

const MobileMenu = ({active, setActive}) => {
	return (
		<nav className={active ? s.active  : s.menu}>
			<ul className={s.list}>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Войти
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Регистрация
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Избранное
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Корзина
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Магазины
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Акции
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Доставка и оплата
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Квадроциклы
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Катера
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Гидроциклы
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Лодки
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Вездеходы
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Снегоходы
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Двигатели
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Запчасти
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default MobileMenu;