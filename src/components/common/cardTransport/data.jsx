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
	new Data("Квадроциклы", img1,"Квадроциклы" ,'/PageCatalog'),
	new Data("Гидроциклы",  img2,"Гидроциклы"  ,'/PageCatalog'),
	new Data("Катера",      img3,"Катера"      ,'/PageCatalog'),
	new Data("Снегоходы",   img4,"Снегоходы"   ,'/PageCatalog'),
	new Data("Вездеходы",   img5,"Вездеходы"   ,'/PageCatalog'),
	new Data("Двигатели",   img6,"Двигатели"   ,'/PageCatalog'),
]





