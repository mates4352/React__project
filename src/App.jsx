import './App.scss';
import PageMain from './page/pageMain/PageMain';
import PageCatalog from './page/pageCatalog/PageCatalog';
import PageProduct from './page/pageProduct/PageProduct';


function App() {
	return (
		<div className="container">
			<PageMain/>
			<PageCatalog/>
			<PageProduct/>
		</div>
	);
}

export default App;
