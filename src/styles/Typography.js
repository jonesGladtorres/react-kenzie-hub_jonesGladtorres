import styled, { css } from "styled-components";

export const StyledTitle = css`
    
    line-height: 28px;
	text-decoration: none;
	text-transform: none;
    font-style: normal;
    font-family: "Inter";
    color: var(--color-grey-0);
`

export const Title1 = styled.h2`
    ${StyledTitle}
    font-weight: 700;
    font-size: 18px;
`

export const Title2 = styled.h3`
    ${StyledTitle}
    font-weight: 400;
    font-size: 16px;
`

export const Paragraph = styled.p`
    font-size: 12px;
	font-family: "Inter";
	font-weight: 400;
	font-style: normal;
	line-height: 22px;
	text-decoration: none;
	text-transform: none;

    ${({color}) => {
        switch(color){
            case 'grey1':
                return css`
                    color: var(--color-grey-1);
                `
            case 'error':
                return css`
                    color: var(--color-negative);
                    font-size: 10px;
                `
            default:
                return css`
                    color: var(--color-grey-0);
                `
        }
    }}

`