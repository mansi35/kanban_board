import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProjectInfo from './components/ProjectInfo';
import View from './components/View';
import ToDo from './components/ToDo';

function App() {
	return (
		<div className="app row">
			<div className="col-md-2 d-none d-md-block" style={{padding: "0", margin: "0"}}>
				<Sidebar />
			</div>
			<div className="col-md-10" style={{padding: "0", margin: "0", backgroundColor: "#ffffff"}}>
				<Header />
				<ProjectInfo />
				<View />
				<div style={{margin: "10px 30px"}}>
				<div className="row">
					<ToDo />
					<ToDo />
					<ToDo />
					<ToDo />
				</div>
				</div>
			</div>
		</div>
	);
}

export default App;
