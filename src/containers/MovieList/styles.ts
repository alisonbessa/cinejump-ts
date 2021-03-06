import styled from 'styled-components';

import { Container as DefaultContainer } from '../../components/Styles/defaultComponents';

export const Container = styled(DefaultContainer)`
    padding: 10px 0;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    margin-bottom: 15px;
    color: #E83F5B;
`;

export const ErrorText = styled.h3`
    margin: 15px 30px;
    color: #222;
`;

export const ListContainer = styled.div`
    height: auto;
    overflow-y: hidden;
    overflow-x: scroll;
    
    ::-webkit-scrollbar{
        height: 10px;
    }
    
    ::-webkit-scrollbar-thumb{
        background: #E83F5B;
        border-radius: 10px;
    }
}
`;

export const ListContent = styled.div`
    display: inline-flex;
    & > div {
        flex: 1 0 auto;
        scroll-snap-align: start;
        scroll-margin-left: 20px;
        margin-right: 10px;
    }
    & > div:last-child {
        margin-right: 0;
    }
`;