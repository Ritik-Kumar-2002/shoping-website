import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import SmartLogo from './Components/Images/SmartLogo.png';
import CustomRoute from './Components/CustomRoute/CustomRoute';
import Authenticate from './Components/Authentication/Authenticate';

function App() {
  return (
    <div className="App">
        <Authenticate  />
        <Router>
          <CustomRoute />
        </Router>
    </div>
  );
}

export default App;
