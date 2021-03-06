import './App.scss';
import PageMain from './page/pageMain/PageMain';
import PageCatalog from './page/pageCatalog/PageCatalog';
import PageProduct from './page/pageProduct/PageProduct';

const App = () => {
	return (
		<>
			<PageMain/>
			<PageCatalog/>
			<PageProduct/>
		</>
		);
}

export default App;
