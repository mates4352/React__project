import s from "./GridSchedule.module.scss"


const GridSchedule = (props) => {
	return (
		<div style={props.style} className={s.wrapper}>
			<div className={s.gridItem} id={s.innerItem101}>пн-сб:</div>
			<div className={s.gridItem} id={s.innerItem102}>08:00-19:00</div>
			<div className={s.gridItem} id={s.innerItem103}>вс:</div>
			<div className={s.gridItem} id={s.innerItem104}>09:00-17:00</div>
		</div>
	);
}

export default GridSchedule;
