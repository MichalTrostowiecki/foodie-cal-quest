import "./index.css"
import { NavLink } from "react-router-dom";

const Home = () => {

    return (
        <div className="homepage h-screen flex justify-end lg:justify-end lg:pe-56 items-center p-10 bg-cover bg-left bg-no-repeat">
            <div className="p-10 md:p-24 bg-white bg-opacity-75 rounded-lg shadow-lg max-w-lg">
                <h1 className="font-sans text-4xl text-gray-800 mb-4">Welcome to Foodie Calories Quest</h1>
                <h2 className="font-sans text-2xl text-gray-600 mb-4">Your Journey to Healthier Eating Starts Here!</h2>
                <p className="font-sans italic text-gray-600 mb-4">Whether you are a seasoned chef or a kitchen novice, our app is designed to inspire, guide, and transform your eating habits, one delicious recipe at a time.</p>
                <NavLink 
                    to='calories-calculation' 
                    className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline transform transition duration-150 ease-in-out"
                    >
                    Begin Your Quest
                </NavLink>
            </div>
        </div>
    );
}

export default Home;



