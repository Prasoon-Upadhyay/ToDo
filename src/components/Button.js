import classnames from 'classnames'
function Button({ children, classNames, ...rest})
{
    const finalClassName = classnames("rounded-full hover:bg-amber-100 hover:text-orange-400 hover:border-orange-400 hover:border duration-500 bg-orange-400  px-4 py-2 text-s w-fit text-slate-100", classNames)
    return  <button {...rest} className = {finalClassName} >{children}</button>
}

export default Button;