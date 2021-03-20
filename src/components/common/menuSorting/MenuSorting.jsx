import RadioBatton from "../radioButton/RadioBatton";

import s from "./MenuSorting.module.scss";
import RangeSlider from "./../../block/rangeSlider/RangeSlider";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import CheckBox from "../checkBox/CheckBox";

const MenuSorting = (props) => {
    return (
        <div className={s.menu}>
            <input className={s.menuInput} type={props.type} id={props.id} />
            <label className={s.menuLabel} for={props.for}>{props.labelvalue}</label>

            <div className={s.menuContent}>
                {/* *********** Наличи *********** */}
                {props.RadioBatton0 &&
                    <RadioBatton style={{ padding: "0 55px 0 0" }}
                        name={props.RadioBatton0.name}
                        type={props.RadioBatton0.type}
                        id={props.RadioBatton0.id}
                        for={props.RadioBatton0.for}
                        value={props.RadioBatton0.value}
                    />
                }
                {props.RadioBatton1 &&
                    <RadioBatton
                        name={props.RadioBatton1.name}
                        type={props.RadioBatton1.type}
                        id={props.RadioBatton1.id}
                        for={props.RadioBatton1.for}
                        value={props.RadioBatton1.value}
                    />
                }

                {/* *********** Новинки *********** */}
                {props.RadioBatton2 &&
                    <RadioBatton style={{ padding: "0 20px 0 0" }}
                        name={props.RadioBatton2.name}
                        type={props.RadioBatton2.type}
                        id={props.RadioBatton2.id}
                        for={props.RadioBatton2.for}
                        value={props.RadioBatton2.value}
                    />
                }
                {props.RadioBatton3 &&
                    <RadioBatton style={{ padding: "0 20px 0 0" }}
                        name={props.RadioBatton3.name}
                        type={props.RadioBatton3.type}
                        id={props.RadioBatton3.id}
                        for={props.RadioBatton3.for}
                        value={props.RadioBatton3.value}
                    />
                }
                {props.RadioBatton4 &&
                    <RadioBatton
                        name={props.RadioBatton4.name}
                        type={props.RadioBatton4.type}
                        id={props.RadioBatton4.id}
                        for={props.RadioBatton4.for}
                        value={props.RadioBatton4.value}
                    />
                }

                {/* *********** Цена *********** */}
                {props.RangeSlider &&
                    <>
                        <div className={s.price}>
                            <RangeSlider />
                            <div className={s.priceFromTo}>
                                <div className={s.priceText}>
                                    <span className={s.priceSpan}>от</span>
                                    <input className={s.priceInput} name="price" type="text" min="0" max="1 000 000" value="100 000" />
                                </div>
                                <div className={s.priceText}>
                                    <span className={s.priceSpan}>до</span>
                                    <input className={s.priceInput} name="price" type="text" min="0" max="1 000 000" value="500 000" />
                                </div>
                            </div>
                        </div>
                    </>
                }

                {/* *********** Бренд *********** */}
                {props.Checkbox0 &&
                    <CheckBox
                    // style={props.Checkbox0.style}
                    type={props.Checkbox0.type}
                    id={props.Checkbox0.id}
                    for={props.Checkbox0.for}
                    value={props.Checkbox0.value}
                    />
                }
                {props.Checkbox1 &&
                    <CheckBox
                    type={props.Checkbox1.type}
                    id={props.Checkbox1.id}
                    for={props.Checkbox1.for}
                    value={props.Checkbox1.value}
                    />
                }
                {props.Checkbox2 &&
                    <CheckBox
                    type={props.Checkbox2.type}
                    id={props.Checkbox2.id}
                    for={props.Checkbox2.for}
                    value={props.Checkbox2.value}
                    />
                }








            </div>
        </div>
    )
}
export default MenuSorting;