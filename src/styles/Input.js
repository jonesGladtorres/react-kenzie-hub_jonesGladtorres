import styled, { css } from "styled-components";

export const StyledInput = styled.input`
    outline: none;
    height: 1.5rem;
    padding: 0.625rem;
    font-size: 16px;
    color: var(--color-grey-0);
    
    background-color: var(--color-grey-2);
    border-radius: 5px;
    font-size: 15px;

    ${({border}) => {
        switch (border) {
            case 'yes': 
                return css`
                    border: 1px solid var(--color-grey-0);
                `
            default:
                return css`
                    border: none;
                `
        }
    }}
`