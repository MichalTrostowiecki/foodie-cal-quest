import { useContext, useState } from "react";
import UserDataForm from "../UserDataForm"
import { RecipesContext } from "../../context/RecipesContext";
import CalorieResults from "../CalorieResults"


const CaloriesCalPage = () => {

    const [user, setUser] = useState({});
    const { userCalories, setUserCalories } = useContext(RecipesContext);


    // Calculate calories based on user activity level
    const calculateCalories = (userData) => {
        let totalCal = 0;

        // If user is a male use this formula
        if(userData.gender === "male") {
            // Base calories calculated
            const baseCal = 66.47 + (13.75 * userData.weightKG) + (5 * userData.heightInCM) - (6.75 * userData.age);
            // Base calories increased by the activityLevel of a user
            totalCal = baseCal * userData.activityLevel;
        } else {
            const baseCal = 665.1 + (9.53 * userData.weightKG) + (1.85 * userData.heightInCM) - (4.66 * userData.age);
            totalCal = baseCal * userData.activityLevel;
        }

        return Math.round(totalCal);
    }

    // TotalCal is passed from handleSubmit in UserDataForm Component
    const calculateMacro = (totalCal, userData) => {
        const activityLevel = parseFloat(userData.activityLevel);
        let protein = 0;
    
        if (activityLevel <= 1.8) {
            // Calculate Protein depending on activity level 0.9g/kg for <=1.8 and 1.4g/kg for >1.8
            protein = Math.round(0.9 * userData.weightKG);
        } else if (activityLevel > 1.8) {
            protein = Math.round(1.4 * userData.weightKG);
        }
        
        const proteinCalories = Math.round(protein * 4);
    
        // Calculate Carbs
        const carbsCalories = Math.round((totalCal - proteinCalories) * 0.55);
        const carbs = Math.round(carbsCalories / 4);
    
        // Calculate Fats
        const fatsCalories = Math.round(totalCal - (proteinCalories + carbsCalories));
        const fats = Math.round(fatsCalories / 9);
    
        setUserCalories({
            baseCalories: totalCal,
            protein: { grams: protein, calories: proteinCalories },
            carbs: { grams: carbs, calories: carbsCalories },
            fats: { grams: fats, calories: fatsCalories },
        });
    };
    

    return (
        <div>
            <CalorieResults userCalories={userCalories} user={user}/>
            <UserDataForm 
                    setUser={setUser}
                    calculateCalories={calculateCalories}
                    setUserCalories={setUserCalories}
                    calculateMacro={calculateMacro}                
                />
        </div>
    )
}

export default CaloriesCalPage;