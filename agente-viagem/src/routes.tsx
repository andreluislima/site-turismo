import { Route, Routes } from "react-router-dom";
import Home from "./views/pages/Home/Home";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="" element = {<Home/>}/>
        </Routes>
    )
}