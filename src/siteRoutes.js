import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home'
import CorPrimaria from './pages/corPrimaria'
import Frequencia from './pages/frequencia'
import Ingressos from './pages/ingressos'
import MaiorNumero from './pages/maiorNumero'

export default function SitesRoutes(){

    return(
        <BrowserRouter>
        <Routes>
         <Route path='/' element  ={<Home/>} />
         <Route path='/corPrimaria' element  ={<CorPrimaria/>} />
         <Route path='/frequencia' element  ={<Frequencia/>} />
         <Route path='/ingresso' element  ={<Ingressos/>} />
         <Route path='/maiorNumero' element  ={<MaiorNumero/>} />



        </Routes>
        
        </BrowserRouter>
    )
}