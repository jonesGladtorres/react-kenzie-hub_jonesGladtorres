import styled, {css} from "styled-components";

const BaseStyled = css`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerDeashboard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const NavBarDeashboard = styled.span`
    ${BaseStyled}
    padding: 30px 0;
`

export const HeaderDeashboard = styled.header`
    ${BaseStyled}
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0;
    
`

export const MainDeashboard = styled.main`
    ${BaseStyled}
    align-items: flex-start;
    flex-direction: column;
    padding: 30px 0;
    gap: 40px;
`

export const LineDeashboard = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid var(--color-grey-2);
`