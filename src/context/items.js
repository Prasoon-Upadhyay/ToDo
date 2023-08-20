import { useState, createContext, useEffect } from "react";
import axios from "axios";

const ItemsContext = createContext();

function Provider({children})
{
    const [items, setItems] = useState([]);
    const[currentUser, setCurrentUser] = useState({});
    const [currentPath, setCurrentPath] = useState("/login");

    useEffect( () => {
        window.history.pushState({}, '', "/login")
    }, [])

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    const addDeadlineToItem = async (deadlineDate, updateItem) => {

        const updatedItems = items.map( (item) => {
            if(item.id === currentUser.id)
            {
                item.todo.map( (i) => {
                    if(i.label === updateItem)
                    {
                        i.deadline = deadlineDate;
                    }
                })
            }

            return item;

        })

        setItems([...updatedItems])
        const response = await axios.put(`http://localhost:3001/data/${currentUser.id}`,{
                    username: currentUser.username,
                    pass: currentUser.pass,
                    name: currentUser.name,
                    todo : currentUser.todo
        })


    }

    const updateItemStatus = async (todoItem) => {

        const updatedItems = items.map( (item) => {
            
            if(item.id === currentUser.id)
            {
                currentUser.todo.map( (i) => {
                    if(i === todoItem)
                    {   
                        i.isCompleted = true;
                    }
                })
            }
            return item;
        })
        
        setItems([...updatedItems])


        const response = await axios.put(`http://localhost:3001/data/${currentUser.id}`,{
                    username: currentUser.username,
                    pass: currentUser.pass,
                    name: currentUser.name,
                    todo : currentUser.todo
        })

    }

    const addUser = async (username,name, pass) =>  {
        const response = await axios.post("http://localhost:3001/data",{
            username,
            pass,
            name,
            todo: [],
        })
        setItems([...items,response.data])
    }

    const addToList = async (desc) => {

        const updatedItems = items.map( (item) => {
            if(item.id === currentUser.id)
            {
                item.todo.push({
                    label: desc,
                    isCompleted: false,
                    deadline:{}
                });
            }
            return item;
        })

        setItems([...updatedItems])

        const response = await axios.put(`http://localhost:3001/data/${currentUser.id}`,{
                    username: currentUser.username,
                    pass: currentUser.pass,
                    name: currentUser.name,
                    todo : currentUser.todo
                })
    }

    const fetchItems = async () => {
        const response = await axios.get("http://localhost:3001/data")
        setItems(response.data);
    }

    const values = {
        addUser, 
        items,
        fetchItems,
        navigate,
        currentPath,
        setCurrentUser,
        currentUser,
        addToList,
        updateItemStatus,
        addDeadlineToItem
    }
    return <ItemsContext.Provider value ={values} > {children} </ItemsContext.Provider>
}

export {Provider};
export default ItemsContext;

