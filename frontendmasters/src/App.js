import "./App.css";
import { AppContextProvider } from './Context/AppContxetProvider';
import { Routes } from "./routes/Routes";

function App() {
	return (
		<div className="App">
		<AppContextProvider>
			<Routes />
		</AppContextProvider>
		</div>
	);
}

export default App;
