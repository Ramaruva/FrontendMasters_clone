
import './App.css';
import Carousel from './components/carousal/carousal';
import Home from './components/Home/Home';

import Navbars from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbars />
      <Home/>
      <Carousel/>
    </div>
  );
}

export default App;
