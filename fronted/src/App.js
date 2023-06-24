import{BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Create from './pages/create';
import Login from './components/Login';
import Signup from './components/Signup';
import Application from './components/Application';
import Applicants from './components/Applicants';




function App() {
 
  return (
    <BrowserRouter>
    <Navbar/>
     <div className="App">
      <Routes>
        <Route path='/' element={<Home/> }></Route>
        <Route path='/api/jobs/:_id' element={<Details/>}></Route>
        <Route path='/create' element={ <Create/> }></Route>
        <Route path='/login' element={ <Login/>}></Route>
        <Route path='/signup' element={ <Signup/>}></Route>
        <Route path='/application' element={ <Application/>}></Route>
        <Route path='/applicants' element={ <Applicants/>}></Route>
      </Routes>
   
     </div>
    </BrowserRouter>
   
  );
}

export default App;
