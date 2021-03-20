import img1 from "./../../../assets/images/CategoriesCards/img1.png"
import img2 from "./../../../assets/images/CategoriesCards/img2.png"
import img3 from "./../../../assets/images/CategoriesCards/img3.png"
import img4 from "./../../../assets/images/CategoriesCards/img4.png"
import img5 from "./../../../assets/images/CategoriesCards/img5.png"
import img6 from "./../../../assets/images/CategoriesCards/img6.png"

function Data(title, image, alt, href) {
	this.title = title 
	this.img = image
	this.alt = alt
	this.href = href
}

export const data = [
	new Data("Квадроциклы", img1,"Квадроциклы",'/1'),
	new Data("Гидроциклы",  img2,"Гидроциклы",'/2'),
	new Data("Катера",      img3,"Катера",'/3'),
	new Data("Снегоходы",   img4,"Снегоходы",'/4'),
	new Data("Вездеходы",   img5,"Вездеходы",'/5'),
	new Data("Двигатели",   img6, "Двигатели", '/6'),
	new Data("Вездеходы", img6, "Вездеходы", '/6'),
]





