import useItems from "../hooks/use-items";
import Button from "./Button";
import { useState } from "react";
import Input from "./Input";

function RegisterForm()
{
    const {addUser, items, navigate}  = useItems();
    const [status, setStatus] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();

        let found = false;
        const renderedUser = items.map( (user) => {

            if(user.username ===  event.target[0].value )
            {
                found = true;
            }
            return;

        })

        if(found)
        {
            setStatus("User already exists. Choose a different usename !")
        }

        else
        {
            if(event.target[0].value &&  event.target[1].value &&  event.target[2].value)
            {
                
                navigate("/login");
                addUser(event.target[0].value,event.target[1].value,event.target[2].value)
                // window.location.reload();
            }

            else
            {
                setStatus("Please enter all the credentials.")
            }
        }
    }

    return(
        <div className="border custom shadow-lg shadow-neutral-500 rounded-md  bg-amber-100 w-fit p-10">

            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <label className="text-orange-500 text-2xl mb-2" >Register</label>
                <label  className="text-xs  ml-4  text-red-600"> {status}</label>

                <Input isPassword = {false} classNames = "m-2" >Username</Input>
                <Input isPassword = {false} classNames = "m-2" >Name</Input>
                <Input isPassword  classNames = "m-2 ml-6 mb-4" >Password</Input>

                <Button classNames = "m-2" >Register</Button>
                <span className="text-orange-500 mt-2" >Already a User? <a className = "cursor-pointer hover:text-orange-300 duration-200 underline text-orange-700 " onClick={() => navigate("/login")}>Log-in.</a></span>
            </form>

        </div>

    )
}

export default RegisterForm;