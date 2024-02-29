import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeAnalysis from './components/RecipeAnalysis';
import Home from './components/HomePage';
import CaloriesCalPage from './components/CaloriesCalPage';

function App() {
  

	return (
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='recipe-analysis' element={<RecipeAnalysis />} />
					<Route path='calories-calculation' element={<CaloriesCalPage />} />
				</Routes>
				
			</Router>
		)
}

export default App
