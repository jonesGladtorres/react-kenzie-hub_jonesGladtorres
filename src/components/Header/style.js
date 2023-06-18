import styled, {css} from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    -webkit-box-pack: justify;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;

    ${({justifycontent}) => {
        switch (justifycontent) {
            case 'between':
                return css`
                    justify-content: space-between;
                `
            default:
                return css`
                    justify-content: center;
                `
        }
    }}
`
