import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 31.25rem;
    width: 100%;
    padding: 1.25rem;
    background-color: var(--color-grey-3);
    border-radius: 5px;

    ${({height}) => {
        switch (height) {
            case 'min':
                return css`
                    height: 31.25rem;
                `
        
            case 'max':
                    return css`
                        height: 51.25rem;
                    `
        }
    }}
` 

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    gap: 10px;

    button{
        margin-top: 15px;
    }
`

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    width: 22.5rem;

    
`