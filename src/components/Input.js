import classnames from 'classnames'
import {useState} from 'react';
import { MdOutlineVisibility, MdVisibilityOff } from "react-icons/md";
function Input({ children, isPassword, classNames })
{
    const [inputType, setInputType] = useState(isPassword &&  "password" || "");
    const finalClassName = classnames("bg-amber-100 p-2  border focus:outline-none text-orange-600 focus:border-orange-600 placeholder:text-xs placeholder:opacity-50 placeholder:text-orange-500  border border-orange-500  border-t-0 border-l-0 border-r-0 ", classNames)
    
    const handleClick = () => {
        if(inputType === "password")
        {
            setInputType("");
        }

        else 
        {
            setInputType(("password"))
        }
    }
    
    return (
    <div className="flex justify-between items-center" >
        <input type = {inputType} className = {finalClassName} placeholder={children} /> {isPassword && <MdOutlineVisibility onClick={handleClick} /> }  
    </div>)
}

export default Input;