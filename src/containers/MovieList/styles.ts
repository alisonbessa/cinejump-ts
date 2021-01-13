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

export const ListContainer = styled.div`
    height: auto;
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: 10px;
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