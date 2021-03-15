import s from "./RadioButton.module.scss";

const RadioBatton = (props) => {
    return (
        <div  style={props.style} className={s.radio}>
            <input className={s.radioInput}
                name={props.name}
                type={props.type}
                id={props.id} />
            <label className={s.radioLabel}
                for={props.for}>{props.value}
            </label>
        </div>
    );
}

export default RadioBatton;