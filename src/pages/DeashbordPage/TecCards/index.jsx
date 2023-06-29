import { useContext } from "react";
import { Paragraph, Title2 } from "../../../styles/Typography";
import { Cards } from "./style";
import { TechContext } from "../../../providers/TechContext";

export function TecCards({tech, setEditItsOpen}){
    const { setIdModal } = useContext(TechContext)

    function openModal(){
        setEditItsOpen(true)
        setIdModal({id: tech.id, name: tech.title})
    }

    return(
        <Cards id={tech.id} onClick={() => openModal()}>
            <Title2>{tech.title}</Title2>
            <Paragraph color='grey1'>{tech.status}</Paragraph>
        </Cards>
    )
}