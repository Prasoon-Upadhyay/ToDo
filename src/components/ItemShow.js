import classnames from 'classnames';
import useItems from "../hooks/use-items";
import { BsFillCalendarPlusFill } from "react-icons/bs";
import { TbMoodEmpty } from "react-icons/tb";
import { useState } from 'react';
import Button from './Button';

function ItemShow({ completed })
{   
    const {currentUser, updateItemStatus, addDeadlineToItem} = useItems();
    const [completedItems, setCompleteditems] = useState([]);

    const handleClick = (event) => {

        const iteratedItems = currentUser.todo.map(( item) => {
            if(item.label === event.target.value)
            {
                item.isCompleted = true;
                updateItemStatus(item);
                setCompleteditems([...completedItems, item])
            }
        })
    }

    const handleDateClick = (item) => {
        let deadlineDate = new Date();
        deadlineDate = prompt("Enter the deadline for this item. (YYYY-MM-DD)")
        
        const date = {
            day: new Date(deadlineDate).getDate(),
            month: new Date(deadlineDate).getMonth(),
            year: new Date(deadlineDate).getFullYear()
        }
        addDeadlineToItem(date, item.label);
    }

    let ctr = 0;
    const renderedItems = currentUser.todo.map( (item) => {
        if(completed === false)
        {
            if(item.isCompleted === false)
            {
                ctr++;
                return(
                    <div>
                        <div className="flex justify-between border border-black border-t-0 border-r-0 border-l-0 m-2 p-2">
                            
                            <div>
                            
                                <input className='text-orange-400 ' onClick={handleClick}  type="checkbox" id = {item.label}  value= {item.label} />
                                <label className="ml-2  text-orange-400" for = {item.label} >{item.label}</label>

                            </div>
                            
                            <div className="flex flex-row justify-between">
                                <BsFillCalendarPlusFill onClick =  { () => handleDateClick(item) } className='text-gray-500' /> 

                            </div>
                        </div>
                        

                    </div>
                )
            }
        }
        
        else
        {
            if(item.isCompleted === true)
            {
                ctr++;
                return(
                    <div>
                        <div className="flex justify-between border border-black border-t-0 border-r-0 border-l-0 m-2 p-2">
                            
                            <div>
                            
                                <input checked className='text-gray-600 bg-black' onClick={handleClick}  type="checkbox" id = {item.label}  value= {item.label} />
                                <span></span>
                                <label className="ml-2 line-through text-orange-400" for = {item.label} >{item.label}</label>

                            </div>
                            
                            <div className="flex flex-row justify-between">
                            </div>
                        </div>
                        

                    </div>
                )
            }
        }
        
        
    })

    return(
        <div className="my-4">
            {ctr> 0 ? renderedItems: <div className=' my-2 flex flex-col items-center'><span className='text-orange-300'>Nothing to show...   </span>  <TbMoodEmpty className='text-3xl text-orange-300' /> </div>}
                
            
        </div>
    )
}

export default ItemShow;