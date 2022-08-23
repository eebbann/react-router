import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import Navbar from './component/Navbar';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';


function App() {

	const [user, setuser] = useState(null);
 
  return <BrowserRouter>
	 <Navbar/>
	<Routes>
		<Route path='/' element={<Home/>   } />
		<Route path='about' element={ <About/>} />
		<Route path='products' element={ <Products/>}/>
		<Route path='products/:id' element={ <SingleProduct/> }/>
		<Route path='login' element={ <Login setuser={setuser}/> }/>
		<Route path='dashboard' element={ <Dashboard user={user}/> }/>
		<Route path='*' element={ <Error/>}/>

	</Routes>
 <footer><small>our footer - 2022</small></footer>
	</BrowserRouter>;
}

export default App; 
