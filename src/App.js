import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import LoginButton from './pages/Login';
import Profilepage from './pages/Profilepage';
import Apidocumentation from './pages/Apidocumentation'
function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/apidoc' element={<Apidocumentation/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/profile' element={<Profilepage/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
