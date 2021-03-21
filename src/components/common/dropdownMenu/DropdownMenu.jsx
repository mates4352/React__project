import s from "./DropdownMenu.module.scss"


const DropdownMenu = (props) => {
    return (
        <div className={s.dropdownSelect}>
            <span className={s.dropdownText}>{props.value}</span>
            <div className={s.dropdown}>
                <select className={s.dropdownItem}>
                    <option>{props.valueItem1}</option>
                    <option>{props.valueItem2}</option>
                    <option>{props.valueItem3}</option>
                    <option>{props.valueItem4}</option>
                    <option>{props.valueItem5}</option>
                </select>
            </div>
        </div>
    );
}

export default DropdownMenu;
