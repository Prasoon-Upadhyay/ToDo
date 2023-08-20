
import useItems from "../hooks/use-items";

function Route({children, path})
{
    const {currentPath} = useItems(); 
    if(currentPath === path)
    {
        return children;
    }

    return null;
}

export default Route;