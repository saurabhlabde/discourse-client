import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
*{
        padding:0;
        margin: 0;
        box-sizing: border-box;
        font-family: Rubik;
        font-weight: normal;
}

.s_cus{
        padding-top: 2rem !important;
}

.Toastify__toast{
        min-height: 3.5em;
        margin-bottom: 0.5rem;
        border-radius: 1em;

        .Toastify__progress-bar{
                height: 0.2rem;
        }
}

`