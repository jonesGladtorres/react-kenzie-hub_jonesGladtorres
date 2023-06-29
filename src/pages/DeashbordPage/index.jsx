import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { UserContext } from "../../providers/UserContext";
import { Paragraph, Title1} from "../../styles/Typography";
import { TecCards } from "./TecCards";
import { AddCardsContainer, AddTechsButton, ContainerDeashboard, HeaderDeashboard, LineDeashboard, ListCards, MainDeashboard, NavBarDeashboard } from "./style";
import { IoMdAdd } from 'react-icons/io';
import { ModalAddTecs } from "./ModalAddTecs";
import { TechContext } from "../../providers/TechContext";
import { ModalEditTecs } from "./ModalEditTecs";

export function DeashbordPage(){
    const { user } = useContext(UserContext)


    const {techs, setTechs} = useContext(TechContext)

    useEffect(() => {
        const tecnologies = user.techs
        setTechs(tecnologies)
    }, [])


    const [modalAddIsOpen, setAddItsOpen] = useState(false)
    const [modalEditIsOpen, setEditItsOpen] = useState(false)

    function openModalAdd(){
        setAddItsOpen(true)
    }

    function openModalEdit(){
        setEditItsOpen(true)
    }

    return(
        <ContainerDeashboard>
            <LineDeashboard><NavBarDeashboard><Header>Sair</Header></NavBarDeashboard></LineDeashboard>
            <LineDeashboard><HeaderDeashboard>
                <Title1>{`Olá, ${user.name}`}</Title1>
                <Paragraph>{user.course_module}</Paragraph>
            </HeaderDeashboard></LineDeashboard>
            <MainDeashboard>
                <AddCardsContainer>
                    <Title1>Tecnologias</Title1>
                    <AddTechsButton onClick={() => openModalAdd()}><IoMdAdd size={20}/></AddTechsButton>
                </AddCardsContainer>
                <ListCards>
                    {techs.map((tech) => <TecCards key={tech.id} tech={tech} setEditItsOpen={setEditItsOpen}/>)}
                </ListCards>
            </MainDeashboard>
            <ModalEditTecs modalEditIsOpen={modalEditIsOpen} setEditItsOpen={setEditItsOpen}/>
            <ModalAddTecs modalAddIsOpen={modalAddIsOpen} setAddItsOpen={setAddItsOpen}/>
        </ContainerDeashboard>
    )
}