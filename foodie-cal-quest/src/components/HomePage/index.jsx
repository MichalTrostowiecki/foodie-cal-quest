
import Hero from '../../utils/images/foodie_calorie_quest.png'
const Home = () => {

    const heroStyle = {
            backgroundImage: `url(${Hero})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            height: '80vh', 
    }
    return (
        <div className='bg-center' style={heroStyle}>
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 font-concert dark:text-white md:text-5xl lg:text-6xl text-center">Nourishing <span className="text-transparent underline underline-offset-3 decoration-8 decoration-black dark:decoration-blue-600 bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Your Health</span> One Recipe at a time.</h1>
        </div>
    )
}

export default Home;



