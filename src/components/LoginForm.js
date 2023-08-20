import Button from "./Button";
import Input from "./Input";
import { MdOutlineVisibility, MdVisibilityOff } from "react-icons/md";
import useItems from "../hooks/use-items";
import { useState } from "react";

function  LoginForm()
{
    const {items,navigate, setCurrentUser}  = useItems();
    const [status, setStatus] = useState("");
    const [inputType, setInputType] = useState("password");

    console.log(items);
    
    const handleClick = () => {

        if(inputType === "password")
        {
            icon = <MdOutlineVisibility onClick={handleClick} />
            setInputType("text");
        }

        else
        {
            icon = <MdVisibilityOff onClick={handleClick} />
            setInputType("password");
        }
    }
    
    let icon = <MdOutlineVisibility onClick={handleClick} />;
    const handleSubmit = (event) => {
        event.preventDefault();

        if(items.length === 0)
        {
            setStatus("No User found. Please register to continue")
        }

        else
        {
            const renderedUser = items.map( (user) => {
                if(user.username ===  event.target[0].value && user.pass === event.target[1].value)
                {
                    setCurrentUser(user)
                    navigate("/todo");
                }

                else{
                    
                    setStatus( "Invalid Credentials !");   
                }

                return;
            })
        }
    }
    return(
        <div className="border shadow-lg shadow-neutral-500 rounded-md  bg-amber-100 w-fit p-10">

            <form onSubmit={handleSubmit} className="flex flex-col  items-center">
                <label className="text-orange-500 text-2xl mb-2" >Login</label>
                <label  className="text-xs  ml-4  text-red-600"> {status}</label>
                
                <Input isPassword={false} classNames = "m-2 " >Username</Input>
                <Input classNames= "mb-4 ml-6 m-2" isPassword >Password</Input>

                <Button classNames = "m-2" >Submit</Button>
                <span className="text-orange-500 mt-2" >Not a User? <a className = "cursor-pointer hover:text-orange-300 duration-200 underline text-orange-700 " onClick={() => navigate("/register")}>Register.</a></span>
            
            </form>

        </div>

    )
}

export default LoginForm;