import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className="app row">
			<div className="col-md-2 d-none d-md-block" style={{padding: "0", margin: "0"}}>
				<Sidebar />
			</div>
			<div className="col-md-10" style={{padding: "0", margin: "0"}}>
				<Header />
			</div>
		</div>
	);
}

export default App;
