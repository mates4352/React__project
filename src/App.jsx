import './App.scss';
import PageMain from './components/main/page/pageMain/PageMain';
import PageCatalog from './components/main/page/pageCatalog/PageCatalog';
import PageProduct from './components/main/page/pageProduct/PageProduct';


function App() {
	return (
		<>
			<PageMain />
			<PageCatalog />
			<PageProduct />
		</>
	);
}

export default App;
