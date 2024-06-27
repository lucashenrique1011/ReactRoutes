import { Outlet } from 'react-router-dom'
import './app.css'
import Navbar from './navbar'

function App() {


  return (
    <>
    <div className='topo'><h1>roteamento</h1></div>
    <div className='mudanca'>
       <Outlet/>
    </div>
     <div className='nav'>
      <Navbar/>
     </div>
     
    </>
  )
}

export default App
