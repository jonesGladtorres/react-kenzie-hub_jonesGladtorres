import styled from "styled-components";

export const ButtonHeader = styled.button`
    font-weight: 600;
    font-size: 12px;
    padding: 15px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-grey-0);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: var(--color-grey-2);
    :hover{
        background-color: var(--color-grey-1);
    }
`