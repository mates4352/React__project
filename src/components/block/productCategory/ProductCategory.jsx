import s from "./ProductCategory.module.scss";

import iconGrid from "./../../../assets/images/PageCatalog/iconGrid.png";
import iconList from "./../../../assets/images/PageCatalog/iconList.png";

const ProductCategory = () => {
    return (
        <>
            <h2 className={s.title}>Гидроциклы</h2>

            <div className={s.productCategory}>
                <ul className={s.productCategoryLef}>
                    <li slassName={s.productCategoryItem}>
                        <a className={s.productCategoryLink} href="#">Полноприводны</a>
                    </li>
                    <li slassName={s.productCategoryItem}>
                        <a className={s.productCategoryLink} href="#">500</a>
                    </li>
                    <li slassName={s.productCategoryItem}>
                        <a className={s.productCategoryLink} href="#">BR</a>
                    </li>
                    <li slassName={s.productCategoryItem}>
                        <a className={s.productCategoryLink} href="#">ещ</a>
                    </li>
                </ul>

                <div className={s.productCategoryRight}>
                    <div className={s.productCategorySelect}>
                        <select >
                            <option value="По полулярности">По полулярности</option>
                            <option value="По цене (min)">По цене (min)</option>
                            <option value="По цене (max)">По цене (max)</option>
                            <option value="По количеству отзывам">По количеству отзывам</option>
                        </select>
                    </div>

                    <button className={s.btnProductCategory}>
                        <img className={s.btnIcon}
                            src={iconGrid}
                            alt={"icon"} />
                    </button>
                    <button className={s.btnProductCategory}>
                        <img className={s.btnIcon}
                            src={iconList}
                            alt={"icon"} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductCategory;
