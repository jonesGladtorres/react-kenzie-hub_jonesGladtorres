import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
	--color-primary: #ff577f;
	--color-primary-2: #FF427F;
	--color-primary-disable: #59323f;
    
	--color-grey-4: #121214;
	--color-grey-3: #212529;
	--color-grey-2: #343b41;
	--color-grey-1: #868e96;
	--color-grey-0: #f8f9fa;

	--color-sucess: #3fe864;
	--color-negative: #e83f5b;
	}


	body{
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #121214;
	}

`