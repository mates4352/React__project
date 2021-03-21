import s from "./CategoriesCards.module.scss"

import CardTransport from "../../common/cardTransport/CardTransport";

export const CategoriesCards = (props) => {
	// window.addEventListener("resize", function () {
	// 	adaptive_function()
	// })

	// function size(w) {
	// 	return w <= "1200"
	// }
	
	// function adaptive_function() {
	// 	let w = window.innerWidth
	// 	size(w)
	// }

	// adaptive_function()

	
	return (
		<section className={s.CategoriesCards}>
			{props.card0 &&
				< CardTransport
					title={props.card0.title}
					img={props.card0.img}
					href={props.card0.href}
					alt={props.card0.alt}
				/>}
			
			{props.card1 &&
				<CardTransport
					title={props.card1.title}
					img={props.card1.img}
					href={props.card1.href}
					alt={props.card1.alt}
				/>}
			
			{props.card2 &&
				<CardTransport
					title={props.card2.title}
					img={props.card2.img}
					href={props.card2.href}
					alt={props.card2.alt}
				/>}
			
			{props.card3 &&
				<CardTransport
					title={props.card3.title}
					img={props.card3.img}
					href={props.card3.href}
					alt={props.card3.alt}
				/>}
			
			{props.card4 &&
				< CardTransport
					title={props.card4.title}
					img={props.card4.img}
					href={props.card4.href}
					alt={props.card4.alt}
				/>}

			{props.card5 &&
				<CardTransport
					title={props.card5.title}
					img={props.card5.img}
					href={props.card5.href}
					alt={props.card5.alt}
				/>}

		</section>
	);
}

export default CategoriesCards