import { useState } from "react";
import UserDataForm from "../UserDataForm"

const CaloriesCalPage = () => {

    const [user, setUser] = useState({});
    const [userCalories, setUserCalories] = useState(null);


    const calculateCalories = () => {
        console.log(user);

        //If user is a male use this formula
        if(user.gender === "male") {
            const baseCal = 66.47 + (13.75 * user.weightKG) + (5 * user.heightInCM) - (6.75 * user.age);
            const totalCal = baseCal * user.activityLevel;
            setUserCalories(Math.round(totalCal));

        } else {
            const baseCal = 665.1 + (9.53 * user.weightKG) + (1.85 * user.heightInCM) - (4.66 * user.age);
            const totalCal = baseCal * user.activityLevel;
            setUserCalories(Math.round(totalCal));
        }

    }



    return (
        <div>
            <UserDataForm setUser={setUser} calculateCalories={calculateCalories}/>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <div>User Calories: {userCalories} kcal</div>
        </div>
    )
}

export default CaloriesCalPage;