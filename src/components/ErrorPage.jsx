import { useRouteError } from "react-router";

const ErrorPage =   () =>{
    const error = useRouteError();
    console.log(error, 'error');
    return <>
            <div className="flex justify-center h-screen items-center ">
            <div className="border-2 border-red-700 p-16 rounded-full text-center">
                <h2>Error dada vaiya </h2>
                <h2 className="text-5xl ">{error?.status} </h2>
                <p>{error?.statusText} </p>
            </div>
            </div>
    </>

}

export default ErrorPage;