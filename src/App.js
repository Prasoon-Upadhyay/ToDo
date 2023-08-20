import Calendar from "./components/Calendar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"
import Route from "./components/Route";
import ItemCreate from "./components/ItemCreate";
import useItems from "./hooks/use-items";
import { useEffect } from "react";

function App()
{
    const {fetchItems, items, currentUser} = useItems()
    console.log(items);
    useEffect( () => {
        fetchItems();
    }, [])

    return(

        <div>
            <Route path = "/login">
                <LoginPage />
            </Route>
            
            <Route path = "/register">
                <RegisterPage />
            </Route>
          
            <Route path ="/todo">
                <div className="flex flex-col items-start p-6">
                    <div className="flex flex-col items-center mt-10 ml-80 pb-0">
                        <h1 className=" raleway text-6xl inline-block text-orange-500">Welcome, {currentUser.name}</h1>
                    </div>
                    <div className="flex m-20 mt-2 flex-row justify-center">

                            <Calendar toDo = {currentUser.todo} />
                            <ItemCreate />
                    </div>

                </div>

                
            </Route>
        </div>
    )   
}

export default App;