import useItems from "../hooks/use-items";
import Button from "./Button";
import ItemShow from "./ItemShow";
import { MdChecklist, MdFormatListBulletedAdd } from "react-icons/md";
import { HiPlus } from "react-icons/hi2";
import { useState } from "react";

function ItemCreate()
{
    const {addToList} = useItems();
    const [showCompleted, setShowCompleted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        addToList(event.target[0].value);
        event.target[0].value = ""

        setShowCompleted(showCompleted);
    }
    return(    
        <div className="flex custom flex-col ml-10 p-5 bg-amber-100 shadow-lg shadow-neutral-400 rounded-md px-20">
            <form onSubmit={handleSubmit}>
                
                <input className="bg-amber-100 p-2 focus:outline-none text-orange-600 focus:border-orange-600 placeholder:text-xs placeholder:opacity-50 placeholder:text-orange-500  border border-orange-500 m-2 border-t-0 border-l-0 border-r-0"  placeholder  = "Hi, What's on your mind?"/>
                
                <Button> 
                    <HiPlus />  
                </Button>

            </form>

            <ItemShow completed = {showCompleted} />

            <div className="flex flex-row justify-center"> 
                <Button onClick = {() => { setShowCompleted(false);} }   classNames = "mr-2 ml-2" > <MdFormatListBulletedAdd /> </Button>
                <Button onClick = {() => { setShowCompleted(true);} }  classNames = ""  > <MdChecklist /> </Button>
            </div>
     </div>
    );
}

export default ItemCreate;
