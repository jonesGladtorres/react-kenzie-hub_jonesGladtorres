import { createContext, useState } from "react";
import { api } from "../services/api";

export const TechContext = createContext({})

export function TechProvider({children}){
    const [techs, setTechs] = useState([])

    const [idModal, setIdModal] = useState({})

    async function NewTech(formData, token){
        try {
            await api.post('/users/techs', formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechs((techs) => [...techs, formData])
        } catch (error) {
            console.log(error.message);
        }
    }

    async function DeleteTach(techId, token){
        try {
            await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setTechs((techs) => techs.filter( tech => tech.id !== techId))
        } catch (error) {
            console.log(error.message)
        }
    }

    async function EditTech(techId, formData, token){
        try {
            await api.put(`/users/techs/${techId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                } 
            })
            const findleTech =  techs.find(tech => tech.id === techId)
            findleTech.status = formData.status
            setTechs((techs) => techs.filter( tech => tech.id !== techId))
            setTechs((techs) => [...techs, findleTech])
        } catch (error) {
            console.log(error.message);
        }
    }


    return(
        <TechContext.Provider value={{techs, setTechs, NewTech, DeleteTach, EditTech, setIdModal, idModal}}>
            {children}
        </TechContext.Provider>
    )
}