import Header from "./../../block/header/Header"
import Footer from "./../../block/footer/Footer"
import Navigation from "./../../block/navigation/Navigation"

import s from "./PageCatalog.module.scss"

import BreadCrumbs from "./../../block/breadCrumbs/BreadCrumbs"
import Sorting from "./../../common/sorting/Sorting"

const PageCatalog = () => {
	return (
		<>
			<div className="container">
				<Header style={{ padding: "55px 0 45px 0" }} />
				<Navigation />
				<BreadCrumbs />

				<h2 className={s.titleH2}>
					Гидроциклы
				</h2>

				<ul className={s.sortingLef}>
					<li>
						<Sorting
							href="#"
							value="Полноприводные"
						/>
					</li>

					<li>
						<Sorting
							href="#"
							value="от 5000"
						/>
					</li>

					<li>
						<Sorting
							href="#"
							value="BRP"
						/>
					</li>

					<li>
						<Sorting
							href="#"
							value="еще"
						/>
					</li>

				</ul>
				<select>
					<option >По полулярности</option>
					<option >По цене (min)</option>
					<option >По цене (max)</option>
					<option >По количеству отзывам</option>
				</select>
			</div>
			< Footer />
		</>
	);
}

export default PageCatalog;