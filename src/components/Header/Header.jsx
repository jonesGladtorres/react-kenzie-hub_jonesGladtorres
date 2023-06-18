import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { ButtonHeader } from '../../styles/ButtonHeader'
import { StyledHeader } from './style'



export function Header({children}){

    const navegate = useNavigate()

    function buttonClick(){
        navegate('/')
        localStorage.clear()
    }

    return(
        <StyledHeader justifycontent='between'>
            <img src={logo} alt="logo marca do site, escrito em rosa Kenzie Hub" />
            <ButtonHeader width='min' height='min' background='secondary' onClick={() => buttonClick()}>{children}</ButtonHeader>
        </StyledHeader>
    )
}