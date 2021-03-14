import s from "./CheckBox.module.scss";

const CheckBox= (props) => {
    return (
        <div style={props.style} className={s.checkbox}>
            <input className={s.checkboxInput}
                type={props.type}
                id={props.id}/>
            < label className={s.checkboxLable}
                for={props.for}>{props.value}
            </label>


        </div>
    );
}

export default CheckBox;