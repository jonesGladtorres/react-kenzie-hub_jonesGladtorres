import { Header } from "../../components/Header/Header";
import { Paragraph, Title1, Title2 } from "../../styles/Typography";
import {  ContainerDeashboard, HeaderDeashboard, LineDeashboard, MainDeashboard, NavBarDeashboard } from "./style";

export function DeashbordPage({dataUser}){

    return(
        <ContainerDeashboard>
            <LineDeashboard><NavBarDeashboard><Header>Sair</Header></NavBarDeashboard></LineDeashboard>
            <LineDeashboard><HeaderDeashboard>
                <Title1>{`Olá, ${dataUser.user.name}`}</Title1>
                <Paragraph>{dataUser.user.course_module}</Paragraph>
            </HeaderDeashboard></LineDeashboard>
            <MainDeashboard>
                <Title1>Que pena! Estamos em desenvolvimento :(</Title1>
                <Title2>Nossa aplicação está em desenvolvimento, em breve teremos novidades</Title2>
            </MainDeashboard>
        </ContainerDeashboard>
    )
}