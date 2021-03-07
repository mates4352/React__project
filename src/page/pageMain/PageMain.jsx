import Categories from "../../block/layouts/categories/Categories"
import Header from "../../block/layouts/header/Header"

 const PageMain = ()=> {
	 return (
		<div className="container">
			 <Header style={{ padding: "55px 0 45px 0" }}></Header>
			 <Categories></Categories>
		</div>
  );
}

export default PageMain;