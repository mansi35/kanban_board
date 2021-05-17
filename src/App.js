import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className="app">
			<div className="app__body">
				<Sidebar />
				<Header />
			</div> 
		</div>
	);
}

export default App;
