import { BrowserRouter } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
    <BrowserRouter> 
      <LandingPage/>
    </BrowserRouter>
    </div>
  );
}

export default App;
