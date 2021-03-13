import './App.scss';
import PageMain from './components/page/pageMain/PageMain';
import PageCatalog from './components/page/pageCatalog/PageCatalog';
import PageProduct from './components/page/pageProduct/PageProduct';
import Header from './components/block/header/Header';
import Footer from './components/block/footer/Footer';


function App() {
	return (
		<>
			<div className="container">
				<Header style={{ padding: "55px 0 45px 0" }} />

				<PageMain />
				{/* <PageCatalog />
				<PageProduct /> */}
			</div>
			{/* <Footer /> */}
		</>
	);
}

export default App;
