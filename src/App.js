import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Home from './components/Home'
import EnquiryForm from './components/EnquiryForm';
import ProductDetails from './components/ProductDetails'
import './App.css';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/form' element={<EnquiryForm/>}/>
    <Route path='/:id' element={<ProductDetails/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App;
