import { Route, Routes } from "react-router-dom";
import Home from "./views/pages/Home/Home";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="" element = {<Home/>}/>
            <Route path="/pacotes" element = {<Home/>}/>
            <Route path="/solucoes" element = {<Home/>}/>
            <Route path="/passagens" element = {<Home/>}/>
        </Routes>
    )
}