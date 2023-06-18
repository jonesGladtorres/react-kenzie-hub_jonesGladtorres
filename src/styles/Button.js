import styled, { css } from "styled-components";

export const StyledButton = css`

    ${({background}) => {
        switch (background){
            case 'primary':
                return css`
                    background-color: var(--color-primary);
                    :hover{
                        background-color: var(--color-primary-2);
                    }
                `
            case 'secondary':
                return css`
                    background-color: var(--color-grey-1);
                    :hover{
                        background-color: var(--color-grey-2);
                    }
                `
        }
    }}

    ${({width}) => {
        switch (width) {
            case 'min':
                return css`
                    width: 5rem;
                `
        
            default:
                return css`
                    width: 100%;
                `
        }
    }}

    ${({height}) => {
        switch (height) {
            case 'min':
                return css`
                    height: 1.25rem;
                `
        }
    }}
`

export const Button = styled.button`
    ${StyledButton}

    font-weight: 600;
    font-size: 15px;
    height: 3.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-grey-0);
    border-radius: 5px;
    border: none;
    cursor: pointer;
`

