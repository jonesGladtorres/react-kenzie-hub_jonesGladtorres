import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DeashbordPage } from "../pages/DeashbordPage";
import { useState } from "react";


export function RouterMain(){
    const [dataUser, setDataUser] = useState({})

    return(
        <Routes>
            <Route path="/" element={<LoginPage setDataUser={setDataUser}/>} />
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/deashbord" element={<DeashbordPage dataUser={dataUser}/>} />
        </Routes>
    )
}