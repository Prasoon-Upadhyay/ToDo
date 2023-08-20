import RegisterForm from "../components/RegisterForm";

function RegisterPage()
{
    return(
        <div className=" custom flex flex-col items-center p-10  ">
            <div>
                <h1 className="mt-5 text-4xl text-orange-400">Welcome.</h1>
            </div>
            
            <div>
                <h1 className="mb-5 text-orange-400"> This is a ToDo App.</h1>
            </div>
            
            <RegisterForm />
        </div>
    )
}

export default RegisterPage;