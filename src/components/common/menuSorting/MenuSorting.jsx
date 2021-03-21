import RadioBatton from "../radioButton/RadioBatton";

import s from "./MenuSorting.module.scss";
import RangeSlider from "./../../block/rangeSlider/RangeSlider";
import CheckBox from "../checkBox/CheckBox";
import BtnShow from "../btnShow/BtnShow";
import ButtonSorting from "../buttonSorting/ButtonSorting";

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
                <div className={s.sortingBrend}>
                    {props.Checkbox0 &&
                        <CheckBox
                            style={{ flex: "0 1 50%", marginBottom: "20px" }}
                            type={props.Checkbox0.type}
                            id={props.Checkbox0.id}
                            for={props.Checkbox0.for}
                            value={props.Checkbox0.value}
                        />
                    }
                    {props.Checkbox1 &&
                        <CheckBox
                            style={{ flex: "0 1 50%" }}
                            type={props.Checkbox1.type}
                            id={props.Checkbox1.id}
                            for={props.Checkbox1.for}
                            value={props.Checkbox1.value}
                        />
                    }
                    {props.Checkbox2 &&
                        <CheckBox
                            style={{ flex: "0 1 100%", marginBottom: "20px" }}
                            type={props.Checkbox2.type}
                            id={props.Checkbox2.id}
                            for={props.Checkbox2.for}
                            value={props.Checkbox2.value}
                        />
                    }
                    {props.BtnShow0 &&
                        <BtnShow />
                    }
                </div>

                {/* *********** Модель *********** */}
                <div className={s.sortingModel}>
                    {props.Input0 &&
                        <input className={s.sortingModelInput}
                            placeholder="Введите модель"
                            type="text" />
                    }
                    {props.Checkbox3 &&
                        <CheckBox
                            style={{ flex: "0 1 50%", marginBottom: "15px" }}
                            type={props.Checkbox3.type}
                            id={props.Checkbox3.id}
                            for={props.Checkbox3.for}
                            value={props.Checkbox3.value}
                        />
                    }
                    {props.Checkbox4 &&
                        <CheckBox
                            style={{ flex: "0 1 50%" }}
                            type={props.Checkbox4.type}
                            id={props.Checkbox4.id}
                            for={props.Checkbox4.for}
                            value={props.Checkbox4.value}
                        />
                    }
                    {props.Checkbox5 &&
                        <CheckBox
                            style={{ flex: "0 1 50%", marginBottom: "15px" }}
                            type={props.Checkbox5.type}
                            id={props.Checkbox5.id}
                            for={props.Checkbox5.for}
                            value={props.Checkbox5.value}
                        />
                    }
                    {props.Checkbox6 &&
                        <CheckBox
                            style={{ flex: "0 1 50%" }}
                            type={props.Checkbox6.type}
                            id={props.Checkbox6.id}
                            for={props.Checkbox6.for}
                            value={props.Checkbox6.value}
                        />
                    }
                    {props.BtnShow1 &&
                        <BtnShow />
                    }
                </div>
                {/* *********** Акции *********** */}
                {props.ButtonSorting0 &&
                    <ButtonSorting
                        style={{ color: "white", backgroundColor: "#1C62CD" }}
                        value="Sale"
                    />
                }
                {props.ButtonSorting1 &&
                    <ButtonSorting
                        style={{ color: "#C4C4C4", backgroundColor: "#F0F0F4" }}
                        value="New"
                    />
                }
                {props.ButtonSorting2 &&
                    <ButtonSorting
                        style={{ color: "#C4C4C4", backgroundColor: "#F0F0F4" }}
                        value="Hit"
                    />
                }
                {props.ButtonSorting3 &&
                    <ButtonSorting
                        style={{ color: "white", backgroundColor: "#2F3035" }}
                        value="Дилер"
                    />
                }
                {/* *********** Страны *********** */}
                <div className={s.sortingCountru}>
                    {props.Checkbox7 &&
                        <CheckBox
                            style={{ flex: "0 1 50%", marginBottom: "20px" }}
                            type={props.Checkbox7.type}
                            id={props.Checkbox7.id}
                            for={props.Checkbox7.for}
                            value={props.Checkbox7.value}
                        />
                    }
                    {props.Checkbox8 &&
                        <CheckBox
                            style={{ flex: "0 1 50%" }}
                            type={props.Checkbox8.type}
                            id={props.Checkbox8.id}
                            for={props.Checkbox8.for}
                            value={props.Checkbox8.value}
                        />
                    }
                    {props.Checkbox9 &&
                        <CheckBox
                            style={{ flex: "0 1 50%", marginBottom: "20px" }}
                            type={props.Checkbox9.type}
                            id={props.Checkbox9.id}
                            for={props.Checkbox9.for}
                            value={props.Checkbox9.value}
                        />
                    }
                    {props.Checkbox10 &&
                        <CheckBox
                            style={{ flex: "0 1 50%" }}
                            type={props.Checkbox10.type}
                            id={props.Checkbox10.id}
                            for={props.Checkbox10.for}
                            value={props.Checkbox10.value}
                        />
                    }
                    {props.BtnShow2 &&
                        <BtnShow />
                    }
                </div>
            </div>
        </div>
    )
}
export default MenuSorting;