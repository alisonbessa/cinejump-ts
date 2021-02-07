import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Ubuntu, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        
        ::-webkit-scrollbar{
        width: 12px;
        background-color:#efefef
        }
        
        ::-webkit-scrollbar-thumb{
            background: #E83F5B;
            border-radius: 10px;
            border: 1px solid white;
        }
    }
`;