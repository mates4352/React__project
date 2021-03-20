import s from "./CategoriesCards.module.scss"

import CardTransport from "../../common/cardTransport/CardTransport";

export const CategoriesCards = (props) => {
	console.log(props);
	return (
		<section className={s.CategoriesCards}>
			{props.data0 &&
				< CardTransport
					title={props.data0.title}
					img={props.data0.img}
					href={props.data0.href}
					alt={props.data0.alt}
				/>}
			
			{props.data1 &&
				<CardTransport
					title={props.data1.title}
					img={props.data1.img}
					href={props.data1.href}
					alt={props.data1.alt}
				/>}
			
			{props.data2 &&
				<CardTransport
					title={props.data2.title}
					img={props.data2.img}
					href={props.data2.href}
					alt={props.data2.alt}
				/>}
			
			{props.data3 &&
				<CardTransport
					title={props.data3.title}
					img={props.data3.img}
					href={props.data3.href}
					alt={props.data3.alt}
				/>}
			
			{props.data4 &&
				< CardTransport
					title={props.data4.title}
					img={props.data4.img}
					href={props.data4.href}
					alt={props.data4.alt}
				/>}

			{props.data5 &&
				<CardTransport
					title={props.data5.title}
					img={props.data5.img}
					href={props.data5.href}
					alt={props.data5.alt}
				/>}

			{props.data6 &&
				<CardTransport
					title={props.data6.title}
					img={props.data6.img}
					href={props.data6.href}
					alt={props.data6.alt}
				/>}

		</section>
	);
}

export default CategoriesCards