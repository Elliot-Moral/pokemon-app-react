import './App.css'
import { Route, Routes } from 'react-router-dom'

//## pages
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokeInfoPage from './pages/PokeInfoPage'
import ProtectedRutes from './pages/ProtectedRutes'


function App() {

  return (
    <Routes>
      <Route path = '/' element={<HomePage/>} />

      <Route element={<ProtectedRutes/>}>  
        <Route path = '/pokedex' element={<PokedexPage/>} />
        {/* OJO los dos :name significa que es parametro */}
        <Route path = '/pokemon/:name' element={<PokeInfoPage/>} />
      </Route>

    </Routes>
  )
}

export default App