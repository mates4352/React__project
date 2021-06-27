

import s from "./PageCatalog.module.scss"

import BreadCrumbs from "./../../block/breadCrumbs/BreadCrumbs"
import Card from "./../../common/card/Card";
import Options from "../../block/options/Options";
import ProductCategory from "../../block/productCategory/ProductCategory";
import Catalog from "../../block/catalog/Catalog";
import data from "./../../block/breadCrumbs/crumb/data"


const PageCatalog = () => {

console.log(data);
	return (
		<div className={s.pageCatalog}>
			{/* ************ Хлебные крошки *************** */}
			
			<BreadCrumbs 
				Crumb0={data[0]}
				Crumb1={data[1]}
			/>

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