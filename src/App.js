import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './components/MainPage';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"

function App() {
  return (
   <div>
    <Router>
      <Routes basename="">
        <Route exact path="/" element={<MainPage/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
