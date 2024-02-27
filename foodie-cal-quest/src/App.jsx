import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeAnalysis from './components/RecipeAnalysis';
import Home from './components/HomePage';

function App() {
  

	return (
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='recipe-analysis' element={<RecipeAnalysis />} />
				</Routes>
				
			</Router>
		)
}

export default App
