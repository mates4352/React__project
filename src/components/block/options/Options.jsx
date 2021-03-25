import s from "./Options.module.scss";

import MenuSorting from "../../common/menuSorting/MenuSorting";
import CheckBox from "../../common/checkBox/CheckBox";
import ButtonSorting from "../../common/buttonSorting/ButtonSorting";
import BtnShow from "../../common/btnShow/BtnShow";

import data from "../../common/menuSorting/data"
import DropdownMenu from "../../common/dropdownMenu/DropdownMenu";


const Options = () => {
	console.log(data);
	return (
		<div className={s.options}>
			<div className={s.titleMenu}>
				<button className={s.btntitleOption}>Параметры</button>
				<button className={s.btntitleBrand}>По марке</button>
			</div>
			<div className={s.menu}>
				<MenuSorting
					type="checkbox"
					id="lebe1"
					for="lebe1"
					labelvalue="Наличие"
					RadioBatton0={data[0]}
					RadioBatton1={data[1]}
				/>
				<MenuSorting
					type="checkbox"
					id="lebe2"
					for="lebe2"
					labelvalue="Новинки"
					RadioBatton2={data[2]}
					RadioBatton3={data[3]}
					RadioBatton4={data[4]}
				/>
				<MenuSorting
					type="checkbox"
					id="lebe3"
					for="lebe3"
					labelvalue="Цена"
					RangeSlider={true}
				/>
				<DropdownMenu
					value="Мощность, л.с."
					valueItem1="90"
					valueItem2="130"
					valueItem3="154"
					valueItem4="230"
					valueItem5="300"
				/>
				<DropdownMenu
					value="Мощность двигателя, л.с."
					valueItem1="55"
					valueItem2="65"
					valueItem3="75"
				/>
				<DropdownMenu
					value="Макс. скорость"
					valueItem1="205"
					valueItem2="210"
					valueItem3="215"
				/>
				<MenuSorting
					type="checkbox"
					id="lebe4"
					for="lebe4"
					labelvalue="Бренд"
					Checkbox0={data[5]}
					Checkbox1={data[6]}
					Checkbox2={data[7]}
					BtnShow0={true}
				/>
				<MenuSorting
					type="checkbox"
					id="lebe5"
					for="lebe5"
					labelvalue="Модель"
					Input0={true}
					Checkbox3={data[8]}
					Checkbox4={data[9]}
					Checkbox5={data[10]}
					Checkbox6={data[11]}
					BtnShow1={true}
				/>
				<MenuSorting
					type="checkbox"
					id="lebe6"
					for="lebe6"
					labelvalue="Акции"
					ButtonSorting0={true}
					ButtonSorting1={true}
					ButtonSorting2={true}
					ButtonSorting3={true}
				/>
				<MenuSorting
					type="checkbox"
					id="lebe7"
					for="lebe7"
					labelvalue="Страны"
					Checkbox7={data[12]}
					Checkbox8={data[13]}
					Checkbox9={data[14]}
					Checkbox10={data[15]}
					BtnShow2={true}
				/>
				<div className={s.leftSectionBtnSelect}>
					<button className={s.btnSelect}>Выбрать</button>
					<button className={s.btnSelectDown}>Дополнительные параметры</button>
					<button className={s.btnSelectReset}>Сбросить фильтр</button>
				</div>
			</div>
		</div>
	);
}
export default Options;



// --------------Для примера что было--------------///
{/* <MenuSorting
				type="checkbox"
				id="lebe7"
				for="lebe7"
				labelvalue="Страны"
				value={
					<div className={s.sortingCountru}>
						<CheckBox
							style={{ flex: "0 1 50%", marginBottom: "20px" }}
							type="checkbox"
							id="checkbox8"
							for="checkbox8"
							value="Россия"
						/>
						<CheckBox
							style={{ flex: "0 1 50%" }}
							type="checkbox"
							id="checkbox9"
							for="checkbox9"
							value="Германия"
						/>
						<CheckBox
							style={{ flex: "0 1 50%", marginBottom: "20px" }}
							type="checkbox"
							id="checkbox10"
							for="checkbox10"
							value="Китай"
						/>
						<CheckBox
							style={{ flex: "0 1 50%" }}
							type="checkbox"
							id="checkbox11"
							for="checkbox11"
							value="США"
						/>
						<BtnShow />
					</div>
				}
			/> */}