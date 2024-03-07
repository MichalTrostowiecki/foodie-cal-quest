import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeAnalysis from './components/recipeAnalysis'
import Home from './components/HomePage';
import CaloriesCalPage from './components/CaloriesCalPage';
import RecipeSearch from './components/RecipeSearch';
import Navbar from './components/Navbar';
import RecipeDetails from './components/RecipeDetails';
import { RecipesProvider } from './context/RecipesContext'
import Footer from './components/Footer';

function App() {
	return (
	<Router>
	<RecipesProvider>
		<div className='sticky top-0 z-10'>
		<Navbar />
		</div>
		<div className='flex flex-col h-full mb-24'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='recipe-analysis' element={<RecipeAnalysis />} />
				<Route path='calories-calculation' element={<CaloriesCalPage />} />
				<Route path='recipe-search' element={<RecipeSearch />} />
				{/* Dynamic route for a recipe details */}
				<Route path='recipe-search/:mealType/:recipeName' element={<RecipeDetails />} />
			</Routes>
		</div>
		<div className="fixed inset-x-0 bottom-0">
			<Footer />
		</div>
	</RecipesProvider>
	</Router>
	)
  }

export default App
