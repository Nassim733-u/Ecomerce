import TopHeader from './component/header/TopHeader'
import BtnHeader from './component/header/BtnHeader'
import Home from"./page/Home"
import './App.css'
import './index.css'
import './page/Home.css'
import { Routes , Route} from 'react-router-dom'
import ProductDetils from './page/ProductDetils'

function App() {
  return (
    <>
    
    <header>
      <TopHeader />
      <BtnHeader />
    </header>
     

    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/products/:id' element={<ProductDetils/>} /> 
    </Routes>

     
    </>
  )
}




export default App
