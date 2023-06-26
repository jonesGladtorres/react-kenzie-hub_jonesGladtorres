import styled from "styled-components";

export const Cards = styled.li`
    background-color: var(--color-grey-4);
    width: 100%;
    height: 3.125rem;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
    :hover{
        background-color: var(--color-grey-2);
    }
`