import './App.scss';
import PageMain from './components/page/pageMain/PageMain';
import PageCatalog from './components/page/pageCatalog/PageCatalog';
import PageProduct from './components/page/pageProduct/PageProduct';


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
