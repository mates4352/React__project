import RadioBatton from "./../../common/radioButton/RadioBatton";

import s from "./MenuSorting.module.scss";


const MenuSorting = (props) => {
    return (


        <div className={s.menu}>
            <input className={s.menuInput} type={props.type} id={props.id} />
            <label className={s.menuLabel} for={props.for}>{props.labelvalue}</label> 

            <div className={s.menuContent}>
                {props.value}
            </div>

        </div>
    )
}
export default MenuSorting;