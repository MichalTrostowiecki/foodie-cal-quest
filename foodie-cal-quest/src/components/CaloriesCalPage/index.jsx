import { useState } from "react";
import UserDataForm from "../UserDataForm"

const CaloriesCalPage = () => {

    const [user, setUser] = useState({});


    const calculateCalories = () => {
        
    }



    return (
        <div>
            <UserDataForm setUser={setUser}/>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}

export default CaloriesCalPage;