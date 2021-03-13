import s from "./PageCatalog.module.scss"

import BreadCrumbs from "./../../block/breadCrumbs/BreadCrumbs"

const PageCatalog = () => {
	return (
		<>
			<BreadCrumbs />


			<h2 className={s.titleH2}>Гидроциклы</h2>

			<div className={s.productCategory}>
				<ul className={s.productCategoryLef}>
					<li slassName={s.productCategoryItem}>
						<a className={s.productCategoryLink}>
							Полноприводные
						</a>
					</li>
					<li slassName={s.productCategoryItem}>
						<a className={s.productCategoryLink}>
							5000
						</a>
					</li>
					<li slassName={s.productCategoryItem}>
						<a className={s.productCategoryLink}>
							BRP
						</a>
					</li>
					<li slassName={s.productCategoryItem}>
						<a className={s.productCategoryLink}>
							еще
						</a>
					</li>
				</ul>

				<div className={s.productCategorySelect}>
					<select>
						<option value="По полулярности">По полулярности</option>
						<option value="По цене (min)">По цене (min)</option>
						<option value="По цене (max)">По цене (max)</option>
						<option value="По количеству отзывам">По количеству отзывам</option>
					</select>
				</div>



			</div>



		</>
	);
}

export default PageCatalog;