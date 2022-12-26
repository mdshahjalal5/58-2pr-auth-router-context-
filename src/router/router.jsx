import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import Orders from "../components/Orders";
import Registration from "../components/Registration";
import Main from "../layouts/Main";

 export  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
            <Route path="/" element={<Main></Main>}>
                <Route path="registration" element={<Registration></Registration>} />
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home></Home>} />
                <Route path="orders" element={<Orders></Orders>} />
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="*" element={<ErrorPage></ErrorPage>} />
      </>

    )
 )