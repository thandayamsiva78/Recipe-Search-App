
import './App.css'
import Layout from './Components/Layout'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import RecipeDetails from './Components/RecipeDetails'
import FavoritesComponents from './Components/FavoritesComponent'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path="/RecipeDetails" element={<RecipeDetails/> }/>
          <Route path="/FavoritesComponent" element={ <FavoritesComponents/>}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
