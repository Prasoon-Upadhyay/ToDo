import { useState } from 'react';
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

function Calendar({ toDo })
{
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [year, setYear] = useState(new Date().getFullYear());
    const [index, setIndex] = useState(new Date().getMonth());
    const todayDate = new Date().getDate();
    const todayMonth = new Date().getMonth();

    const dates = toDo.map( (item) => {
        if(item.deadline !== {})
        {
            return item.deadline.day;
        }
    })

    const monthArr = toDo.map( (item) => {
        if(item.deadline !== {})
        {
            return months[item.deadline.month]

        }
    })

    let renderedItems = [];

    for(let i = 0; i < new Date(year, index + 1, 0).getDate(); i++)
    {
        
        if(i + 1 === todayDate && (todayMonth === index))
        {
            renderedItems.push(<div className='flex-wrap p-4 w-10 h-10 text-white bg-amber-500 rounded-full text-xs m-0.5'>{i + 1}</div>)

        }
        
        else if(dates.includes(i + 1) && monthArr.includes(months[index]) )
        {
            renderedItems.push(<div className='flex-wrap p-4 w-10 h-10 text-white bg-cyan-500 rounded-full text-xs m-0.5'>{i + 1}</div>)
        }

        else{
            renderedItems.push(<div className='flex-wrap p-4 w-10 h-10 text-amber-600 text-xs m-0.5'>{i + 1}</div>)

        }
    }
    // classes to be added on deadline = bg-amber-300 text-center rounded-s-full

    const handleClick = (op) => {
        if( op === "+")
        {
            if(index < 11)
            {
                setIndex( index + 1);
            }

            else
            {
                setYear(year + 1)
                setIndex(0);
            }
        }

        else
        {
            if(index > 0)
            {
                setIndex(index - 1);
            }
            
            else
            {
                setYear(year - 1)
                setIndex(11);
            }
        }
        
    }

    return(
            <div className= ' bg-lime-100 w-1/4 flex flex-col items-center calendar shadow-gray-400 shadow-md p-4 '>
                <div className='inline text-2xl text-amber-600 '>{year}</div>

                <div className='flex flex-row justify-between my-4 text-amber-600'>
                    
                    <div>
                        <GoChevronLeft className='mr-20 cursor-pointer ' onClick={() => handleClick("-")}></GoChevronLeft> 
                    </div>
                    
                    <div>
                        <p className='text-lg'>{months[index]}</p>
                    </div>
                    
                    <div>
                        <GoChevronRight className='ml-20 cursor-pointer' onClick={() => handleClick("+")}></GoChevronRight>
                    </div>
                    
                </div>

                <div className='flex flex-row flex-wrap justify-start ml-5'>
                    {renderedItems}
                </div>

            
            </div>


    )

}

export default Calendar;