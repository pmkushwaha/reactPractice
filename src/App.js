 
import './App.css';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';





function App() {
  return (  
    <>
      
     <BrowserRouter>
      <Routes>
         
          <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="components/About" element={<About/>} />
          <Route path="components/Login"  element={<Login/>} />
          <Route path="components/SignUp"  element={<SignUp/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
     </Route>
      </Routes>
    </BrowserRouter>
     </>
  );
}

export default App;
