import styled from "styled-components";

export const ModalAddContainer = styled.div`
    width: 360px;
    height: 340px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 15px;
    background-color: var(--color-grey-3);
    padding: 30px;
    border-radius: 4px;
`

export const ModalAddHeader = styled.div`
    position: absolute;
    padding: 0 30px;
    top: 20px;
    right: 20px;
    width: 90%;
    height: 50px;
    background-color: var(--color-grey-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px 4px 0 0 ;
`

export const FormModalAdd = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 25px 0;
`

export const IconCloseModal = styled.span`
    cursor: pointer;
`

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 15px;
`

export const ButtonDelete = styled.button`
    width: 7.5rem;
    font-weight: 600;
    font-size: 15px;
    height: 3.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-grey-0);
    background-color: var(--color-grey-1);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    :hover{
        background-color: var(--color-grey-2);
    }
`