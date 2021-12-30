import './App.css';
import Login from './component/Login';
import Registration from './component/Registration';
import Home from './component/Home';
import Search from './component/Search';
import Delete from './component/Delete';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={
            <Login/>
        }
        />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/home:name' element={<Home/>} />
        <Route path='/search' element={<Search/>}/>
        <Route path='/delete:name' element={<Delete/>}/>
      </Routes>
      </div>
    </Router>
  );
}
export default App;
