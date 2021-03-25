import s from "./DropdownMenu.module.scss"


const DropdownMenu = (props) => {
    return (
        <div className={s.dropdownSelect}>
            <span className={s.dropdownText}>{props.value}</span>
            <div className={s.dropdown}>
                <select className={s.dropdownItem}>
                    {props.valueItem1 &&
                        <option>{props.valueItem1}</option>
                    }
                    {props.valueItem2 &&
                        <option>{props.valueItem2}</option>
                    }
                    {props.valueItem3 &&
                        <option>{props.valueItem3}</option>
                    }
                    {props.valueItem4 &&
                        <option>{props.valueItem4}</option>
                    }
                    {props.valueItem5 &&
                        <option>{props.valueItem5}</option>
                    }
                </select>
            </div>
        </div>
    );
}

export default DropdownMenu;
