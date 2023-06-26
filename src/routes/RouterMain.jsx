import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DeashbordPage } from "../pages/DeashbordPage";
import { useState } from "react";
import { ProtectsRoutes } from "./ProtectsRoutes";
import { PublicRoutes } from "./PublicRoutes";


export function RouterMain(){

    return(
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage/>}/>
            </Route>
            <Route element={<ProtectsRoutes />}>
                <Route path="/deashbord" element={<DeashbordPage />} />
            </Route>
        </Routes>
    )
}