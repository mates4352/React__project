import "./Card.scss"


const Card = ()=> {
	return (
		<>
		<div className="productCard">
		<img className="imgSale" src="#" alt="#"/>
		<img className="imgHeart" src="#" alt="#"/>
		<img className="imgProduct" src="#" alt="#"/>
		<p className="text">BRP Audio-портативная система</p>
		<p className="Availability">нет в наличии</p>
		<a className="message" href="#"><span>Сообщить о поступлении</span></a>
		<h3 className="Price">45800</h3>
		<button className="btnCart"><img className="imgCart" src="#" alt="#"/></button>
		</div>
		</>	
  );
}

export default Card;