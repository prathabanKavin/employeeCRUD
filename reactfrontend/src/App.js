import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
          <div className='container'>
              <Routes>
                <Route exact path="/" element={<ListEmployeeComponent/>}></Route>
                <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
                <Route path="/add-employee" element={<AddEmployeeComponent/>}></Route>
              </Routes>    
          </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
