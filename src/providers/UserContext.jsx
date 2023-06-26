import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({})

export function UserProvider({children}){
    const currentPath = window.location.pathname

    const [user, setUser] = useState(null)

    const navegate = useNavigate()

    useEffect(() => {

        const id = localStorage.getItem('@USERID')

        async function loadUser(){
            try {
                const { data } = await api.get(`/users/${id}`)
                setUser(data)
                navegate(currentPath)
            } catch (error) {
                console.log(error);
            }
        } 

        if(id){
            loadUser()
        }
    },[])



    async function Login(formData){
        try {
            const { data } = await api.post('/sessions', formData)
            setUser(data.user)
            localStorage.setItem('@TOKEN', data.token)
            localStorage.setItem('@USERID', data.user.id) 
            navegate('/deashbord')
        } catch (error) {
            toast.error('Email ou senha incorreto')
        }
    }
    
    return(
        <UserContext.Provider value= {{user, setUser, Login}}>
            {children}
        </UserContext.Provider>
    )
}