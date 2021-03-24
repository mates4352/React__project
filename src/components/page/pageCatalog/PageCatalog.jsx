

import s from "./PageCatalog.module.scss"

import BreadCrumbs from "./../../block/breadCrumbs/BreadCrumbs"
import Card from "./../../common/card/Card";
import Options from "../../block/options/Options";
import ProductCategory from "../../block/productCategory/ProductCategory";
import Catalog from "../../block/catalog/Catalog";


const PageCatalog = () => {

	return (
		<div className={s.pageCatalog}>
			{/* ************ Хлебные крошки *************** */}
			<BreadCrumbs />

			{/* ************ Верхний блок *************** */}
			<ProductCategory />

			<div className={s.wrapper}>
				{/* ************ Левый блок *************** */}
				<Options />

				{/* ************ Правый блок *************** */}
				<Catalog/>
			</div>





		</div>
	);
}

export default PageCatalog;