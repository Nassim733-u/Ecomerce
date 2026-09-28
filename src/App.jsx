import TopHeader from './component/header/TopHeader'
import BtnHeader from './component/header/BtnHeader'
import Home from"./page/Home"
import './App.css'
import './index.css'
import './page/Home.css'

function App() {
  return (
    <>
    
    <header>
      <TopHeader />
      <BtnHeader />
    </header>
     

     <Home />
    </>
  )
}

export default App
